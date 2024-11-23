import { timeout } from "../../../utils/utils";
import badPath from "../badPath/badPath";
import updateCurrentPixelState from "../updateCurrentPixelState/updateCurrentPixelState";
import visitedButStillValid from "../visitedButStillValid/visitedButStillValid";

const getValidPath = async (pixelRef, pixelObj, path, visited) => {
  const directions = [
    { dx: -1, dy: 0, border: "borderTop" }, // Up
    { dx: 1, dy: 0, border: "borderBottom" }, // Down
    { dx: 0, dy: -1, border: "borderLeft" }, // Left
    { dx: 0, dy: 1, border: "borderRight" }, // Right
  ];

  const { x, y, currentPixel, size } = pixelObj;

  if (x === size - 1 && y === size - 1) {
    console.log("exit found");
    return true;
  }

  for (const { dx, dy, border } of directions) {
    const newX = x + dx;
    const newY = y + dy;
    const newKey = `${newX}-${newY}`;
    await timeout(10);
    if (newX >= 0 && newX < size && newY >= 0 && newY < size) {
      const nextPixel = pixelRef.current[newKey];

      if (
        currentPixel.style[border] === "none" &&
        visited[newX][newY] === false
      ) {
        // Move Forward
        visited[newX][newY] = true;
        path.push(nextPixel);
        pixelObj.x = newX;
        pixelObj.y = newY;
        pixelObj.currentPixel = nextPixel;

        // visitedButStillValid(nextPixel);
        visitedButStillValid(nextPixel);
        updateCurrentPixelState(nextPixel);

        // Recurse
        const found = await getValidPath(pixelRef, pixelObj, path, visited);
        if (found) return true;

        // Backtrack
        path.pop();
        visited[newX][newY] = false;
        badPath(nextPixel);
      }
    }
  }

  return false;
};
export default getValidPath;
