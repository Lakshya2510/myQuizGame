class Spawn {
  constructor() {}

  clouds() {
    if (frameCount % 80 == 0) {
      var cloudHeight = Math.round(random(50, 300));
      var clouds = createSprite(1200, cloudHeight, 20, 10);
      clouds.addImage(cloud_image);
      clouds.scale = 0.5;
      clouds.velocityX = -2;
      clouds.lifetime = 800;
      cloudsGroup.add(clouds);
    }
  }

  obstacles() {
    if (frameCount % 200 == 0) {
      var obstacles = createSprite(1400, 400, 50, 20);
      obstacles.scale = 0.5;
      obstacles.velocityX = -5 - score / 100;
      obstacles.lifetime = 500;
      var selectObstacles = Math.round(random(1, 4));
      switch (selectObstacles) {
        case 1:
          obstacles.addImage(obstacle1Image);
          smallObstacleGroup.add(obstacles)
          break;
        case 2:
          obstacles.addImage(obstacle2Image);
          smallObstacleGroup.add(obstacles)
          break;
        case 3:
          obstacles.addImage(obstacle3Image);
          bigObstacleGroup.add(obstacles)
          break;
        case 4:
          obstacles.addImage(obstacle4Image);
          bigObstacleGroup.add(obstacles)
          break;
        default:
          break;
      }
    }
  }
}
