/**
 * RecordBoard.js
 * Language: Javascript
 * Author: Dan Ford
 * Description: Contains recordBoard(), updateBoard(), draw(string str), updateDatabase(), and convertChar(string str) functions
 */
/* Called from makeMove()
 * 		- Sets first char as the color who moved this turn
 *		- Then records entire board as a (string) boardString
 *			XX = blank
 *			First char of each piece signifies piece color
 *				B = Black, W = White
 *			Second char of each piece signifies piece type
 *				B = Bishop		Q = Queen
 *				R = Rook		P = Pawn
 *				N = Knight		K = King
 *		- Pieces are divided by a single space
 */
function recordBoard() {
    var currentRow = 0,
        currentColumn = 0,
        currentCell;
/*
    if (player === 1) {
        boardString = "W ";
    } else {
        boardString = "B ";
    } 
*/
	boardString = currentPlayer + " ";
	
	boardString += moveTypeChar + " ";

    for (currentRow = 1; currentRow < 9; currentRow++) {
        for (currentColumn = 1; currentColumn < 9; currentColumn++) {
            currentCell = Number(currentRow) * 10 + Number(currentColumn);
            if (document.getElementById(currentCell).children[0].alt.indexOf("Blank") === -1) {
                if (document.getElementById(currentCell).children[0].alt.indexOf("Black") !== -1) {
                    boardString += "B";
                } else if (document.getElementById(currentCell).children[0].alt.indexOf("White") !== -1) {
                    boardString += "W";
                }
                if (document.getElementById(currentCell).children[0].alt.indexOf("Rook") !== -1) {
                    boardString += "R ";
                } else if (document.getElementById(currentCell).children[0].alt.indexOf("Knight") !== -1) {
                    boardString += "N ";
                } else if (document.getElementById(currentCell).children[0].alt.indexOf("Bishop") !== -1) {
                    boardString += "B ";
                } else if (document.getElementById(currentCell).children[0].alt.indexOf("King") !== -1) {
                    boardString += "K ";
                } else if (document.getElementById(currentCell).children[0].alt.indexOf("Queen") !== -1) {
                    boardString += "Q ";
                } else if (document.getElementById(currentCell).children[0].alt.indexOf("Pawn") !== -1) {
                    boardString += "P ";
                }
            } else {
                boardString += "XX ";
            }
        }
    }
	moveTypeChar = "XX"; //resets moveTypeChar to normal move
	showAlert = true;
    updateDatabase();
}

//Stub to call updateBoard()
function update() {
    updateBoard();
}

/* Called from update() stub
 * 		- checks (string) currentPlayer against the first char of the (string) boardstring
 *		- If same, does nothing
 *		- Else different, sets opponentBoardString to boardstring, and calls draw(string str) function
 */
function updateBoard() {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            draw(xmlhttp.responseText);
        }
    }
    xmlhttp.open("POST", "http://localhost:8080/GUISample2/updateBoard.php?cp=" + currentPlayer, true);
    xmlhttp.send();
}

/* Called by updateBoard()
 * 		- Splits (string) opponentBoardString at each " " into (array) boardShort[]
 *		- boardShort[spaces] = (int) spaces is index to call each piece into correct location
 *		- Calls convertChar(string str) to change BB format to BlackBishop format
 *		- Changes innerHTML of header in HTML to update current player's turn
 */
function draw(str) {
    var spaces = 2,
        currentCell,
        spaceName,
        boardShort;
    opponentBoardString = str;
    boardShort = opponentBoardString.split(" ");

    for (var i = 1; i < 9; i++) {
        for (var o = 1; o < 9; o++) {
            currentCell = i * 10 + o;
            spaceName = convertChar(boardShort[spaces]);
            document.getElementById(currentCell).children[0].src = spaceName + ".png";
            document.getElementById(currentCell).children[0].alt = spaceName;
            spaces++;
        }
    }
    currentPlayer == boardShort[0];
    if (boardShort[0] == "W") {
        player = 1;
        document.getElementById('playersMove').innerHTML = "WHITE'S MOVE";
    } else if (boardShort[0] == "B") {
        player = 2;
        document.getElementById('playersMove').innerHTML = "BLACK'S MOVE";
    }
	var opponentMoveTypeChar = boardShort[1];
	if (opponentMoveTypeChar !== "XX") {
		opponentRequestedResponse(opponentMoveTypeChar);
	}
	checkForTaken();
    if (playerScreen == player) {
        lockout = false;
    }
}

