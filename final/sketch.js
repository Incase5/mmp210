/*
Jeremy Bautista 
Final Project
*/

var s1;
var s2;
var s3;
var s4;
var s5;
var s6;
var s7;

function preload(){
	s1 = loadSound("sound_1.mp3");
	s2 = loadSound("sound_2.mp3");
	s3 = loadSound("sound_3.mp3");
	s4 = loadSound("sound_4.mp3");
	s5 = loadSound("sound_5.mp3");
	s6 = loadSound("sound_6.mp3");
	s7 = loadSound("sound_7.mp3");
}

function setup() {
	createCanvas(600, 400);
	noStroke();
}

function draw() {

	background('skyblue');
	stroke("black");
	strokeWeight(5);

	rect(5, 5, 55, 250);	//note 1
	rect(60, 5, 60, 250);	//note 2
	rect(120, 5, 60, 250);	//note 3
	rect(180, 5, 60, 250);	//note 4
	rect(240, 5, 60, 250);	//note 5
	rect(300, 5, 60, 250);	//note 6
	rect(360, 5, 60, 250);	//note 7

	if (s1.isPlaying()){
		rect(5, 10, 55, 250);
	}

	if (s2.isPlaying()){
		rect(60, 10, 60, 250);
	}

	if (s3.isPlaying()){
		rect(120, 10, 60, 250);
	}

	if (s4.isPlaying()){
		rect(180, 10, 60, 250);
	}

	if (s5.isPlaying()){
		rect(240, 10, 60, 250);
	}

	if (s6.isPlaying()){
		rect(300, 10, 60, 250);
	}

	if (s7.isPlaying()){
		rect(360, 10, 60, 250);
	}
}

function keyPressed(){
	if (keyCode == 81){	//q button
		s1.play();
	}

	if (keyCode == 87){	//w button
		s2.play();
	}

	if (keyCode == 69){	//e button
		s3.play();
	}

	if (keyCode == 82){	//r button
		s4.play();
	}

	if (keyCode == 84){	//t button
		s5.play();
	}

	if (keyCode == 89){	//y button
		s6.play();
	}

	if (keyCode == 85){	//u button
		s7.play();
	}
}

function keyReleased(){

	if (keyCode == 81){	//q button
		s1.stop();
	}

	if (keyCode == 87){	//w button
		s2.stop();
	}

	if (keyCode == 69){	//e button
		s3.stop();
	}

	if (keyCode == 82){	//r button
		s4.stop();
	}

	if (keyCode == 84){	//t button
		s5.stop();
	}

	if (keyCode == 89){	//y button
		s6.stop();
	}

	if (keyCode == 85){	//u button
		s7.stop();
	}
}