/**
 * EndGameFunctions.js
 * Language: Javascript
 * Author: Dan Ford
 * Description: Contains determineOutcome() function
 */

var player, //player's color
	outcome; //contains whether the match ended in win, loss, draw, or conceded

function determineOutcome() {
	if (outcome === "W") {
		if (player === 1) {
			document.getElementById("white").innerHTML = "WINNER";
			document.getElementById("black").innerHTML = "LOSER";
		} else {
			document.getElementById("black").innerHTML = "WINNER";
			document.getElementById("white").innerHTML = "LOSER";
		}
	} else if (outcome === "L") {
		if (player === 2) {
			document.getElementById("white").innerHTML = "WINNER";
			document.getElementById("black").innerHTML = "LOSER";
		} else {
			document.getElementById("black").innerHTML = "WINNER";
			document.getElementById("white").innerHTML = "LOSER";
		}
	} else if (outcome === "D") {
		document.getElementById("black").innerHTML = "DRAW";
		document.getElementById("white").innerHTML = "DRAW";
	}
}

function returnHomepage() {
	window.open("../ChessGameAccountPage.html");
}