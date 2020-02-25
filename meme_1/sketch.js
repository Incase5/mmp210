/*
Jeremy Bautista
Meme Version 1 
2/25/2020
*/

function setup(){
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 1;
}

function draw(){
	background('skyblue');

	textSize(100);
	fill('blue');
	stroke('purple');
	strokeWeight('3');
	textStyle(ITALIC);
	text("Hello world", 0, 250);

	textSize(45);
	textStyle(NORMAL);


	var welcome = 'Welcome to my website';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 0, 350)

}
