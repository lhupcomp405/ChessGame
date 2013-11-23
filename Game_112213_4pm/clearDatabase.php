<?php
	// Connect to server
	$host="127.0.0.1";
	$myusername="root";
	$mypassword="usbw";
	$db_name="comp405";
	
	$conn = mysql_connect("$host", "$myusername", "$mypassword");
	if (! $conn) {
		die("cannot connect"); 
	}
	mysql_select_db("$db_name")or die("cannot select DB"); //Select Database

	$SQL = "UPDATE BOARD SET boardstring='W XX BR BN BB BK BQ BB BN BR BP BP BP BP BP BP BP BP XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX WP WP WP WP WP WP WP WP WR WN WB WK WQ WB WN WR' 
			WHERE id ='1'";

	$result = mysql_query($SQL);
	echo "Board Successfully Reset!";
	mysql_close($conn);
?>