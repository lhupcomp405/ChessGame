<?php
//This php checks the two answers and if both are yes are put into the game table
//else they are removed from pair
//Written by: Zachary Swartwood
//	      Kyle Leber
//	      Matt Fartel

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
		
		$sql ="SELECT * from GAME WHERE player_w='$username' OR player_b='$username'";
		$query = mysqli_query($con,$sql);
		$rows = mysqli_num_rows($query);
		
 		$sql="INSERT INTO GAME(game_num, player_w, player_b) VALUES ($game_id, '$player_w', '$player_b')";
		$query=mysqli_query($con, $sql);
		$_SESSION['game_id'] = $game_id;
		if($rows > 0){
		$game_id = $game_id -1;
		$sql="INSERT INTO GAME(game_num, player_w, player_b) VALUES ($game_id, '$player_w', '$player_b')";
			$query=mysqli_query($con, $sql);
			$_SESSION['game_id'] = $game_id;
			
		}
		//get both player sessions
		
		$sql ="SELECT * FROM GAME WHERE game_num = $game_id";
		$query = mysqli_query($con, $sql);
		while($row = mysqli_fetch_assoc($query)){
			$_SESSION['playerw'] = $row['player_w'];
			$_SESSION['playerb'] = $row['player_b'];
		}
	//Removes the pair
	//	$sql="DELETE FROM PAIR WHERE pair_id=$pair_id";
	//	$query=mysqli_query($con, $sql);
	}

?>
