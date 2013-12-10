/**
 * MouseEvents.js
 * Language: Javascript
 * Author: Dan Ford
 * Description: Contains changeParentCellColor(int piece, string color), getParentCellColor(int piece),
 * 					onMouseOver(int piece), onMouseOut(int piece), onMouseClick(int piece), callStalemate(),
 *					callCheck(), checkMate(), and concede() functions
 */
/* Called by onMouseOver(), onMouseOut(), and onMouseClick()
 *	   - (int) piece = location of piece clicked/scrolled over
 *	   - (string) color = color in Hex
 *	   - changes the color of "piece" parent cell to the "color" specified
 */
function changeParentCellColor(piece, color) {
    piece.parentNode.parentNode.parentNode.style.backgroundColor = color;
}

/* Called by onMouseClick()
 *	   - (int) piece = location of piece selected
 *	   - returns the color of "piece" parent cell
 */
function getParentCellColor(piece) {
    var parentCellColor = piece.parentNode.parentNode.parentNode.style.backgroundColor;
    return parentCellColor;
}

/* Called when user scrolls over a piece's image
 *	   - (int) piece = location of piece scrolled over
 *	   - changes the color of cell if movable
 */
function onMouseOver(piece) {
    if (playerScreen == player && !gameOver) { //if it is your turn
        if (player === 1) {
            if (!selected && piece.alt.indexOf("Blank") === -1 && piece.alt.indexOf("Black") === -1) {
                changeParentCellColor(piece, "#5CF266");
            }
        } else if (player === 2) {
            if (!selected && piece.alt.indexOf("Blank") === -1 && piece.alt.indexOf("White") === -1) {
                changeParentCellColor(piece, "#5CF266");
            }
        }
    } else {
        lockout = true;
    }
}

/* Called when user scrolls off a piece's image
 *	   - (int) piece = location of piece scrolled over
 *	   - changes the color of cell back to original black or white
 */
function onMouseOut(piece) {
    if (!selected && !gameOver) {
        changeParentCellColor(piece, piece.parentNode.style.backgroundColor);
    }
}

/* Called when user clicks on a piece's image
 *	   - (int) piece = location of piece selected
 *	   - triggers highlightMoves() if you selected one of your pieces
 *	   - deselects your piece if you click on your piece again after selecting it
 *	   - highlights endLoc as blue if it is a possible move, locks out other moves, and highlights button options
 *	   - highlights makeMove(), resetMove(), callCheck(), and callCheckMate() buttons
 */
function onMouseClick(piece) {
    if (selected === false && piece.alt.indexOf("Blank") === -1 && !lockout && !gameOver) { //if you click on a non-blank space, haven't selected a piece yet, and are not locked out
        if (player === 1 && piece.alt.indexOf("White") !== -1) { //if selected piece matches current player's color
            changeParentCellColor(piece, "#5CF266");
            selected = true;
            selectedID = piece;
            highlightMoves();
        } else if (player === 2 && piece.alt.indexOf("Black") !== -1 && !gameOver) { //if selected piece matches current player's color
            changeParentCellColor(piece, "#5CF266");
            selected = true;
            selectedID = piece;
            highlightMoves();
        }
    } else if (piece === selectedID && selected === true && !lockout && !gameOver) { //if you click a second time on your previously selected piece
        piece.parentNode.style.backgroundColor = piece.style.backgroundColor;
        selected = false;
        selectedID = "";
        unhighlightMoves();
    } else if (piece !== selectedID && selected === true && !lockout && getParentCellColor(piece) !== piece.parentNode.style.backgroundColor && !gameOver) {
        endLoc = piece;
        changeParentCellColor(piece, "#0000FF");

        lockout = true;
        document.getElementById("resetMove").style.backgroundColor = "#0000FF";
        document.getElementById("makeMove").style.backgroundColor = "#0000FF";
        document.getElementById("checkMate").style.backgroundColor = "#0000FF";
        document.getElementById("check").style.backgroundColor = "#0000FF";
    }
}

/* Called when you press Call Stalemate button
 *	   - brings up confirmation box for opponent player to agree to stalemate
 *
 */
function callStalemate() {
	if (!gameOver && playerScreen == player) {
		moveTypeChar = "S0";
		requestedResponse();
	}
}

/* Called when you press Call Check button
 *	   - brings up alert box notifying opponent player they are in check
 */
function callCheck() {
	if (!gameOver && playerScreen == player) {
		moveTypeChar = "CC";
		makeMove();
	}
}

/* Called when you press Call Checkmate button
 *	   - brings up confirmation box for opponent player to agree to checkmate
 */
function checkMate() {
	if (!gameOver && playerScreen == player) {
		moveTypeChar = "M0";
		makeMove();
	}
}

/* Called when you press Concede button
 *	   - brings up confirmation box for player to concede to opponent
 */
function concede() {
	if (!gameOver) {
		var resp = confirm("Are you sure you want to end the match?");
		if (resp) {
			moveTypeChar = "RR";
			requestedResponse();
			alert("You have conceded to the opponent.");
			showAlert = false;
			//stub to send you to endgame page
			window.open("EndGame.php?outcome='L'&player=" + playerScreen,"_self");
		} else {
			unhighlightMoves();
		}
	}
}