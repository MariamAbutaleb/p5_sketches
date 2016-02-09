// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(1000, 800);
	noLoop();
}


function draw() {
	// clear the background
	background(0, 0, 0);


	var rows = height / 50;
	var cols = width / 50;

	for (row = 0; row < rows; row++) {
		for (col = 0; col < rows; col++) {
			drawThing(col * 50 + 25, row * 50 + 25);
		}
	}



	function drawThing(x, y) {
		var c;
		var b;

		// even
		c = random(0, 50);
		b = random(0, 500);

		// set drawing styles
		fill(0, c + 255, c + 255);
		strokeWeight(2 + c);
		stroke(355, 204, 255);

		// draw a traingle
		triangle(c * 190, c + 235, c * 218, c + 180, c * 246, c + 235);
		// draw a traingle
		triangle(c * 190 + b, c + 235 + b, c * 218 + b, c + 180 + b, c * 246 + b,
			c + 235 + b);
		triangle(b * 190 + b, b + 235 + b, b * 218 + b, b + 180 + b, b * 246 + b,
			b + 235 + b);
		triangle(c * 190 * 2 + b, c + 235 * 2 + b, c * 218 * 2 + b, c + 180 * 2 + b,
			c * 246 * 2 + b, c + 235 * 2 + b);
		triangle(b * 190 * 7 + b, b + 235 * 7 + b, b * 218 * 7 + b, b + 180 * 7 + b,
			b * 246 * 7 + b, b + 235 * 7 + b);

		blendMode(LIGHTEST);
	}


}
