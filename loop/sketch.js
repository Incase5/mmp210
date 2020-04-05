/*
Jeremy Bautista 
Loop example
*/

function setup(){
	createCanvas(640, 360);
	noStroke();
}

function draw(){
	background('skyblue');

	for (let x = 0; x <= width; x += 80) {

		let y = 90 + x / 8;
		let s = x/3;

		fill('matte');
		ellipse(x, y, s); // face

		fill('yellow');
		ellipse(x + 20, y - 10, s/3); // right eye
		ellipse(x - 20, y - 10, s/2); // left eye

		rect(x - 10, y + 20, s/2, s/8, s/16);
	}


}