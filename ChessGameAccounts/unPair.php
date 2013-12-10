<?php
//This php removes the pair that the user is in
//Written by:


include 'db_connect.php';
session_start();

$username = $_SESSION['username'];
$sql = "DELETE FROM PAIR WHERE player_w='$username' or player_b='$username'";
$result = mysqli_query($con,$sql);

?>
