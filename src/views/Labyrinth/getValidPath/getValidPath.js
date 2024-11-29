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
  await timeout(1);
  const { x, y, currentPixel, size } = await pixelObj;

  if (x === size - 1 && y === size - 1) {
    return true;
  }
  await timeout(1)
  for (const { dx, dy, border } of directions) {
    const newX = x + dx;
    const newY = y + dy;
    const newKey = `${newX}-${newY}`;
    await timeout(1);
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
        ++pixelObj.length;

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


  return false;
};
export default getValidPath;
