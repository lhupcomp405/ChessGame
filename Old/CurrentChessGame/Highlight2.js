function highlight(x) {
    if ((x % 10) > 0 && (x % 10) < 9 && x > 10 && x < 89) {
        if (document.getElementById(x).children[0].alt.indexOf("Blank") !== -1) {
            document.getElementById("cell" + x).style.backgroundColor = "#5CF266";
        } else if (document.getElementById(x).children[0].alt.indexOf("Blank") === -1 && document.getElementById(x).children[0].alt.indexOf(otherColor) !== -1) {
            document.getElementById("cell" + x).style.backgroundColor = "#FF0000";
            return -3;
        } else {
            return -3;
        }
    } else {
        return -3;
    }
}

function highlightMoves() {
    var piecePosition,
        move,
        possibleMove,
        breaker,
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
                possibleMove = (Number(piecePosition) - 10);
                if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                    document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    possibleMove = (Number(piecePosition) - 20);
                    if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                        document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    }
                }
            } else if (piecePosition < 70) {
                possibleMove = (Number(piecePosition) - 10);
                if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                    document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                }
            }
            possibleMove = (Number(piecePosition) - 11);
            if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1) {
                document.getElementById("cell" + possibleMove).style.backgroundColor = "#FF0000";
            }
            possibleMove = (Number(piecePosition) - 9);
            if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1) {
                document.getElementById("cell" + possibleMove).style.backgroundColor = "#FF0000";
            }
        }
        //BLACK PAWN
        if (selectedID.alt.indexOf("Black") !== -1) {
            otherColor = "White";
            if (piecePosition < 29) {
                possibleMove = (Number(piecePosition) + 10);
                if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                    document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    possibleMove = (Number(piecePosition) + 20);
                    if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1) {
                        document.getElementById("cell" + possibleMove).style.backgroundColor = "#5CF266";
                    }
                }
            } else if (piecePosition > 29) {
                possibleMove = (Number(piecePosition) + 10);
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
        for (move = 10; move < 90; move += 10) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down
        for (move = 10; move < 90; move += 10) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Up-Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move + (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Up-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move + (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down-Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move - (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move - (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
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
        for (move = 10; move < 20; move += 10) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down
        for (move = 10; move < 20; move += 10) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Right
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Left
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Up-Left
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) - move + (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Up-Right
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) + move + (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down-Left
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) - move - (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down-Right
        for (move = 1; move < 2; move++) {
            possibleMove = (Number(piecePosition) + move - (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
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
            possibleMove = (Number(piecePosition) - move + (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Up-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move + (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down-Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move - (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down-Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move - (move * 10));
            breaker = highlight(possibleMove);
            if (breaker === -3) {
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
        for (move = 10; move < 90; move += 10) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Down
        for (move = 10; move < 90; move += 10) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Right
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) + move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
        //Move Left
        for (move = 1; move < 9; move++) {
            possibleMove = (Number(piecePosition) - move);
            breaker = highlight(possibleMove);
            if (breaker === -3) {
                break;
            }
        }
    }
}

function unhighlightMoves() {
    var x, y, space;
    for (x = 10; x < 90; x += 10) {
        for (y = 1; y < 9; y++) {
            space = x + y;
            document.getElementById("cell" + space).style.backgroundColor = document.getElementById(space).style.backgroundColor;
        }
    }
}