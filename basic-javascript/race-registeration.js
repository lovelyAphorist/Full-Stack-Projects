let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 30;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log(
    `Your race time is at 9:30AM and your race number is ${raceNumber}`
  );
} else if (age > 18) {
  console.log(
    `Your race time is 11:00AM and your race number is ${raceNumber}`
  );
} else if (age < 18) {
  console.log(
    `Your race time is at 12:30PM and your race number is ${raceNumber}`
  );
} else {
  console.log("See the registration desk");
}
