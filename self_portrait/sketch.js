/*
Jeremy Bautista
Self portrait 
*/

function setup() {
	createCanvas(400, 360);
}

function draw() {
	background("#9ACBD6");
	stroke("white");
	strokeWeight(5);

	//face
	fill("#F3DCAB");
	ellipse(200, 180, 200, 250);

	//eyes 
	fill("#946D1F");
	ellipse(150, 150, 50, 100);
	ellipse(250, 150, 40, 80);

	//mouth
	stroke("#DCC38E");
	line(150, 250, 200, 230);
}
