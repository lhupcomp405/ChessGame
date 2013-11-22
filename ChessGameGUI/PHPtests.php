<?php
$host="127.0.0.1";
$myusername="root";
$mypassword="usbw";
$db_name="comp405"; 


// Connect to server
$conn = mysql_connect("$host", "$myusername", "$mypassword");
if (! $conn)
{
die("cannot connect"); 
}
mysql_select_db("$db_name")or die("cannot select DB"); //Select Database

//mysql_query("INSERT INTO game (gamenum, gamepiece, endloc) 
//VALUES ('1', 'kgood', '22')") or die("Failed to insert"); //Insert New Game Entry

$SQL = "INSERT INTO GAME (movenum, gamepiece, endloc) 
VALUES ('3', 'kgood', '22')";

$result = mysql_query($SQL);

mysql_close($conn);

print "Records added to the database <br>";

$conn = mysql_connect("$host", "$myusername", "$mypassword");
if (! $conn)
{
die("cannot connect"); 
}
mysql_select_db("$db_name")or die("cannot select DB"); //Select Database

$sql = 'Select * from GAME';

$results = mysql_query($sql);

if(!$results)
{
die('Could not get Data');
}
while($row = mysql_fetch_assoc($results))
{
echo "MoveNumber :{$row['movenum']} <br>";
echo "GamePiece :{$row['gamepiece']} <br>";
echo "EndLoc :{$row['endloc']} <br>";
}
mysql_close($conn);
?>