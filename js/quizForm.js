class QuizForm{
    constructor(){
        this.title = createElement("h1");
        this.option1=createButton("50","1")
        this.option2=createButton("32","2")
        this.option3=createButton("60","3")
        this.option4=createButton("35","4")
        this.correctAnswer=2;
        this.answer = null;
        this.question=createElement("h2");
    }
    hide(){
        this.title.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.question.hide();
    }
    display(){
        this.title.html("Question 1");
        this.title.position(350,50);

        this.question.html("What is 2+5x 6?");
        this.question.position(150,100);
        this.option1.position(150,200);
        this.option2.position(150,300);
        this.option3.position(150,400);
        this.option4.position(150,500);

        this.option1.mousePressed(()=>{
           this.answer =  this.option1.value();
        })
        this.option2.mousePressed(()=>{
            this.answer =  this.option2.value();
         })
         this.option3.mousePressed(()=>{
            this.answer =  this.option3.value();
         })
         this.option4.mousePressed(()=>{
            this.answer =  this.option4.value();
         })
        

    }
}