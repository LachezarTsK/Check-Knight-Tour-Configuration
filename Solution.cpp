
#include <cmath>
#include <vector>
using namespace std;

class Solution {

    struct Point {
        int row{};
        int column{};
        Point() = default;
        Point(int row, int column) : row{row}, column{column}{}
    };

    size_t rows;
    size_t columns;

public:
    bool checkValidGrid(const vector<vector<int>>& grid) {
        if (grid[0][0] != 0) {
            return false;
        }

        rows = grid.size();
        columns = grid[0].size();

        vector<Point> coordinatesConsecutiveMoves(rows * columns);
        fillVectorCoordinatesConsecutiveMoves(grid, coordinatesConsecutiveMoves);

        return eachConsecutiveMoveIsValid(coordinatesConsecutiveMoves);
    }

private:
    bool eachConsecutiveMoveIsValid(const vector<Point>& coordinatesConsecutiveMoves) const {
        for (int i = 1; i < coordinatesConsecutiveMoves.size(); ++i) {
            if (!isValidKnightMove(coordinatesConsecutiveMoves[i - 1], coordinatesConsecutiveMoves[i])) {
                return false;
            }
        }
        return true;
    }

    void fillVectorCoordinatesConsecutiveMoves(const vector<vector<int>>& grid, vector<Point>& coordinatesConsecutiveMoves) const {
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                int indexMove = grid[r][c];
                coordinatesConsecutiveMoves[indexMove] = Point(r, c);
            }
        }
    }

    bool isValidKnightMove(const Point& first, const Point& second) const {
        return (abs(first.row - second.row) == 1 && abs(first.column - second.column) == 2)
                || (abs(first.row - second.row) == 2 && abs(first.column - second.column) == 1);
    }
};
