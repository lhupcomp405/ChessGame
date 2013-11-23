/**
 * Activated by clicking Make Move button.
 *    -Adds endLoc piece to appropriate taken column
 *    -Sets starting space to blank, and endLoc to selectedID
 *    -Sends move counter (moveNumber), piece's name (endLoc.alt), 
 *        and move's ending location (endLocParent) to database
 *    -Changes current player
 *    -Clears board highlighting and removes move lockout
 */
function makeMove() {
    if (endLoc.parentNode.parentNode.parentNode.style.backgroundColor !== endLoc.parentNode.style.backgroundColor) {
        if (endLoc.alt.indexOf("Blank") === -1 && endLoc.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1) {
            document.getElementById("takenWhite").innerHTML += "<img src='" + endLoc.src + "' class='icon'></img>" + "\n";
        } else if (endLoc.alt.indexOf("Blank") === -1 && endLoc.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1) {
            document.getElementById("takenBlack").innerHTML += "<img src='" + endLoc.src + "' class='icon'></img>" + "\n";
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
    alert("MoveNumber: " + moveNumber + " Piece: " + endLoc.alt + " EndLocation: " + endLocParent);
	
    if (player === 1) {
        player = 2;
    } else {
        player = 1;
    }
    lockout = false;
    unhighlightMoves();
    selected = false;
    selectedID = "";
    document.getElementById("resetMove").style.backgroundColor = document.getElementById("resetMove").parentNode.style.backgroundColor;
    document.getElementById("makeMove").style.backgroundColor = document.getElementById("makeMove").parentNode.style.backgroundColor;
}

/**
 * Activated by clicking Reset Move button.
 *    -Clears board highlighting and removes move lockout
 *        without making any move
 */
function resetMove() {
    selected = false;
    selectedID = "";
    lockout = false;
    unhighlightMoves();
    document.getElementById("resetMove").style.backgroundColor = document.getElementById("resetMove").parentNode.style.backgroundColor;
    document.getElementById("makeMove").style.backgroundColor = document.getElementById("makeMove").parentNode.style.backgroundColor;
}