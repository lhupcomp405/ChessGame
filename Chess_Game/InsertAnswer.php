<?php
	include 'db_connect.php';
	
//Get the answer and username
	$answer = $_POST['postanswer'];
	session_start();
	$username = $_SESSION['username'];

	$player_w = NULL;
	$player_b = NULL;



//Check if the user is player1

	$sql="SELECT pair_id FROM PAIR WHERE player_w='$username'";
	$result=mysqli_query($con, $sql);
	$row = mysqli_fetch_array($result);
	$pair_id = $row['pair_id'];
	
	if($pair_id != NULL)

        {
		//insert the answer
		$sql="UPDATE PAIR SET pw_answer=$answer WHERE player_w='$username'";
		$result=mysqli_query($con, $sql);
		$player_w = $username;

		$sql="SELECT player_b FROM PAIR WHERE pair_id=$pair_id";
		$result=mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$player_b = $row['player_b'];

	}
//User Must be player2
	else

	{
		//insert the answer
		$sql="UPDATE PAIR SET pb_answer=$answer WHERE player_b='$username'";
		$result = mysqli_query($con, $sql);
		$player_b = $username;

		$sql="SELECT player_w FROM PAIR WHERE pair_id=$pairid";
		$result=mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$player_w = $row['player_w'];
	}

	include 'WaitForAnswer.php';
?>
