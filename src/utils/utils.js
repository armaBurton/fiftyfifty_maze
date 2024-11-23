export const changeBgColor = (
  divRef,
  lastGrid,
  setLastGrid,
  size,
  setXVal,
  setYVal,
) => {
  const x = randoNumbo(size);
  const y = randoNumbo(size);

  const r = randoNumbo(256);
  const g = randoNumbo(256);
  const b = randoNumbo(256);
  if (lastGrid) {
    const lastDiv = divRef.current[lastGrid];
    lastDiv.style.backgroundColor = "var( --maze-bkgnd-init)";
  }
  const selectedDiv = divRef.current[`${x}-${y}`];
  if (selectedDiv) {
    selectedDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else {
    console.log("div not found");
  }
  setLastGrid(`${x}-${y}`);
  setXVal(x);
  setYVal(y);
};

export const randoNumbo = (size) => {
  return Math.floor(Math.random() * (size - 1));
};

export const timeout = (time) => {
  return new Promise((res) => setTimeout(res, time));
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const geometry = {
  size: 30,
  length: 600,
};

export const { size, length } = geometry;

const styleDefs = {
  mazeBorder: "var(--bkgnd-drk)",
  mazeBkgnd: "var( --maze-bkgnd-init)",
  pixelPath: "var(--hookers-green)",
  currentPixel: "var(--rose-red)",
  validPixel: "var(--rose)",
};

export const { mazeBorder, mazeBkgnd, pixelPath, currentPixel, validPixel } =
  styleDefs;
