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
  await timeout(10);
  const { x, y, currentPixel, size } = await pixelObj;

  if (x === size - 1 && y === size - 1) {
    // console.log("exit found");
    return true;
  }

  for (const { dx, dy, border } of directions) {
    const newX = x + dx;
    const newY = y + dy;
    const newKey = `${newX}-${newY}`;
    await timeout(10);
    if (newX >= 0 && newX < size && newY >= 0 && newY < size) {
      const nextPixel = pixelRef.current[newKey];
      // console.log("searching");
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
        ++pixelObj.length;

        // visitedButStillValid(nextPixel);
        visitedButStillValid(nextPixel);
        await updateCurrentPixelState(nextPixel);
        // Recurse
        const found = await getValidPath(pixelRef, pixelObj, path, visited);
        if (found) return true;

        // Backtrack
        await path.pop();
        visited[newX][newY] = false;
        badPath(nextPixel);
      }
    }
  }
  // console.log("*** -22 -getValidPath.js *** path.length ==> ", path.length);
  if (path.length === 1 && x === 0 && y === 0) {
    // console.log("Failed to find exit.");
    return false;
  }

  return false;
};
export default getValidPath;
