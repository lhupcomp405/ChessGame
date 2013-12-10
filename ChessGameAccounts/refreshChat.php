<?php
	/* Created by Timothy Francisco Bower (TFB), Matt Rogers and Wes Charles
    		Please contact tbower2@lhup.edu 
		if there are any question regarding question on functionality
	*/
	/* TFB: Queries the database to pull username and message to output to Chatholder*/
	include 'db_connect.php';
	/* TFB: Pushes entire database to chatHolder */
	$sql = "SELECT * FROM CHAT";
	$query = mysqli_query($con, $sql);
	$wholeChat;
	/* TFB: Formats the message that is queried input the message field */
	while($row = mysqli_fetch_assoc($query)){
		$message = $row['username'] .": " .$row['message'] . "<br/>";
		$wholeChat = $wholeChat . $message;
	}
	
	echo $wholeChat;

?>
