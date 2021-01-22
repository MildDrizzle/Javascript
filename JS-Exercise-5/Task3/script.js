const colorsBoxOne = ["#04e824", "#18ff6d", "#fb4d3d", "#cafe48"];
let colorOneIndex = 0;
let colorTwoIndex = 0;
const colorsBoxTwo = ["red", "green", "blue", "yellow", "purple"];
let colorsOfBoxFourStarted = false;
let boxFourInterval;

const alertClick = () => {
  document.getElementById("box1txt").classList = "";
  setInterval(box1Colorstart, 3000);
};

const box1Click = () => {
  document.getElementById("box3txt").classList = "";
};

const box1Colorstart = () => {
  document.getElementById("box2").style.backgroundColor =
    colorsBoxOne[colorOneIndex];
  colorOneIndex++;
  if (colorOneIndex >= colorsBoxOne.length) colorOneIndex = 0;
};

window.addEventListener("keydown", (e) => {
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
  } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
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
