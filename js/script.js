/*Variables*/
var colores = [
	["#2ecc71", "#27ae60"],
  	 ["#1abc9c", "#16a085"],
  	 ["#e74c3c", "#c0392b"],
  	 ["#9b59b6", "#8e44ad"],
  	 ["#66cc66", "#17ad49"],
  	 ["#2A7E64", "#267359"],
  	 ["#4F82C4", "#6289CB"]
]

/*Funciones*/

function randomNum(e) {
	return Math.floor(((Math.random() * e.length) +1) - 1);
}

function randomBackgroundColor() {
	var ranNum = randomNum(colores);
	return colores[ranNum];
}

function randomTituloColor () {
	var ranNum = randomNum(colores);
	return colores[ranNum];
}

/*variables*/

var bodyColor = document.getElementById('body');
var botones = document.getElementById('botones');
var azul = document.getElementById('azul');
var rosa = document.getElementById('rosa');
var rojo = document.getElementById('rojo');
var text = document.getElementById('text');

/*funciones*/

azul.onclick = function () {
	var ranColor = randomBackgroundColor();
	bodyColor.style.backgroundColor = ranColor[0];
}

rosa.onclick = function () {
	var ranColor =	randomBackgroundColor();
	botones.style.backgroundColor = ranColor[0];
}

rojo.onclick = function () {
	var ranText = randomTituloColor();
	text.style.color = ranText[0];	
}