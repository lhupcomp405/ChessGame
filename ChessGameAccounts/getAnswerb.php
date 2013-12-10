<?php
//This php echos the answerb of the user's pair
//Written by: Zachary Swartwood
//	      Kyle Leber
//	      Matt Fartel
	include 'db_connect.php';
	
	session_start();
	$username = $_SESSION['username'];

	$sql="SELECT pair_id FROM PAIR WHERE player_w='$username' OR player_b='$username'";
	$result=mysqli_query($con, $sql);
	$row = mysqli_fetch_array($result);
	$pair_id = $row['pair_id'];

	$sql="SELECT pb_answer FROM PAIR WHERE pair_id='$pair_id'";
	$result=mysqli_query($con, $sql);
	$row = mysqli_fetch_array($result);
	$answer_b = $row['pb_answer'];
	//echo "pear";
	echo $answer_b;
?>
