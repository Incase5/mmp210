/*
Jeremy Bautista
Pattern Version 1
*/

function setup() {
	createCanvas(640, 360);
	noStroke();
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background('skyblue');

	for (let x = 0; x <= width; x += 100) {

		let r = random(300);
		let g = random(200, 100);
		let b = random(200, 350);

		stroke(r, g, b);
		strokeWeight(6);
		line(x, 0, x + 100, height);
		line(x + 100, 0, x, height);
		noFill();
		ellipse(x + 30, random(180, 200), 40);

		let s = random(40, 120);
		let y = random(s/2, height - s/2);

		fill(r, g, b);
		ellipse(x, y, s); // face

		fill('gold');
		ellipse(x + random(20), y - 10, s/4 + random(5)); // right eye
		ellipse(x - 20, y - 10, s/4); // left eye

		rect(x - 15, y + 25, s/2, s/8, s/16);
	}

}
