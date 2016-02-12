//variables

var inputImage;

function preload() {
	inputImage = loadImage("assets/liquid_colors.jpg");
}


function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noLoop();

}


function draw() {
	// clear the background
	background(0, 0, 0);

	inputImage.loadPixels();
	for (x = 320; x < 640; x++) {
		console.log(x);
		for (y = 0; y < 360; y++) {
			var redIn = inputImage.pixels[(y * 640 + x) * 4 + 0];
			var greenIn = inputImage.pixels[(y * 640 + x) * 4 + 1];
			var blueIn = inputImage.pixels[(y * 640 + x) * 4 + 2];

			var redOut, greenOut, blueOut;

			inputImage.pixels[(y * 640 + x) * 4 + 0] = redOut;
			inputImage.pixels[(y * 640 + x) * 4 + 1] = greenOut;
			inputImage.pixels[(y * 640 + x) * 4 + 2] = blueOut;


			redOut = blueIn;
			blueOut = greenIn;
			greenOut = redIn;

			inputImage.updatePixels();

			image(inputImage, 0, 0, 640, 360);

		}
	}


}
