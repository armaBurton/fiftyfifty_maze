import {
  changeBgColor,
  randoNumbo,
  capitalize,
  timeout,
} from "../../utils/utils";
import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
} from "react";
import sample from "lodash/sample";
import ReturnCell from "./ReturnCell/ReturnCell";

const CellGrid = forwardRef((size, ref) => {
  const dim = 600 / size;
  // const cells = [];
  const divRef = useRef({});
  //   const [cells, setCells] = useState([]);
  const [lastGrid, setLastGrid] = useState(null);
  const [running, setRunning] = useState("false");
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [borders, setBorders] = useState(() => {
    const initBorders = {};
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        initBorders[`${x}-${y}`] = {
          x: x,
          y: y,
          top: "true",
          bottom: "true",
          right: "true",
          left: "true",
          visited: "false",
        };
      }
    }
    return initBorders;
  });

  const toggleBorder = (index, border) => {
    const { x, y } = index;
    const cell = divRef.current[`${x}-${y}`];
    setXVal(x);
    setYVal(y);
    alert(border);
    if (cell) {
      cell.style[`border${capitalize(border)}`] =
        cell.style[`border${capitalize(border)}`] === `1px solid black`
          ? "none"
          : `1px solid black`;
    }
  };

  useImperativeHandle(ref, () => ({
    toggleCellBorder: (row, col, border) => {
      const index = { row, col };
      toggleBorder(index, border);
    },
  }));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      <div
        x={borders[`${i}-${j}`].x}
        y={borders[`${i}-${j}`].y}
        top={borders[`${i}-${j}`].top}
        bottom={borders[`${i}-${j}`].bottom}
        left={borders[`${i}-${j}`].left}
        right={borders[`${i}-${j}`].right}
        visited={borders[`${i}-${j}`].visited}
        key={`${i}-${j}`}
        className="mazeUnit"
        ref={(el) => (divRef.current[`${i}-${j}`] = el)}
        style={{
          borderTop: borders[`${i}-${j}`]?.top ? "1px solid black" : "none",
          borderBottom: borders[`${i}-${j}`]?.bottom
            ? "1px solid black"
            : "none",
          borderRight: borders[`${i}-${j}`]?.right ? "1px solid black" : "none",
          borderLeft: borders[`${i}-${j}`]?.left ? "1px solid black" : "none",
          backgroundColor: "yellow",
          width: dim,
          height: dim,
          fontSize: "9px",
        }}
      >
        {`${i}-${j}`}
      </div>;

      // cells.push(
      //   <div
      //     key={`${i}-${j}`}
      //     className="mazeUnit"
      //     ref={(el) => (divRef.current[`${i}-${j}`] = el)}
      //     style={{
      //       borderTop: borders[`${i}-${j}`]?.top ? "1px solid black" : "none",
      //       borderBottom: borders[`${i}-${j}`]?.bottom
      //         ? "1px solid black"
      //         : "none",
      //       borderRight: borders[`${i}-${j}`]?.right
      //         ? "1px solid black"
      //         : "none",
      //       borderLeft: borders[`${i}-${j}`]?.left ? "1px solid black" : "none",
      //       backgroundColor: "yellow",
      //       width: dim,
      //       height: dim,
      //       fontSize: "9px",
      //     }}
      //   >
      //     {`${i}-${j}`}
      //   </div>,
      // );
    }
  }

  useEffect(() => {
    setXVal(xVal);
    setYVal(yVal);
  }, [xVal, yVal]);

  const generateMaze = async () => {
    if (running) return;

    await timeout(1);
    setRunning("true");
    const stack = [];

    let currentCell = borders["0-0"];
    //missing stuff here

    // const newCell = borders.slice();
    // newGrid["0-0"].visted = "true";
    // setBorders(newGrid);
    // currentCell.visited = "true";
    // console.log("current cell ", JSON.stringify(currentCell));
    // console.log(currentCell.top);
    // console.log(JSON.stringify(running));
    stack.push(currentCell);

    while (stack.length > 0) {
      let current = stack.pop();

      let nbs = getNeighbors(current.x, current.y);
      // console.log(nbs);
      // console.log("x, y ", current.x, current.y);

      if (nbs && nbs.length > 0) {
        stack.push(current);

        const curNB = sample(nbs);

        const [to, from] = getUpdatedWalls(current, curNB);

        // const newCell = border.slice();
      }
    }
    // const index = { x: randoNumbo(size), y: randoNumbo(size) };
    // console.log(borders[`${randoNumbo(size)}-${randoNumbo(size)}`].visited);
    setRunning("false");
  };

  const getNeighbors = (x, y) => {
    let neighbors = [];

    //left
    if (y - 1 >= 0 && borders[`${x}-${y - 1}`].visited) {
      neighbors.push(borders[`${x}-${y - 1}`]);
    }
    //left
    if (y - 1 < size && borders[`${x}-${y + 1}`].visited) {
      neighbors.push(borders[`${x}-${y + 1}`]);
    }
    //top
    if (x - 1 >= 0 && borders[`${x - 1}-${y}`].visited) {
      neighbors.push(borders[`${x - 1}-${y}`]);
    }
    //bottom
    if (x + 1 < size && borders[`${x + 1}-${y}`].visited) {
      neighbors.push(borders[`${x + 1}-${y}`]);
    }
    return neighbors;
  };

  const getUpdatedWalls = (from, to) => {
    const walls = [];
    if (from.y - to.y < 0) {
      walls.push({ ...from.walls, right: "false" });
      walls.push({ ...to.walls, left: "false" });
    }
    if (from.y - to.y > 0) {
      walls.push({ ...from.walls, left: "false" });
      walls.push({ ...to.walls, right: "false" });
    }
    if (from.x - to.x < 0) {
      walls.push({ ...from.walls, bottom: "false" });
      walls.push({ ...to.walls, top: "false" });
    }
    if (from.x - to.x > 0) {
      walls.push({ ...from.walls, top: "false" });
      walls.push({ ...to.walls, bottom: "false" });
    }
    return walls;
  };

  return (
    <>
      <div className="mazeContainer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, ${dim}px)`,
          }}
        >
          {cells}
        </div>
      </div>
      <div className="buttonContainer">
        <button className="mazeButton" onClick={() => generateMaze()}>
          Generate Maze
        </button>
        <button
          className="mazeButton"
          onClick={() =>
            changeBgColor(divRef, lastGrid, setLastGrid, size, setXVal, setYVal)
          }
        >
          Click
        </button>
      </div>
      <p className="coords">
        {xVal >= 0 ? `${xVal}` : ``}-{yVal >= 0 ? `${yVal}` : ``}
      </p>
    </>
  );
});

export default CellGrid;
