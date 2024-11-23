import { currentPixel, validPixel, mazeBkgnd } from "../../../utils/utils";

const setCurrentPositionAttributes = (
  currentPosition,
  position,
  traversed,
  validPath,
) => {
  const x = currentPosition.getAttribute("x");
  const y = currentPosition.getAttribute("y");

  currentPosition.setAttribute("data-currentposition", position);
  currentPosition.setAttribute("data-traversed", traversed);
  currentPosition.setAttribute("data-validpath", validPath);

  if (currentPosition.getAttribute("data-currentposition") === "true") {
    currentPosition.style.backgroundColor = currentPixel;
  } else if (
    currentPosition.getAttribute("data-traversed") === "true" &&
    currentPosition.getAttribute("data-validPath") === "true"
  ) {
    currentPosition.style.backgroundColor = validPixel;
  } else if (
    currentPosition.getAttribute("data-traversed") === "true" &&
    currentPosition.getAttribute("data-validPath") === "false"
  ) {
    currentPosition.style.backgroundColor = mazeBkgnd;
  }
  //   console.log(
  //     "*** -29 -setCurrentPositionAttributes.js *** currentPosition ==> ",
  //     currentPosition,
  //   );
};

export default setCurrentPositionAttributes;
