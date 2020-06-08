var blue = document.getElementsByClassName('blue');
var green = document.getElementsByClassName('green');
var red = document.getElementsByClassName('red');

var bgTheme = document.getElementsByTagName('body');
var x = 0.6; //power 0f light
var a = true;

////////////////////////funsctions///////////////////////////////

function powerButton() {
  if (a == true) {
    if (blue[0].style.backgroundColor == "") {
      for (var i = 0; i < blue.length; i++) {
        blue[i].style.backgroundColor = "rgba(0, 0, 255, "+x+")";
        blue[i].style.boxShadow = "0 0 100px 50px rgba(0, 0, 255, 0.8)";
      }
      for (var i = 0; i < green.length; i++) {
        green[i].style.backgroundColor = "rgba(0, 255, 0, "+x+")";
        green[i].style.boxShadow = "0 0 100px 50px rgba(0, 255, 0, 0.8)";
      }
      for (var i = 0; i < red.length; i++) {
        red[i].style.backgroundColor = "rgba(255, 0, 0, "+x+")";
        red[i].style.boxShadow = "0 0 100px 50px rgba(255, 0, 0, 0.8)";
      }
    } else {
      offLight()
      }
  }
}

function offLight() {
  for (var i = 0; i < blue.length; i++) {
    blue[i].style.backgroundColor = "";
    blue[i].style.boxShadow = "";
  }
  for (var i = 0; i < green.length; i++) {
    green[i].style.backgroundColor = "";
    green[i].style.boxShadow = "";
  }
  for (var i = 0; i < red.length; i++) {
    red[i].style.backgroundColor = "";
    red[i].style.boxShadow = "";
}
}

function themeButton() {
  if (bgTheme[0].style.backgroundColor == "") {
    bgTheme[0].style.backgroundColor = "#000";
  } else {
    bgTheme[0].style.backgroundColor = "";
  }
}

function powerFrize() {
  if (a == true) {
    a = false;
  } else {
    a = true;
  }
}

function onFunc() {
  a = true;
}

function offFunc() {
  a = false;
  offLight();
}
