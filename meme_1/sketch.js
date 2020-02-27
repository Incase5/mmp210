/*
Jeremy Bautista
Meme Version 1 
2/25/2020
*/

var kirbyImage;

function preload(){
	kirbyImage = loadImage("kirby.jpg");
}

function setup(){
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 1;
}

function draw(){
	background('skyblue');

	//draw the image
	image(kirbyImage, 0, 0, 500, 500);
	

	textSize(100);
	fill('blue');
	stroke('purple');
	strokeWeight('3');
	textStyle(ITALIC);
	text("Hello world", 0, 80);

	textSize(45);
	textStyle(NORMAL);


	var welcome = 'When I "fix" an error';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 0, 480)

}
