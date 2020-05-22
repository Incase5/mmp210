/*
Jeremy Bautista
Final Project
*/

function setup(){
	createCanvas(640, 360);
}

function draw(){
	  var w = width / notes.length;
 	 for (var i = 0; i < notes.length; i++) {
    var x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking
      if (mouseIsPressed) {
        fill(100,255,200);
      // Or just rolling over
      } else {
        fill(127);
      }
    } else {
      fill(200);
    }

    // Draw the key
    rect(x, 0, w-1, height-1);
  }

}


/*
var drum1;
var song;

function preload() {
	drum1 = loadSound("drum_1.wav");
	song = loadSound("Jon_E_Alpha_-_09_-_Heavy_Day.mp3");
}

function setup() {
	createCanvas(640, 360);
	drum1.playMode("restart"); 
}

function draw() {
	if (song.isPlaying()) {
		background('skyblue');
	} else {
		background('black');
	}

	var vol = map(mouseY, 0, height, 0, 1);
	song.setVolume(vol);
	drum1.setVolume(vol);

	noStroke();
	fill('orange');
	rect(0, mouseY, width, 2);

	var pan = map(mouseX, 0, width, 0.5, 2);
	song.pan(pan);

	rect(mouseX, 0, 2, height);
}

function mousePressed() {
	drum1.play();

	if (song.isPlaying()) {
		song.pause();

	} else {
		song.play();
	}
}
*/