<?php
//This php removes the user from the queue and changes there status to online
//Written by: 


include 'db_connect.php';
session_start();
$_SESSION['forcestop'] = 1;
$username = $_SESSION['username'];
$sql = "UPDATE ACCOUNT SET player_status=1 WHERE username='$username'";
$result = mysqli_query($con,$sql);
$sql = "DELETE FROM QUEUE WHERE username='$username'";
$result = mysqli_query($con,$sql);

?>
