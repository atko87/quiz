 //davajne random broevi preku koi davame razlicen redosled na moznite odgovori
 function shuffle(array) 
 {
     counter = array.length;
     while (counter > 0) {
         let index = Math.floor(Math.random() * counter);
         counter--;
         let temp = array[counter];
         array[counter] = array[index];
         array[index] = temp;
     }
 
     return array;
 }
 
 
 //preku ovaa funkcija,ni se renderira na sekoj klik slednoto prasajne
 function making(answers,question) 
 {
     let currentSetOfGivenPossibleAnswers = аrrayQandA[`questinAnswers${answersCounter}`];
 
     //tuka proveruvame dali momentalnite dadeni mozni odgovori,gi ima vo areata answeredQuestions
     //i ako ima znaci to prasajne ve vejce odgovoreno
     let filter = answeredQuestions.filter(x => currentSetOfGivenPossibleAnswers.includes(x));
 
     //ako ima,znaci dolzinata na filter nema da bidi nula,i ce adnime klasa makeTheButtonDisabled
     //za podocna da gi naprajme tie buttoni disabled da ne mozi usero povtorno na niv da klika
     
     //tuka prajme prevencija za ako usero primer odgovori prvo prasajne broj 3 se vrati nazad odgovori 1, 2 i ako go nema ovoj kod dolu
     //prasajne broj 3 ce bidi not disabled
     if(filter.length != 0)
     {
         for(let item of allButtons) {
             item.classList.add("makeTheButtonDisabled")
         }
     }
 
     //ako e nula znaci ne e odgovoreno,i mozis pak da gi mesas moznite odgovori
     if(filter.length == 0)
     {
         shuffle(answers);
     }
 
     //prethodno usero ako stegni next ili rprevious naredno ja povkuva ova funkcija
     //vo previous i next adnuvame klasa makeTheButtonDisabled
     //tuka proveruvame dali sodrzi,ako sodrzi napraj gi tie buttoni disabled
     for(let item of allButtons) {
         if(item.classList.contains("makeTheButtonDisabled")) {
             item.classList.remove("makeTheButtonDisabled")
             item.classList.add("itIsDisabled")
             questionSec.transition = "all 2s";
             questionSec.style.color = "#e74c3c";
 
             alreadyAnsweredNotification.innerHTML = "You already answered this question.You cannot answer twice"
             alreadyAnsweredNotification.style.color = "#e74c3c";
             answeringQuestionNumberOfOnWhichQuestinTheUserIs.style.color = "#e74c3c";
             item.disabled = true;
             // console.log(item)
         }
         
         else {
             item.classList.remove("normal")
             item.classList.remove("itIsDisabled")
             item.disabled = false;
             alreadyAnsweredNotification.innerHTML  = "";
             questionSec.style.color = "#5352ed";
             answeringQuestionNumberOfOnWhichQuestinTheUserIs.style.color = "#5352ed"
             // console.log(item)
         }
     }
     
 
     //vnesuvaj redosledo na odgovori koga usero kliknal
     for(let i = 0;i < allButtons.length;i++)
     {  
         if(allButtons[i].disabled == false)
         {
             objectWithSameOrderWhenTheyAreAnswered[`arrayWithSameOrderWhenTheyAreAnswered${answersCounter}`].push(answers[i])
         }
     }
 
 
     if(typeof question != 'undefined') 
     {
         questionSec.innerText  = question;
     }
 
     try 
     {
         for(let i = 0; i < answers.length; i++) 
         {
             allButtons[i].innerText = answers[i];
         } 
     }
     catch(err) 
     {
         console.log(err.message);
     }
    
 }
 
 making(аrrayQandA.questinAnswers1 , аrrayQandA.question1);



 function nextQuestion()
{
    
    whichQuestionIsAnswered.push([`questinAnswers${answersCounter}`]);

    let copyFromTheNumber = "";

    //Vo whichQuestionIsAnswered insertnuvame question1,question2 itn pri sekoe vleguvajne vo next question
    //odnosno pri sekoe klijna na usero na daden odgovor(previous i next button ne )
    //taka znajme deka usero ne vlegol vo next ili previous tuku odgovoril nekoe konkretno prasajne
    for(let i = 0;i < whichQuestionIsAnswered.length;i++) 
    {
        if(whichQuestionIsAnswered[i] == `questinAnswers${answersCounter}`)
        {
            //tuka inizijalizirame vrednost(brojka)
            copyFromTheNumber = `questinAnswers${answersCounter}`;
            copyFromTheNumber = copyFromTheNumber[copyFromTheNumber.length - 1]

        }
    }

    //za da adnime active klasa na pagination button so brojka,samo koga usero go odgovoril to prasajne
    for(let paginationBarButtonNumbers of PaginationBarAnsweredQuestion)
    {    
        if(paginationBarButtonNumbers.innerText == copyFromTheNumber) {
            paginationBarButtonNumbers.classList.remove("notAnswered");
            paginationBarButtonNumbers.classList.add("active");
        }
    }

    answersCounter++;
    writingTheCurrentNumberOfQuestion();
 
    making(аrrayQandA[`questinAnswers${answersCounter}`] , аrrayQandA[`question${answersCounter}`]);
}




 