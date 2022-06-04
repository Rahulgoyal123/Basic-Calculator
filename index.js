let v = document.getElementById("result");
// console.log(v);

function clr() {
  v.innerHTML = "0";
  //   console.log(v);
}

function del() {
  let str = v.innerHTML;
  let len = str.length;
  if (len == 1) {
    v.innerHTML = "0";
  } else {
    v.innerHTML = v.innerHTML.slice(0, len - 1);
  }
}

function divide() {
  v.innerHTML += "/";
}

function mul() {
  v.innerHTML += "*";
}

function sub() {
  v.innerHTML += "-";
}

function add() {
  v.innerHTML += "+";
}

function one() {
  if (v.innerHTML == "0") {
    v.innerHTML = "1";
  } else {
    v.innerHTML += "1";
  }
  console.log(v.innerHTML);
}

function two() {
  if (v.innerHTML == "0") {
    v.innerHTML = "2";
  } else {
    v.innerHTML += "2";
  }
}

function three() {
  if (v.innerHTML == "0") {
    v.innerHTML = "3";
  } else {
    v.innerHTML += "3";
  }
}

function four() {
  if (v.innerHTML == "0") {
    v.innerHTML = "4";
  } else {
    v.innerHTML += "4";
  }
}

function five() {
  if (v.innerHTML == "0") {
    v.innerHTML = "5";
  } else {
    v.innerHTML += "5";
  }
}

function six() {
  if (v.innerHTML == "0") {
    v.innerHTML = "6";
  } else {
    v.innerHTML += "6";
  }
}

function seven() {
  if (v.innerHTML == "0") {
    v.innerHTML = "7";
  } else {
    v.innerHTML += "7";
  }
}

function eight() {
  if (v.innerHTML == "0") {
    v.innerHTML = "8";
  } else {
    v.innerHTML += "8";
  }
}

function nine() {
  if (v.innerHTML == "0") {
    v.innerHTML = "9";
  } else {
    v.innerHTML += "9";
  }
}

function point() {
  if ((v.innerHTML = "0")) {
    v.innerHTML = "0.";
  } else {
    let len = v.innerHTML;
    if (isoperator(len[len.length - 1])) {
      v.innerHTML += "0.";
    } else {
      v.innerHTML += ".";
    }
  }
}

function zero() {
  if ((v.innerHTML = "0")) {
    v.innerHTML = "0";
  } else {
    v.innerHTML += "0";
  }
}

function equal() {
  let stri = v.innerHTML;
  let len = stri.length;

  if (
    isOperator(stri[len - 1]) ||
    stri[len - 1] == "." ||
    isLetter(stri[0]) ||
    isLetter(stri[len - 1])
  ) {
    alert("Enter valid expression");
    return false;
  } else {
    let y = 0;
    for (let i = 0; i < stri.length - 1; i++) {
      if (isOperator(stri[i]) && isOperator(stri[i + 1])) {
        alert("Enter valid expression");
        y++;
        return false;
      }
    }
    if (y == 0) {
      let result1 = eval(stri);
      v.innerHTML = result1;
    }
  }
}

function isOperator(x) {
  if (x == "+" || x == "-" || x == "*" || x == "/") {
    return true;
  }
  return false;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
