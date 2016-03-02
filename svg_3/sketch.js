// shows how to use the p5.svg.js library to export a p5 drawing as svg

// requires p5.svg.js v0.5.2 and  p5.js v0.4.13
// https://github.com/zenozeng/p5.js-svg/releases
// https://github.com/processing/p5.js/releases

var myTurtle;
var size;
var opacity;

function setup() {
	// create a place to draw use "SVG" to activate the SVG p5 plugin
	w = 1080;
	h = 1920;
	createCanvas(w, h, SVG); //72px = 1inch
	noLoop();
	noFill();
	background(50);


	// use p5.dom.js to create a button and set it up to call "save()"
	var button = createButton("Save SVG");
	button.mousePressed(function() {
		save();
	});

	myTurtle = new Turtle();
	size = 180;
	opacity = 50;
}



function draw() {
	// // move to starting position (without drawing)
	stroke(255, 255, 255, opacity);
	drawPendedecagon(0, 0);
	// stroke(255, 255, 255, opacity);
	// drawDodecagon(0, 0);
	// stroke(255, 255, 255, opacity);
	// drawDecagon(0, 0);
	stroke(255, 255, 255, opacity);
	drawNonagon(0, 0);
	// stroke(255, 255, 255, opacity);
	// drawOctagon(0, 0);
	// stroke(255, 255, 255, opacity);
	// drawHexagon(0, 0);
	stroke(255, 255, 255, opacity);
	drawPentagon(0, 0);
	// stroke(255, 255, 255, opacity);
	// drawSquare(0, 0);
	stroke(255, 255, 255, opacity);
	drawTriangle(0, 0);

}

function drawDodecagon(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 12; i++) {
		myTurtle.turnRight(30);
		myTurtle.moveForward(lineLength);
	}

	drawDodecagon(startAngle + 1, lineLength + 1);

}

function drawDecagon(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 10; i++) {
		myTurtle.turnRight(36);
		myTurtle.moveForward(lineLength);
	}

	drawDecagon(startAngle + 1, lineLength + 1);

}

function drawNonagon(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 9; i++) {
		myTurtle.turnRight(40);
		myTurtle.moveForward(lineLength);
	}

	drawNonagon(startAngle + 1, lineLength + 1);

}

function drawOctagon(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 8; i++) {
		myTurtle.turnRight(45);
		myTurtle.moveForward(lineLength);
	}

	drawOctagon(startAngle + 1, lineLength + 1);

}

function drawHexagon(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 6; i++) {
		myTurtle.turnRight(60);
		myTurtle.moveForward(lineLength);
	}

	drawHexagon(startAngle + 1, lineLength + 1);

}

function drawPentagon(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 5; i++) {
		myTurtle.turnRight(72);
		myTurtle.moveForward(lineLength);
	}

	drawPentagon(startAngle + 1, lineLength + 1);

}


function drawSquare(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 4; i++) {
		myTurtle.turnRight(90);
		myTurtle.moveForward(lineLength);
	}

	drawSquare(startAngle + 1, lineLength + 1);

}

function drawTriangle(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 3; i++) {
		myTurtle.turnRight(120);
		myTurtle.moveForward(lineLength);
	}

	drawTriangle(startAngle + 1, lineLength + 1);

}

function drawPendedecagon(startAngle, lineLength) {

	myTurtle.penUp();
	myTurtle.moveTo(w * 0.5, h * 0.5);
	myTurtle.penDown();

	if (lineLength > size) {
		return;
	}

	myTurtle.turnTo(startAngle);

	for (i = 0; i < 15; i++) {
		myTurtle.turnRight(24);
		myTurtle.moveForward(lineLength);
	}

	drawPendedecagon(startAngle + 1, lineLength + 1);
}
