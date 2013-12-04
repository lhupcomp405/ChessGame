<?php
//Check if it can be paired
//Count the number of users in Queue that have a Queue status of 0 and the same rank as the user
	$sql="SELECT * FROM QUEUE WHERE status=$status AND skill=$skill";
	$result=mysqli_query($con, $sql);
	$count = mysqli_num_rows($result);
	//echo "<br/>The count is : " . $count . "<br/>";
//If its possible for a match to occur
		if($count >=2){
		//Gets the first player queueid and then username using subquery
		 $sql="SELECT queue_id FROM QUEUE WHERE status=$status AND skill=$skill ORDER BY queue_id LIMIT 1 ";
		 $player1queueid=mysqli_query($con, $sql);
		 $row = mysqli_fetch_array($player1queueid);
		 $queue_id = $row['queue_id'];
		//echo "<br/>queue_id for player 1 is: " . $queue_id;
		 $sql="SELECT username FROM QUEUE WHERE queue_id=$queue_id"; 
		 //echo "<br/>The player1queueid SQL is: " . $sql;
		 $player1username=mysqli_query($con,$sql);
		 $row = mysqli_fetch_array($player1username);
		 $player_w = $row['username'];
		 //echo "<br/>The username for player 1 is: " . $player_w . " and the queue_id of player 1 is " . $queue_id;
	
		 
		 //Update Player1's status in QUEUE to pair
		 $sql="UPDATE QUEUE SET status=3 WHERE queue_id=$queue_id";
		 $query=mysqli_query($con,$sql);
		 //echo "<br/>".$player_w."'s status is now set to PAIRED";


	//Gets the second player queueid and then username and subquery
		 $sql="SELECT queue_id FROM QUEUE WHERE status=$status AND skill=$skill ORDER BY queue_id LIMIT 1";
		 $player2queueid=mysqli_query($con, $sql);
		 $row = mysqli_fetch_array($player2queueid);
		 $queue_id = $row['queue_id'];
		 //echo "<br/>queue_id for player 2 is: " . $queue_id;
		 $sql="SELECT username FROM QUEUE WHERE queue_id=$queue_id";
		 $player2username=mysqli_query($con, $sql);
	        $row = mysqli_fetch_array($player2username);
		 $player_b = $row['username'];
		 //echo "<br/>The username for player 2 is " . $player_b . " and the queue_id of player 2 is ". $queue_id;
	//Update Player2's status in QUEUE to pair
		 $sql="UPDATE QUEUE SET status=3 WHERE queue_id=$queue_id";
		 $query=mysqli_query($con,$sql);

	//Gets max pairid and increments it by 1 (PAIR TABLE)
		 $sql="SELECT MAX(pair_id) as maxpair_id FROM PAIR";
		 $result=mysqli_query($con,$sql);
	  	 $row = mysqli_fetch_array($result);
		 $pairid=$row['maxpair_id'];
		 //echo "<br/>pair id before addition is: " . $pairid ."<br/>";
		 $pairid = $pairid + 1;
		 //echo "pair id after addition is: " . $pairid . "<br/>";
	//Inserts the two players into the pair table
		 $sql="INSERT INTO PAIR(pair_id, player_w, pw_answer, player_b, pb_answer)
				VALUES ($pairid, '$player_w', -1, '$player_b', -1)";
		 $query=mysqli_query($con,$sql);
		 $sql="UPDATE ACCOUNT SET player_status=3 where username='$player_w' OR username='$player_b'";
		 $query=mysqli_query($con,$sql);
		 $sql = "DELETE FROM QUEUE WHERE username='$player_w' OR username='$player_b'";
		 $result = mysqli_query($con,$sql);
		 //echo "<br/>The two users were entered into the pair table...oh yeah, in pair_id: " . $pairid;
	}
include 'WaitForPair.php';
?>
