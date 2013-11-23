var selected = false,
    selectedID,
    screenWidth,
    screenHeight,
    otherColor,
    endLoc,
    endLocParent,
    moveNumber = 0,
    player = 1,
    lockout = false,
	gameCode;

function onMouseOver(x) {
    if (player === 1) {
        if (!selected && x.alt.indexOf("Blank") === -1 && x.alt.indexOf("Black") === -1) {
            x.parentNode.parentNode.parentNode.style.backgroundColor = "#5CF266";
        }
    } else if (player === 2) {
        if (!selected && x.alt.indexOf("Blank") === -1 && x.alt.indexOf("White") === -1) {
            x.parentNode.parentNode.parentNode.style.backgroundColor = "#5CF266";
        }
    }
}

function onMouseOut(x) {
    if (!selected) {
        x.parentNode.parentNode.parentNode.style.backgroundColor = x.parentNode.style.backgroundColor;
    }
}

function onMouseClick(x) {
    if (selected === false && x.alt.indexOf("Blank") === -1 && !lockout) {
        if (player === 1 && x.alt.indexOf("White") !== -1) {
            x.parentNode.parentNode.parentNode.style.backgroundColor = "#5CF266";
            selected = true;
            selectedID = x;
            highlightMoves();
        } else if (player === 2 && x.alt.indexOf("Black") !== -1) {
            x.parentNode.parentNode.parentNode.style.backgroundColor = "#5CF266";
            selected = true;
            selectedID = x;
            highlightMoves();
        }
    } else if (x === selectedID && selected === true && !lockout) {
        x.parentNode.style.backgroundColor = x.style.backgroundColor;
        selected = false;
        selectedID = "";
        unhighlightMoves();
    } else if (x !== selectedID && selected === true && !lockout && x.parentNode.parentNode.parentNode.style.backgroundColor !== x.parentNode.style.backgroundColor) {
        endLoc = x;
        x.parentNode.parentNode.parentNode.style.backgroundColor = "#0000FF";

        lockout = true;
        document.getElementById("resetMove").style.backgroundColor = "#0000FF";
        document.getElementById("makeMove").style.backgroundColor = "#0000FF";
    }
}

function callStalemate() {
    var resp = confirm("Player " + player + " has called a stalemate. Would you like to end the match?");
    if (resp) {
        alert("The match has ended in a draw.");
    }
}

function callCheck() {
    alert("Player " + player + " has called check.");
	recordBoard();
}

function concede() {
    var resp = confirm("Are you sure you want to end the match?");
    if (resp) {
        alert("Player " + player + " has ended the match.");
    }
}
/*
$(document).ready(function() {
	$(".Txt_Enviar").click(function() { addMoveToTable(); });
});

function addMoveToTable()
{
	jQuery.ajax({
		type: "POST",
		url: 'RecordMove.php',
		data: {functionname: 'add_move', arguments: [$(".Txt_Nombre").val(), $(".Txt_Correo").val(), $(".Txt_Pregunta").val()]}, 
		 success:function(data) {
		alert(data); 
		 }
	});
}
*/