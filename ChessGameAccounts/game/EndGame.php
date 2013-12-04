<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- myTemplate.html
     An example XHTML template
     -->
<html lang = "en"  xmlns = "http://www.w3.org/1999/xhtml">
	<head>
	<title>End Game Results</title>
	<link rel="stylesheet" type="text/css" href="ChessStyleSheet.css">
	<?php error_reporting(E_ALL ^ E_NOTICE); ?>
	<script language="javascript" src="EndGameFunctions.js"></script>
	<script language="javascript">
		outcome = <?php echo ($_GET["outcome"]); ?>;
		player = <?php echo intval($_GET["player"]); ?>;
	</script>
	
	<?php 
		session_start();
		if(empty($_SESSION['username'])){
				session_destroy();
				header('Location: ChessGameLogin.html');
		}
    ?>

	</head>
	
	<body onLoad="determineOutcome()">
		<table id="header" width="100%" height="7%">
			<tr id="headerRow" class="header">
				<td width="15%">
					<p id="playersMove" class="white">
						
					</p>
				</td>
				<td>
					<p class="white">
						End Game Results
					</p>
				</td>
				<td width="15%">
					<p class="white">
						<?php session_start();  echo $_SESSION['username'];?>
					</p>
				</td>
			</tr>
		</table>
		<table id="layout" class="layout"><!-- layout square, including game board and control buttons -->
			<tr>
				<td>
					<table id="results" class="results">
						<tr height="20%">
							<td class="rowLine">
								<p class="big">
									White Player
								</p>
							</td>
							<td class="rowLine">
								<p class="big">
									Black Player
								</p>
							</td>
						</tr>
						<tr height="80%">
							<td id="white">
								You either won or lost or tied.
							</td>
							<td id="black">
								You did something similar.
							</td>
						</tr>
					</table>
				</td>
			</tr>
		<!-- end game stuffs -->
		</table>
		<table class="returnHomePage">
			<tr>
				<td>
					<button type="button" onClick="returnHomepage()">Return to Account Page</button>
				</td>
			</tr>
		</table>
		<table width="100%">
		<tr id="chat" class="chat" >
			<td>
				<p class="white">
				</p>
			</td>
		</tr>
		</table>
	</body>
</html>
