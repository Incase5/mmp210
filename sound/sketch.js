/*
Jeremy Bautista
Pattern Version 3
*/

var birdSound;
var music;

function preload() {
	birdSound = loadSound("birds.wav");
	music = loadSound("Rolemusic_-_Omou_matsu.mp3");
}

function setup() {
	createCanvas(640, 360);
	birdSound.playMode("restart"); 
}

function draw() {
	if (music.isPlaying()) {
		background('green');
	} else {
		background(220);
	}

	var volume = map(mouseY, 0, height, 1, 0);
	music.setVolume(volume);

	noStroke();
	fill('white');
	rect(0, mouseY, width, 10);

	var rate = map(mouseX, 0, width, 0.5, 2);
	music.rate(rate);

	rect(mouseX, 0, 10, height);
}

function mousePressed() {
	birdSound.play();

	if (music.isPlaying()) {
		music.pause();

	} else {
		music.play();
	}
}