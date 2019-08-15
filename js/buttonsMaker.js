
function buttonsMaker() 
{

    quizSection.innerHTML =
    `<button class="forwardButton"></button>
     <button class="forwardButton"></button>
     <button class="forwardButton"></button>
     <button class="forwardButton"></button>   `
}

buttonsMaker();

let pagination = document.querySelector(".pagination");

//za da pocni od eden
for(let i = 1;i < questionsLength + 1;i++)
{
    pagination.innerHTML+=
    `
        <button class="PaginationBarAnsweredQuestion">${i}</button>
    `
}

let PaginationBarAnsweredQuestion = document.querySelectorAll(".PaginationBarAnsweredQuestion");


for(let item of PaginationBarAnsweredQuestion)
{
    item.classList.add("notAnswered");
}


let theLengthOfThePossibleAnswers = allButtons.length;