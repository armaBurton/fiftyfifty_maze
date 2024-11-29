const AsComplex = () => {
    return (
        <section className="partA">
            <h3>Key Operations</h3>
            <p>The <span className="codeBlock">getValidPaths</span> is primary algorithm
                being used to traverse the maze to find the exit. The algorithm uses a recursive depth-first
                search (DFS) algorithm to explore all possible paths, visiting neighboring cells in four
                possible directions (up, down, left, right). Each recursive call processes a new cell, marking
                it as visited, and continues exploring until it either reaches the destination or backtracks if
                no valid path is found.</p>
            <p>The operations in <span className="codeBlock">getValidPaths</span> include updated the current cell
                as visited and adds the cell to the path array. It then updates the state of the div turning it from
                green to red. There is an <span className="codeBlock">await timeout(1)</span> in the traversal algorithm
                but it doesn't affect the asymptotic time complexity, only the runtime factor. The Base Case occurs when
                <span className="codeBlock"> (x === size - 1 && y === size - 1)</span> returns
                <span className="codeBlock"> true</span>.</p>

            <h3>Time Complexity Analysis</h3>
            <p>Using a <em>Depth-First Search</em> has the potential to visit every pixel in the grid, and the size of
                the grid is <span className="codeBlock">size x size</span>, so the total number of cells is
                <span className="codeBlock"> O(size<sup>2</sup>)</span>. For each cell, the algorithm checks it's four
                neighbors, which is a constant amount of work.</p>
            <p>The maximum dept of recursion is equal to the number of cells that can be visited, which, in the worst
                case is <span className="codeBlock"> O(size<sup>2</sup>)</span>.</p>
            <p>The asymptotic time complexity for the Depth-First Search and Recursion is
                <span className="codeBlock"> O(size<sup>2</sup>) + O(size<sup>2</sup>)</span></p>

            <h3>Space Complexity</h3>
            <p>The <span className="codeBlock">visited</span> array is a 2D array of <span className="codeBlock"> size x size</span>,
                taking up <span className="codeBlock"> O(size<sup>2</sup>)</span> space, and the Recursive Stack has a maximum depth of
                <span className="codeBlock"> O(size<sup>2</sup>)</span></p>
        </section>
    )
}

export default AsComplex;