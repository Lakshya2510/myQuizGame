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

    question.hide();
    background("yellow");

    fill("Red");
    textSize(35);
    text("Result of the Quiz",330,50)

    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      var display_Answers=230
      fill("Blue");
      textSize(20);
      text("*Note: Contestant who answered Correct are hilighted in green color!",130,230)
    }
    
    for(var plr in allContestants){

      var correctAns="2";
      if (correctAns === allContestants[plr].answer) 
      fill(0,255,0);
      else
      fill(255,0,0);

      display_Answers+=30
      textSize(15);
      text(allContestants[plr].name+ ": " +allContestants[plr].answer,350,display_Answers)
      //console.log(allContestants[plr].answer);
    }    
  }

}
