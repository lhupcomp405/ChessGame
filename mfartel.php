<?php
$host="willy.lhup.edu";
$myusername="<username>";
$mypassword="<password>";
$db_name="comp405"; 


// Connect to server
$conn = mysql_connect("$host", "$myusername", "$mypassword");
if (! $conn)
{
die("cannot connect"); 
}
mysql_select_db("$db_name")or die("cannot select DB"); //Select Database

mysql_query("INSERT INTO GAME (game_num, player1, player2) 
VALUES (1616, 'kgood', 'kgood')", $conn); //Insert New Game Entry
/*
$sql = 'Select * from GAME';

$results = mysql_query($sql, $conn);


if(! retval)
{
die('Could not get Data');
}
while($row = mysql_fetch_assoc($results))
{
echo "ID :{$row['game_num']} <br>";
echo "Player1 :{$row['player1']} <br>";
echo "Player2 :{$row['player2']} <br>";
}
*/

$count = 1;
if(isset($_POST['makeMove']))
{	
	mysql_query("INSERT INTO MOVE (game_num, movenum, color, end_loc) 
VALUES (1616, $count , 'B', 10 )", $conn); //Insert Move Entry
$count++; //Problem with Refresh
}
?>

