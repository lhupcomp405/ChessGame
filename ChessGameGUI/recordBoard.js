function recordBoard() {
	var currentRow = 0, 
		currentColumn = 0, 
		currentCell;
		
	var board = new Array(9);
	for (var i = 0; i < 9; i++) {
		board[i] = new Array(9);
	}
	
	for (currentRow = 1; currentRow < 9; currentRow++){
		for (currentColumn = 1; currentColumn < 9; currentColumn++){
			currentCell = Number(currentRow) * 10 + Number(currentColumn);
			board[currentRow][currentColumn] = document.getElementById(currentCell).children[0].alt;
		}
	}
}

function updateBoard() {
	for (var i = 1; i < 9; i++) {
		for (var o = 1; o < 9; o++) {
			document.getElementById(board[i][o]).children[0].src = board[i][o].children[0].alt + ".png";
			//alert(board[i][o]);
		}
	}
}