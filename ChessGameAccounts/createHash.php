<?php
/*********************************************************************
createHash.php
Author: Kyle Leber

This file is included into createAccount.php if the user submits valid
data for all of the fields and the account, designated by the username
field, does not already exist.  The hash is generated using an md5 hash
of a random value between 0 and 1000 inclusively. This value is stored in
the variable $hash and is inserted into the ACCOUNT table in the hash 
field to be referenced later in the verifyAccount.php.
*********************************************************************/
	//generates a random hash value in Hexidecimal
	$hash = md5( rand(0,1000) ); // This will be a 32 character hash function.. Hexidecimal  

?>
