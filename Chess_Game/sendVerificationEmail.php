<?php   
//contact Kyle if you have any questions
//Once the account is created successfully, this php file will be called and will send an email to the supplied email with a link
//that is required to activate the account.
//The hyperlink that is generated will have to be changed depending on where the file is located
//because of the internal web server not recognizing "penguin.lhup.edu" and recognizing "web".
//"penguin.lhup.edu" is to be used when accessing this from outside lock haven's internet.
//We must implement a way to check for that.. ipaddress maybe?
    $to = $myemail; // Send email to the user

    $subject = 'Signup | Verification'; // The subject of the email  
    $message = ' 
     
    Thanks for signing up! 
    Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below. 
     
    ------------------------ 
    Username: '.$myusername.' 
    Password: '.$mypassword.' 
    ------------------------ 
     
    Please click this link to activate your account: 
    
    
    http://web/~comp405/Chess_Game/verifyAccount.php?email='.$myemail.'&hash='.$hash.' 
     
    '; // Our message above including the link  
	                 
    
    $headers = 'From:lhucomp405@gmail.com' . "\r\n"; // Set from headers  
    $mail = mail($to, $subject, $message, $headers); // Send our email
?>
