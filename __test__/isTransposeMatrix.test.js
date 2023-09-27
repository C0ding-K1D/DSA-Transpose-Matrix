const transposeMatrix = require("../transposeMatrix");

describe("transposeMatrix", () => {
  it("should return the transposed matrix", () => {
    const matrix = [[1]];

    expect(transposeMatrix(matrix)).toStrictEqual([[1]]);
  });

  it("should return the transposed matrix", () => {
    const matrix = [[1, 2, 3]];

    expect(transposeMatrix(matrix)).toStrictEqual([[1], [2], [3]]);
  });

  it("should return the transposed matrix", () => {
    const matrix = [[1], [-1]];

    expect(transposeMatrix(matrix)).toStrictEqual([[1, -1]]);
  });

  it("should return the transposed matrix", () => {
    const matrix = [[1], [2], [3]];

    expect(transposeMatrix(matrix)).toStrictEqual([[1, 2, 3]]);
  });

  it("should return the transposed matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(transposeMatrix(matrix)).toStrictEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
