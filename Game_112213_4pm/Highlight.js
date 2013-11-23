/**
 * Highlight.js
 * Language: Javascript
 * Author: Dan Ford
 * Description: Contains highlight(int x), highlightMoves(), and unhighlightMoves() functions
 */
/* Called from highlightMoves()
 * 		-Checks possible move location against board edges
 *		-If a blank space, highlights it blue; Else if an enemy piece, highlights it red
 *		- returns false if possible move hits a piece
 */
function highlight(x) { /* x is possibleMove location */
    if ((x % NEXTROW) > ROWSTART && (x % NEXTROW) < ROWEND && x > BOARDSTART && x < BOARDEND) {
        if (document.getElementById(x).children[0].alt.indexOf("Blank") !== -1) {
            document.getElementById("cell" + x).style.backgroundColor = "#5CF266";
        } else if (document.getElementById(x).children[0].alt.indexOf("Blank") === -1 && document.getElementById(x).children[0].alt.indexOf(otherColor) !== -1) {
            document.getElementById("cell" + x).style.backgroundColor = "#FF0000";
            return false;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/* Called from onMouseClick()
 * 		-Checks possibleMove location against board edges, based on piece type
 *		-Each direction breaks if possibleMove hits another piece
 */
function highlightMoves() {
    var piecePosition,
        move,
        possibleMove,
        breaker = true,
        piecePosition = selectedID.parentNode.value;
    /*
     * PAWN HIGHLIGHT MOVE LOGIC
     */
    if (selectedID.alt.indexOf("Pawn") !== -1) {
        piecePosition = selectedID.parentNode.value;
        //WHITE PAWN
        if (selectedID.alt.indexOf("White") !== -1) {
            otherColor = "Black";
            if (piecePosition > 70) {
                possibleMove = (Number(piecePosition) - NEXTROW);
                if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                    document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    possibleMove = (Number(piecePosition) - NEXTROW * 2);
                    if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                        document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    }
                }
            } else if (piecePosition < 70) {
                possibleMove = (Number(piecePosition) - NEXTROW);
                if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                    document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                }
            }
            possibleMove = (Number(piecePosition) - 11);
            if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1 && document.getElementById(possibleMove).children[0].alt.indexOf("Black") !== -1) {
                document.getElementById("cell" + possibleMove).style.backgroundColor = "#FF0000";
            }
            possibleMove = (Number(piecePosition) - 9);
            if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1 && document.getElementById(possibleMove).children[0].alt.indexOf("Black") !== -1) {
                document.getElementById("cell" + possibleMove).style.backgroundColor = "#FF0000";
            }
        }
        //BLACK PAWN
        if (selectedID.alt.indexOf("Black") !== -1) {
            otherColor = "White";
            if (piecePosition < 29) {
                possibleMove = (Number(piecePosition) + NEXTROW);
                if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                    document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    possibleMove = (Number(piecePosition) + NEXTROW * 2);
                    if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                        document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    }
                }
            } else if (piecePosition > 29) {
                possibleMove = (Number(piecePosition) + NEXTROW);
                if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                    document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                }
            }
            possibleMove = (Number(piecePosition) + 11);
            if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1 && document.getElementById(possibleMove).children[0].alt.indexOf("White") !== -1) {
                document.getElementById("cell" + possibleMove).style.backgroundColor = "#FF0000";
            }
            possibleMove = (Number(piecePosition) + 9);
            if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1 && document.getElementById(possibleMove).children[0].alt.indexOf("White") !== -1) {
                document.getElementById("cell" + possibleMove).style.backgroundColor = "#FF0000";
            }
        }
    }

    /*
     * QUEEN HIGHLIGHT MOVE LOGIC
     */
    else if (selectedID.alt.indexOf("Queen") !== -1) {
        //WHITE QUEEN
        if (selectedID.alt.indexOf("White") !== -1) {
            otherColor = "Black";
            //BLACK QUEEN
        } else {
            otherColor = "White";
        }
        //Move Up
        for (move = 10; move < 90; move += NEXTROW) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down
        for (move = 10; move < 90; move += NEXTROW) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Up-Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move + (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Up-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move + (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down-Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move - (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move - (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
    }

    /*
     * KING HIGHLIGHT MOVE LOGIC
     */
    else if (selectedID.alt.indexOf("King") !== -1) {
        //WHITE KING
        if (selectedID.alt.indexOf("White") !== -1) {
            otherColor = "Black";
            //BLACK KING
        } else {
            otherColor = "White";
        }
        //Move Up
        for (move = 10; move < 20; move += NEXTROW) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down
        for (move = 10; move < 20; move += NEXTROW) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Right
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Left
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Up-Left
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) - move + (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Up-Right
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) + move + (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down-Left
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) - move - (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down-Right
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) + move - (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
    }

    /*
     * KNIGHT HIGHLIGHT MOVE LOGIC
     */
    else if (selectedID.alt.indexOf("Knight") !== -1) {
        //WHITE KNIGHT
        if (selectedID.alt.indexOf("White") !== -1) {
            otherColor = "Black";
            //BLACK KNIGHT
        } else {
            otherColor = "White";
        }
        possibleMove = (piecePosition - 21);
        highlight(possibleMove);
        possibleMove = (piecePosition - 19);
        highlight(possibleMove);
        possibleMove = (piecePosition - 12);
        highlight(possibleMove);
        possibleMove = (piecePosition - 8);
        highlight(possibleMove);
        possibleMove = (Number(piecePosition) + 21);
        highlight(possibleMove);
        possibleMove = (Number(piecePosition) + 19);
        highlight(possibleMove);
        possibleMove = (Number(piecePosition) + 12);
        highlight(possibleMove);
        possibleMove = (Number(piecePosition) + 8);
        highlight(possibleMove);
    }

    /*
     * BISHOP HIGHLIGHT MOVE LOGIC
     */
    else if (selectedID.alt.indexOf("Bishop") !== -1) {
        //WHITE BISHOP
        if (selectedID.alt.indexOf("White") !== -1) {
            otherColor = "Black";
        } else {
            otherColor = "White";
        }
        //Move Up-Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move + (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Up-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move + (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down-Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move - (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move - (move * NEXTROW));
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
    }

    /*
     * ROOK HIGHLIGHT MOVE LOGIC
     */
    else if (selectedID.alt.indexOf("Rook") !== -1) {
        //WHITE ROOK
        if (selectedID.alt.indexOf("White") !== -1) {
            otherColor = "Black";
            //BLACK ROOK
        } else {
            otherColor = "White";
        }
        //Move Up
        for (move = 10; move < 90; move += NEXTROW) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Down
        for (move = 10; move < 90; move += NEXTROW) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
        //Move Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === false) {
                break;
            }
        }
    }
}

/* Called from onMouseClick()
 * 		-Checks possibleMove location against board edges, based on piece type
 *		-Each direction breaks if possibleMove hits another piece
 */
function unhighlightMoves() {
    var x, y, space;
    for (x = 10; x < 90; x += NEXTROW) {
        for (y = 1; y < 9; y++) {
            space = x + y;
            document.getElementById("cell" + space).style.backgroundColor = document.getElementById(space).style.backgroundColor;
        }
    }
    document.getElementById("resetMove").style.backgroundColor = document.getElementById("resetMove").parentNode.style.backgroundColor;
    document.getElementById("makeMove").style.backgroundColor = document.getElementById("makeMove").parentNode.style.backgroundColor;
    document.getElementById("check").style.backgroundColor = document.getElementById("check").parentNode.style.backgroundColor;
    document.getElementById("checkMate").style.backgroundColor = document.getElementById("checkMate").parentNode.style.backgroundColor;
}