<?php
/************************************************************************
logout.php
Author: Kyle Leber

This file is executed whenever the currently active (logged in user) for
a given session needs the session to be destroyed.  Typically this will 
be done whenever the user requests to log out of their account. The session 
will be destroyed and then the user will be redirected to ChessGameLogin.html.


************************************************************************/
//This php file Destroys the current session.  If for any reason the session becomes destroyed prior to hitting logout,
//the session will be started again, and then destroyed. The user will then be redirected to the login page.
	session_destroy();
	header('location: ChessGameLogin.html');
?>
