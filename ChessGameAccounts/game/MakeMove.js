/**
 * MakeMove.js
 * Language: Javascript
 * Author: Dan Ford
 * Description: Contains makeMove(), resetMove(), and update() functions
 */
/* Activated by clicking Make Move button.
 *    -Adds endLoc piece to appropriate taken column
 *    -Sets starting space to blank, and endLoc to selectedID
 *    -Sends move counter {moveNumber}, piece's name {endLoc.alt},
 *        and move's ending location {endLocParent} to database
 *    -Changes current player
 *    -Clears board highlighting and removes move lockout
 */
function makeMove() {
    var fallenKing = 0; //used to see if king was taken
    if (selected && endLoc !== 0 && !gameOver) { //checks to make sure that you selected a move before allowing move to run
        if (endLoc.parentNode.parentNode.parentNode.style.backgroundColor !== endLoc.parentNode.style.backgroundColor) { //checks to see if you clicked on a highlighted space
            if (endLoc.alt.indexOf("Blank") === -1 && endLoc.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1) {
                document.getElementById("takenWhite").innerHTML += "<img src='" + endLoc.src + "' class='icon'></img>" + "\n";
				takenString += endLoc.src;
				if (endLoc.alt.indexOf("King") !== -1) {
					fallenKing = 1;
				}
            } else if (endLoc.alt.indexOf("Blank") === -1 && endLoc.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1) {
                document.getElementById("takenBlack").innerHTML += "<img src='" + endLoc.src + "' class='icon'></img>" + "\n";
				takenString += endLoc.src;
				if (endLoc.alt.indexOf("King") !== -1) {
					fallenKing = 1;
				}
			}
            if (selectedID.alt.indexOf("White") !== -1) {
                endLoc.alt = 'White';
            } else {
                endLoc.alt = 'Black';
            }
            if (selectedID.alt.indexOf("King") !== -1) {
                endLoc.alt += "King";
            } else if (selectedID.alt.indexOf("Queen") !== -1) {
                endLoc.alt += "Queen";
            } else if (selectedID.alt.indexOf("Bishop") !== -1) {
                endLoc.alt += "Bishop";
            } else if (selectedID.alt.indexOf("Knight") !== -1) {
                endLoc.alt += "Knight";
            } else if (selectedID.alt.indexOf("Rook") !== -1) {
                endLoc.alt += "Rook";
            } else if (selectedID.alt.indexOf("Pawn") !== -1) {
                endLoc.alt += "Pawn";
            }
            endLoc.src = endLoc.alt + '.png';
            selectedID.id = 'Blank';
            selectedID.alt = 'Blank';
            selectedID.src = 'Blank.png';
            endLocParent = endLoc.parentNode.value;
        }
        moveNumber++;
        //alert("MoveNumber: " + moveNumber + " Piece: " + endLoc.alt + " EndLocation: " + endLocParent);  //holds all the information to be sent to the database

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
		if (fallenKing === 1) {
			moveTypeChar = "KT";
			requestedResponse();
			alert("You have won!");
			showAlert = false;
			//stub to send you to endgame page
			$.post("updateWin.php", {user:username}, function(){});
			window.open("EndGame.php?outcome='W'&player=" + playerScreen,"_self");
		} else {
			recordBoard();		
		}
		showAlert = true;
    }
}

/* Activated by clicking Reset Move button.
 *    -Clears board highlighting and removes move lockout
 *        without making any move
 */
function resetMove() {
    selected = false;
    selectedID = "";
    lockout = false;
    endLoc = 0;
    unhighlightMoves();
}