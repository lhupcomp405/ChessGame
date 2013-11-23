<?php
	/**
	 * updateBoard.php
	 * Language: PHP
	 * Author: Dan Ford
	 * Description: Called by updateBoard() in recordBoard.js, takes boardString from database, and sends it back to updateBoard()
	 *					to be converted back to the board
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

	//get the cp parameter from URL
	$cp = strval($_POST["cp"]);

	$sql = 'Select * from BOARD';
	$results = mysql_query($sql);

	if(!$results) {
		die('Could not get Data');
	}
	while($row = mysql_fetch_assoc($results)) {
		if( substr("{$row['boardstring']}" , 0, 1) !== $cp ) {
			echo $row['boardstring'];
		}
	}
	mysql_close($conn);
?>