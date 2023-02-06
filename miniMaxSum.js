//SOLVED

function miniMaxSum(arr) {
  arr.sort();
  let lowSum = 0;
  let highSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    lowSum += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    highSum += arr[i];
  }

  console.log(lowSum, highSum);
}

const arr1 = [1, 2, 3, 4, 5];

miniMaxSum(arr1);

//expected 10 14
