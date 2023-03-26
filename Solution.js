
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
    if (grid[0][0] !== 0) {
        return false;
    }

    this.rows = grid.length;
    this.columns = grid[0].length;

    const coordinatesConsecutiveMoves = new Array(this.rows * this.columns);
    fillArrayCoordinatesConsecutiveMoves(grid, coordinatesConsecutiveMoves);

    return eachConsecutiveMoveIsValid(coordinatesConsecutiveMoves);

};

/**
 * @param {number} row
 * @param {number} column
 * @return {boolean}
 */
function Point(row, column) {
    this.row = row;
    this.column = column;
}

/**
 * @param {Point[]} coordinatesConsecutiveMoves
 * @return {boolean}
 */
function eachConsecutiveMoveIsValid(coordinatesConsecutiveMoves) {
    for (let i = 1; i < coordinatesConsecutiveMoves.length; ++i) {
        if (!isValidKnightMove(coordinatesConsecutiveMoves[i - 1], coordinatesConsecutiveMoves[i])) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number[][]} grid
 * @param {Point[]} coordinatesConsecutiveMoves
 * @return {void}
 */
function fillArrayCoordinatesConsecutiveMoves(grid, coordinatesConsecutiveMoves) {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            let indexMove = grid[r][c];
            coordinatesConsecutiveMoves[indexMove] = new Point(r, c);
        }
    }
}

/**
 * @param {Point} first
 * @param {Point} second
 * @return {boolean}
 */
function isValidKnightMove(first, second) {
    return (Math.abs(first.row - second.row) === 1 && Math.abs(first.column - second.column) === 2)
            || (Math.abs(first.row - second.row) === 2 && Math.abs(first.column - second.column) === 1);
}
