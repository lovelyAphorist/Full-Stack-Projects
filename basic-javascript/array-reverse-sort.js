let arr = [3, 6, 17, 22, 2, 5];

const reverseArray = (arr) => {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

const orderArray = (arr) => {
  arr.sort((a, b) => a - b);
};
