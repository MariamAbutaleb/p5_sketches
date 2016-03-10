// basic template sketch showing how to use the Turtle class
var inputImage;

function preload() {
	inputImage = loadImage("assets/image1.jpg");
}

function setup() {
	createCanvas(400, 186);
	// pixelDensity(1); // disable high-res mode on retina displays
	frameRate(10);

}



function draw() {
	background(0, 0, 0);

	var r = random(55, 155);
	var s = random(155, 245);

	inputImage.loadPixels();
	for (x = 0; x < 400; x++) {
		if (x > r && x < s) {
			continue;
		}
		console.log(x);
		for (y = 0; y < 186; y++) {
			var redIn = inputImage.pixels[(y * 700 * frameCount + x) * 4 + 0];
			var greenIn = inputImage.pixels[(y * 500 * frameCount + x) * 4 + 1];
			var blueIn = inputImage.pixels[(y * 400 * frameCount + x) * 4 + 2];

			var redOut, greenOut, blueOut;

			inputImage.pixels[(y * 600 * frameCount + x) * 4 + 0] = redOut;
			inputImage.pixels[(y * 300 * frameCount + x) * 4 + 1] = greenOut;
			inputImage.pixels[(y * 400 * frameCount + x) * 4 + 2] = blueOut;


			redOut = blueIn * 2;
			blueOut = greenIn * 2;
			greenOut = redIn;

			inputImage.updatePixels();

			image(inputImage, 0, 0, 400, 186);

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
