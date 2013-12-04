<?php
//contact Kyle if you have any questions
//include is used to help modularize different aspects, similar to CSS files in the essence
//that one change can influence multiple pages at the same time.  I included a sample db_connection
//file.
include 'db_connect.php';

//These variables are assigned using the posted values from the form on ChessGameSignUp.html
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$dateofbirth =$_POST['dateofbirth'];
$myusername=$_POST['username'];
$alias = $_POST['alias'];
$myemail = $_POST['email'];
$mypassword=$_POST['hiddenfield'];
$securityQuestion = $_POST['securityQuestion'];
$securityAnswer = $_POST['securityAnswer'];
$phone = $_POST['phone'];
$skill = $_POST['skillLevel'];

//BEGIN SQL INJECTION PROTECTION
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myemail = stripslashes($myemail);
$dateofbirth = stripslashes($dateofbirth);
$alias = stripslashes($alias);
$securityQuestion = stripslashes($securityQuestion);
$phone = stripslashes($phone);
$skill = stripslashes($skill);
$firstname = stripslashes($firstname);
$lastname = stripslashes($lastname);
$securityAnswer = stripslashes($securityAnswer);

$myusername = mysql_escape_string($myusername);
$mypassword = mysql_escape_string($mypassword);
$myemail = mysql_escape_string($myemail);
$dateofbirth = mysql_escape_string($dateofbirth);
$alias = mysql_escape_string($alias);
$securityQuestion = mysql_escape_string($securityQuestion);
$phone = mysql_escape_string($phone);
$skill = mysql_escape_string($skill);
$firstname = mysql_escape_string($firstname);
$lastname = mysql_escape_string($lastname);
$securityAnswer = mysql_escape_string($securityAnswer);
//END SQL INJECTION PROTECTION

//converts the birthday of the user to suit SQL standards and needs
$time = strtotime($dateofbirth);
$dateofbirth = date('Y-m-d',$time);

//selecting everything from the name of our table where the user_ID matches the $myusername content.
$sql="SELECT * FROM $tblname WHERE username='$myusername'";

//Sends the query to the currently active database
$result=mysqli_query($con, $sql);

//returns the number of rows that contain the username already... if the username already exists
//then the user will be redireected to the page he came from (ChessGameSignUp.html).
$count=mysqli_num_rows($result);

if ($count > 0) {
	header("Location: ".$_SERVER["HTTP_REFERER"]);
}else{
	//includes php file to generate a random 32 character hash.
	include 'createHash.php';

	//sql injection protects the hash
	$hash = stripslashes($hash);
	$hash = mysql_escape_string($hash);
	
	//SQL query to insert the form data of the user into the database
	$sqlquery = "INSERT INTO ACCOUNT (firstname, lastname,username, password, temp_password, hash, email_address, security_question, security_question_answer, date_of_birth, alias,
				    skill_level, chess_rank, win, loss, phone_number, profile_privacy, account_flag,player_status, temp_email_attribute) 
		VALUES ('$firstname', '$lastname','$myusername', '$mypassword', 'NULL', '$hash', '$myemail', '$securityQuestion','$securityAnswer','$dateofbirth','$alias',
			 '$skill', 2000, 0,0, '$phone','1', 'NULL', 0, 'NULL' )";

//Query is run using mysql_query and the username and attributes are added into the "users" table.
$query = mysqli_query($con,$sqlquery);

//includes to send the user an email notification
include 'sendVerificationEmail.php';



//closes connection
mysql_close($db_handle);
header('location: ChessGameVerification.html');
}

?>
