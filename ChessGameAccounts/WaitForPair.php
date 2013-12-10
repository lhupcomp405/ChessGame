<?php
//This php loops until the it seen that the player has been put into a pair
//Written by: Zachary Swartwood
//	      Kyle Leber
//	      Matt Fartel


	$paired = false;
	$timer = 0;
	$maxtime = 30;
//Either the user was paired or they were not
//Now the player needs to check if they are pair up
	while($paired == false && $timer < $maxtime)
	{	
	
	//Check if paired now
		
		$sql="SELECT pair_id FROM PAIR WHERE player_w='$username' OR player_b='$username'";
		$result=mysqli_query($con, $sql);
		$row = mysqli_fetch_array($result);
		$pair_id = $row['pair_id'];
		
		if($pair_id == NULL)	//Not paired
		{
			//echo 'not in pair';
			$paired = false;
			sleep(1); //sleep five seconds
			$timer++;
		}
		else //In a pair
		{
			$paired = true;
		}

	}//End of waiting for pair loop
	if($timer >= $maxtime)
	{
		include 'DeQueue.php';
		echo "EXIT";
	}
?>
