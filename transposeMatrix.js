function transposeMatrix(matrix) {
  const output = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (output[j] === undefined) output.push([]);
      output[j].push(matrix[i][j]);
    }
  }
  return output;
}

module.exports = transposeMatrix;
