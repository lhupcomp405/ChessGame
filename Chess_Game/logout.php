<?php
//contact Kyle if you have any questions
//This php file Destroys the current session.  If for any reason the session becomes destroyed prior to hitting logout,
//the session will be started again, and then destroyed. The user will then be redirected to the login page.
	session_destroy();
	header('location: ChessGameLogin.html');
?>
