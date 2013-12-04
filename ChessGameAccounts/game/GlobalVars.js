/**
 * GlobalVars.js
 * Language: Javascript
 * Author: Dan Ford
 * Description: Contains all globally declared vars and constants
 */
var selected = false, //true if a piece has been clicked on
    selectedID, //holds id of the piece you clicked on to move
    otherColor, //holds the opposite color's name
    endLoc, //holds the end location of your move
    endLocParent, //holds the parent of endLoc
    moveNumber = 0, //keeps track of the move number
    player = 1, //used for initially setting the current player, 1 is white, 2 is black
    playerScreen, //holds current player's screen to compare to "player" to only allow you to move if it is your turn
    currentPlayer = "W", //set current player's color
    lockout = false, //lockout disables all button clicks
	takenString = "", //holds a list of all taken pieces in BB (Black Bishop) format
    boardString, //holds string of all current piece locs, first char is last player's color, "W" or "B", and followed by each piece's alt, ie. "BB" for black bishop
    opponentBoardString, //compared against boardString to see if the opponent has moved
	showAlert = true, //turned off when you click cancel as an option for checkmate or click okay for check
	gameOver = false, //stops all button pressing if game is over
	moveTypeChar = "XX"; /* - holds the player's move type 
						  * XX for normal, 
						  * CC for check, 
						  * M0 for checkmate request, M1 for agreed checkmate, M2 for rejected checkmate
						  * S0 for requested stalemate, S1 for agreed stalemate, S2 for rejected stalemate
						  * or RR for retire or concede
						  */
//Constants
const NEXTROW = 10; //added or subtracted from current location to move up or down a row
const BOARDSTART = 10; //used in loops to make sure moves to not go below the bottom row of the board
const BOARDEND = 89; //used in loops to make sure moves to not go above the top row of the board
const ROWSTART = 0; //used in loops to signify the right edge of the board
const ROWEND = 9; //used in loops to signify the left edge of the board