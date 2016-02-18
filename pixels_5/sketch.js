//variables

var inputImage;

function setup() {
	// create a place to draw
	createCanvas(250, 375);
	//noLoop();
}

function preload() {
	inputImage = loadImage("assets/image3.jpg");
}

function draw() {
	// clear the background
	background(0, 0, 0);

	var r = random(55, 115);
	var s = random(125, 225);

	inputImage.loadPixels();
	for (x = 0; x < 250; x++) {
		if (x > r && x < s) {
			continue;
		}
		console.log(x);
		for (y = 0; y < 375; y++) {

			var redIn = inputImage.pixels[(y * 400 + x) * 4 + 0];
			var greenIn = inputImage.pixels[(y * 400 + x) * 4 + 1];
			var blueIn = inputImage.pixels[(y * 400 + x) * 4 + 2];

			var redOut, greenOut, blueOut;

			inputImage.pixels[(y * 400 + x) * 4 + 0] = redOut;
			inputImage.pixels[(y * 400 + x) * 4 + 1] = greenOut;
			inputImage.pixels[(y * 400 + x) * 4 + 2] = blueOut;


			redOut = blueIn;
			blueOut = greenIn;
			greenOut = redIn;

			inputImage.updatePixels();


		}
	}



	image(inputImage, 0, 0, 250, 375);

}
