// Generate random color
// //  RBG 0-255
// Apply to dom
// update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);
const createColor = () => {
	const red = generateColorValue();
	const green = generateColorValue();
	const blue = generateColorValue();
	return `rgb(${red}, ${green}, ${blue})`
}

const applyColorToBody = color => {
	document.body.style.backgroundColor = color;
}

const addRandomtoBackground = () => {
	const color = createColor();
	return applyColorToBody(color);
}

addRandomtoBackground();

const newColors = document.getElementById("new-colors");
newColors.addEventListener("click", addRandomtoBackground)

// Set Interval vs Set Timeout

// const log = () => console.log("is in timeout");
// setTimeout(log, 1000);
// setTimeout(addRandomtoBackground, 5000);
// Set Timeout happens once

const interval = setInterval(addRandomtoBackground, 2000);
//Set Interval, happens over and over

newColors.addEventListener("click", () => clearInterval(interval));