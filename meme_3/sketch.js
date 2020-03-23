/*
Jeremy Bautista
Meme Version 3 
3/3/2020
*/

var kirbyImage;
var kirbyShoot;
var kirbyBang;
var kirbyBoom;

var kirbSize;
var kirbSizeSpeed = 5;

var kirbX;

var counter = 0;
var instructions = "click here";
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

	x = width - 150;
	y = height - 100;

	kirbSize = width;
	kirbX = 0;
}

function mousePressed(){
	counter++;
	if (counter == 4) {
		counter = 0;
	}

	if (mouseX > width/2 && mouseY > height/2) {
		// bottom right
		instructions = 'Now Here';
		y = 50;
	} else if (mouseX > width/2 && mouseY < height/2) {
		instructions = 'Once More';
		x = 50;
	} else if (mouseX < width/2 && mouseY < height/2) {
		instructions = 'Nice';
		y = height - 100;
	}
}

function draw(){
	background('skyblue');

	//draw the image
	if (counter == 0) {
		imageMode(CORNERS)
		image(kirbyImage, 0, 0, 500, 500);
	} else if (counter == 1) {
		imageMode(CENTER);
		image(kirbyShoot, width/2, height/2, kirbSize, kirbSize);
		
		kirbSize += kirbSizeSpeed;
		if (kirbSize > width * 1.5 || kirbSize < width - kirbSizeSpeed) {
			kirbSizeSpeed *= -1;
		}
	} else if (counter == 2) {
		image(kirbyBang, width/2, height/2, kirbSize, kirbSize);
		
		kirbSize += kirbSizeSpeed;
		if (kirbSize > width * 1.5 || kirbSize < width - kirbSizeSpeed) {
			kirbSizeSpeed *= -1;
		}
	}  else {
		image(kirbyBoom, width/2, height/2, kirbSize, kirbSize);
		
		kirbSize += kirbSizeSpeed;
		if (kirbSize > width * 1.5 || kirbSize < width - kirbSizeSpeed) {
			kirbSizeSpeed *= -1;
		}
	}
	
	textSize(40);
	fill('blue');
	stroke('purple');
	strokeWeight('3');
	textStyle(ITALIC);
	textSize(45);
	textStyle(NORMAL);

	text(instructions, x, y, 150);
}
