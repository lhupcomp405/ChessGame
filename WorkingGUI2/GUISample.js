	var selected = false;
	var selectedID;
	var screenWidth, screenHeight;
	var othercolor;
	var endloc, endlocparent;
	var movenumber = 0;
	var player = 1;
	var yourpiece, color;
	var lockout = false;
	
	function onMouseOver(x) {
		if (player == 1){
			if (!selected && x.alt.indexOf("Blank") == -1 && x.alt.indexOf("Black") == -1){
				x.style.backgroundColor="#5CF266";
			}
		} 
		else if (player == 2){
			if (!selected && x.alt.indexOf("Blank") == -1 && x.alt.indexOf("White") == -1){
				x.style.backgroundColor="#5CF266";
			}
		}
	}
	
	function onMouseOut(x) {
		if (!selected){
			x.style.backgroundColor=x.parentNode.style.backgroundColor;
		}
	}
	
	function callStalemate(){
		var resp = confirm("Player " + player + " has called a stalemate. Would you like to end the match?");
		if (resp) {
			alert("The match has ended in a draw.");
		}
	}
	
	function callCheck(){
		alert("Player " + player + " has called check.");
	}
	
	function concede(){
		var resp = confirm("Are you sure you want to end the match?");
		if (resp) {
			alert("Player " + player + " has ended the match.");
		}
	}
	
	function checkResolution(){
		screenWidth=screen.width;
		screenHeight=screen.height;
		var message = screenWidth + " by " + screenHeight;
	}
	
	function boardSize(){
		checkResolution();
		document.getElementById("layout").style.width=(screenWidth * .75);
		document.getElementById("layout").style.height=(screenHeight * .60);
	}
	
	function knightMove(end){
		if (end.style.backgroundColor !== end.parentNode.style.backgroundColor){
			if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1){
				document.getElementById("takenWhite").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			else if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1){
				document.getElementById("takenBlack").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			if (selectedID.alt.indexOf("White") !== -1){
				end.alt = 'WhiteKnight';
				end.src = 'WhiteKnight.png';
			} else {
				end.alt = 'BlackKnight';
				end.src = 'BlackKnight.png';
			}
			selectedID.id = 'Blank';
			selectedID.alt = 'Blank';
			selectedID.src = 'Blank.png';
			endlocparent = end.parentNode.value;
		}
	}
	
	function rookMove(end){
		if (end.style.backgroundColor !== end.parentNode.style.backgroundColor){
			if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1){
				document.getElementById("takenWhite").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			else if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1){
				document.getElementById("takenBlack").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			if (selectedID.alt.indexOf("White") !== -1){
				end.alt = 'WhiteRook';
				end.src = 'WhiteRook.png';
			} else {
				end.alt = 'BlackRook';
				end.src = 'BlackRook.png';
			}
			selectedID.id = 'Blank';
			selectedID.alt = 'Blank';
			selectedID.src = 'Blank.png';
			endlocparent = end.parentNode.value;
		}
	}
	
	function bishopMove(end){
		if (end.style.backgroundColor !== end.parentNode.style.backgroundColor){
			if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1){
				document.getElementById("takenWhite").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			else if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1){
				document.getElementById("takenBlack").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			if (selectedID.alt.indexOf("White") !== -1){
				end.alt = 'WhiteBishop';
				end.src = 'WhiteBishop.png';
			} else {
				end.alt = 'BlackBishop';
				end.src = 'BlackBishop.png';
			}
			selectedID.id = 'Blank';
			selectedID.alt = 'Blank';
			selectedID.src = 'Blank.png';
			endlocparent = end.parentNode.value;
		}
	}
	
	function kingMove(end){
		if (end.style.backgroundColor !== end.parentNode.style.backgroundColor){
			if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1){
				document.getElementById("takenWhite").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			else if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1){
				document.getElementById("takenBlack").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			if (selectedID.alt.indexOf("White") !== -1){
				end.alt = 'WhiteKing';
				end.src = 'WhiteKing.png';
			} else {
				end.alt = 'BlackKing';
				end.src = 'BlackKing.png';
			}
			selectedID.id = 'Blank';
			selectedID.alt = 'Blank';
			selectedID.src = 'Blank.png';
			endlocparent = end.parentNode.value;
		}
	}
	
	function queenMove(end){
		if (end.style.backgroundColor !== end.parentNode.style.backgroundColor){
			if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1){
				document.getElementById("takenWhite").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			else if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1){
				document.getElementById("takenBlack").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			if (selectedID.alt.indexOf("White") !== -1){
				end.alt = 'WhiteQueen';
				end.src = 'WhiteQueen.png';
			} else {
				end.alt = 'BlackQueen';
				end.src = 'BlackQueen.png';
			}
			selectedID.id = 'Blank';
			selectedID.alt = 'Blank';
			selectedID.src = 'Blank.png';
			endlocparent = end.parentNode.value;
		}
	}
	
	function pawnMove(end){
		if (end.style.backgroundColor !== end.parentNode.style.backgroundColor){
			if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("White") !== -1 && selectedID.alt.indexOf("Black") !== -1){
				document.getElementById("takenWhite").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			else if (end.alt.indexOf("Blank") === -1 && end.alt.indexOf("Black") !== -1 && selectedID.alt.indexOf("White") !== -1){
				document.getElementById("takenBlack").innerHTML += "<img src='" + end.src + "' class='icon'></img>" + "\n";
			}
			if (selectedID.alt.indexOf("White") !== -1 ){
				end.alt = 'WhitePawn';
				end.src = 'WhitePawn.png';
			} else {
				end.alt = 'BlackPawn';
				end.src = 'BlackPawn.png';
			}
			selectedID.id = 'Blank';
			selectedID.alt = 'Blank';
			selectedID.src = 'Blank.png';
			endlocparent = end.parentNode.value;			
		}
	}
	
	function isEmpty(end){
		if (end.innerText == '\xA0')
			return true;
		else
			return false;
	}
	
	function createBoard(){
		var row = 8, cell = 1, color = 0;
		for (row = 8; row > 0; row--){
			document.writeln('<tr id="row',row,'">');
			for (cell = 1; cell < 9; cell++){
				document.write('<td id="cell',row,cell,'"'); 
				document.write('value="',row,cell,'" class ="');
				if (color % 2 === 0){
					document.write('white');
				}else{
					document.write('black');
				}
				document.write('spaces">'); 
				document.writeln('<p>');
				document.write('<button type="button" class="');
				if (color % 2 === 0){
				document.write('white');
				}else{
				document.write('black');
				}
				document.writeln('space" id="',row,cell,'"  value="',row,cell,'">');
				
				//Selects piece name
				if (row === 1 && cell === 5){
					document.write('<img src="BlackQueen.png" alt="BlackQueen" id="BlackQueen"');
				}
				else if (row === 8 && cell === 5){
					document.write('<img src="WhiteQueen.png" alt="WhiteQueen" id="WhiteQueen"');
				}
				else if (row === 1 && cell === 4){
					document.write('<img src="BlackKing.png" alt="BlackKing" id="BlackKing"');
				}
				else if (row === 8 && cell === 4){
					document.write('<img src="WhiteKing.png" alt="WhiteKing" id="WhiteKing"');
				}
				else if ((row === 1 && cell === 3) || (row === 1 && cell === 6)){
					document.write('<img src="BlackBishop.png" alt="BlackBishop', cell ,'" id="BlackBishop', cell ,'"');
				}
				else if ((row === 8 && cell === 3) || (row === 8 && cell === 6)){
					document.write('<img src="WhiteBishop.png" alt="WhiteBishop', cell ,'" id="WhiteBishop', cell ,'"');
				}
				else if ((row === 1 && cell === 2) || (row === 1 && cell === 7)){
					document.write('<img src="BlackKnight.png" alt="BlackKnight', cell ,'" id="BlackKnight', cell ,'"');
				}
				else if ((row === 8 && cell === 2) || (row === 8 && cell === 7)){
					document.write('<img src="WhiteKnight.png" alt="WhiteKnight', cell ,'" id="WhiteKnight', cell ,'"');
				}
				else if ((row === 1 && cell === 8) || (row === 1 && cell === 1)){
					document.write('<img src="BlackRook.png" alt="BlackRook', cell ,'" id="BlackRook', cell ,'"');
				}
				else if ((row === 8 && cell === 1) || (row === 8 && cell === 8)){
					document.write('<img src="WhiteRook.png" alt="WhiteRook', cell ,'" id="WhiteRook', cell ,'"');
				}
				else if (row === 2){
					document.write('<img src="BlackPawn.png" alt="BlackPawn', cell ,'" id="BlackPawn', cell ,'"');
				}
				else if (row === 7){
					document.write('<img src="WhitePawn.png" alt="WhitePawn', cell ,'" id="WhitePawn', cell ,'"');
				}
				else{
					document.write('<img src="Blank.png" alt="Blank" id="Blank"');
				}
				document.write(' onclick="onMouseClick(this)"');
				document.write(' onmouseover="onMouseOver(this)"'); 
				document.write(' onmouseout="onMouseOut(this)"');
				document.writeln(' class="piece"></img>');
				document.writeln('</button>');
				document.writeln('</p>');
				document.writeln('</td>');
				color++;
			}
			color++;
			document.writeln('</tr>');
		}
	}
		
	function getScreenHeight(x, y){
		checkResolution();
		var heightSize = screenHeight * (y/100);
		x.style.height=heightSize;
	}

	function getScreenWidth(x, y){
		checkResolution();
		var widthSize = screenWidth * (y/100);
		x.style.width=widthSize;
	}
	
	function setupScreen(x){
		getScreenHeight(x, 100);
		getScreenWidth(x, 100);
	}
	
	function highlight(x){
		if ((x%10) > 0 && (x%10) < 9 && x > 10 && x < 89){
			if (document.getElementById(x).children[0].alt.indexOf("Blank") !== -1){
				document.getElementById(x).children[0].style.backgroundColor="#5CF266";
			} else if (document.getElementById(x).children[0].alt.indexOf("Blank") === -1 && document.getElementById(x).children[0].alt.indexOf(othercolor) !== -1){
				document.getElementById(x).children[0].style.backgroundColor="#FF0000";
				return -3;
			} else {
				return -3;
			}
		} else {
			return -3;
		}
	}
	
	function highlightMoves(){
		var piecePosition, move, possibleMove;
		piecePosition = selectedID.parentNode.value;
		
		/*
		* PAWN HIGHLIGHT MOVE LOGIC
		*/
		if (selectedID.alt.indexOf("Pawn") !== -1){
			piecePosition = selectedID.parentNode.value;
			//WHITE PAWN
			if (selectedID.alt.indexOf("White") !== -1){
				othercolor = "Black";
				if  (piecePosition > 70){
					possibleMove = (Number(piecePosition) - 10);
					if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1){
						document.getElementById(possibleMove).children[0].style.backgroundColor="#5CF266";
						possibleMove = (Number(piecePosition) - 20);
						if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1){
							document.getElementById(possibleMove).children[0].style.backgroundColor="#5CF266";
						}
					}
				}
				else if (piecePosition < 70){
					possibleMove = (Number(piecePosition) - 10);
					if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1){
						document.getElementById(possibleMove).children[0].style.backgroundColor="#5CF266";
					}
				}
				possibleMove = (Number(piecePosition) - 11);
				if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1){
					document.getElementById(possibleMove).children[0].style.backgroundColor="#FF0000";
				}
				possibleMove = (Number(piecePosition) - 9);
				if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1){
					document.getElementById(possibleMove).children[0].style.backgroundColor="#FF0000";
				}
			}
			//BLACK PAWN
			if (selectedID.alt.indexOf("Black") !== -1){
				othercolor = "White";
				if  (piecePosition < 29){
					possibleMove = (Number(piecePosition) + 10);
					if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1){
						document.getElementById(possibleMove).children[0].style.backgroundColor="#5CF266";
						possibleMove = (Number(piecePosition) + 20);
						if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1){
							document.getElementById(possibleMove).children[0].style.backgroundColor="#5CF266";
						}
					}
				}
				else if (piecePosition > 29){
					possibleMove = (Number(piecePosition) + 10);
					if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") !== -1){
						document.getElementById(possibleMove).children[0].style.backgroundColor="#5CF266";
					}
				}
				possibleMove = (Number(piecePosition) + 11);
				if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1 && document.getElementById(possibleMove).children[0].alt.indexOf("White") !== -1){
					document.getElementById(possibleMove).children[0].style.backgroundColor="#FF0000";
				}
				possibleMove = (Number(piecePosition) + 9);
				if (document.getElementById(possibleMove).children[0].alt.indexOf("Blank") === -1 && document.getElementById(possibleMove).children[0].alt.indexOf("White") !== -1){
					document.getElementById(possibleMove).children[0].style.backgroundColor="#FF0000";
				}
			}
		}
		
		/*
		* QUEEN HIGHLIGHT MOVE LOGIC
		*/
		else if (selectedID.alt.indexOf("Queen") !== -1){
			//WHITE QUEEN
			if (selectedID.alt.indexOf("White") !== -1){
				othercolor = "Black";
			//BLACK QUEEN
			} else {
				othercolor = "White";
			}
			//Move Up
			for (move = 10; move < 90; move += 10){
				var breaker;
				possibleMove = (Number(piecePosition) + move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down
			for (move = 10; move < 90; move += 10){
				possibleMove = (Number(piecePosition) - move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Right
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) + move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Left
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) - move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Up-Left
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) - move + (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Up-Right
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) + move + (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down-Left
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) - move - (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down-Right
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) + move - (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
		}
		
		/*
		* KING HIGHLIGHT MOVE LOGIC
		*/
		else if (selectedID.alt.indexOf("King") !== -1){
			//WHITE KING
			if (selectedID.alt.indexOf("White") !== -1){
				othercolor = "Black";
			//BLACK KING
			} else {
				othercolor = "White";
			}
			//Move Up
			for (move = 10; move < 20; move += 10){
				possibleMove = (Number(piecePosition) + move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down
			for (move = 10; move < 20; move += 10){
				possibleMove = (Number(piecePosition) - move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Right
			for (move = 1; move < 2; move++){
				possibleMove = (Number(piecePosition) + move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Left
			for (move = 1; move < 2; move++){
				possibleMove = (Number(piecePosition) - move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Up-Left
			for (move = 1; move < 2; move++){
				possibleMove = (Number(piecePosition) - move + (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Up-Right
			for (move = 1; move < 2; move++){
				possibleMove = (Number(piecePosition) + move + (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down-Left
			for (move = 1; move < 2; move++){
				possibleMove = (Number(piecePosition) - move - (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down-Right
			for (move = 1; move < 2; move++){
				possibleMove = (Number(piecePosition) + move - (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}			
		}
		
		/*
		* KNIGHT HIGHLIGHT MOVE LOGIC
		*/
		else if (selectedID.alt.indexOf("Knight") !== -1){
			//WHITE KNIGHT
			if (selectedID.alt.indexOf("White") !== -1){
				othercolor = "Black";
			//BLACK KNIGHT
			} else {
				othercolor = "White";
			}
			possibleMove = (piecePosition - 21);
			highlight(possibleMove);
			possibleMove = (piecePosition - 19);
			highlight(possibleMove);
			possibleMove = (piecePosition - 12);
			highlight(possibleMove);
			possibleMove = (piecePosition -  8);
			highlight(possibleMove);
			possibleMove = (Number(piecePosition) + 21);
			highlight(possibleMove);
			possibleMove = (Number(piecePosition) + 19);
			highlight(possibleMove);
			possibleMove = (Number(piecePosition) + 12);
			highlight(possibleMove);
			possibleMove = (Number(piecePosition) +  8);
			highlight(possibleMove);
		}
		
		/*
		* BISHOP HIGHLIGHT MOVE LOGIC
		*/
		else if (selectedID.alt.indexOf("Bishop") !== -1){
			//WHITE BISHOP
			if (selectedID.alt.indexOf("White") !== -1){
				othercolor = "Black";
			} else {
				othercolor = "White";
			}
			//Move Up-Left
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) - move + (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Up-Right
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) + move + (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down-Left
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) - move - (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down-Right
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) + move - (move * 10));
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
		}
		
		/*
		* ROOK HIGHLIGHT MOVE LOGIC
		*/
		else if (selectedID.alt.indexOf("Rook") !== -1){
			//WHITE ROOK
			if (selectedID.alt.indexOf("White") !== -1){
				othercolor = "Black";
			//BLACK ROOK
			} else {
				othercolor = "White";
			}
			//Move Up
			for (move = 10; move < 90; move += 10){
				possibleMove = (Number(piecePosition) + move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Down
			for (move = 10; move < 90; move += 10){
				possibleMove = (Number(piecePosition) - move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Right
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) + move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}
			//Move Left
			for (move = 1; move < 9; move++){
				possibleMove = (Number(piecePosition) - move);
				breaker = highlight(possibleMove);
				if (breaker == -3){
					break;
				}
			}	
		}
	}
	
	function unhighlightMoves(){
		var x, y, space;
		for (x = 10; x < 90; x +=10){
			for (y = 1; y < 9; y++){
				space = x + y;
				document.getElementById(space).children[0].style.backgroundColor=document.getElementById(space).style.backgroundColor;
			}
		}
	}
	
	function onMouseClick(x)
	{		
		if (selected == false && x.alt.indexOf("Blank") == -1 && !lockout)
		{
			if (player == 1 && x.alt.indexOf("White") !== -1){
				x.style.backgroundColor="#5CF266";
				selected = true;
				selectedID = x;
				highlightMoves();
			} else if (player == 2 && x.alt.indexOf("Black") !== -1){
				x.style.backgroundColor="#5CF266";
				selected = true;
				selectedID = x;
				highlightMoves();
			}
		}
		else if (x == selectedID && selected == true && !lockout)
		{
				x.style.backgroundColor=x.parentNode.style.backgroundColor;
				selected = false;
				selectedID = "";
				unhighlightMoves();
		}
		else if(x != selectedID && selected == true && !lockout && x.style.backgroundColor !== x.parentNode.style.backgroundColor)
		{
			endloc = x;
			x.style.backgroundColor = "#0000FF";

			lockout = true;	
			document.getElementById("resetMove").style.backgroundColor = "#0000FF";
			document.getElementById("makeMove").style.backgroundColor = "#0000FF";
		}		
	}
	
	function resetMove(){
		selected = false;
		selectedID = "";
		lockout = false;
		unhighlightMoves();
		document.getElementById("resetMove").style.backgroundColor = document.getElementById("resetMove").parentNode.style.backgroundColor;
		document.getElementById("makeMove").style.backgroundColor = document.getElementById("makeMove").parentNode.style.backgroundColor;
	}
	
	function makeMove(){				
		if (selectedID.alt.indexOf("King") !== -1){
			kingMove(endloc);
			yourpiece = "King";
		}
		else if (selectedID.alt.indexOf("Queen") !== -1){
			queenMove(endloc);
			yourpiece = "Queen";
		}
		else if (selectedID.alt.indexOf("Bishop") !== -1){
			bishopMove(endloc);
			yourpiece = "Bishop";
		}
		else if (selectedID.alt.indexOf("Knight") !== -1){
			knightMove(endloc);
			yourpiece = "Knight";
		}
		else if (selectedID.alt.indexOf("Rook") !== -1){
			rookMove(endloc);
			yourpiece = "Rook";
		}
		else if (selectedID.alt.indexOf("Pawn") !== -1){
			pawnMove(endloc);
			yourpiece = "Pawn";
		}
		
		movenumber++;
		if (othercolor == "Black"){
			color = "White";
		} else if (othercolor == "White") {
			color = "Black";
		}		
		color += yourpiece;
		//alert("MoveNumber: " + movenumber + " Color: " + color + " EndLocation: " + endlocparent);
		if (player == 1){
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