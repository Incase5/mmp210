/*
Jeremy Bautista
Self portrait 
*/

var x = 200;
var y = 180;

var s = 200;



function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("#9ACBD6");
	stroke("white");
	strokeWeight(5);

	//face
	fill("#F3DCAB");
	
	//ellipse(200, 180, 200, 250);
	ellipse(x, y, s);
	
	//eyes 
	fill("#946D1F");
	ellipse(x - 50, y - 25, 50, s/2);	//left eye
	ellipse(x + 50, y - 30, 40, s/2.5);	//right eye

	//mouth
	rectMode(CENTER);
	stroke("#DCC38E");
	strokeWeight(2);
	noFill();
	line(x - 50, 250, 200, 230);


	// x = 200
	// y = 180
	// s = 200
}
