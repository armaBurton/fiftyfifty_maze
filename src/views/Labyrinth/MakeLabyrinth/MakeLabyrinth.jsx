import { size, length } from "../../../utils/utils";

const MakeLabyrinth = () => {
  const initPixels = {};
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      initPixels[`${x}-${y}`] = {
        x: x,
        y: y,
        size: size,
        length: length,
        key: `${x}-${y}`,
      };
    }
  }
  return initPixels;
};

export default MakeLabyrinth;
