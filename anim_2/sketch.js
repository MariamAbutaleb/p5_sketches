// basic template sketch showing how to use the Turtle class
var myTurtle;
var TURN_ANGLE = 1;

function setup() {
	createCanvas(1200, 1200);
	// pixelDensity(1); // disable high-res mode on retina displays
	frameRate(10);
	myTurtle = new Turtle();
}



function draw() {
	myTurtle.moveTo(600, 600);
	myTurtle.turnTo(0);

	background(0);
	stroke(255);

	TURN_ANGLE = frameCount;
	TURN_ANGLE = TURN_ANGLE * 0.7;


	for (var i = 0; i < 500; i++) {
		stroke(255, 255, 255, 3);
		strokeWeight(50);
		myTurtle.moveForward(5 + i * 0.6);
		myTurtle.turnLeft(frameCount);
		drawSquare();

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


function drawSquare() {
	myTurtle.pushState();

	for (var i = 0; i < 10; i++) {
		myTurtle.moveForward(50);
		myTurtle.turnRight(90);
	}

	myTurtle.popState();
}
