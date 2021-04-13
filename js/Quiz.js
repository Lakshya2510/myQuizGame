class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    background("yellow");

    fill("Red");
    textSize(35);
    text("Result of the Quiz",330,50)

    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("*Note: Contestant who answered Correct are hilighted in green color!",130,230)
    }
    
    for(var plr in allContestants){

      var correctAns="2";
      if (correctAns === allContestants[plr].answer) 
      fill("Green");
      else
      fill("Red");

      textSize(15);
      text(allContestants[plr].name+ ": " +allContestants[plr],answer,120,330)
    }    
  }

}
