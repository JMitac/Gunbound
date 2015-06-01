function Proyectil(argument) {
	this.x = argument.player.x + argument.player.width/2;
	this.y = argument.player.y;
	this.width = 20;
	this.height = 20;
	this.gameCtx = argument.player.gameCtx;
}

Proyectil.prototype.tick = function() {
	this.y -= 5;
};

Proyectil.prototype.draw = function() {
	this.gameCtx.fillRect(this.x, this.y, this.width, this.height);
};
