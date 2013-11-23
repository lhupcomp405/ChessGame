function checkResolution() {
    screenWidth = screen.width;
    screenHeight = screen.height;
    var message = screenWidth + " by " + screenHeight;
}

function boardSize() {
    checkResolution();
    document.getElementById("layout").style.width = (screenWidth * (75 / 100));
    document.getElementById("layout").style.height = (screenHeight * (60 / 100));
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

function setupScreen(x) {
    getScreenHeight(x, 100);
    getScreenWidth(x, 100);
}
