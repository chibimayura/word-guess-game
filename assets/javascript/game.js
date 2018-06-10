//stores the score and life points
	var score = 0;
	var lifePoints = 6;

	var gameStart = false; //stores boolean if game start or not
	var start; //stores the string of whether the game started or not

	//stores the possible answers
	var answers = ["bubbles", "blossom", "buttercup", "ProfessorUtonium", "Major", "MissBellum", "MojoJojo", "Him", "Octi"];

	var currentAns; //stores current answer
	var userGuess = []; //stores user's guess
	var guessAns; //stores the _ according to the length of the answer and fills the array when found right answer

	var score_div = document.querySelector("#winScore");
	var life_div = document.querySelector("#Life");
	var guesses = document.querySelector("#guesses");
	var answer_div = document.querySelector("#answer");
	var game_div = document.querySelector("#game");

	score_div.innerText = score;
	life_div.innerText = lifePoints;

	//generates a random answer from the answer array
	function randomAns(){
		guessAns = [];
		var randomIndex = Math.floor(Math.random()*answers.length);
		
		return answers[randomIndex].toLowerCase();
	}
	//generates the _ to show the user what word they need to guess
	function answerGenerator(){
		currentAns = randomAns();

		for(var i = 0; i < currentAns.length; i++){
			guessAns[i] = "_";
		}

		answer_div.innerText = guessAns.join(" ");
	}

	//logs and checks to see if the user has already made the guess and subtracts life points accordingly
	function logAndCompareGuess(event){
		var key = event.key;
		userGuess.push(event.key);

	}

	//press any key to start game
	//stores a set of answer for user to guess
	//stores user's guess and if the user has already guess(indexOf) the letter do not subtract guess count left
	//if user guesses wrong subtract guess count left
	//if user guesses correctly add win score && play victory song
	//if user doesn't guess correctly and uses up all their guesses play ending song
	//if user loses or wins the game, have user press any key to restart game