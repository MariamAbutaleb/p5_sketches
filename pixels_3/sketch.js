//variables

var inputImage;


function preload() {
	inputImage = loadImage("assets/image.jpg");
}


function setup() {
	// create a place to draw
	createCanvas(640, 360);
	//noLoop();
}


function draw() {
	// clear the background
	background(0, 0, 0);

	var r = random(-3, 3);

	inputImage.loadPixels();
	for (x = 0; x < 450; x++) {
		console.log(x);
		for (y = 0; y < 600; y++) {

			var redIn = inputImage.pixels[(y * 640 + x) * 4 + 0];
			var greenIn = inputImage.pixels[(y * 640 + x) * 4 + 1];
			var blueIn = inputImage.pixels[(y * 640 + x) * 4 + 2];

			var redOut, blueOut, greenOut;


			// choose random position for the sample

			var x2 = x + 4;
			var y2 = y - 4;



			// use the color from the random position
			redOut = inputImage.pixels[(x2 * 640 + y2) * 4 + 0];
			greenOut = inputImage.pixels[(x2 * 640 + y) * 4 + 1];
			blueOut = inputImage.pixels[(x2 * 640 + y2) * 4 + 2];


			inputImage.pixels[(y * 640 + x) * 4 + 0] = redOut;
			inputImage.pixels[(y * 640 + x) * 4 + 1] = greenOut;
			inputImage.pixels[(y * 640 + x2) * 4 + 2] = blueOut;

		}
	}

	inputImage.updatePixels();
	image(inputImage, 0, 0, 640, 360);
}
