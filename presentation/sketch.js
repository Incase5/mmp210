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
var stylophoneImage;

function preload(){
	stylophoneImage = loadImage("stylophone.jpg");
}

function setup(){
	createCanvas(960, 720);
}

function draw(){
	background('skyblue');

	var title; 
	var description;
	
	if (currentSlide == 0) {
		title = "Jeremy, Final Project";
		description = "I will create a page that will have the user interact with a mini piano.";
	} 
	else if (currentSlide == 1) {
		title = "What It Will Do";
		description = "The user will use either the mouse and keyboard to interact with the piano.";
		image(stylophoneImage, 0, height/2, stylophoneImage.width/2, stylophoneImage.height/2)

	} 
	else if (currentSlide == 2) {
		title = "What I will use";
		description = "I will be using p5 shapes, as well as sound to make the keyboard, as well as the sounds that they output ehrn pressed.";
	}

	textSize(70);
	fill('yellow');
	noStroke();
	textAlign(LEFT, TOP);
	text(title, 20, 70);

	// display description
	textSize(40);
	text(description, 20, 200, width - 40);
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