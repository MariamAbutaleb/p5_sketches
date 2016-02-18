//variables

var inputImage;

function setup() {
	// create a place to draw
	createCanvas(400, 266);
	//noLoop();
}

function preload() {
	inputImage = loadImage("assets/image2.jpg");
}

function draw() {
	// clear the background
	background(0, 0, 0);

	var r = random(55, 155);
	var s = random(155, 245);

	inputImage.loadPixels();
	for (x = 0; x < 400; x++) {
		if (x > r && x < s) {
			continue;
		}
		console.log(x);
		for (y = 0; y < 266; y++) {

			var redIn = inputImage.pixels[(y * 400 + x) * 4 + 0];
			var greenIn = inputImage.pixels[(y * 400 + x) * 4 + 1];
			var blueIn = inputImage.pixels[(y * 400 + x) * 4 + 2];

			var redOut, greenOut, blueOut;

			inputImage.pixels[(y * 400 + x) * 4 + 0] = redOut;
			inputImage.pixels[(y * 400 + x) * 4 + 1] = greenOut;
			inputImage.pixels[(y * 400 + x) * 4 + 2] = blueOut;


			redOut = blueIn * 2;
			blueOut = greenIn * 2;
			greenOut = redIn;

			inputImage.updatePixels();


		}
	}



	image(inputImage, 0, 0, 400, 266);

}
