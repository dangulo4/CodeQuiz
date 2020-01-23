// HTML Page via DOM Methods here!
var body = document.body;

// Create all the necessary elements
var infoEl      = document.createElement('div');
var linkEl      = document.createElement('a');  
var timerEl     = document.createElement('p');
var h1El        = document.createElement('h1');
var h2El        = document.createElement('h2');
var btnDiv     = document.createElement('div');
var startBtnEl  = document.createElement('button');
var questionContainer = document.createElement('div');
var answerContainer = document.createElement('div');
var questionsEl = document.createElement('p');
var answersEl = document.createElement('p');
var linebreak = document.createElement("br");
var shuffledQuestions;
var currentQuestionIndex;
var nextBtnEl = document.createElement('button');
var answerButtonsElement = document.createElement('button');

//Store elements in variables
linkEl.innerHTML    = 'View High Scores';
timerEl.textContent = 'Time + 0';     
h1El.textContent    = 'Coding Quiz Chanllenge';
h2El.textContent    = 'Try to answer the code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
startBtnEl.innerHTML = 'Start';


//Append all elements
body.appendChild(infoEl);
infoEl.appendChild(linkEl);
infoEl.appendChild(timerEl);
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(btnDiv);
btnDiv.appendChild(startBtnEl);
body.appendChild(btnDiv);
btnDiv.appendChild(linebreak);



//Style elements
infoEl.setAttribute('style','margin:auto; width:100%; text-align:left;');
linkEl.setAttribute('href','https://www.google.com');
timerEl.setAttribute('style', 'margin:auto; width:100%; text-align:right;');
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center');
btnDiv.setAttribute('style','margin:auto; width:100%; text-align:center;');
startBtnEl.setAttribute('id', 'startBtn');
btnDiv.setAttribute('style','margin:auto; width:100%; text-align:center;');
questionsEl.setAttribute('id', 'question', 'style', 'margin:auto; width:100%; text-align:center;');
questionsEl.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
answersEl.setAttribute('id', 'answers', 'style', 'margin:auto; width:100%; text-align:center;');
answersEl.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
answerButtonsElement.setAttribute('class','btn;');     
//document.getElementById('questions').style.display='none';

startBtnEl.addEventListener('click', function() {
  document.getElementById("startBtn").style.display="none";
  startQuiz();
});

function startQuiz() {
  console.log('The game has started');
  
  shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
// questionContainerElement.classList.remove('hide')
  // showQuestions(quizQuestions, questionsEl);
  setNextQuestion();
  //startBtnEl.classList.add('hide')
}
  function setNextQuestion() {
    var nextBtnDiv = document.createElement('div');
    body.appendChild(nextBtnDiv);
    nextBtnDiv.appendChild(nextBtnEl);
    nextBtnDiv.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    nextBtnEl.setAttribute('id', 'nextBtn');
    nextBtnEl.innerHTML = 'Next';
    showQuestions(shuffledQuestions[currentQuestionIndex]);
  }

  function showQuestions(quizQuestions) {
    body.appendChild(questionContainer);
    questionContainer.appendChild(questionsEl);
    questionsEl.textContent = quizQuestions.question;

    
    quizQuestions.answers.forEach(answer => {
    
      var button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('answer')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
      button.addEventListener('click', selectAnswer)
      body.appendChild(answerButtonsElement);
      answerButtonsElement.appendChild(answersEl);
      //answerButtonsElement.textContent = quizQuestions.answers;
      answerButtonsElement.appendChild(button);
      
     
     
    })
  
    console.log(questionsEl.innerText);
    console.log(answerButtonsElement.innerText);
  }
 
  function selectAnswer(e) {

  }

      nextBtnEl.addEventListener('click', function() {
        currentQuestionIndex++;
          //resetOrder()
          showQuestions(shuffledQuestions[currentQuestionIndex]);
          
        });
       // function resetOrder() {
        //clearStatusClass(document.body)
        //nextBtnEl.classList.add('hide')
       // while (answerButtonsElement.firstChild) {
        //  answerButtonsElement.removeChild(answerButtonsElement.firstChild)
       // }
   // }
     
var quizQuestions = [
  {
    question: 'What can be broken, but never held?',
    answers: [
      { text: 'A promise', correct: true },
      { text: 'Bubbles', correct: false },
      { text: 'Accounts', correct: false }
    ]
  },
  {
    question: 'What can one catch that nothing is thrown?',
    answers: [
      { text: 'A cold', correct: true },
      { text: 'The wind', correct: true },
      { text: 'Waves', correct: true },
      { text: 'Common Sense', correct: false }
    ]
  },
  {
    question: 'What is always coming, but never arrives?',
    answers: [
      { text: 'The sun', correct: false },
      { text: 'Tomorrow', correct: true },
      { text: 'Trains', correct: false },
      { text: 'Knowledge', correct: false }
    ]
  },
  {
    question: 'How many functions exist in JavaScript?',
    answers: [
      { text: '6', correct: false },
      { text: '69', correct: false },
      { text: 'Alot', correct: false },
      { text: 'I dont know', correct: true }
    ]
  }
];

