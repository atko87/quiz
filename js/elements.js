
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");


let answeredQuestions = [];


//preku ova area ce prajme pagination buttonite da bida zeleni koga nekoe prasajne e odgovoreno
let whichQuestionIsAnswered = [];


//sekcijata kade so se naojca buttonite so mozni odgovori
let quizSection = document.querySelector(".quizSection");
//butonite od taja quiz sekcija
let allButtons = document.getElementsByClassName("forwardButton");

//Div kade so so postavuva prasajnata
let questionSec = document.querySelector(".question");

//div kade so prikazuvame na koe praajne momentalno usero se najduva
let answeringQuestionNumberOfOnWhichQuestinTheUserIs = document.querySelector(".answeringQuestionNumberOfOnWhichQuestinTheUserIs");
//feedback dali e tocen odgovoro ili ne koga usero ce daj nekoj odgovor
let replyToTheAnswer = document.querySelector(".replyToTheAnswer");
let showingPoints = document.querySelector(".showingPoints");


//poeni
let correctAnswersPoints = 0;
let maximumPoints = Object.keys(аrrayQandA).length / 3 * 10
//kolku prasajne imame vkupno
let questionsLength = Object.keys(аrrayQandA).length / 3;
//vkupno elemento vo glavniot object
let arrayWithQuestionAndAnswersLength = Object.keys(аrrayQandA).length;

let alreadyAnsweredNotification = document.querySelector(".alreadyAnsweredNotification");
answeringQuestionNumberOfOnWhichQuestinTheUserIs.innerText = `Question 1 of ${questionsLength}`


//vreme
let showingTime = document.querySelector(".showingTime");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;



let feedbackFromTheQuiz = document.querySelector(".feedbackFromTheQuiz");

let whereIsTheLimitForPressingNext = questionsLength + 1;

let answersCounter = 1;


// let theLengthOfThePossibleAnswers = allButtons.length;