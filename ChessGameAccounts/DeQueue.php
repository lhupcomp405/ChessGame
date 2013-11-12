<?php
include 'db_connect.php';
session_start();
$username = $_SESSION['username'];
$sql = "UPDATE ACCOUNT SET player_status=1 WHERE username='$username'";
$result = mysqli_query($con,$sql);
$sql = "DELETE FROM QUEUE WHERE username='$username'";
$result = mysqli_query($con,$sql);
?>
