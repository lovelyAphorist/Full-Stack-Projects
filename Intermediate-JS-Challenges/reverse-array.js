// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

// There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

let reverseArray = (arr) => {
  let newSentence = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newSentence.push(arr[i]);
  }
  return newSentence;
};

const reverseArrayOtherMethod = (arr) => {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed;
};

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
