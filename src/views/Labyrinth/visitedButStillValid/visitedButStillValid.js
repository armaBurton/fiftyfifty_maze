const visitedButStillValid = (pixel) => {
  // console.log("*** -2 -visitedButStillValid.js *** pixel ==> ", pixel);
  pixel.setAttribute("data-traversed", "true");
  pixel.setAttribute("data-currentposition", "false");
  pixel.setAttribute("data-validpath", "true");
  pixel.style.backgroundColor = "var(--Cyclamen)";
};

export default visitedButStillValid;
