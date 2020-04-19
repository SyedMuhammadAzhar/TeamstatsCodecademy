
const team={
  _players:[{firstName:'Muhammad',lastName:'Salah',age:23},		{firstName:'Sadio',lastName:'Mane',age:22},
		{firstName:'Alisson',lastName:'Becker',age:22}],


	_games:[{opponent:'MachsterCity',teamPoints:96,opponentPoints:87},
		{opponent:'MachsterUnited',teamPoints:96,opponentPoints:84},
		{opponent:'Chelsea',teamPoints:96,opponentPoints:80}],
  
  get players(){

	return this._players;
	},

	get games(){

	return this._games;
	},
  
  addPlayer(firstName,lastName,age){
	  let player={

		firstName:firstName,
		lastName:lastName,
		age:age
		
		};

		this.players.push(player);

	},
  addGame(opponentName,teamPoints,opponentPoints){
		
		let game={
			opponentName:opponentName,
			teamPoints:teamPoints,
			opponentPoints,opponentPoints
			};

			this.games.push(game);

	}

  
};


  team.addPlayer('Steph','Curry',28);
	team.addPlayer('Lisa','Leslie',44);
	team.addPlayer('Bugs','Bunny',76);

	console.log(team.players);



	team.addGame('Arsenal',96,80);
	team.addGame('Everton',96,76);
	team.addGame('ListerCity',96,74);

	console.log(team.games);
