<?php
	/**
	 * updateDatabase.php
	 * Language: PHP
	 * Author: Dan Ford
	 * Description: Called by updateDatabase() in recordBoard.js, sends boardString to database, and echoes it back to updateDatabase()
	 *					to set opponentBoardString
	 */

	// Connect to server
	include 'db_connect.php';
	session_start();
	$game_id = $_SESSION['game_id'];
		
	$bs = $_POST["bs"];
	$SQL = "UPDATE GAME SET boardstring='$bs' WHERE game_num =$game_id";

	$result = mysql_query($SQL);
	echo $bs;
	mysql_close($con);
?>