class Team {
	constructor(name) {
		this.name = name;
	}

	celebrate(){
		console.log("Dance");
	}
}

class BasketballTeam extends Team {
	constructor(name) {
		super(name);
		this.type = "Basketball";
	}

	scoreGoal(){
		console.log("He shoots, he scores");
	}
}

class FootBallTeam extends Team {
	constructor(name) {
		super(name);
		this.type = "Basketball";
	}

	touchdown(){
		console.log("Go for two!!");
	}
}

const wings = new BasketballTeam("Wings");
const lions = new FootBallTeam("Lions");

wings.scoreGoal();
lions.touchdown();
wings.celebrate();
lions.celebrate();
// lions.scoreGoal();

console.log(wings, lions);