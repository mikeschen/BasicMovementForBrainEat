var canvas;
var context;
var hero = document.getElementById("hero");
var background = document.getElementById("background");
function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.drawImage(background, 0, 0, 750, 550);
    player.draw();
}
window.onload = function () {
    canvas = document.getElementById("myCanvas");
    var cwidth = canvas.width;
    var cheight = canvas.height;
    context = canvas.getContext("2d");
    document.addEventListener('keydown', keyboardInput);
    gameLoop();
};
var cPlayer = (function () {
    function cPlayer(x, y, speed, width, height) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.draw = function () {
            context.save();
            context.translate(_this.width, _this.height);
            context.translate(_this.x, _this.y);
            context.drawImage(hero, 0, 0, 50, 60);
            context.restore();
        };
        x = 0;
        y = 0;
        speed = 0;
    }
    return cPlayer;
}());
var player = new cPlayer(350, 300, 0, 50, 60);
function keyboardInput(event) {
    if (event.keyCode == 37 || event.keyCode == 65) {
        player.x -= 10;
    }
    else if (event.keyCode == 38 || event.keyCode == 87) {
        player.y -= 10;
    }
    else if (event.keyCode == 39 || event.keyCode == 68) {
        player.x += 10;
    }
    else if (event.keyCode == 40 || event.keyCode == 83) {
        player.y += 10;
    }
}
