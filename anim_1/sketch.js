// basic template sketch showing how to use the Turtle class
var myTurtle;
var TURN_ANGLE = 1;

function setup() {
	createCanvas(2000, 2000);
	// pixelDensity(1); // disable high-res mode on retina displays
	frameRate(10);
	myTurtle = new Turtle();
}



function draw() {
	myTurtle.moveTo(1000, 1000);
	myTurtle.turnTo(0);

	background(0);
	stroke(255);
	TURN_ANGLE = frameCount;
	// TURN_ANGLE = TURN_ANGLE * .2;

	for (var a = 0; a < 280; a++) {
		for (var i = 0; i < 280; i++) {
			myTurtle.moveForward(15);
			myTurtle.turnRight((TURN_ANGLE + i) * TURN_ANGLE);
			stroke(255);
		}
	}



	if (frameCount < 150) {
		saveFrame("frame", frameCount);
	} else {
		noLoop();
	}
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
function saveFrame(name, frameNumber) {
	// remove the decimal part (just in case)
	frameNumber = floor(frameNumber);
	// zero-pad the number (e.g. 13 -> 0013);
	var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

	save(name + "_" + paddedNumber);
}
