
function isCorrectAnswer(answer)
{

    //tuka answers counter e ednakvo na brojo na kliknatoto prasajne
    if(аrrayQandA[`questinCorrectAnswer${answersCounter}`].join() == answer)
    return true;

    return false;
}


//vo ova funkcija vleguva sekoj pat koga e kliknat nekoj daden mozen odgovor
function answeringOnQuestion(event)
{
    let answerText = event.target.innerText;

    //vo answeredQuestions gi stavame dadenite odgovori od usero
    answeredQuestions.push(event.target.innerText)

    //Ako vrati true,znaci teksto na kliknatiot button bil ednakov so tocniot odgovor
    if(isCorrectAnswer(answerText)) 
    {
        replyToTheAnswer.classList.remove("notCorrectAnswer");
        replyToTheAnswer.classList.add("replyToTheAnswer")
        replyToTheAnswer.innerText = `Your answer for question ${answersCounter} were CORRECT`;
        correctAnswersPoints+=10; 
     
    }
    else 
    {
        replyToTheAnswer.classList.remove("replyToTheAnswer");
        replyToTheAnswer.classList.add("notCorrectAnswer")
        replyToTheAnswer.innerText = `Your answer for question ${answersCounter} were NOT CORRECT`;
    }

    nextQuestion();
}
