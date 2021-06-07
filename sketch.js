const START = 0;
const PLAY = 1;
const END = 2;
const QUIZ = 3;
var gameState = START;

var form, game, spawn, quizForm;

var mario;
var ground, invisibleGround;
var cloudsGroup;
var bigObstacleGroup;
var smallObstacleGroup;

var mario_running, mario_collided;
var gorund_moving, cloud_image;

var gameOverImage, gameOver;
var resetImage, reset;

var obstacle1Image;
var obstacle2Image;
var obstacle3Image;
var obstacle4Image;
var obstacle5Image;
var obstacle6Image;

/*var jumpSound;
var checkPointSound;
var dieSound;
*/

function preload() {
  mario_running = loadAnimation(
    "images/marioRunning.png",
    "images/marioRunning2.png",
    "images/marioRunning3.png",
    "images/marioRunning4.png",
    "images/marioRunning5.png",
    "images/marioRunning6.png",
    "images/marioRunning7.png",
    "images/marioRunning8.png",
    "images/marioRunning9.png",
    "images/marioRunning10.png",
    "images/marioRunning11.png",
    "images/marioRunning12.png"
  );
  mario_collided = loadAnimation("images/Mario_collided.png");
  ground_moving = loadImage("images/background1.jpg");
  cloud_image = loadImage("images/Cloud.png");
  obstacle1Image = loadImage("images/Browser.png");
  obstacle2Image = loadImage("images/Blooper.gif");
  obstacle3Image = loadImage("images/Goomba.png");
  obstacle4Image = loadImage("images/Bull_Wario.png");
  gameOverImage = loadImage("images/gameOver.jpg");
  resetImage = loadImage("images/restart.png");
}

function setup() {
  createCanvas(1200, 600);

  game = new Game();
  game.start();

  ground = createSprite(300, 250, 600, 40);
  ground.addImage(ground_moving);

  mario = createSprite(250, 400, 20, 50);
  mario.addAnimation("marioRunning", mario_running);
  mario.scale = 0.3;
  //mario.setCollider("rectangle", 0,0,150,mario.height );
  mario.debug = true;

  invisibleGround = createSprite(300, 520, 600, 5);
  invisibleGround.visible = false;
  cloudsGroup = new Group();
  bigObstacleGroup = new Group();
  smallObstacleGroup = new Group();

  gameOver = createSprite(600, 300, 20, 10);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 0.5;

  reset = createSprite(600, 200, 20, 10);
  reset.addImage(resetImage);
  reset.scale = 0.7;
}

function draw() {
  background("grey");

  if (gameState == START) {
    form.display();
  }
  if (gameState == PLAY) {
    game.play();
  }
  if (gameState == END) {
    game.end();
  }
  if(gameState == QUIZ){
    game.quiz();
  }
}
