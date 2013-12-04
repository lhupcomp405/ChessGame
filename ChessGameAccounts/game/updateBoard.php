<?php
	/**
	 * updateBoard.php
	 * Language: PHP
	 * Author: Dan Ford
	 * Description: Called by updateBoard() in recordBoard.js, takes boardString from database, and sends it back to updateBoard()
	 *					to be converted back to the board
	 */

	// Connect to server
	include 'db_connect.php'; 
	session_start();
	$game_id = $_SESSION['game_id'];
	//get the cp parameter from URL
	$cp = strval($_POST["cp"]);

	$sql = "Select * from GAME where game_num=$game_id";
	$results = mysql_query($sql);

	if(!$results) {
		die('Could not get Data');
	}
	while($row = mysql_fetch_assoc($results)) {
		if( substr("{$row['boardstring']}" , 0, 1) !== $cp ) {
			echo $row['boardstring'];
		}
	}
	mysql_close($con);
?>