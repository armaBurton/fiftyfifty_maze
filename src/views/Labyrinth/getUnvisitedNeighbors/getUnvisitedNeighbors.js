const getUnvisitedNeighbors = (pixelRef, size, x, y) => {
  const neighbors = [];
  const current = pixelRef.current[`${x}-${y}`];

  //up
  if (
    x - 1 >= 0 &&
    current.style.borderTop === "none" &&
    pixelRef.current[`${x - 1}-${y}`].getAttribute("data-traversed") === "false"
  ) {
    console.log("*** -10 -getUnvisitedNeighbors.js *** current ==> ", current);
    neighbors.push(pixelRef.current[`${x - 1}-${y}`]);
  }
  //down
  if (
    x + 1 < size &&
    current.style.borderBottom === "none" &&
    pixelRef.current[`${x + 1}-${y}`].getAttribute("data-traversed") === "false"
  ) {
    console.log("*** -14 -getUnvisitedNeighbors.js *** current ==> ", current);
    neighbors.push(pixelRef.current[`${x + 1}-${y}`]);
  }
  //left
  if (
    y - 1 >= 0 &&
    current.style.borderLeft === "none" &&
    pixelRef.current[`${x}-${y - 1}`].getAttribute("data-traversed") === "false"
  ) {
    console.log("*** -18 -getUnvisitedNeighbors.js *** current ==> ", current);
    neighbors.push(pixelRef.current[`${x}-${y - 1}`]);
  }
  //right
  if (
    y + 1 < size &&
    current.style.borderRight === "none" &&
    pixelRef.current[`${x}-${y + 1}`].getAttribute("data-traversed") === "false"
  ) {
    console.log("*** -22 -getUnvisitedNeighbors.js *** current ==> ", current);
    neighbors.push(pixelRef.current[`${x}-${y + 1}`]);
  }

  return neighbors;
};

export default getUnvisitedNeighbors;
