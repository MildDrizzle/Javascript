const colorsBoxOne = ["#04e824", "#18ff6d", "#fb4d3d", "#cafe48"];
let colorOneIndex = 0;
let colorTwoIndex = 0;
const colorsBoxTwo = ["red", "green", "blue", "yellow", "purple"];
let colorsOfBoxFourStarted = false;
let boxFourInterval;

//Add Event Listener for window load for the alert and start box1Color
window.addEventListener("load", function () {
  alert("Greetings Mr.X Please choose the surpirse box");
  document.getElementById("box1txt").classList = "";
  boxFourInterval = setInterval(box1Colorstart, 3000);
});

const box1Click = () => {
  document.getElementById("box3txt").classList = "";
  colorsOfBoxFourStarted = true;
  boxFourInterval = setInterval(boxFourColorStart, 5000);
};

const box1Colorstart = () => {
  document.getElementById("box2").style.backgroundColor =
    colorsBoxOne[colorOneIndex];
  colorOneIndex++;
  if (colorOneIndex >= colorsBoxOne.length) colorOneIndex = 0;
};

//Add Event Listener for keys pressed
window.addEventListener("keydown", (e) => {
  //if the key is up or right arrow key then start colors animation first then
  //change it to the next color.
  if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    if (!colorsOfBoxFourStarted) {
      colorsOfBoxFourStarted = true;
      boxFourInterval = setInterval(boxFourColorStart, 5000);
    }
    clearInterval(boxFourInterval);
    boxFourInterval = setInterval(boxFourColorStart, 5000);
    colorTwoIndex++;
    if (colorTwoIndex >= colorsBoxTwo.length) colorTwoIndex = 0;
    document.getElementById("box4").style.backgroundColor =
      colorsBoxTwo[colorTwoIndex];
  }
  //if the key is down or left arrow key then start colors animation first then
  //change it to the next color.
  else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
    if (!colorsOfBoxFourStarted) {
      colorsOfBoxFourStarted = true;
      boxFourInterval = setInterval(boxFourColorStart, 5000);
    }
    clearInterval(boxFourInterval);
    boxFourInterval = setInterval(boxFourColorStart, 5000);
    colorTwoIndex--;
    if (colorTwoIndex < 0) colorTwoIndex = colorsBoxTwo.length - 1;
    document.getElementById("box4").style.backgroundColor =
      colorsBoxTwo[colorTwoIndex];
  }
});

const boxFourColorStart = () => {
  document.getElementById("box4").style.backgroundColor =
    colorsBoxTwo[colorTwoIndex];
  colorTwoIndex++;
  if (colorTwoIndex >= colorsBoxTwo.length) colorTwoIndex = 0;
};
