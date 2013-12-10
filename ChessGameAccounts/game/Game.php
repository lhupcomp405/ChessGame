<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- myTemplate.html
     An example XHTML template
     -->
<html lang = "en"  xmlns = "http://www.w3.org/1999/xhtml">
	<head>
	<title>Chess Game</title>
	<link rel="stylesheet" type="text/css" href="ChessStyleSheet.css">
	<?php error_reporting(E_ALL ^ E_NOTICE); ?>
	<script language="javascript" src="MouseEvents.js"></script>
	<script language="javascript" src="GlobalVars.js"></script>
	<script language="javascript" src="OpponentCalls.js"></script>
	<script language="javascript" src="ConstructBoard.js"></script>
	<script language="javascript" src="Highlight.js"></script>
	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script language="javascript" src="MakeMove.js"></script>
	<script language="javascript" src="RecordBoard.js"></script>
		<script language="javascript" src="Resolution.js"></script>
	<script language="javascript"> 
		username = <?php echo $_SESSION['username']; ?>;
	</script>
	<script language="javascript">setInterval(function(){update()},5000);</script><!-- connects to the database every 5 seconds to try to update -->
	<script language="javascript">
	$.ajax({type: "POST", url: "setPlayer.php", success: function(data){
					playerScreen = data;
					//alert('Inside the answerw post ['+answer1+']');	
				}, dataType: "text", async: false});




	</script> <!-- takes the player from the url -->
	
	<?php 
	//commented out until we actually start connecting to the database
		session_start();
		if(empty($_SESSION['username'])){
				session_destroy();
				header('Location: ChessGameLogin.html');
		}
    ?>

	</head>
	
	<body onLoad="setupScreen(this, 100, 100)" onresize="boardSize()">
		<table id="header" width="100%" height="7%">
			<tr id="headerRow" class="header">
				<td width="15%">
					<p id="playersMove" class="white">
						WHITE'S MOVE
					</p>
				</td>
				<td>
					<p class="white">
					
					<?php
						
							include 'db_connect.php';
							session_start();
							$username = $_SESSION['username'];
							$playerb = $_SESSION['playerb'];
							$playerw = $_SESSION['playerw'];
							
							if($playerb == $username){
								echo "Your opponent is: " . $playerw;
							}else{
								echo "Your opponent is: " . $playerb;
							}
											
					?>

					</p>
				</td>
				<td width="15%">
					<p class="white">
					<?php echo $_SESSION['username']; ?>	
					</p>
				</td>
			</tr>
		</table>
		<table id="layout" class="layout"><!-- layout square, including game board and control buttons -->
			<tr id="game">

				<td id="boardCell" rowspan="5" class="boardCell">
					<table id="board" class="board"><!-- chess board -->
						<script>
							createBoard(playerScreen);<!-- 1 is player 1/white's perspective, 2 is player 2/black's perspective-->
						</script>
					</table>
				</td>
				<td>
					<table id="optionsDisplay" class="optionsDisplay"><!-- taken table and all control buttons -->
						<tr>
							<td>
								<table id="taken" class="taken"><!-- Contains all pieces removed from play -->
									<tr id="takenrow1" class="takenTitle">								
										<p>
										Taken Pieces
										</p>
									</tr>
									<tr id="takenrow2" width="100%">
										<td id="takenWhiteTitle" class="takenColumn"><!-- White's column -->
											<p>
											White
											</p>
										</td>
										<td id="takenBlackTitle" class="takenColumn"><!-- Black's column -->
											<p>
											Black
											</p>
										</td>
									</tr>
									<tr id="takenrow2" width="100%">
										<td id="takenWhite" class="takenColumn"><!-- White's column -->
											<p>
											
											</p>
										</td>
										<td id="takenBlack" class="takenColumn"><!-- Black's column -->
											<p>
											
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<table id="buttonMenu"><!-- Control buttons -->
									<tr>
										<td id="resetMove" class="controlButton">
											<p>
												<button type="button" onClick="resetMove()">Reset Move</button>
											</p>
										</td>
										<td id="makeMove" class="controlButton">
											<p>
												<button type="button" onClick="makeMove()">Make Move</button>
											</p>
										</td>								
										<td id="check" class="controlButton">
											<p>
												<button type="button" onClick="callCheck()">Move & Call Check</button>
											</p>
										</td>
									</tr>
									<tr>
										<td id="checkMate" class="controlButton">
											<p>
												<button type="button" onClick="checkMate()">Move & Call Checkmate</button>
											</p>
										</td>
										<td id="staleMate" class="controlButton">
											<p>
												<button type="button" onClick="callStalemate()">Call Stalemate</button>
											</p>
										</td>
										<td id="Concede" class="controlButton">
											<p>
												<button type="button" onClick="concede()">Concede</button>
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		<!-- end game stuffs -->
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
