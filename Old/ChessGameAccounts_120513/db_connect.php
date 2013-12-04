<?php
//contact Kyle if you have any questions

//host of our database
$dbhost = 'willy.lhup.edu';
//username of the database
$dbuser = 'kkutz';
//command used to secure our database password
$cmd = 'java -jar /var/www/java/crypt.jar ' .$dbuser;
//password that is returned by the command
$dbpass = exec($cmd, $retval);
//name of the database we will be using. This can be changed to any database that the individual developer has access to.
$dbdatabase = 'comp405';
//defines a table name that we will be using.. can define multiple such as:
// $tblnameAccount = 'ACCOUNT', $tblnameGAME = 'GAME'... etc.
$tblname ='ACCOUNT';
//connects using the variables declared above and if the connection can
//not be established, the service will halt and die.
$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbdatabase);
if(!$con){
	die('Could not connect: ' . mysqli_error($con));
}

?>
