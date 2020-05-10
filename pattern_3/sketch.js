/*
Jeremy Bautista
Pattern Version 3
*/

var wSlider;
var heightSlider;

function setup() {
	createCanvas(640, 360);
	noStroke();

	createP("Cell size");
	wSlider = createSlider(1, 100, 40);
	wSlider.input(pattern);

	createP("Height");
	heightSlider = createSlider(-10, height, 300);
	heightSlider.input(pattern);
	
	var patternButton = createButton("Pattern");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("Save");
	saveButton.mousePressed(saveImage);

	pattern();
}

function saveImage() {
	save("pattern.png");
}

function pattern() {
	background(51);

	var w = wSlider.value(); 
	var h = w; 

	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {

			let r = random(0, 100); // red
			let g = random(0, 150); // green
			let b = random(150, 255); 

			if (y > heightSlider.value()) {
				r += random(100, 200);
				g += random(50, 150);
				b -= random(100, 200);
			}

			fill(r, g, b);				
			
			rect(x + random(10), y + random(10), w + random(10), h/2 + random(200));
		}
	}

	
}