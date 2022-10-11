const team = {
  _players: [
    { firstName: "Nikko", lastName: "Lowder", age: 2 },
    { firstName: "Guinuess", lastName: "Lowder", age: 12 },
    { firstName: "Bane", lastName: "Lowder", age: 5 },
  ],
  _games: [
    { opponent: "Lazy Dogs", teamPoints: 110, opponentPoints: 54 },
    { opponent: "Dog Days", teamPoints: 110, opponentPoints: 54 },
    { opponent: "Fetchers", teamPoints: 110, opponentPoints: 54 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let newGame = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._game.push(newGame);
  },
};
