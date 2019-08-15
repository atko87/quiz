
function writingTheCurrentNumberOfQuestion() 
{

    let hasThePaginationButtonActiveClass = 0;

    for(let i = 0;i < PaginationBarAnsweredQuestion.length;i++)
    {
        if(PaginationBarAnsweredQuestion[i].classList.contains("active"))
        {
            //zgoelmuvaj koga i da e true odnosno sodrzi klasa active vo pagination
            hasThePaginationButtonActiveClass++;
        }       
    }

    //ako countero e ednakov na brojo na vkupni prasajna  znaci site sodrza klasa active,i usero go zavrsil kvizo
    if(hasThePaginationButtonActiveClass == questionsLength)
    {
        askingIfTheUserWantsToRepeatQuizOrSeeTheResults();
        // feedbackQuiz();
    }
   
     //Za broejneto na momentalno prasajne na koe se naojca da ne odi nad 5
     //i tuka proveruvam ako e ednakvo varijablata whereIsTheLimitForPressingNext koja e inzijalziirana so na brojo na prasajna + 1
     // posto answersQounter ce bidi edno plus tuka od brojo na prasajna,posto go iznijaliziravme na eden za da pristapuvame do
     //glavniot array so prasajna i odgovori a tamu keys pocnuva od eden
    if(answersCounter == whereIsTheLimitForPressingNext) 
    {
        answeringQuestionNumberOfOnWhichQuestinTheUserIs.innerText = questionsLength + "/" + arrayWithQuestionAndAnswersLength / 3; 
        answersCounter = questionsLength;
    }
   
    //Za broejneto na momentalno prasajne na koe se napjca da ne odi pod eden
    else if(answersCounter <= 0) 
    {
        alert(`We have ${questionsLength} questions. No more questions backwards.`)
        answersCounter = 1;
    }

    //vo sekoj drug slucaj pisuvaj go momentalnoto prasajne na koe se naojca usero
    else 
    {
        answeringQuestionNumberOfOnWhichQuestinTheUserIs.innerText = `Question ${answersCounter} of ${arrayWithQuestionAndAnswersLength / 3}`
    }
}


let timing = document.querySelector(".timing");

//setirajne na broejneto na edna sekunda
var myInterval = setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    copy = secondsLabel.innerHTML;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
  
  
  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }