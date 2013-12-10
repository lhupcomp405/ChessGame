<?php
	/**
	 * dropPair.php
	 * Language: PHP
	 * Author: Dan Ford
	 * Description: Called by updateDatabase() in recordBoard.js
	 */

	// Connect to server
	include 'db_connect.php';
	session_start();
		
	$user = $_SESSION['username'];
	$SQL = "DELETE FROM PAIR WHERE player_w = '$user' OR player_b = '$user'";

	$result = mysql_query($SQL);
	mysql_close($con);
?>