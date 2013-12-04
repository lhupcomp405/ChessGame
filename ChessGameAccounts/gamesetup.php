<?php
function foo()
{
	include 'db_connect.php';
	
	function pair_up ($status, $skill)
	{ 
	//Gets the first player queueid and then username using subquery
		 $sql="SELECT MIN(queue_id) FROM (SELECT TOP 2 * FROM QUEUE WHERE status=$status AND skill=$skill)";
		 $player1queueid=mysqli_query($con, $sql);
		 $sql="SELECT username FROM QUEUE WHERE queue_id='$player1queueid'";
		 $player1username=mysqli_query($con,$sql);
		 
	//Gets the second player queueid and then username and subquey
		 $sql="SELECT MAX(queue_id) FROM (SELECT TOP 2 * FROM QUEUE WHERE status=$status AND skill=$skill)";
		 $player2queueid=mysqli_query($con, $sql);
		 $sql="SELECT username FROM QUEUE WHERE queue_id='$player2queueid'";
		 $player2username=mysqli_query($con, $sql);
		 
	//Update Player1's status in QUEUE to pair
		 $sql="UPDATE QUEUE SET status=3 WHERE queue_id=$player1queueid";
		 $query=mysqli_query($con,$sql);
	//Update Player2's status in QUEUE to pair
		 $sql="UPDATE QUEUE SET status=3 WHERE queue_id=$player2queueid";
		 $query=mysqli_query($con,$sql);
		  
	//Gets max pairid and increments it by 1
		 $sql="SELECT NVL(MAX(pair_id),-1) FROM PAIR";
		 $result=mysqli_query($con,$sql);
		 $pairid=$result + 1;
	
	//Inserts the two players into the pair table
		 $sql="INSERT INTO PAIR(pair_id, player_w, pw_answer, player_b, pb_answer)
				VALUES ($pairid, '$player1username', -1, '$player2username', -1)";
		 $query=mysqli_query($con,$sql);
		 
	}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
//Get the username
	session_start();
	//$username = $_SESSION['username'];
	
//Check if already in queue
	$sql="SELECT queue_id FROM QUEUE WHERE username='$username'";
	$result=mysqli_query($con,$sql);

//If not in the QUEUE, continue
   if($result != NULL){

//Get the skill level from the Account table
	$sql="SELECT skill_level FROM ACCOUNT WHERE username='$username'";
	$skill=mysqli_query($con,$sql); 

//Gets max queueid and increments it by 1
	$sql="SELECT NVL(MAX(queue_id),-1) FROM QUEUE";
	$result=mysqli_query($con,$sql);
	$queueid=$result + 1;
	
//Sets the Queue Status
	$status=2;
	
//This inserts the user into the Queue table
	$sql="INSERT INTO QUEUE(queue_id, username, skill, status) 
			VALUES ($queueid, '$username', $skill, $status)";
	$query=mysqli_query($con, $sql);
	
//----------------------------------------------------------------------------------------------------
//User is Queued

//Send an alert to the user

	echo '<script type="text/javascript">alert("You are now queued for a game."); </script>';



//---------------------------------------------------------------------------------------------------
//Check if it can be paired
//Count the number of users in Queue that have a Queue status of 0 and the same rank as the user
	$sql="SELECT * FROM QUEUE WHERE status=$status AND skill_level=$skill";
	$result=mysqli_query($con, $sql);
	$count = mysqli_num_rows($con, $result);
	
//If its possible for a match to occur
	if($count >=2)
	{
	//Pair
		pair_up($skill, $status);
	}	 
//----------------------------------------------------------------------------------------------------
//Either the user was paired or they were not
//Now the player needs to check if they are pair up

	$sql="SELECT pair_id FROM PAIR WHERE player_w='$username' OR player_b='$username'";
	$pairid=mysqli_query($con, $sql);
	if($pairid == NULL) //Not paired
	{
		$paired = false;
	}
	else //In a pair
	{
		$paired = true;
	}
	//If not paired, loop until you are
	while(!$paired)
	{
		sleep(5); //sleep five seconds
	
	//Check if paired now
		$sql="SELECT pair_id FROM PAIR WHERE player_w='$username' OR player_b='$username'";
		$pairid=mysqli_query($con, $sql);
		if($pairid == NULL)	//Not paired
		{
			$paired = false;
		}
		else //In a pair
		{
			$paired = true;
		}
	}//End of waiting for pair loop

//------------------------------------------------------------------------------
//Player is curently in a pair
//Javascript with ajax to start a confirm box with ajax to get response back to the php
	echo '<script type="text/javascript" src="jquery.js">
		  
	      //Confirm box appears
	      var response=confirm("You have been paired. Would you like to play?");
		  //Get the answer
	      var answer;
	      if(response == true){
		   answer = "yes";
	      } else {
		   answer = "no";
	      }

	      //Get the username sent in to the javascript
	      var pairid = <?php echo json_encode($username); ?>;
	      
		  //This is a ajax/jquery function to start the validate php
	      $.post("validate.php",{postanswer:answer, postusername:username},
	      function(data)
	      {
			$("#result").html(data);
	      });

	       </script>';

	//Destroys this session 
	//session_destroy();
   }
}
