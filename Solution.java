
public class Solution {

    private record Point(int row, int column) {}
    private int rows;
    private int columns;

    public boolean checkValidGrid(int[][] grid) {
        if (grid[0][0] != 0) {
            return false;
        }

        rows = grid.length;
        columns = grid[0].length;

        Point[] coordinatesConsecutiveMoves = new Point[rows * columns];
        fillArrayCoordinatesConsecutiveMoves(grid, coordinatesConsecutiveMoves);

        return eachConsecutiveMoveIsValid(coordinatesConsecutiveMoves);
    }

    private boolean eachConsecutiveMoveIsValid(Point[] coordinatesConsecutiveMoves) {
        for (int i = 1; i < coordinatesConsecutiveMoves.length; ++i) {
            if (!isValidKnightMove(coordinatesConsecutiveMoves[i - 1], coordinatesConsecutiveMoves[i])) {
                return false;
            }
        }
        return true;
    }

    private void fillArrayCoordinatesConsecutiveMoves(int[][] grid, Point[] coordinatesConsecutiveMoves) {
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                int indexMove = grid[r][c];
                coordinatesConsecutiveMoves[indexMove] = new Point(r, c);
            }
        }
    }

    private boolean isValidKnightMove(Point first, Point second) {
        return (Math.abs(first.row - second.row) == 1 && Math.abs(first.column - second.column) == 2)
                || (Math.abs(first.row - second.row) == 2 && Math.abs(first.column - second.column) == 1);
    }
}
