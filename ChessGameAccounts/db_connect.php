<?php
/*******************************************************************
db_connect.php
Author: Kyle Leber

This file is included in all files that require a connection to the database.
The variable $dbhost is the location of the mysql database. The variable
$dbuser is the username in which will be used to connect to the database.
The variable $cmd is the command to retrieve the password from the jar file
that corresponds to the value of $dbuser. The variable $dbpass is the password 
used in junction with the username and is retrieved by the $cmd variable. The variable
$dbdatabase is the name of the database which is to be used. $tblname is the
name of the table in the database. $con is the mysqli command to connect to the
database using $dbhost, $dbuser, $dbpass, $dbdatabase respectively in that
order.  The connection is checked to ensure success, if it is not, then the script
will die and the error message will be echoed on the page.

*******************************************************************/



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
