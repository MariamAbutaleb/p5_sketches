// shows how to use the p5.svg.js library to export a p5 drawing as svg

// requires p5.svg.js v0.5.2 and  p5.js v0.4.13
// https://github.com/zenozeng/p5.js-svg/releases
// https://github.com/processing/p5.js/releases

var myTurtle;

function setup() {
	// create a place to draw use "SVG" to activate the SVG p5 plugin
	createCanvas(30 * 72, 30 * 72, SVG); //72px = 1inch
	noLoop();
	noFill();
	stroke(100);
	background(50);
	strokeWeight(3);

	// use p5.dom.js to create a button and set it up to call "save()"
	var button = createButton("Save SVG");
	button.mousePressed(function() {
		save();
	});

	myTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)

	for (var s = 0; s < 15; s++) {
		myTurtle.penUp();
		myTurtle.moveBackward(200);
		myTurtle.turnLeft(90);
		myTurtle.penDown();


		for (var i = 0; i < 40; i++) {
			myTurtle.moveForward(i * 0.2);
			myTurtle.turnLeft(i * 10);
			drawSquare();
			stroke(255);

		}
	}

	// for (var i2 = 0; i2 < 20; i2++) {
	// 	myTurtle.moveForward(5 + i2 * 0.5);
	// 	myTurtle.turnLeft(30);
	// 	drawSquare();
	// 	stroke(163, 0, 204);
	//
	// }



}


function drawSquare() {
	myTurtle.pushState();

	for (var i = 0; i < 10; i++) {
		myTurtle.moveForward(50);
		myTurtle.turnRight(90);
	}

	myTurtle.popState();
}
