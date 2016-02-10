 function setup() {
 	createCanvas(windowWidth, windowHeight);
 	noLoop();

 }

 function draw() {

 	background(0, 0, 0);

 	for (var i = 0; i < 10000; i++) {

 		var r = random(0, 100);
 		var b = random(0, 500);
 		var c = random(0, 800);

 		arc(pmouseX + i * r, pmouseY * r, 50 + b, 50 + c, HALF_PI * r, PI * r);

 		stroke(156 + c, 23 + r * 2, 251 / 2 + b);
 		strokeWeight(3);
 		noFill();
 		blendMode(DIFFERENCE);
 	}
 }
