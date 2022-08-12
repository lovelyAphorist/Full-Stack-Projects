let arr = [3, 6, 17, 22, 2, 5];

const reverseArray = (arr) => {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

const orderArray = (arr) => {
  arr.sort((a, b) => a - b);
};

//simple reverse array

for (let i = 3; i >= 0; i--) {
  console.log(i);
}

//nested for loop
let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
