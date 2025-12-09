var slider;
var button;
function setup(){
	createCanvas(windowWidth*0.9, windowHeight*0.8);
	slider = createSlider(1,500, 250); //minimum value, maximum , stating value
	bgcolor = color(20);
	button = createButton('change background color');
	button.mousePressed(changeColor);
	button = createButton('stop');
	button.mousePressed(stop);
}

function draw(){
	var x = width / 2;
	var y = height / 2;
	background(bgcolor);
	fill(255);
	circle(x, y, slider.value());
}

function changeColor() {
	bgcolor = color(random(255));
	let colorIndex = 0;
	let colorInterval = setInterval(() => {
		let colors = [];
		for (let i = 0; i < 5; i++) {
			colors.push(color(
				sin(frameCount * 0.01 + i) * 127 + 128,
				sin(frameCount * 0.02 + i) * 127 + 128,
				sin(frameCount * 0.03 + i) * 127 + 128
			));
		}
		bgcolor = colors[colorIndex % colors.length];
		colorIndex++;
	}, 200);
}

function stop() {
stop
}

function mousePressed() {
	currentScheme = (currentScheme + 1) % colorSchemes.length;
	generateShapes();
}
