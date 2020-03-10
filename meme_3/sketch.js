/*
Jeremy Bautista
Meme Version 2 
3/3/2020
*/

var kirbyImage;
var kirbyShoot;
var kirbyBang;
var kirbyBoom;

var counter = 0;
var instructions = "click to shoot";
var x;
var y;

function preload(){
	kirbyImage = loadImage("kirby.jpg");
	kirbyShoot = loadImage("bang.jpg");
	kirbyBang = loadImage("kirbybang.jpg");
	kirbyBoom = loadImage("kirboom.jpg");
}

function setup(){
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function mousePressed(){
	counter++;
	if (counter == 4) {
		counter = 0;
	}

	if (mouseX > width/2 && mouseY > height/2) {
		// bottom right
		instructions = 'now shoot again';
		y = 50;
	} else if (mouseX > width/2 && mouseY < height/2) {
		instructions = 'finish it';
		x = 50;
	} else if (mouseX < width/2 && mouseY < height/2) {
		instructions = 'ACE';
		y = height - 100;
	}
}

function draw(){
	background('skyblue');

	//draw the image
	if (counter == 0) {
		image(kirbyImage, 0, 0, 500, 500);
	} else if {
		image(kirbyShoot, 0, 0, 500, 500);
	} else if {
		image(kirbyBang, 0, 0, 500, 500);
	}  else {
		image(kirbyBoom, 0, 0, 500, 500);
	}
	
	textSize(40);
	fill('blue');
	stroke('purple');
	strokeWeight('3');
	textStyle(ITALIC);
	textSize(45);
	textStyle(NORMAL);
}
