<?php
	include 'db_connect.php';

	$sql = "SELECT * FROM CHAT";
	$query = mysqli_query($con, $sql);
	$wholeChat;
	while($row = mysqli_fetch_assoc($query)){
		$message = $row['username'] .": " .$row['message'] . "<br/>";
		$wholeChat = $wholeChat . $message;
	}
	
	echo $wholeChat;

?>
