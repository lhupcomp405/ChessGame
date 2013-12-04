<?php
	include 'db_connect.php';
	session_start();
	$username = $_SESSION['username'];

	$message = $_POST['msgpost'];
	$message = mysql_escape_string($message);
	$message = stripslashes($message);
	$sql = "INSERT INTO CHAT(username,message) VALUES ('$username','$message')";
	$query = mysqli_query($con, $sql);
	echo $message;



?>
