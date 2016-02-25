// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(2300, 2000);
	noFill();
	noStroke();
	background(50);
	noLoop();
	//blendMode(OVERLAY);

	myTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)

	for (var s = 0; s < 7; s++) {
		myTurtle.penUp();
		myTurtle.moveBackward(200);
		myTurtle.turnLeft(90);
		myTurtle.penDown();


		for (var i = 0; i < 500; i++) {
			myTurtle.moveForward(5 + i * 0.6);
			myTurtle.turnLeft(random(0, 120));
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
