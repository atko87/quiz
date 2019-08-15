
function bindButtonEvents() 
{

    previous.addEventListener("click" , () => {

    replyToTheAnswer.innerText = "";
  
    answersCounter--;
    writingTheCurrentNumberOfQuestion();
    let currentSetOfGivenPossibleAnswers = аrrayQandA[`questinAnswers${answersCounter}`];

    //tuka vadime element i proveruvame dali vo momentalnio set na dadeni odgovori currentSetOfGivenPossibleAnswers
    //ima nekoj element so go ima i vo answeredQuestions( area kade so stavame samo vejce dadeni odgovori)
    //i ako ima znaci usero koga stegnal previous to prasajne vejce bilo odgovoreno,posto answeredQuestions
    //e napolnato so nekoj odgovor od dadenio momentalen set na mozni odgovoro
    let filter = answeredQuestions.filter(x => currentSetOfGivenPossibleAnswers.includes(x));

    //ako filtero ne e nula,odnosno ima nekoj element koj so se poklopuva
    //adni klasa makeTheButtonDisabled, i potoa vo making proveruvame dali sodrzi,i ako sodrzi takva klasa
    //napraj gi tie buttoni disabled
    if(filter.length != 0)
    {
        for(let item of allButtons) {
            item.classList.add("makeTheButtonDisabled")
        }
    }
   
    making(аrrayQandA[`questinAnswers${answersCounter}`] , аrrayQandA[`question${answersCounter}`]);
    });



    //koga next button e kliknat
    next.addEventListener("click" , () => {
        
    //izbrisi go divot koj dava informacija dali prethodoto prasajne,pred da se stegni next  bilo tocno ili ne 
    replyToTheAnswer.innerText = "";

    if(answersCounter >= questionsLength)
    {
        alert(`No more questions forward.We have ${questionsLength} questions.`)
        answeringQuestionNumberOfOnWhichQuestinTheUserIs.innerHTML = `Question ${answersCounter} of ${questionsLength}`
        answersCounter = questionsLength;
    }

    answersCounter++;
    writingTheCurrentNumberOfQuestion();

    let currentSetOfGivenPossibleAnswers = аrrayQandA[`questinAnswers${answersCounter}`];


    //tuka vadime element i proveruvame dali vo momentalnio set na dadeni odgovori currentSetOfGivenPossibleAnswers
    //ima nekoj element so go ima i vo answeredQuestions( area kade so stavame samo vejce dadeni odgovori)
    //i ako ima znaci usero koga stegnal next to prasajne vejce bilo odgovoreno,posto answeredQuestions
    //e napolnato so nekoj odgovor od dadenio momentalen set na mozni odgovoro
    let filter = answeredQuestions.filter(x => currentSetOfGivenPossibleAnswers.includes(x));


    //ako filtero ne e nula,odnosno ima nekoj element koj so se poklopuva
    //adni klasa makeTheButtonDisabled, i potoa vo making proveruvame dali sodrzi,i ako sodrzi takva klasa
    //napraj gi tie buttoni disabled
    if(filter.length != 0) 
    {
        for(let item of allButtons) 
        {
            item.classList.add("makeTheButtonDisabled")
            // console.log(item)
        }
    }

    making(аrrayQandA[`questinAnswers${answersCounter}`] , аrrayQandA[`question${answersCounter}`]);

    });


    for(let i = 0; i < allButtons.length; i++)
    {
        allButtons[i].addEventListener("click" , answeringOnQuestion);
    } 
}

bindButtonEvents();