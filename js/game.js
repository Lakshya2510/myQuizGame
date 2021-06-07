class Game {
  constructor() {
    this.answered = 0
    this.score = 0
    this.highScore = 0
  }

  start() {
    form = new Form();
  }

  play() {
    reset.visible = false;
    gameOver.visible = false;
    this.score = this.score + Math.round(getFrameRate() / 60);
    
    console.log(this.score)
    
    if (keyDown("space") && mario.y > 450) {
      mario.velocityY = -10;
      //jumpSound.play()
    }
    mario.velocityY = mario.velocityY + 0.2;
    mario.collide(invisibleGround);
    
    ground.velocityX = -3;
    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
    spawn.clouds();
    spawn.obstacles();
    
    if (mario.isTouching(smallObstacleGroup)) {
      gameState = END;
      // mario.changeAnimation("marioCollided", mario_collided);
      //dieSound.play()
    }
    if (mario.isTouching(bigObstacleGroup)) {
      quizForm = new QuizForm();
      gameState = QUIZ;
     
    }
    /*
    if (score % 100 == 0 && score > 0) {
      //checkPointSound.play()
      ground.velocityX = ground.velocityX - 1;
    }
    */
   drawSprites();

   text("Score= " + this.score, 1000, 500);
   text("Best=" + this.highScore, 1000, 65); 
  }

  quiz(){
    
    quizForm.display();
    if(quizForm.answer){
      if(quizForm.answer == quizForm.correctAnswer){
        this.score+=100;
        quizForm.hide();
       gameState = PLAY;
       this.answered+=1;
      }

    }
  }

  end() {
    mario.visible = false;
    ground.velocityX = 0;
    cloudsGroup.setVelocityXEach(0);
    smallObstacleGroup.setVelocityXEach(0);
    cloudsGroup.destroyEach();
    smallObstacleGroup.destroyEach();
    cloudsGroup.setLifetimeEach(-1);
    smallObstacleGroup.setLifetimeEach(-1);
    gameOver.visible = true;
    reset.visible = true;
    if (mousePressedOver(reset)) {
      this.reset();
    }
    drawSprites();
  }

  reset() {
    gameState = PLAY;
    mario.visible = true;

    reset.visible = false;
    gameOver.visible = false;
    ground.velocityX = -8;
    smallObstacleGroup.destroyEach();
    cloudsGroup.destroyEach();
    mario.changeAnimation("running", mario_running);
    if (score > highScore) {
      this.highScore = score;
    }
    this.score = 0;
  }
}
