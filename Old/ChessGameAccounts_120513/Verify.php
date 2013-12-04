<?php
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
$isActiveSql = "SELECT account_flag FROM $tblname WHERE username='$myusername'";

//runs the query
$isActiveResult = mysqli_query($con,$isActiveSql) or die(mysql_error());
//fetches the rows that are associated with the query and allows us to pull individual information
//out of the selected row by using the name of the field and echoing it.
while($row = mysqli_fetch_assoc($isActiveResult)) {
    $isActive = $row['account_flag'];
}

//If the count from above is one and the account is active(value of 1), then we will start a session and
//create a session variable for the username.  Then the user will be redirected to the account page.  If
//not successful, then the user will be redirected to the login page. 
if($count == 1 && $isActive == 1){
	session_start();
	$_SESSION['username'] = $myusername;	
	header('location: ChessGameAccountPage.html');
}else{
	header('location: ChessGameLogin.html');
}

mysqli_close($con);
?>
