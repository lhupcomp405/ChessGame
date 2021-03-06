function createBoard(x) {
    var player = x,
        row,
        cell,
        color = 0;

    //Creates Board for White Player
    if (player == 1) {
        for (row = 1; row < 9; row++) {
            document.writeln('<tr id="row', row, '">');
            for (cell = 8; cell > 0; cell--) {
                document.write('<td id="cell', row, cell, '"');
                document.write('value="', row, cell, '" class ="');
                if (color % 2 === 0) {
                    document.write('white');
                } else {
                    document.write('black');
                }
                document.write('spaces">');
                document.writeln('<p>');
                document.write('<button type="button" class="');
                if (color % 2 === 0) {
                    document.write('white');
                } else {
                    document.write('black');
                }
                document.writeln('space" id="', row, cell, '"  value="', row, cell, '">');

                //Selects piece name
                if (row === 1 && cell === 5) {
                    document.write('<img src="BlackQueen.png" alt="BlackQueen" id="BlackQueen"');
                } else if (row === 8 && cell === 5) {
                    document.write('<img src="WhiteQueen.png" alt="WhiteQueen" id="WhiteQueen"');
                } else if (row === 1 && cell === 4) {
                    document.write('<img src="BlackKing.png" alt="BlackKing" id="BlackKing"');
                } else if (row === 8 && cell === 4) {
                    document.write('<img src="WhiteKing.png" alt="WhiteKing" id="WhiteKing"');
                } else if ((row === 1 && cell === 3) || (row === 1 && cell === 6)) {
                    document.write('<img src="BlackBishop.png" alt="BlackBishop', cell, '" id="BlackBishop', cell, '"');
                } else if ((row === 8 && cell === 3) || (row === 8 && cell === 6)) {
                    document.write('<img src="WhiteBishop.png" alt="WhiteBishop', cell, '" id="WhiteBishop', cell, '"');
                } else if ((row === 1 && cell === 2) || (row === 1 && cell === 7)) {
                    document.write('<img src="BlackKnight.png" alt="BlackKnight', cell, '" id="BlackKnight', cell, '"');
                } else if ((row === 8 && cell === 2) || (row === 8 && cell === 7)) {
                    document.write('<img src="WhiteKnight.png" alt="WhiteKnight', cell, '" id="WhiteKnight', cell, '"');
                } else if ((row === 1 && cell === 8) || (row === 1 && cell === 1)) {
                    document.write('<img src="BlackRook.png" alt="BlackRook', cell, '" id="BlackRook', cell, '"');
                } else if ((row === 8 && cell === 1) || (row === 8 && cell === 8)) {
                    document.write('<img src="WhiteRook.png" alt="WhiteRook', cell, '" id="WhiteRook', cell, '"');
                } else if (row === 2) {
                    document.write('<img src="BlackPawn.png" alt="BlackPawn', cell, '" id="BlackPawn', cell, '"');
                } else if (row === 7) {
                    document.write('<img src="WhitePawn.png" alt="WhitePawn', cell, '" id="WhitePawn', cell, '"');
                } else {
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
        //Creates Board for Black Player
    } else if (player == 2) {
        for (row = 8; row > 0; row--) {
            document.writeln('<tr id="row', row, '">');
            for (cell = 1; cell < 9; cell++) {
                document.write('<td id="cell', row, cell, '"');
                document.write('value="', row, cell, '" class ="');
                if (color % 2 === 0) {
                    document.write('white');
                } else {
                    document.write('black');
                }
                document.write('spaces">');
                document.writeln('<p>');
                document.write('<button type="button" class="');
                if (color % 2 === 0) {
                    document.write('white');
                } else {
                    document.write('black');
                }
                document.writeln('space" id="', row, cell, '"  value="', row, cell, '">');

                //Selects piece name
                if (row === 1 && cell === 5) {
                    document.write('<img src="BlackQueen.png" alt="BlackQueen" id="BlackQueen"');
                } else if (row === 8 && cell === 5) {
                    document.write('<img src="WhiteQueen.png" alt="WhiteQueen" id="WhiteQueen"');
                } else if (row === 1 && cell === 4) {
                    document.write('<img src="BlackKing.png" alt="BlackKing" id="BlackKing"');
                } else if (row === 8 && cell === 4) {
                    document.write('<img src="WhiteKing.png" alt="WhiteKing" id="WhiteKing"');
                } else if ((row === 1 && cell === 3) || (row === 1 && cell === 6)) {
                    document.write('<img src="BlackBishop.png" alt="BlackBishop', cell, '" id="BlackBishop', cell, '"');
                } else if ((row === 8 && cell === 3) || (row === 8 && cell === 6)) {
                    document.write('<img src="WhiteBishop.png" alt="WhiteBishop', cell, '" id="WhiteBishop', cell, '"');
                } else if ((row === 1 && cell === 2) || (row === 1 && cell === 7)) {
                    document.write('<img src="BlackKnight.png" alt="BlackKnight', cell, '" id="BlackKnight', cell, '"');
                } else if ((row === 8 && cell === 2) || (row === 8 && cell === 7)) {
                    document.write('<img src="WhiteKnight.png" alt="WhiteKnight', cell, '" id="WhiteKnight', cell, '"');
                } else if ((row === 1 && cell === 8) || (row === 1 && cell === 1)) {
                    document.write('<img src="BlackRook.png" alt="BlackRook', cell, '" id="BlackRook', cell, '"');
                } else if ((row === 8 && cell === 1) || (row === 8 && cell === 8)) {
                    document.write('<img src="WhiteRook.png" alt="WhiteRook', cell, '" id="WhiteRook', cell, '"');
                } else if (row === 2) {
                    document.write('<img src="BlackPawn.png" alt="BlackPawn', cell, '" id="BlackPawn', cell, '"');
                } else if (row === 7) {
                    document.write('<img src="WhitePawn.png" alt="WhitePawn', cell, '" id="WhitePawn', cell, '"');
                } else {
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
}