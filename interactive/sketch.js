/*
Jeremy Bautista
Interactive Self portrait 
*/

var x; //original size 200
var y = 180;

var s = 200;



function setup() {
	createCanvas(640, 360);
	x = width/2;
}

function draw() {
	background("#9ACBD6");
	stroke("white");
	strokeWeight(5);

	//face
	fill("#F3DCAB");

	//x++;
	//s++;
	
	//ellipse(200, 180, 200, 250);
	ellipse(x, y, s);
	
	var ms = map(mouseX, 0, width, 10, 150);

	//eyes 
	fill("#946D1F");
	ellipse(x - 50, y - 25, 50, ms/2);	//left eye
	ellipse(x + 50, y - 30, 40, ms/2.5);	//right eye

	


	//mouth
	rectMode(CENTER);
	stroke("#DCC38E");
	strokeWeight(2);
	noFill();
	line(x, y + 70, 250, s+30);
}
