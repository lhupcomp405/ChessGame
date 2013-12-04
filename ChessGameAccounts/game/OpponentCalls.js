/**
 * OpponentCalls.js
 * Language: Javascript
 * Author: Dan Ford
 * Description: Contains callStalemate(), callCheck(), checkMate(), and concede() functions
 */
/* DOES NOT FUNCTION CORRECTLY YET
 *
 */
function requestedResponse() {
	//unhighlightMoves();
        if (player === 1) {
            currentPlayer = 'B';
            player = 2;
            document.getElementById('playersMove').innerHTML = "BLACK'S MOVE";
        } else {
            player = 1;
            currentPlayer = 'W';
            document.getElementById('playersMove').innerHTML = "WHITE'S MOVE";
        }
        lockout = false;
        unhighlightMoves();
        selected = false;
        selectedID = "";
        endLoc = 0;
        recordBoard();
		showAlert = true;
  //  recordBoard();
}

/* DOES NOT FUNCTION CORRECTLY YET
 *
 */
function opponentRequestedResponse(character) {
	if (showAlert) {
		if (character === "S0") {
			opponentCalledStalemate();
		} else if (character === "M0") {
			opponentCalledCheckMate();
		} else if (character === "RR") {
			opponentConceded();
		} else if (character === "CC") {
			opponentCalledCheck();
		} else if (character === "S1") {
			tied();
		} else if (character === "S2") {
			alert("Sorry, the opponent denied your stalemate.");
			showAlert = false;
		} else if (character === "M1") {
			youWon();
		} else if (character === "M2") {
			alert("Sorry, the opponent denied your checkmate.");
			showAlert = false;
		} else {
			alert("It didn't work Scotty.");
		}
	}
}
 
/* Called when you press Call Stalemate button
 *	   - brings up confirmation box for player to agree to stalemate
 * DOES NOT FUNCTION CORRECTLY YET
 */
function opponentCalledStalemate() {
    var resp = confirm("Your opponent has called a stalemate. Would you like to end the match?");
    if (resp) {
		moveTypeChar = "S1";
		requestedResponse();
		gameOver = true;
        alert("The match has ended in a draw.");
		showAlert = false;
		//stub to send you to endgame page
		window.open("EndGame.php?outcome='D'&player=" + playerScreen,"_self");
    } else {
		moveTypeChar = "S2";
		requestedResponse();
		gameOver = false;
		showAlert = false;
	}
}

/* Called when you press Call Check button
 *	   - brings up alert box notifying player they are in check
 * DOES NOT FUNCTION CORRECTLY YET
 */
function opponentCalledCheck() {
    alert("Your opponent has called check.");
	showAlert = false;
}

/* Called when you press Call Checkmate button
 *	   - brings up confirmation box for player to agree to checkmate
 * DOES NOT FUNCTION CORRECTLY YET
 */
function opponentCalledCheckMate() {
    var resp = confirm("Your opponent has called checkmate. Do you agree?");
    if (resp) {
        //If player says yes
		moveTypeChar = "M1";
		requestedResponse();
		gameOver = true;
		alert("You have lost.");
		showAlert = false;
		//stub to send you to endgame page
		window.open("EndGame.php?outcome='L'&player=" + playerScreen,"_self");
    } else {
		//else player disagrees
		moveTypeChar = "M2";
		showAlert = false;
	}
}

/* Called when you press Concede button
 *	   - brings up confirmation box for player to concede to opponent
 */
function opponentConceded() {
	gameOver = true;
    alert("Your opponent has ended the match.");
	showAlert = false;
	//stub to send you to endgame page
	window.open("EndGame.php?outcome='W'&player=" + playerScreen,"_self");
}

function tied() {
	gameOver = true;
	alert("Your opponent has agreed to a stalemate.");
	showAlert = false;
	//stub to send you to endgame page
	window.open("EndGame.php?outcome='D'&player=" + playerScreen,"_self");
}

function youWon() {
	gameOver = true;
	alert("Congratulations, you won!");
	showAlert = false;
	//stub to send you to endgame page
	window.open("EndGame.php?outcome='W'&player=" + playerScreen,"_self");
}