<?php
/***************************************************************************
Verify.php
Author: Kyle Leber
This php file is executed when the user submits a query to login to their
account page.  The user will supply their login credentials, both a username
and password.  The username is sent over as raw text and the password is
encrypted using both an md5 and a sha1 encryption hash. These values are
checked against the username and password fields in the database.  Both
the username and password must match a tuple combination in the database
ACCOUNT table.  If there is a match, the account is then checked to determine
if the account is active or inactive.  If the account is inactive, and the supplied
login credentials are a match, then the user will be returned to the login screen.
If the account is active, and the supplied login credentials are a match, then the
user will be redirected to that account’s.  If the user enters an incorrect
combination of the username and password, the user will be returned to the
login screen.
***************************************************************************/
include 'db_connect.php';

// username and password sent from form
$myusername=$_POST['username'];
$mypassword=$_POST['hiddenfield'];


// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_escape_string($myusername);
$mypassword = mysql_escape_string($mypassword);

//query that selects everything from the given table name and the username and password matches
//the myusername and mypassword variables.
$sql = "SELECT * FROM $tblname WHERE username='$myusername' AND password='$mypassword'";

//runs the query and assigns the result to $result.
$result = mysqli_query($con,$sql);

// Mysql_num_row is counting table row
$count = mysqli_num_rows($result);

//This query is used to select the account_flag from the given table where the username matches our myusername variable
$isActiveSql = "SELECT account_flag,alias FROM $tblname WHERE username='$myusername'";

//runs the query
$isActiveResult = mysqli_query($con,$isActiveSql) or die(mysql_error());
//fetches the rows that are associated with the query and allows us to pull individual information
//out of the selected row by using the name of the field and echoing it.
while($row = mysqli_fetch_assoc($isActiveResult)) {
    $isActive = $row['account_flag'];
    $alias = $row['alias'];
}

//If the count from above is one and the account is active(value of 1), then we will start a session and
//create a session variable for the username.  Then the user will be redirected to the account page.  If
//not successful, then the user will be redirected to the login page. 
if($count == 1 && $isActive == 1){
	session_start();
	$_SESSION['username'] = $myusername;	
	$_SESSION['alias'] = $alias;

	header('location: ChessGameAccountPage.html');
}else{
	header('location: ChessGameLogin.html');
}

mysqli_close($con);
?>
