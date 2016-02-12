// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(windowWidth, windowHeight);
	//noLoop();
}


function draw() {
	// clear the background
	background(255, 255, 255);
	blendMode(BLEND);

	for (var i = 0; i < 20; i++) {
		var r = random(-20, 20);
		var s = random(-50, 50);

		textSize(32 * r);
		text("RANDOM", r, 500 + r);
		fill(random(0, 255), random(0, 255), random(0, 255), 100);


		textSize(12 * s);
		text("RANDOM", s, 600 + s);
		fill(random(0, 255), random(0, 255), random(0, 255), 100);


	}

}
