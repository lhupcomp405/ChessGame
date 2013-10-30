	var selected = false;
	var selectedID;
	var empty;
	var piece;
	var screenWidth;
	var screenHeight;
	var currentBackgroundColor;
	var currentBackgroundColorOver;
	
	function onMouseOver(x) {
	if (!selected && x.alt.indexOf("Blank") == -1){
		x.style.backgroundColor="#5CF266";
	}
		//x.style.borderColor="#5CF266";
		//x.style.borderStyle="inset";
	}
	
	function onMouseOut(x) {
	if (x != selectedID){
		x.style.backgroundColor=x.parentNode.style.backgroundColor;
	}
		//x.style.borderColor="black";
		//x.style.borderStyle="none";
	}
	
	function checkResolution(){
		screenWidth=screen.width;
		screenHeight=screen.height;
		var message = screenWidth + " by " + screenHeight;
		////alert(message);
	}
	
	function boardSize(){
		checkResolution();
		document.getElementById("layout").style.width=(screenWidth * .75);
		document.getElementById("layout").style.height=(screenHeight * .60);
	}
	
	function smile(){
		document.getElementById("32").style.backgroundColor="#5CF266";
		document.getElementById("22").style.backgroundColor="#5CF266";
		document.getElementById("33").style.backgroundColor="#5CF266";
		document.getElementById("34").style.backgroundColor="#5CF266";
		document.getElementById("35").style.backgroundColor="#5CF266";
		document.getElementById("36").style.backgroundColor="#5CF266";
		document.getElementById("37").style.backgroundColor="#5CF266";
		document.getElementById("27").style.backgroundColor="#5CF266";
		document.getElementById("52").style.backgroundColor="#5CF266";
		document.getElementById("53").style.backgroundColor="#5CF266";
		document.getElementById("62").style.backgroundColor="#5CF266";
		document.getElementById("63").style.backgroundColor="#5CF266";
		document.getElementById("56").style.backgroundColor="#5CF266";
		document.getElementById("57").style.backgroundColor="#5CF266";
		document.getElementById("66").style.backgroundColor="#5CF266";
		document.getElementById("67").style.backgroundColor="#5CF266";
	}
	
	function knightMove(end)
	{
		//alert("successfully got to the knightMove!!");
		//alert("Picked up blank correctly!");
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
		selectedID.style.backgroundColor=selectedID.parentNode.style.backgroundColor;
		selected = false;
		selectedID = "";
	}
	
	function rookMove(end)
	{
		//alert("successfully got to the rookMove!!");
		//alert("Picked up blank correctly!");
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
		selectedID.style.backgroundColor=selectedID.parentNode.style.backgroundColor;
		selected = false;
		selectedID = "";
	}
	
	function bishopMove(end)
	{
		//alert("successfully got to the bishopMove!!");
		//alert("Picked up blank correctly!");
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
		selectedID.style.backgroundColor=selectedID.parentNode.style.backgroundColor;
		selected = false;
		selectedID = "";
	}
	
	function kingMove(end)
		{
		//alert("successfully got to the kingMove!!");
		//alert("Picked up blank correctly!");
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
		selectedID.style.backgroundColor=selectedID.parentNode.style.backgroundColor;
		selected = false;
		selectedID = "";
	}
	
	function queenMove(end)
	{
		//alert("successfully got to the queenMove!!");
		//alert("Picked up blank correctly!");
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
		selectedID.style.backgroundColor=selectedID.parentNode.style.backgroundColor;
		selected = false;
		selectedID = "";
	}
	
	function pawnMove(end)
	{
		//alert("successfully got to the pawnMove!!");
		//alert("Picked up blank correctly!");
		if (selectedID.alt.indexOf("White") !== -1){
			end.alt = 'WhitePawn';
			end.src = 'WhitePawn.png';
		} else {
			end.alt = 'BlackPawn';
			end.src = 'BlackPawn.png';
		}
		selectedID.id = 'Blank';
		selectedID.alt = 'Blank';
		selectedID.src = 'Blank.png';
		selectedID.style.backgroundColor=selectedID.parentNode.style.backgroundColor;
		selected = false;
		selectedID = "";
	}
	
	function isEmpty(end)
	{
		if (end.innerText == '\xA0')
			return true;
		else
			return false;
	}
	
		function createBoard()
	{
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
	
	function highlightMoves(){
		if (selectedID.alt.indexOf("Pawn") !== -1){
			var piecePosition, possibleMove;
			piecePosition = selectedID.parentNode.value;
			if (selectedID.alt.indexOf("White") !== -1){
				if  (piecePosition >70){
					possibleMove = piecePosition - 20;
				}	
			} else {
				end.alt = 'BlackPawn';
				end.src = 'BlackPawn.png';
			}
		}
		else if (selectedID.alt.indexOf("Queen") !== -1){
			
		}
		else if (selectedID.alt.indexOf("King") !== -1){
			
		}
		else if (selectedID.alt.indexOf("Knight") !== -1){
			
		}
		else if (selectedID.alt.indexOf("Bishop") !== -1){
			
		}
		else if (selectedID.alt.indexOf("Rook") !== -1){
			
		}
	}

	function rookCheck(x, ownColor){
		var rowIndex = x.parentNode.value%100 - x.parentNode.value%10;
		var cellIndex = x.parentNode.value%10;
		var highlight = true;
		
		//get the color of the piece
		var color = ownColor.substring(0, 5);
		
		//check rows above
		while(rowIndex > 10){
			
			rowIndex -= 10;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}
		
		//reset the index
		rowIndex = x.parentNode.value%100 - x.parentNode.value%10;
		
		//check rows below
		while(rowIndex < 80){
			
			rowIndex += 10;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}

		rowIndex = x.parentNode.value%100 - x.parentNode.value%10;
		
		//check cells to the left
		while(cellIndex > 1){
			
			cellIndex -= 1;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}

		cellIndex = x.parentNode.value%10;

		//check cells to the right
		while(cellIndex < 8){
			
			cellIndex += 1;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}
		
	}
		
	function bishopCheck(x, ownColor){
		var rowIndex = x.parentNode.value%100 - x.parentNode.value%10;
		var cellIndex = x.parentNode.value%10;
		var highlight = true;
		
		//get the color of the piece
		var color = ownColor.substring(0, 5);
		
		//check lower left diagonal
		while(rowIndex > 10 && cellIndex > 1){
			
			rowIndex -= 10;
			cellIndex -= 1;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}
		
		//reset the index
		rowIndex = x.parentNode.value%100 - x.parentNode.value%10;
		cellIndex = x.parentNode.value%10;

		//check rows below
		while(rowIndex > 10 && cellIndex < 8){
			
			rowIndex -= 10;
			cellIndex += 1;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}

		rowIndex = x.parentNode.value%100 - x.parentNode.value%10;
		cellIndex = x.parentNode.value%10;
		
		//check upper right diagonal
		while(rowIndex < 80 && cellIndex < 8){
			
			rowIndex += 10;
			cellIndex += 1;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}

		rowIndex = x.parentNode.value%100 - x.parentNode.value%10;
		cellIndex = x.parentNode.value%10;

		//check the upper left diagonal
		while(rowIndex < 80 && cellIndex > 1){
			
			rowIndex += 10;
			cellIndex -= 1;
			if(document.getElementById(rowIndex+cellIndex).childNodes[1].alt.indexOf(color) == -1)
				document.getElementById(rowIndex+cellIndex).style.backgroundColor = "#5CF266";	
			else
				break;	
		}
		
	}	
	
	function onMouseClick(x)
	{		
			if (selected == false && x.alt.indexOf("Blank") == -1)
			{
				x.style.backgroundColor="#5CF266";
				selected = true;
				selectedID = x;

					bishopCheck(x, selectedID.alt);
				

				alert(selectedID.parentNode.value);
				//highlightMoves();
				//alert(x.src);
				//alert(x.alt);
			}
			else if (x == selectedID && selected == true)
			{
				//alert("successfully undid a move!");
				x.style.backgroundColor=x.parentNode.style.backgroundColor;
				selected = false;
				selectedID = "";
				//unhighlightMoves();
			}
			else if(x != selectedID && selected == true)
			{
				//alert("successfully tried to make a move!");
				if (selectedID.alt.indexOf("King") !== -1){
					kingMove(x);
				}
				else if (selectedID.alt.indexOf("Queen") !== -1){
					queenMove(x);
				}
				else if (selectedID.alt.indexOf("Bishop") !== -1){
					bishopMove(x);
				}
				else if (selectedID.alt.indexOf("Knight") !== -1){
					knightMove(x);
				}
				else if (selectedID.alt.indexOf("Rook") !== -1){
					rookMove(x);
				}
				else if (selectedID.alt.indexOf("Pawn") !== -1){
					pawnMove(x);
				}
			}
			
	}
