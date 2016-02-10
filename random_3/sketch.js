// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(1400, 850);
	//noLoop();
}


function draw() {
	// clear the background
	background(0, 0, 0);
	stroke(255, 255, 255);



	var r = random(-500, 500);

	var a = 0.0;
	var inc = TWO_PI / 125.0;
	for (var i = 0; i < 25; i++) {
		line(i * 40 * r, 50, i * 400, 250 + sin(a) * 500.0);
		a = a + inc * r;
	}



}
