
function makeItEmpty(element) 
{
    element.innerHTML = "";
}


function askingIfTheUserWantsToRepeatQuizOrSeeTheResults()
{

    replyToTheAnswer.innerText = "";
    answeringQuestionNumberOfOnWhichQuestinTheUserIs.style.display = "none";

    makeItEmpty(quizSection)

    makeItEmpty(previousAndNextButtonGroup)
    makeItEmpty(pagination)
    makeItEmpty(minutesLabel)
    makeItEmpty(timing)
    makeItEmpty(questionSec)

    questionSec.remove();

    askingWhatTheUserWantNext.innerHTML+=
    `<button class="nextStep nextStepSeeDetails">See detailed results</button>
     <button class="nextStep nextStepRepeatQuiz">Repeat the quiz</button>`


     theAnswer();
}



function theAnswer()
{
     nextStep = document.getElementsByClassName("nextStep");


    for(let item of nextStep)
    {
        item.addEventListener("click" , () => {
            if(item.classList.contains("nextStepSeeDetails"))
            {
                feedbackQuiz();
            }

            if(item.classList.contains("nextStepRepeatQuiz"))
            {
                location.reload();
            }
        })
    }
}