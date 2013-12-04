<?php

	$paired = false;
	$timer = 0;
	$_SESSION['forcestop'] = 0;
	$forceStop = 0;
//Either the user was paired or they were not
//Now the player needs to check if they are pair up
	while($paired == false && $timer < 5)
	{	
	
	//Check if paired now
		$forceStop = $_SESSION['forcestop'];
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
		if($forceStop ==1)
		{
			$timer = 5;
		}

	}//End of waiting for pair loop
	if($timer >= 5)
	{
		include 'DeQueue.php';
		echo "EXIT";
	}
?>
