<?php
<?php
		session_start();
		if(empty($_SESSION['username'])){
			session_destroy();
			header('Location: ChessGameLogin.html');
		}

	?>

include "db_connect.php";
$tbl_name = "ACCOUNT";
error_reporting(E_ALL);
ini_set('display_errors','1');

//variables are created and assigned based upon the form data sent.
$alias = $_POST['Alias'];
$securityQuestion = $_POST['SecurityQuestion'];
$securityAnswer = $_POST['SQA'];
$phone = $_POST['phoneNum'];
$skill = $_POST['skillLevel'];

session_start(); 
$myusername = $_SESSION['username'];
echo $myusername;
echo $alias;

if ($alias != "" && $alias != null){
  $updateAlias = mysqli_query($con, "UPDATE $tbl_name SET alias= '$alias' WHERE username='$myusername'");
}
if ($securityQuestion != "" && $securityQuestion != null){
  $updateSQ = mysqli_query($con, "UPDATE $tbl_name SET security_question= '$securityQuestion' WHERE username='$myusername'");
}
if ($securityAnswer != "" && $securityAnswer != null){
  $updateSQA = mysqli_query($con, "UPDATE $tbl_name SET security_question_answer = '$securityAnswer' WHERE username='$myusername'");
}
if ($phone != "" && $phone != null){
  $updatePhone = mysqli_query($con, "UPDATE $tbl_name SET phone_number = '$phone' WHERE username='$myusername'");
}
if ($skill != "" && $skill != null){
  $updateSkill = mysqli_query($con, "UPDATE $tbl_name SET skill_level= '$skill' WHERE username='$myusername'");
}

//grab account
$sql="SELECT security_question, security_question_answer,alias, skill_level, phone_number FROM $tblname WHERE username='$myusername'";

$result=mysqli_query($con, $sql);
$count=mysqli_num_rows($result);
if ($count > 0) {
	header("Location: ".$_SERVER["HTTP_REFERER"]);
} else {

}
//closes connection
mysql_close($db_handle);

?>
