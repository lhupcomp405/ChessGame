<?php
//This php loops until both answer slots have an answer in them
//Written by: Zachary Swartwood
//	      Kyle Leber
//	      Matt Fartel


//Check If both players responded
	$playersanswered = false;
	$answerw = -1;
	$answerb = -1;
	$count = 0;
	
	//Loop until both respond
	do
	{
		$sql="SELECT pw_answer FROM PAIR WHERE pair_id=$pair_id";
		$result=mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$answerw = $row['pw_answer'];

		$sql="SELECT pb_answer FROM PAIR WHERE pair_id=$pair_id";
		$result=mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$answerb = $row['pb_answer'];

	//Count is greater than 15. Timeout
		if($count > 15)
		{
			$answerw = 0;
			$answerb = 0;
		}

	//Increment count
		$count++;
	
	//Both players answered or a timeout
		if($answerw != -1 && $answerb != -1)
		{	

			$playersanswered = true;
		}

	//sleep 1 seconds
		sleep(1);

	}while($playersanswered == false);
	
	include 'CheckAnswers.php';
?>
