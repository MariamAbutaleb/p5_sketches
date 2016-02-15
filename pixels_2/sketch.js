//variables

var inputImage;

function preload() {
	inputImage = loadImage("assets/liquid_colors.jpg");
}


function setup() {
	// create a place to draw
	createCanvas(640, 360);
	//noLoop();

}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 0, 255);



	stroke(0, 200, 100, 80);

	inputImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 640; x++) {
		console.log(x);
		for (y = x; y < 360; y++) {
			var redIn = inputImage.pixels[(y * 640 + x) * 4 + 0];
			var greenIn = inputImage.pixels[(y * 640 + x) * 4 + 1];
			var blueIn = inputImage.pixels[(y * 640 + x) * 4 + 2];

			var redOut, blueOut, greenOut;

			//////////////////
			/// Demo 1: swap channels

			// redOut = blueIn;
			// blueOut = greenIn;
			// greenOut = redIn;


			//////////////////
			// Demo 2: pick output from randomly offset input sample
			// creats scatter effect
			// because we are modifying the image as we work, we will sometimes
			// sample a pixel we've already changed, it would be better
			// to read from one image and write out to a different one

			// choose random position for the sample
			var x2 = x * 2 + floor(random(-50, 51));
			var y2 = y * 0.5 + floor(random(-50, 51));

			// make sure we don't go outside the image
			x2 = clamp(x2, 0, 360);
			y2 = clamp(y2, 0, 360);

			// use the color from the random position
			redOut = inputImage.pixels[(y2 * 640 + x2) * 4 + 0];
			greenOut = inputImage.pixels[(y2 * 640 + x2) * 4 + 1];
			blueOut = inputImage.pixels[(y2 * 640 + x2) * 4 + 2];


			inputImage.pixels[(y * 640 + x) * 4 + 0] = redOut;
			inputImage.pixels[(y * 640 + x) * 4 + 1] = greenOut;
			inputImage.pixels[(y * 640 + x) * 4 + 2] = blueOut;
		}
	}
	inputImage.updatePixels();

	image(inputImage, 0, 0, 640, 360);


}

function clamp(v, low, high) {
	if (v < low) return low;
	if (v > high) return high;
	return v;

	//	v = max(v, low);
	//	v = min(v, high);
	//	return v;

}
