<?php
/*Author Wes Hulsizer*/
error_reporting(E_ALL);
ini_set('display_errors','1');
include 'db_connect.php';
//pull in all user accounts
$sql="SELECT username, player_status FROM ACCOUNT";
$result=mysqli_query($con, $sql);

$count = mysqli_num_rows($result);

//$AllUsers = "";

//initialize arrays
$Online = array();
$InGame = array();
	
//loop through each user start
while ($row = mysqli_fetch_array($result)){
	//assign values of user
	$username = $row['username'];
	$player_status = $row['player_status'];
	
	//concat string of all users
	//$AllUsers .= $username . " ";
	
	//create array of on-line and in game users
	//in game users will not be apart of on-line users
	if ($player_status > 3){
		$InGame[] = $username;
	} else if ($player_status == 1){
		$Online[] = $username;
	} 
}

$numUsersOnline = count($Online); 
$numUsersInGame = count($InGame);

echo "<h4>Users On-line:</h4>";
for ($x = 0; $x < $numUsersOnline; $x++){
	echo "$Online[$x] <br>";
}
echo "<h4>Users In-Game:</h4>";
if ($numUsersInGame > 0){
	for ($x = 0; $x < $numUsersInGame; $x++){
		echo "$InGame[$x] <br>";
	}
}
?>