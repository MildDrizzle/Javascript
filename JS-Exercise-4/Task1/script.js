//Convert Variables Data to Object
let stopWatchStatus = "notStarted";
let seconds = 0;
let minutes = 0;
let hours = 0;
let microSeconds = 0;
let stopWatch;
const initialTime = "00:00:00:00";

const changeStatus = (state) => {
  if (stopWatchStatus === "notStarted" && state === "started") {
    document.getElementById("stop").disabled = false;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
    stopWatchStatus = "started";
  } else if (stopWatchStatus === "started" && state === "paused") {
    document.getElementById("resume").disabled = false;
    document.getElementById("stop").disabled = true;
    stopWatchStatus = "paused";
  } else if (stopWatchStatus === "paused" && state === "resume") {
    document.getElementById("resume").disabled = true;
    document.getElementById("stop").disabled = false;
    stopWatchStatus = "started";
  } else {
    document.getElementById("stop").disabled = true;
    document.getElementById("restart").disabled = true;
    document.getElementById("resume").disabled = true;
    document.getElementById("start").disabled = false;
    stopWatchStatus = "notStarted";
  }
};

const startStopWatch = () => {
  changeStatus("started");
  stopWatch = setInterval(function () {
    increaseTime();
    document.getElementById("counter").innerHTML = getTimeString();
  }, 10);
};

const stopStopWatch = () => {
  changeStatus("paused");
  clearInterval(stopWatch);
};

const resumeStopWatch = () => {
  changeStatus("resume");

  stopWatch = setInterval(function () {
    increaseTime();
    document.getElementById("counter").innerHTML = getTimeString();
  }, 10);
};

const resetStopWatch = () => {
  changeStatus();
  clearInterval(stopWatch);
  minutes = hours = seconds = microSeconds = 0;
  document.getElementById("counter").innerHTML = initialTime;
};

const increaseTime = () => {
  if (microSeconds === 90) {
    microSeconds = 0;
    if (seconds === 59) {
      seconds = 0;
      if (minutes === 59) {
        minutes = 0;
        hours += 1;
      } else {
        minutes += 1;
      }
    } else {
      seconds += 1;
    }
  } else {
    microSeconds += 1;
  }
};

const getTimeString = () => {
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}:${
    microSeconds < 10 ? "0" + microSeconds : microSeconds
  }`;
};

// For Date

let time = new Date();

const updateTime = () => {
  time = new Date();
  document.getElementById("time").innerHTML = getTimeFromTime();
  document.getElementById("date").innerHTML = getDateFromTime();
};

const getDayFromTime = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[time.getDay()];
};

const getDateFromTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
};

const getTimeFromTime = () => {
  return `${time.getHours()} : ${
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
  } : ${time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds()}`;
};

const setDateTime = () => setInterval(updateTime, 1000);
