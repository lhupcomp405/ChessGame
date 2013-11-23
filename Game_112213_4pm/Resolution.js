var screenWidth,
	screenHeight;

function checkResolution() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    var message = screenWidth + " by " + screenHeight;
}

function boardSize() {
    checkResolution();
    var widthh = (screenWidth * (75 / 100));
    var heightt = (screenHeight * (60 / 100));
	if (widthh > heightt) {
		document.getElementById("board").style.width = heightt;
		document.getElementById("board").style.height = heightt;
	} else {
		document.getElementById("board").style.width = widthh;
		document.getElementById("board").style.height = widthh;
	}
	var mess = "width - " + widthh + " height - " + heightt;
	//alert(mess);
}

function getScreenHeight(x, y) {
    checkResolution();
    var heightSize = screenHeight * (y / 100);
    x.style.height = heightSize;
}

function getScreenWidth(x, y) {
    checkResolution();
    var widthSize = screenWidth * (y / 100);
    x.style.width = widthSize;
}

function setupScreen(x, percentX, percentY) {
    getScreenHeight(x, percentY);
    getScreenWidth(x, percentX);
}

function setupResolution(){
	checkResolution();
	
}
