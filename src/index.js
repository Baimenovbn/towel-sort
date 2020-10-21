
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];

  let i = 0;
  for (let row of matrix) {
    if (i % 2 !== 0) {
      row.sort((a, b) => a > b ? -1 : 1)
    }
    i++;
  }
  return matrix.map(row => row
                            .join()
                            .split(','))
                                        .join()
                                        .split(',')
                                                  .map(str => parseInt(str));
};
