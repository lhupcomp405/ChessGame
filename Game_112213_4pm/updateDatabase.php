<?php
	/**
	 * updateDatabase.php
	 * Language: PHP
	 * Author: Dan Ford
	 * Description: Called by updateDatabase() in recordBoard.js, sends boardString to database, and echoes it back to updateDatabase()
	 *					to set opponentBoardString
	 */

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
	
	$bs = strval($_POST["bs"]);
	$SQL = "UPDATE BOARD SET boardstring='".$bs."' 
				WHERE id ='1'";

	$result = mysql_query($SQL);
	echo $bs;
	mysql_close($conn);
?>