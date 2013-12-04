<?php
 include 'db_connect.php';
 session_start();
 $game_id = $_SESSION['game_id'];
 $sql= "SELECT player_w, player_b FROM GAME WHERE game_num=$game_id";
 $result = mysql_query($sql);
 $row = mysql_fetch_assoc($result);
 $username = $_SESSION['username'];
 $playerw = $row['player_w'];

 if($username == $playerw){
	echo 1;
 }else{
	echo 2;
 }
?>