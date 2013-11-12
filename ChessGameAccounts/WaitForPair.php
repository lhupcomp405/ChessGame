<?php
session_start();
	//$username= 'zswartwo';
	$paired = false;

//Either the user was paired or they were not
//Now the player needs to check if they are pair up
	while($paired == false)
	{	
	//Check if paired now
		
		$sql="SELECT pair_id FROM PAIR WHERE player_w='$username' OR player_b='$username'";
		$result=mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$pair_id = $row['pair_id'];
		//echo 'before the checks';
		if($_SESSION['exit'] == "exit"){
			include 'DeQueue.php';
			echo "Player has been taken out of the queue";
			exit();
		}
		else if($pair_id == NULL)	//Not paired
		{
			//echo 'not in pair';
			$paired = false;
			//sleep(5); //sleep five seconds
		}
		else //In a pair
		{
			echo 'PAIRED!!!!!!';
			$paired = true;
		}
		

	}//End of waiting for pair loop
	
?>
