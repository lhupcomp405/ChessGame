<?php   
/********************************************************************
sendVerificationEmail.php
Author: Kyle Leber

This php file is called and executed when an account is successfully created. The purpose of
this file is to send an email notification to the registered email address and displays that
account’s username and password login credentials.  The email will contain a link that is 
needed to activate the user’s account before they are allowed to login.  The generated
verification link is done by providing $_GET values directly in the URL, specifically
the email of the account and the corresponding hash value that was generated 
prior to this code being executed. Upon the submission of the provided link in the
email, the values will be submitted to verifyAccount.php.


********************************************************************/




    $to = $myemail; // Send email to the user

    $subject = 'Signup | Verification'; // The subject of the email  
	
     $url = '';
     $internalPenguinIp = '10.1.2.2';
    if (substr($_SERVER['REMOTE_ADDR'], 0, strlen($internalPenguinIp)) === $internalPenguinIp) {
    	$url = "http://web/~comp405/zswartwo/verifyAccount.php?email=$myemail&hash=$hash";
    }else{
	$url = "http://penguin.lhup.edu/~comp405/zswartwo/verifyAccount.php?email=$myemail&hash=$hash";
    }
	$message = ' 
     
    Thanks for signing up! 
    Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below. 
     
    ------------------------ 
    Username: '.$myusername.' 
    Password: '.$myunhashedpassword.' 
    ------------------------ 
     
    Please click this link to activate your account: 
   
    '.$url.'
     
    '; // Our message above including the link  
	                 
    
    $headers = 'From:lhucomp405@gmail.com' . "\r\n"; // Set from headers  
    $mail = mail($to, $subject, $message, $headers); // Send our email
?>
