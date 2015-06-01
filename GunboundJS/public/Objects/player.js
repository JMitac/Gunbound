function Player(arguments) {
	this.height = 90;
	this.width = 90;
	this.x = 270;
	this.y = 320;
	this.desplazamiento = 8;
	this.doMoveLeft = false;
	this.doMoveRight = false;
	this.gameCtx = arguments.contexto;
	this.imageObj = arguments.image;
	this.imageObj2 = arguments.image2;
}


Player.prototype.tick = function() {
	if ( this.doMoveLeft){ //Izquierda
		if(this.x > 0 ){
		}
			this.x -= this.desplazamiento;

	}

	if ( this.doMoveRight){ //Derecha
		//if(this.x + this.width < canvas.width  )
			this.x += this.desplazamiento;
	}
};

Player.prototype.draw = function() {
	if ( this.doMoveLeft){
		this.gameCtx.translate( this.desplazamiento, 0);
	}else if( this.doMoveRight){
		this.gameCtx.translate( this.desplazamiento*-1, 0);
	}
	this.gameCtx.drawImage(this.doMoveLeft ? this.imageObj :  this.imageObj2 , this.x, this.y, this.width, this.height);	
};


/*
* Set event keyboard listener
*/

Player.prototype.listenKeyBoardEvent = function() {
	var that = this;

	// https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
	document.addEventListener("keydown", function(e) {
		that.keyDown(e);
	}, false);

	document.addEventListener("keyup", function(e) {
		that.keyUp(e);
	}, false);
};

Player.prototype.keyDown = function(e) {
	var keyCode = e.keyCode;
	//LEFT
	if(keyCode == 37){
		this.doMoveLeft = true;
	}
	//RIGHT
	else if(keyCode == 39){
		this.doMoveRight = true;
	}
	//SPACE
	else if(keyCode == 32){
		//player va a tener todos los elementos de Proyectil
		var jsonArguments = { player : this };
		var proyectil = new Proyectil(jsonArguments);
		objects.push(proyectil);
	}
};

Player.prototype.keyUp = function(e) {
	var keyCode = e.keyCode;
	//LEFT
	if(keyCode == 37){
		this.doMoveLeft = false;
	}
	//RIGHT
	else if(keyCode == 39){
		this.doMoveRight = false;
	}
};