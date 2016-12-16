let canvas : HTMLCanvasElement;
let context : CanvasRenderingContext2D;
let hero = <HTMLImageElement>document.getElementById("hero");
let zombie = <HTMLImageElement>document.getElementById("zombie");
let background = <HTMLImageElement>document.getElementById("background");

function gameLoop() {
  requestAnimationFrame(gameLoop);
  context.drawImage(background, 0, 0, 750, 550);
  player.draw();
  zombie1.draw();
}

window.onload = () =>
{
  canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
  let cwidth = canvas.width;
  let cheight = canvas.height;
  context = canvas.getContext("2d");
  document.addEventListener('keydown', keyboardInput);
  gameLoop();
}

class cPlayer {
  constructor(public x: number, public y: number, public speed: number, public width: number, public height: number) {
    x = 0;
    y = 0;
    speed = 0;
  }
  public draw = () : void =>
  {
    context.save();
    context.translate(this.width, this.height);
    context.translate(this.x, this.y);
    context.drawImage(hero, 0, 0, 50, 60);
    context.restore();
  }
}

class cZombie {
  constructor(public x: number, public y: number, public speed: number, public width: number, public height: number) {
    x = 0;
    y = 0;
    speed = 0;
  }
  public draw = (): void => {
    context.save();
    context.translate(this.width, this.height);
    context.translate(this.x, this.y);
    context.drawImage(zombie, 0, 0, 50, 60);
    context.restore();
  }
}

let player = new cPlayer(100, 100, 0, 50, 60);
let zombie1 = new cZombie(200, 200, 0, 60, 60);

function keyboardInput(event: KeyboardEvent) {
  if(event.keyCode == 37 || event.keyCode == 65) {
    player.x -= 10;
  } else if (event.keyCode == 38 || event.keyCode == 87) {
    player.y -= 10;
  } else if (event.keyCode == 39 || event.keyCode == 68) {
    player.x += 10;
  } else if (event.keyCode == 40 || event.keyCode == 83) {
    player.y += 10;
  }
}
