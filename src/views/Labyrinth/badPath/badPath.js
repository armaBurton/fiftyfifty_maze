const badPath = (pixel) => {
  pixel.setAttribute("data-traversed", "true");
  pixel.setAttribute("data-currentposition", "false");
  pixel.setAttribute("data-validpath", "false");
  pixel.style.backgroundColor = "var(--hookers-green)";
};

export default badPath;
