/*
Jeremy Bautista
Keyboard Sampler
*/

var song;


function preload(){
	song = loadSound("Jon_E_Alpha_-_09_-_Heavy_Day.mp3");
}

function setup(){
	createCanvas(640, 360);
}

function draw(){
	if (song.isPlaying()){
		background('skyblue');
	}
	else {
		background('black');
	}
}

function keyPressed(){
	if (keyCode == 32){
		if (song.isPlaying()){
			song.pause();
		}
		else{
			song.play();
		}
	}
}