/* Called in draw(string str)
 * 		- Sets colour to first char from (string) str
 *		- Sets currentPiece to second char from (string) str
 *		- Converts (string) str from BB format to BlackBishop format
 *		- Returns (string) pieceString
 */
function convertChar(str) {
    var colour = str.substr(0, 1),
        currentPiece = str.substr(1, 1),
        pieceString = "";
    if (colour == "W") {
        pieceString += "White";
    } else if (colour == "B") {
        pieceString += "Black";
    }
    if (currentPiece == "K") {
        pieceString += "King";
    } else if (currentPiece == "Q") {
        pieceString += "Queen";
    } else if (currentPiece == "N") {
        pieceString += "Knight";
    } else if (currentPiece == "R") {
        pieceString += "Rook";
    } else if (currentPiece == "B") {
        pieceString += "Bishop";
    } else if (currentPiece == "P") {
        pieceString += "Pawn";
    } else if (currentPiece == "X") {
        pieceString += "Blank";
    }
    return (pieceString);
}

/* Called in recordBoard()
 * 		- Sends (string) boardString to boardsting in database
 *		- If it runs properly, sets opponentBoardString to boardString
 */
function updateDatabase() {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            opponentBoardString = xmlhttp.responseText;
        }
    }
    xmlhttp.open("POST", "http://localhost:8080/GUISample2/updateDatabase.php?bs=" + boardString, true);
    xmlhttp.send();
}

function checkForTaken() {
	var BlackRook = 2,
		BlackKnight = 2,
		BlackBishop = 2,
		BlackQueen = 1,
		BlackPawn = 8,
		WhiteRook = 2,
		WhiteKnight = 2,
		WhiteBishop = 2,
		WhiteQueen = 1,
		WhitePawn = 8;
		
		document.getElementById("takenWhite").innerHTML = " ";
		document.getElementById("takenBlack").innerHTML = " ";
		
	for (var i = 1; i < 9; i++) {
        for (var o = 1; o < 9; o++) {
            currentCell = i * 10 + o;
            spaceName = document.getElementById(currentCell).children[0].alt;
			if (spaceName === "BlackRook") {
				BlackRook -= 1;
			} else if (spaceName === "BlackKnight") {
				BlackKnight -= 1;
			} else if (spaceName === "BlackBishop") {
				BlackBishop -= 1;
			} else if (spaceName === "BlackQueen") {
				BlackQueen -= 1;
			} else if (spaceName === "BlackPawn") {
				BlackPawn -= 1;
			} else if (spaceName === "WhiteRook") {
				WhiteRook -= 1;
			} else if (spaceName === "WhiteKnight") {
				WhiteKnight -= 1;
			} else if (spaceName === "WhiteBishop") {
				WhiteBishop -= 1;
			} else if (spaceName === "WhiteQueen") {
				WhiteQueen -= 1;
			} else if (spaceName === "WhitePawn") {
				WhitePawn -= 1;
			}
        }
    }
	for (var i = BlackQueen; i > 0; i--) {
		document.getElementById("takenBlack").innerHTML += "<img src='" + "BlackQueen.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = BlackBishop; i > 0; i--) {
		document.getElementById("takenBlack").innerHTML += "<img src='" + "BlackBishop.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = BlackRook; i > 0; i--) {
		document.getElementById("takenBlack").innerHTML += "<img src='" + "BlackRook.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = BlackKnight; i > 0; i--) {
		document.getElementById("takenBlack").innerHTML += "<img src='" + "BlackKnight.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = BlackPawn; i > 0; i--) {
		document.getElementById("takenBlack").innerHTML += "<img src='" + "BlackPawn.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = WhiteQueen; i > 0; i--) {
		document.getElementById("takenWhite").innerHTML += "<img src='" + "WhiteQueen.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = WhiteBishop; i > 0; i--) {
		document.getElementById("takenWhite").innerHTML += "<img src='" + "WhiteBishop.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = WhiteRook; i > 0; i--) {
		document.getElementById("takenWhite").innerHTML += "<img src='" + "WhiteRook.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = WhiteKnight; i > 0; i--) {
		document.getElementById("takenWhite").innerHTML += "<img src='" + "WhiteKnight.png" + "' class='icon'></img>" + "\n";
	}
	for (var i = WhitePawn; i > 0; i--) {
		document.getElementById("takenWhite").innerHTML += "<img src='" + "WhitePawn.png" + "' class='icon'></img>" + "\n";
	}
}