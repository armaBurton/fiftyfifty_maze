const updateCurrentPixelState = async (pixel) => {
  if (pixel) {
    pixel.setAttribute("data-traversed", "true");
    pixel.setAttribute("data-currentposition", "true");
    pixel.setAttribute("data-validpath", "true");
    pixel.style.backgroundColor = "var(--Claret)";
  }
};

export default updateCurrentPixelState;
