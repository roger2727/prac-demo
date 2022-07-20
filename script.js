//change color of background

const background = document.querySelector(".background");

// function change() {
//   background.style.backgroundColor = "black";
// }

const changer = document.querySelector(".btn-background");
var allchar = "0123456789ABCDEF";

changer.addEventListener("click", myFun);

function myFun() {
  var randcol = "";
  for (var i = 0; i < 6; i++) {
    randcol += allchar[Math.floor(Math.random() * 16)];
  }
  background.style.backgroundColor = "#" + randcol;
}
///////////////////////////////////////

// change shape
const shapeBtn = document.querySelector(".shape-btn");

shapeBtn.addEventListener("click", function () {
  if (background.style.borderRadius === "0px") {
    background.style.borderRadius = "50px";
  } else {
    background.style.borderRadius = "0px";
  }
});

//change text

const textButton = document.querySelector(".btn-text");

textButton.addEventListener("click", function () {
  var x = document.getElementById("myDIV");

  if (x.innerHTML === "Hello") {
    x.innerHTML = "go";
  } else if (x.innerHTML === "go") {
    x.innerHTML = "fuck";
  } else if (x.innerHTML === "fuck") {
    x.innerHTML = "yourself !";
  } else {
    x.innerHTML = "Hello";
  }
});
// function changeText() {
//   ogText.innerHTML = "go fuck yourself";
// }

// create a element
//selcet button
const elementBtn = document.querySelector(".btn-element");
// create a elemnt
const neweElement = document.createElement("h1");
// create a text node
const text = document.createTextNode("    you have created a new h1");
//apends the text
neweElement.appendChild(text);
//selects the div
const newDivBox = document.querySelector(".newDiv");
// event listner
elementBtn.addEventListener("click", addElement);
// function
function addElement() {
  newDivBox.appendChild(text);
}
