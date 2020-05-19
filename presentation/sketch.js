/*
Jeremy Bautista
Final Project Pitch
*/

var currentSlide = 0;
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

function setup(){
	createCanvas(960, 720);
}

function draw(){
	background('skyblue');

	text('Slide' + currentSlide, 100, 100);

	fill('white');
	stroke('black');

	rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	fill('black');
	textSize(20);
	noStroke();
	textAlign(CENTER, CENTER);
	text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
}

function mousePressed(){
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW && mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH){
		currentSlide++;
	} 
}