const Home = () => {
  //   Explain how finding a path through this maze can be represented as a graph problem.
  //   Clearly explain what the nodes and edges in your graph  formulation correspond to in
  //   terms of the structure of the original maze.You may include a diagram or a
  //   sketch to explain your reasoning.
  return (
    <section className="partA">
      <p>
        The maze I created uses HTML divs as the nodes and border elements at
        the paths. Each div element can be idendified by its (x, y) position in
        the grid. There is a border on each side of the div, (top, bottom, left,
        and right), and when a border is removed it represents a path. This will
        become self-evident upon visitation of the dimensional maze links.
      </p>
      <p>
        The randomizor starts at grid index [0-0] and finds the adjacent nodes,
        [0-1] and [1-0]. selecting one and removing the walls between the
        previous node and the current node, and them marks the current node as
        visited. This is repeated until the program has visited every node. This
        follows Prim's Algorithm for Miminum Spanning Trees. The program is
        adaptable for any size of maze, however, the walls are 1px so the
        minimium viewable node is 3x3px. That would generate a div with 8 border
        pixels and 1 path pixel.
      </p>
      <p>
        For the intents of this assignment, though, the walls are removed with a
        50% probablility, meaning that just because a node is visited, does not
        necessarily mean that the wall will be removed. What I have discovered
        is that the probability of a 50/50 maze being solved decays
        exponentially with the size of the maze. A 2x2 maze has a 50% chance of
        having a path from the begining to the end, while a 5x5 maze has a 1/32
        probability of being solved.
      </p>
    </section>
  );
};

export default Home;
