var operand = "";
var arr = new Array(25);
var i = 0;
var id = document.getElementById('ans');

function clear() {
  id.innerHTML = "";
  operand = "";
  i = 0;
}
var obj = new Object();
function calculate(name) {
  var num = Number.isInteger(parseInt(name));
  if (num == true || name == '.') {
    operand = operand + name;
    arr[i] = operand;
  } else {
    i++;
    operand = "";
    var operator = name.replaceAll(',', '');
    arr[i++] = operator;
    operand = "";
  }
  id.innerHTML = arr.join('');

  objj();
  dele();
}

function objj() {
  obj = {
    '1': arr.indexOf('^'),
    '2': arr.indexOf('%'),
    '3': arr.indexOf('/'),
    '4': arr.indexOf('*'),
    '5': arr.indexOf('-'),
    '6': arr.indexOf('+')
  };
}

function dele() {
  for (const property in obj) {
    if (obj[property] == '-1')
      delete obj[property];
    // console.log(obj);
  }
}

function changeArray(index, ans) {
  arr[index - 1] = ans;
  for (var i = index; i + 2 < arr.length; i++) {
    arr[i] = arr[i + 2];
  }
}
function check(ans)
{

  if (Number.isNaN(ans)){
  id.classList.add("error");
    id.innerHTML = "ERROR";
  }
  else
  {  id.classList.remove("error");
    id.innerHTML = ans;}
}
function equal() {
  var ans;
  for (const property in obj) {
    objj();
    dele();
    var i = parseFloat(property);
    var p = obj[property];
    var o1 = parseFloat(arr[p - 1]);
    var o2 = parseFloat(arr[p + 1]);
    switch (i) {
      case 1:
        ans = Math.pow(o1, o2);
        changeArray(p, ans);
        // alert(arr);
        break;
      case 2:
        ans = o1 % o2;
        check(ans);
        changeArray(p, ans);
        // alert(arr);
        break;
      case 3:
        ans = o1 / o2;
      check(ans);
        changeArray(p, ans);
        // alert(arr);
        break;
      case 4:
        ans = o1 * o2;
        check(ans);
        changeArray(p, ans);
        // alert(arr);
        break;
      case 5:
        ans = o1 - o2;
        check(ans);
        changeArray(p, ans);
        //alert(arr);
        break;
      case 6:
        ans = o1 + o2;
        check(ans);
        changeArray(p, ans);
        //alert(arr);
    }
  }
  clear();
  id.innerHTML = ans;
  arr = new Array(25);
  arr[0] = ans;
  i = 1;
}
const elem = document.getElementsByTagName("td");
for (const el of Array.from(elem)) {
  el.addEventListener("click", function(event) {
    var name = event.target.getAttribute("name");
    //clear
    if (name == "clear")
      clear();
    else if (name == "equal")
      equal();
    //rest cases
    else {
      calculate(name);
    }
  });
}
