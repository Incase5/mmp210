/*
Jeremy Bautista
Keyboard Sampler
*/

var song;
var drum1, drum2, drum3;


function preload(){
	song = loadSound("Jon_E_Alpha_-_09_-_Heavy_Day.mp3");
	drum1 = loadSound("drum_1.wav");
	drum2 = loadSound("drum_2.wav");
	drum3 = loadSound("drum_3.wav");
}

function setup(){
	createCanvas(640, 360);
	noStroke();
}

function draw(){
	//song
	if (song.isPlaying()){
		background('skyblue');
	}
	else {
		background('black');
	}

	//drum
	if (drum1.isPlaying()){
		fill('orange');
		rect(0, 0, 100, height);
	}

	if (drum2.isPlaying()){
		fill('red');
		rect(200, 0, 100, height);
	}

	if (drum3.isPlaying()){
		fill('yellow');
		rect(300, 0, 100, height);
	}

	fill('gold');
	textSize(18);
	text('Press the space to play the song, and press Q, W, and E for beats :)', 10, 20);
}

function keyPressed(){
	//music
	if (keyCode == 32){
		if (song.isPlaying()){
			song.pause();
		}
		else{
			song.play();
		}
	}

	//drums
	if (keyCode == 81){	//q button
		drum1.play();
		rect(0, 0, 100, height);
	}
	
	if (keyCode == 87){	//w button
		drum2.play();
		rect(0, 0, 100, height);
	}

	if (keyCode == 69){	//e button
		drum3.play();
		rect(0, 0, 100, height);
	}
}