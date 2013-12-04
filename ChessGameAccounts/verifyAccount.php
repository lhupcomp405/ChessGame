<?php

/*********************************************************************************
verifyAccount.php
Author:Kyle Leber

This php file is executed when the user clicks or copies the URL address
and submits the unique URL through a web browser that is sent via email from the 
server to verify the account upon creation.  Upon the submission of the
URL, the data submitted will be checked for equality against a field in
the database, in which is designated as account_flag and one of two
actions will occur.  If the value in the field for that account is set to 0,
the account is referred to as inactive.  If the value in the field for that account
is set to 1, the account is referred to as active.  Upon submission, if 
account_flag is currently 0, then account_flag will be set to 1 and the user
will be notified on the web page that their account is now active.  Upon
submission, if account_flag is currently 1, then the user will be notified on
the web page that the account is already active.
**********************************************************************************/


//includes db_connect.php file
include 'db_connect.php';
	 
//checks $_GET values to see whether the values exist or are empty.
//if they exist, then the url is parsed and each values are assigned to variables
if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash'])){  
	// Set email variable
	$email = mysql_escape_string($_GET['email']);  
	// Set hash variable
   	$hash = mysql_escape_string($_GET['hash']);   
}else{
	//redirect to login page if force verification attempt or no $_GET values are received....
	header('location: ChessGameLogin.html');
}
    //Creates a SQL statement that reads in pseudocode :
    //select everything from the ACCOUNT table where the fields in the table "email_address" and "hash" equal the value of the declared variables above
    $sqlquery = "SELECT * FROM ACCOUNT WHERE email_address='$email' AND hash='$hash'";
    //executes the query or if it fails it will return the error	
    $search = mysqli_query($con,$sqlquery) or die(mysql_error());   
    //The number of rows that match the query is stored into $match
    $match  = mysqli_num_rows($search);  
 	//if there is a match ( there SHOULD only be one ), the query will pull the account flag from the row that contains the matched 
	//hash, and checks if it is equal to 1.  If it is, it means the account is already active.  If the status is 0, then it will
	//update the ACCOUNT table by setting the account_flag field to 1 where the hash matches. Then it displays the success message and 
	//a button to redirect to the login page.  

	if($match > 0){ 
		$checkVerificationStatus = "SELECT account_flag FROM Account WHERE hash='$hash'";
		$query = mysqli_query($con, $checkVerificationStatus);
		$row = mysqli_fetch_assoc($query);
		$status = $row['account_flag'];
		if($status == 1){
			echo "Account has already been activated<Br/>";
			echo "<a href='ChessGameLogin.html'>Return to Login</a>";
			die();
		}
		$newQuerysql = "UPDATE ACCOUNT SET account_flag=1 WHERE hash='$hash'";
		mysqli_query($con,$newQuerysql);
		echo "<center>Your account is now activated<br/>";
		echo "<a href='ChessGameLogin.html'>Return to Log in</a>";
	}else{
		echo "<center>Account is already activated!<br/>";
		echo "<a href='ChessGameLogin.html'>Return to Log in</a>";
	}
?>