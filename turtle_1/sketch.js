// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(1200, 1200);
	noFill();
	stroke(255);
	background(50);
	//noLoop();

	myTurtle = new Turtle();

}



function draw() {

	// move to starting position (without drawing)
	for (var s = 0; s < 200; s++) {
		console.log(s);
		myTurtle.penUp();
		myTurtle.moveForward(200 + s);
		myTurtle.turnRight(random(0, 90));
		myTurtle.moveForward(s);
		myTurtle.penDown();

	}

	for (var a = 0; a < 180; a++) {
		for (var i = 0; i < 350; i++) {
			myTurtle.moveForward(10);
			myTurtle.turnRight(a + i);
			stroke(255);

		}
	}


}
