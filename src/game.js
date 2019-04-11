//Initialise the Kiwi Game. 
var gameOptions = {
	width: 1280,
	height: 720
}

var game = new Kiwi.Game('game', 'wetslipgame', null, gameOptions);


//Add all the States we are going to use.
game.states.addState(Preloader);
game.states.addState(LoadingState);
game.states.addState(IntroState);
game.states.addState(PlayState);


//Switch to/use the Preloader state. 
game.states.switchState("Preloader");