// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

// Write function below
const subLength = (word, letter) => {
  let firstLetter = word.indexOf(letter);
  console.log(firstLetter);

  let secondLetter = word.indexOf(letter, firstLetter + 1);
  console.log(secondLetter);

  let toManyLetters = word.indexOf(letter, secondLetter + 1);
  console.log(toManyLetters);

  if (firstLetter < 0) {
    return 0;
  } else if (secondLetter < 0) {
    return 0;
  } else if (toManyLetters > 0) {
    return 0;
  } else {
    return secondLetter - firstLetter + 1;
  }
};

//a-b +2
subLength("summer", "m");
