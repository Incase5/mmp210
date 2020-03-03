/*
Jeremy Bautista
Meme Version 2 
3/3/2020
*/

var kirbyImage;

function preload(){
	kirbyImage = loadImage("kirby.jpg");
	kirbyShoot = loadImage("bang.jpg");

}

function setup(){
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 1;
}

function draw(){
	background('skyblue');

	//draw the image
	if (mouseIsPressed) {
		image(kirbyShoot, 0, 0, 500, 500);
	} else {
		image(kirbyImage, 0, 0, 500, 500);
	}
	
	

	textSize(40);
	fill('blue');
	stroke('purple');
	strokeWeight('3');
	textStyle(ITALIC);
if (mouseIsPressed){
	text("BANG", 380, 260);
}

	//text("my face", 250, 460);

	textSize(45);
	textStyle(NORMAL);
}
