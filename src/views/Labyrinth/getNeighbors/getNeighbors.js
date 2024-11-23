const getNeighbors = (pixelRef, size, x, y) => {
  const neighbors = [];

  //up
  if (
    x - 1 >= 0 &&
    pixelRef.current[`${x - 1}-${y}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x - 1}-${y}`]);
  }

  //down
  if (
    x + 1 < size &&
    pixelRef.current[`${x + 1}-${y}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x + 1}-${y}`]);
  }

  //left
  if (
    y - 1 >= 0 &&
    pixelRef.current[`${x}-${y - 1}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x}-${y - 1}`]);
  }

  //right
  if (
    y + 1 < size &&
    pixelRef.current[`${x}-${y + 1}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x}-${y + 1}`]);
  }

  return neighbors;
};

export default getNeighbors;
