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
//while loop
let currentCard;
while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//do while loop
let cupsOfSugarNeeded = 6;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

//for of loop
const hobbies = ["singing", "eating", "quidditch", "writing"];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}
//same as

for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}

const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}
