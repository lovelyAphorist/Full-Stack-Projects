let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (user, computer, target) => {
  const userAbs = Math.abs(user);
  const computerAbs = Math.abs(computer);

  if (userAbs === computerAbs) {
    return true;
  } else if (userAbs < computerAbs) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  let humanScore = 0;
  let computerScore = 0;

  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
