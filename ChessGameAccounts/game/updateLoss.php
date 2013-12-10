<?php
	/**
	 * updateLoss.php
	 * Language: PHP
	 * Author: Dan Ford
	 * Description: Called by youLose()
	 */

	// Connect to server
	include 'db_connect.php';
	session_start();
	$user = $_SESSION['username'];
	$SQL = "UPDATE ACCOUNT SET loss = loss + 1 WHERE username = '$user'";
	
	$result = mysql_query($SQL);
	mysql_close($con);
	echo "WE ARE AT LEAST GETTING INTO THE PHP FILE";
?>