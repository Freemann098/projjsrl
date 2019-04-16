var IntroState = new Kiwi.State('IntroState');

this.menuBackdrop = null;
this.buttonPlay = null;

IntroState.preload = function() {
    this.addImage('menuBackdrop', 'assets/img/menubg.png');
    this.addImage('buttonPlay', 'assets/img/buttonPlay.png');
}

IntroState.create = function () {
    
    this.game.input.mouse.onUp.add( this.playGame, this );

    this.menuBackdrop = new Kiwi.GameObjects.StaticImage( this, this.textures.menuBackdrop, 0, 0 );
    this.buttonPlay = new Kiwi.GameObjects.Sprite( this, this.textures.buttonPlay, 520, 520 );

    this.addChild(this.menuBackdrop);
    this.addChild(this.buttonPlay);
}

IntroState.update = function () {
    
}

IntroState.playGame = function () {
    this.mousex = Math.round ( this.game.input.x * 10 ) / 10;
    this.mousey = Math.round ( this.game.input.y * 10 ) / 10;

    if(this.mousex > this.buttonPlay.x && this.mousex < this.buttonPlay.x + 230 &&
       this.mousey > this.buttonPlay.y && this.mousey < this.buttonPlay.y + 80){
            game.states.switchState("PlayState");
    }
}