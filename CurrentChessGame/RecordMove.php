<?php
	$host="127.0.0.1";
	$myusername="root";
	$mypassword="usbw";
	$db_name="comp405"; 

	function connect() {
		// Connect to server
		$host="127.0.0.1";
		$myusername="root";
		$mypassword="usbw";
		$db_name="comp405"; 
		
		$conn = mysql_connect("$host", "$myusername", "$mypassword");
		if (! $conn) {
			die("cannot connect"); 
		}
		mysql_select_db("$db_name")or die("cannot select DB"); //Select Database
		return $conn;
	}

	function add_move($movenum, $gamepiece, $endloc) {
		$conn = connect();
		$SQL = "INSERT INTO GAME (movenum, gamepiece, endloc) 
		VALUES ('3', 'kgood', '22')";

		$result = mysql_query($SQL);

		mysql_close($conn);
		print "Records added to the database <br>";
	}

	function list_moves() {
		$conn = connect();
		$sql = 'Select * from GAME';
		$results = mysql_query($sql);

		if(!$results) {
			die('Could not get Data');
		}
		while($row = mysql_fetch_assoc($results)) {
			echo "MoveNumber :{$row['movenum']} <br>";
			echo "GamePiece :{$row['gamepiece']} <br>";
			echo "EndLoc :{$row['endloc']} <br>";
		}
		mysql_close($conn);
	}
?>
<?php
/*
$count = 1;
if(isset($_POST['makeMove']))
{	
	mysql_query("INSERT INTO MOVE (game_num, movenum, color, end_loc) 
VALUES (1616, $count , 'B', 10 )", $conn) or die("Failed to insert"); //Insert Move Entry
$count++; //Problem with Refresh
}
*/
?>