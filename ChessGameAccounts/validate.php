<?php
	//dont really think ill need this
	include 'db_connect.php';



//Get the answer and username
	$answer = $_POST['postanswer'];
	$username = $_POST['postusername'];

	$player_w = NULL;
	$player_b = NULL;



//Check if the user is player1

	$sql="SELECT pair_id FROM PAIR WHERE player_b='$username'";
	$pairid = mysqli_query($con, $sql);


	if($username != NULL)

        {
		//insert the answer
		$sql="UPDATE PAIR SET pw_answer=$answer WHERE player_b='$username'";
		$result = mysqli_query($con, $sql);
		$player_w = $username;

		$sql="SELECT player_b FROM PAIR WHERE pair_id=$pairid";
		$player_b = mysqli_query($con, $sql);

	}
//User Must be player2
	else

	{
		//insert the answer
		$sql="UPDATE PAIR SET pb_answer=$answer WHERE player_w='$username'";
		$result = mysqli_query($con, $sql);
		$player_b = $username;

		$sql="SELECT player_w FROM PAIR WHERE pair_id=$pairid";
		$player_w = mysqli_query($con, $sql);
	}

//Check If both players responded
	$playersanswered = false;
	$answerw = NULL;
	$answerb = NULL;
	
	//Loop until both respond
	do
	{
		$sql="SELECT pw_answer FROM PAIR WHERE qair_id=$pairid";
		$answerw = mysqli_query($con, $sql);

		$sql="SELECT pb_answer FROM PAIR WHERE qair_id=$pairid";
		$answerb = mysqli_query($con, $sql);

		if($answerw != 0 && $answerb != 0)
		{
			$playersanswered= true;
		}

	//sleep 5 seconds
		sleep(5);

	}while(!$playersanswered)

//Need to check answers
//If player_w yes and player_b no

	if(strcmp($answerw,"yes") == 0 && strcmp($answerb,"no") == 0)
	{
	//Update player_w's queue status
		$sql="UPDATE QUEUE SET status=2 WHERE username='$player_w'";
		$result=mysqli_query($con, $sql);
		
	//Remove player_b from pair
		$sql="DELETE FROM QUEUE WHERE username='$player_b'";
		$result=mysqli_query($con, $sql);

	//Removes the pair
		$sql="DELETE FROM PAIR WHERE pair_id=$pairid";
	 	$query=mysql_query($sql);
	}

//If player_b yes and player_w no

	else if(strcmp($answerw,"yes") == 0 && strcmp($answerb,"no") == 0)
	{
	//Update player_b's queue status
		$sql="UPDATE QUEUE SET status=2 WHERE username='$player_b'";
		$result=mysqli_query($con, $sql);
		
	//Remove player_w from queue
		$sql="DELETE FROM QUEUE WHERE username='$player_w'";
		$result=mysqli_query($con, $sql);

	//Removes the pair
		$sql="DELETE FROM PAIR WHERE pair_id=$pairid";
	 	$query=mysql_query($sql);
	}

//If player_w no and player_b no

	else if(strcmp($answerw,"no") == 0 && strcmp($answerb,"no") == 0)
	{
	//Removes the pair
		$sql="DELETE FROM PAIR WHERE pair_id=$pairid";
	 	$query=mysql_query($sql);

	//Remove player_w from queue
		$sql="DELETE FROM QUEUE WHERE username='$player_w'";
		$result=mysqli_query($con, $sql);
		
	//Remove player_b from queue
		$sql="DELETE FROM QUEUE WHERE username='$player_b'";
		$result=mysqli_query($con, $sql);
	}

//If both yes
	else if(strcmp($answerw,"yes") == 0 && strcmp($answerb,"yes") == 0)
	{

	//Gets max gameid and increments it by 1
	 	$sql="SELECT NVL(MAX(game_id),-1) FROM GAME";
	 	$result=mysql_query($sql);
		$gameid=$result + 1;
	//Puts players in game table
	 	$sql="INSERT INTO GAME(game_num, player_w, player_b) VALUES ($gameid, '$player_w', '$player_b')";
	 	$query=mysql_query($sql);

	//Removes the pair
	 	$sql="DELETE FROM PAIR WHERE pair_id=$pairid";
	 	$query=mysql_query($sql);

	//Remove player_w from queue
		$sql="DELETE FROM QUEUE WHERE username='$player_w'";
		$result=mysqli_query($con, $sql);
	//Remove player_b from queue
		$sql="DELETE FROM QUEUE WHERE username='$player_b'";
		$result=mysqli_query($con, $sql);
	}

?>
