<?php
//Check If both players responded
	$playersanswered = false;
	$answerw = NULL;
	$answerb = NULL;
	
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

		if($answerw != 0 && $answerb != 0)
		{
			$playersanswered = true;
		}

	//sleep 5 seconds
		//sleep(2);

	}while($playersanswered == false);
	
	include 'CheckAnswers.php';
?>
