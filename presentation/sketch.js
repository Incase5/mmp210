/*
Jeremy Bautista
Final Project Pitch
*/

var currentSlide = 0;
var nextButtonX = 850;
var nextButtonY = 15;
var nextButtonW = 100;
var nextButtonH = 33;
var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW;
var prevButtonH = nextButtonH;


function setup(){
	createCanvas(960, 720);
}

function draw(){
	background('skyblue');

	//text('Slide ' + currentSlide, 100, 100);
	var title;

	textSize(80);


	fill('white');
	stroke('black');

	rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH);	//next
	rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH);	//previous

	fill('black');
	textSize(20);
	noStroke();
	textAlign(CENTER, CENTER);
	text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	text("Prev", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
}

function mousePressed(){
	//Previous
	if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW && mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH){
		currentSlide--;
	} 
	
	//Next
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW && mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH){
		currentSlide++;
	} 
}