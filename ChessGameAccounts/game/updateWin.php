<?php
	/**
	 * updateWin.php
	 * Language: PHP
	 * Author: Dan Ford
	 * Description: Called by youWon()
	 */

	// Connect to server
	include 'db_connect.php';
	session_start();
		
	$user = $_SESSION['username'];
	$SQL = "UPDATE ACCOUNT SET win = win + 1 WHERE username ='$user'";

	$result = mysql_query($SQL);
	mysql_close($con);
?>