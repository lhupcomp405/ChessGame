<?php
		session_start();
		if(empty($_SESSION['username'])){
			session_destroy();
			header('Location: ChessGameLogin.html');
		}


//Need to check answers
//If player_w yes and player_b no

	if(($answerw == 1 && $answerb == 0) || ($answerw == 0 && $answerb ==1) || ($answerw == 0 && $answerb == 0))
	{
	//Removes the pair
		
		$sql="DELETE FROM PAIR WHERE pair_id=$pair_id";
	 	$query=mysqli_query($con, $sql);
		$sql="UPDATE ACCOUNT SET player_status=1 WHERE username='$player_b' OR username='$player_w'";
		$query=mysqli_query($con, $sql);
	}


//If both yes
	else if($answerw == 1 && $answerb == 1)
	{

	//Gets max gameid and increments it by 1
	 	$sql="SELECT MAX(game_num) as maxgame_num FROM GAME";
		$result=mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$game_id = $row['maxgame_num'];
		$game_id = $game_id + 1;

	//Updates the statuses for the player
		$sql="UPDATE ACCOUNT SET player_status=4 WHERE username='$player_w' OR username='$player_b'";
		$query=mysqli_query($con, $sql);
		
	//Insert into the game table
	 	$sql="INSERT INTO GAME(game_num, player_w, player_b) VALUES ($game_id, '$player_w', '$player_b')";
		$query=mysqli_query($con, $sql);
		

	//Removes the pair
	//	$sql="DELETE FROM PAIR WHERE pair_id=$pair_id";
	//	$query=mysqli_query($con, $sql);
	}

?>
