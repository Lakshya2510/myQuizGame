class Form {
  constructor() {
    this.input = createInput("name");
    this.playButton = createButton("Play");
    this.greeting = createElement("h2");
    this.title = createElement("h2");
    this.startButton = createButton("Start");
  }
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.title.hide();
    this.input.hide();
    this.startButton.hide();
  }
  display() {
    this.title.html("MARIO QUIZ DASH");
    this.title.position(350, 50);
    this.title.style("font-size", "70px");
    this.title.style("color", "skyblue");
    this.input.position(560, 300);
    this.input.style("width", "200px");
    this.input.style("height", "40px");
    this.playButton.position(560, 400);
    this.playButton.style("width", "200px");
    this.playButton.style("height", "40px");
    this.playButton.style("background", "lightpink");

    this.playButton.mousePressed(() => {
      this.playButton.hide();
      this.input.hide();
      this.greeting.html("Hello " + this.input.value());
      this.greeting.position(500, 250);
      this.greeting.style("color", "white");
      this.greeting.style("font-size", "50px");
      this.greeting.style("self-align", "center");
      text("Rules", 400, 300);
      this.startButton.position(560, 400);
      this.startButton.style("width", "200px");
      this.startButton.style("height", "40px");
      this.startButton.style("background", "lightpink");
    });

    this.startButton.mousePressed(() => {
      this.hide();
      clear();
      gameState = PLAY;
      spawn = new Spawn();
      console.log(gameState);
    });
  }
}
