function diagonalDifference(size, arr) {
  const countdown = size;
  let leftDiag = 0;
  let rightDiag = 0;

  for (let i = 0; i < size; i++) {
    leftDiag += arr[i][i];
    console.log(arr[i][size - 1]);
  }

  for (let i = size - 1; i >= 0; i--) {
    rightDiag += arr[i];
  }

  console.log(leftDiag);
}

const size = 3;
const arr1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(3, arr1));
