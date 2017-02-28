
var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorinfo");
var msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for (var i=0; i<modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			//ternary operation
			this.textContent == "Easy"? numberOfSquares = 3: numberOfSquares = 6;
			reset();	
		});
	}
}

function setupSquares(){
	for (var i=0; i<squares.length; i++){
		// add click listener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			console.log(clickedColor);
			console.log(pickedColor);
			//compare color to picked
			if (clickedColor == pickedColor){
				msgDisplay.textContent = "Correct!";
				resetBtn.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			}else{
				this.style.background = "#232323";
				msgDisplay.textContent = "Try Again!";
			}	
		});
	}
}

function reset(){
	// generate all new colors
	colors = generateRandomColor(numberOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	msgDisplay.textContent = "";
	// change colors of squares
	for (var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];			
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetBtn.addEventListener("click", function(){
	reset();
})

function changeColor(color){
	// loop through all squares
	// change each color to match given color
	for (var i=0; i<squares.length; i++){
		// change each color
		squares[i].style.background = color;
	}
}

function pickColor() {
	// body...
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = []
	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}