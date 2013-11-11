<?php
//contact Kyle if you have any questions
//This php file is included in the createAccount.php to be used to generate a random hash value

	//generates a random hash value in Hexidecimal
	$hash = md5( rand(0,1000) ); // This will be a 32 character hash function.. Hexidecimal  

?>
