const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("That is not a valid choice");
  }
};

const getProgramChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, programChoice) => {
  if (userChoice === programChoice) {
    return "tie";
  }
  if (userChoice === "rock") {
    if (programChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (programChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (programChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const programChoice = getProgramChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw:" + programChoice);
  console.log(determineWinner(userChoice, programChoice));
};

playGame();
