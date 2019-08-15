let showingPercentageSuccess = document.querySelector(".showingPercentageSuccess");
let previousAndNextButtonGroup = document.querySelector(".previousAndNextButtonGroup");
let question = document.querySelector(".question")

let mainFeedbackCounter = 1;

function feedbackQuiz()
{
    showingPoints.innerHTML = "<div class='showingPointsResult'>Result:</div>" + `${correctAnswersPoints} of ${maximumPoints} POINTS`;
    
    showingTime.innerHTML = "<div class='showingPointsTimeSpent'>Time spent:</div>" + " " + minutesLabel.innerHTML + " : " +  secondsLabel.innerHTML;

    showingPercentageSuccess.innerHTML ="<div class='showingPointsPercentageSuccess'>Percentage Success:</div>" +  Math.floor((correctAnswersPoints / maximumPoints) * 100) + "%";
   
    let nextStepSeeDetails = document.querySelector(".nextStepSeeDetails");
    makeItEmpty(nextStepSeeDetails)
    nextStepSeeDetails.remove();

    clearInterval(myInterval);
    writingTheQandAInTheFeedback(аrrayQandA[`question${mainFeedbackCounter}`] , objectWithSameOrderWhenTheyAreAnswered[`arrayWithSameOrderWhenTheyAreAnswered${mainFeedbackCounter}`] , аrrayQandA[`questinCorrectAnswer${mainFeedbackCounter}`]);

}

let quizFeedBackDiv = document.querySelector(".quizFeedBackDiv");

let body = document.querySelector("body");

let askingWhatTheUserWantNext = document.querySelector(".askingWhatTheUserWantNext");

function writingTheQandAInTheFeedback(question , answerss , correctAnswer) {

  
    body.style.background = "#ffffff";
    
    //tuka najduvam koj odgovor za sekoe prasajne e stegnat
    //arejot answeredQuestions sekgoas sodrzi samo pet odgovori,sekogas eden ce bidi "matching" od 
    //answerss kade sto gi dobivam site kliknati(nekogas i ne kliknati odgovori) ama preku ovoj filter
    //go najduvam nivnio indeks za da znam kade da vmetnam Your answer ili Correct answer
    let filter = answeredQuestions.filter(arr1Item => answerss.includes(arr1Item));

    //gi pretvoram vo string za da mozam da gi vmetnuvam vo metodi
    filter = filter.join();
    correctAnswer = correctAnswer.join();

    //prvio indeks tuka posto go koristam samo ako ponuednite odgovori se klikanti od prva,i dobivam samo cetiri odgovori vo areot
    findTheIndexOfTheUserInput = answerss.indexOf(filter);
    findTheIndexOfTheCorrectAnswer = answerss.indexOf(correctAnswer);


    //tuka zemam poslednio indeks zato so poslednite cetiri prasajne vo areot,se onie koi bile kliknati
    //a moze da bidat golem broj dokolku userot ne gi pritisne site odgovori od prva i dokolku ne odi na previous i next button
    theLastIndexOfTheCorrectAnswer = answerss.lastIndexOf(correctAnswer);
    theLastIndexOfTheUserInput = answerss.lastIndexOf(filter)


    //tuka vleguva sekogas koga ne se direktno od prva stegnati odgovorite,go polni areot na sekoe klikajne na preevious i next
    //i poradi toa znaeme deka dolzinata e pogolema od brojo na ponudeni odgovori
    if(answerss.length > questionsLength)
    {       
        quizFeedBackDiv.innerHTML+= 
        `
        </br>
        <div class="theNumberOfTheQuestionInTheFeedBack">Question${mainFeedbackCounter}</div>
        <div class="theTextOfTheQuestionInTheFeedBack">${question}</div>
        </br>
        </br>`

        for(let i = answerss.length  - theLengthOfThePossibleAnswers; i < answerss.length;i++){


            if(i == theLastIndexOfTheCorrectAnswer && i == theLastIndexOfTheUserInput)
            {
                quizFeedBackDiv.innerHTML +=
                `
                <div class="whenTtereIsJustCorrectAnswer">${answerss[i]}<span class="feedback">Your Answer</span></div>
                ` 
            }

            else if(i == theLastIndexOfTheCorrectAnswer)
            {
               
                quizFeedBackDiv.innerHTML +=
                `
                <div class="correctAnswer">${answerss[i]}<span class="feedback">The Correct answer</span></div>
                ` 
            }
         
            else if(i != theLastIndexOfTheUserInput)
            {
                quizFeedBackDiv.innerHTML +=
                `
                <div class="notCorrectAndNotWrongAnswer">${answerss[i]}</div>
                `  
            }
            else if(i == theLastIndexOfTheUserInput)
            {
                // console.log(i)  
                quizFeedBackDiv.innerHTML +=
                `
                <div class="wrongAnswer">${answerss[i]} <span class="feedback">Your Answer</span></div>
                ` 
            }         
        }
         
    }
  

    //tuka velguva samo koga od prva se kliknati odgovorite
    else if(answerss.length == theLengthOfThePossibleAnswers)
    {

        // canvas.height = "3000px";
        quizFeedBackDiv.innerHTML+= 
        `
        </br>
        <div class="theNumberOfTheQuestionInTheFeedBack">Question${mainFeedbackCounter}</div>
        <div class="theTextOfTheQuestionInTheFeedBack">${question}</div>
        </br>
        </br>`
 
        for(let i = 0;i < theLengthOfThePossibleAnswers;i++){
          
            
            if(i == findTheIndexOfTheCorrectAnswer && i == findTheIndexOfTheUserInput)
            {
                quizFeedBackDiv.innerHTML +=
                `
                <div class="whenTtereIsJustCorrectAnswer"><span class="text">${answerss[i]}</span><span class="feedback">Your Answer</span></div>
                ` 
            }

            else if(i == findTheIndexOfTheCorrectAnswer)
            {
                quizFeedBackDiv.innerHTML +=
                `
                <div class="correctAnswer">${answerss[i]}<span class="feedback">The Correct answer</span></div>
                ` 
            }
            else if(i != findTheIndexOfTheUserInput)
            {
                quizFeedBackDiv.innerHTML +=
                `
                <div class="notCorrectAndNotWrongAnswer">${answerss[i]}</div>
                `  
            }
            else if(i == findTheIndexOfTheUserInput)
            {
                quizFeedBackDiv.innerHTML +=
                `
                <div class="wrongAnswer">${answerss[i]} <span class="feedback">Your Answer</span></div>
                ` 
            }         
        }
         
    }

    // feedbackQuestion.style.color = "#e74c3c";

     while(mainFeedbackCounter != questionsLength)
     {
        mainFeedbackCounter++;
        writingTheQandAInTheFeedback(аrrayQandA[`question${mainFeedbackCounter}`] ,  objectWithSameOrderWhenTheyAreAnswered[`arrayWithSameOrderWhenTheyAreAnswered${mainFeedbackCounter}`] , аrrayQandA[`questinCorrectAnswer${mainFeedbackCounter}`]);
     }
}