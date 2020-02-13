/*
Jeremy Bautista
Self portrait 
*/

var x = 150;
var y = 130;

var s = 180;

function setup() {
	createCanvas(500, 360);
}

function draw() {
	background("#9ACBD6");
	

	//face
	fill("#F3DCAB");
	stroke("white");
	strokeWeight(5);
	ellipse(x, y, z);

	//eyes 
	fill("#946D1F");
	ellipse(150, 150, 50, 100);
	ellipse(250, 150, 40, 80);

	//mouth
	stroke("#DCC38E");
	line(150, 250, 200, 230);
}
