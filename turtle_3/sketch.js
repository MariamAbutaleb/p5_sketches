// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(1500, 1200);
	noFill();
	stroke(255);
	background(50);
	//noLoop();

	myTurtle = new Turtle();

}


function draw() {


	for (var i = 0; i < 180; i++) {
		myTurtle.penUp();
		myTurtle.turnRight(random(0, 180));
		myTurtle.penDown();
		drawTriangle(140);

	}



}



function drawTriangle(angle) {

	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.turnLeft(60);
	myTurtle.penDown();

	for (var i2 = 0; i2 < 3; i2++) {
		myTurtle.moveForward(10 + i2 * 10);
		myTurtle.turnRight(angle);
	}

}


function drawTriangle2() {
	myTurtle.pushState();
	myTurtle.turnLeft(25);
	drawTriangle2(angle);
	myTurtle.popState();

	myTurtle.pushState();
	myTurtle.turnRight(25);
	drawTriangle2(angle);
	myTurtle.popState();
}
