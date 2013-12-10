<?php
//This php puts the user into the QUEUE
//Written by: Zachary Swartwood
//	      Kyle Leber
//	      Matt Fartell

include 'db_connect.php';


//Get the username
	session_start();		
	$username = $_SESSION['username'];
	//echo "<br/>The username of the session is " . $username;

//Check if already in queue
	$sql="SELECT player_status FROM ACCOUNT WHERE username='$username'";
	//echo "<br/>The SQL statement is: " .$sql;	
	$result=mysqli_query($con,$sql);
	$row = mysqli_fetch_array($result);
	$player_status = $row['player_status'];
	//echo "<br/>The player status is: " . $player_status;

//If not in the QUEUE, continue(not in QUEUE table)
   if($player_status <= 1){
	//echo "<br/>Player is NOT in the queue... so let's add em!";

//Get the skill level from the ACCOUNT table
	$sql="SELECT skill_level FROM ACCOUNT WHERE username='$username'";
	$result=mysqli_query($con,$sql); 
	$row = mysqli_fetch_array($result);
	$skill = $row['skill_level'];
	//echo "<br/>The skill level of the given user is: " .$row['skill_level'];

//Gets max queueid and increments it by 1
	$sql="SELECT MAX(queue_id) as maxqueue_id FROM QUEUE";
	$result=mysqli_query($con,$sql);
	$row = mysqli_fetch_array($result);
	$queueid=$row['maxqueue_id'];
	$queueid=$queueid + 1;
	//echo "<br/>The queue id of the given user is: " .$queueid;
	
//Sets the Queue Status
	$status=2;
	
//This inserts the user into the Queue table
	$sql="INSERT INTO QUEUE(queue_id, username, skill, status) 
			VALUES ($queueid, '$username', $skill, $status)";
	$query=mysqli_query($con, $sql);
	$sql="UPDATE ACCOUNT SET player_status=2 WHERE username='$username'";
	$query=mysqli_query($con,$sql);

	//INCLUDE PAIR.php
include 'Pair.php';
}

?>
