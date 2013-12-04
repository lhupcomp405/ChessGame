
<?php

//Player is curently in a pair
//Javascript with ajax to start a confirm box with ajax to get response back to the php
	echo '<script type="text/javascript" src = "jquery.js"></script>';
	echo '<script type="text/javascript">
		var answer;
		var response = confirm("You are now queued for a game."); 
		if(response){//Game was confirmed
			answer = 2;
		}
		else { //Game was cancelled
			answer = 1;
		}

		
		//var myvariable = <?php echo "FUCKKK ?>;
		
		$.post("Tester.php",{postanswer:answer},
		function(data)
	      	{
			alert(data);	
	      	});
	      </script>';


?>
