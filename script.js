// HTML Page via DOM Methods here!
var body = document.body;

// Create all the necessary elements
var infoEl = $('<div>');
var linkEl = $('<a>');
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
var instructionsEl = document.getElementById('instructions');
var scoreDiv = document.createElement('div');
var quizScoreEl = document.createElement('p');
var score = 0;
var secondsDisplayDiv = document.createElement('div');
var secondsDisplayEl = document.createElement('p');
var secondsDisplay = 0;

var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;

//Store elements in variables
startBtnEl.innerHTML = 'Start';
// quizScoreEl.textContent = 'Score: '+ score;

//Append all elements
body.appendChild(btnDiv);
btnDiv.appendChild(startBtnEl);
//body.appendChild(btnDiv);
btnDiv.appendChild(linebreak);
body.appendChild(scoreDiv);
scoreDiv.appendChild(quizScoreEl);

//Style elements
//body.setAttribute('style', '')
btnDiv.setAttribute('style','btn-large; margin:auto; width:50%; text-align:center;');
startBtnEl.setAttribute('id', 'startBtn');
btnDiv.setAttribute('style','margin:auto; padding:10px; width:50%; text-align:center;');
questionsEl.setAttribute('id', 'question');
questionsEl.setAttribute('style', 'width:100%; text-align:center;');
answersEl.setAttribute('id', 'answers');
answersEl.setAttribute('style', 'width:100%; text-align:center;');
answerButtonsElement.setAttribute('class','btn;');  
answerButtonsElement.setAttribute('style','magin:auto; width:100%; text-align:center;');  
scoreDiv.setAttribute('id','score','margin:auto; width:100%; text-align:center;');  
quizScoreEl.setAttribute('style', 'margin:auto; width:100%; text-align:center;');


startBtnEl.addEventListener('click', function() {
  document.getElementById("startBtn").style.display="none";
  //instructionsEl.style.diplay='none';
  $("#instructions").hide();
  startQuiz();
  startTimer();
secondsDisplayDiv.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
secondsDisplayEl.setAttribute('id', 'seconds');
});

function startTimer() {
  timerID = setInterval(function(){
      totalSeconds--;
      if (totalSeconds <= -60) 
          gameOver();
         body.appendChild(secondsDisplayDiv);
      secondsDisplayDiv.appendChild(secondsDisplayEl);
      secondsDisplayEl.textContent = 'Time Left: ' +totalSeconds;
  }, 1000);
  console.log(totalSeconds);
}

function gameOver() {
  alert('Your time has expired! Click Restart to try again!');
  totalSeconds = 0;
  location.reload();  
}

nextBtnEl.addEventListener('click', function() {
  currentQuestionIndex++;
  setNextQuestion()
 });

function startQuiz() {
  console.log('The game has started');
  shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  setNextQuestion();
 }
  

  function resetState() {
    clearStatusClass(document.body);
    nextBtnEl.style.display='none';
    //Only display the answer for the respective question
    while(answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)
    }
  }

  function showQuestions(quizQuestions) {
    body.appendChild(questionContainer);
    questionContainer.appendChild(questionsEl);
    questionsEl.textContent = quizQuestions.question;
    
    quizQuestions.answers.forEach(answer => {
      var button = document.createElement('button')
      button.innerText = answer.text
      
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
      button.addEventListener('click', selectAnswer)
      body.appendChild(answerButtonsElement);
      answerButtonsElement.setAttribute('id', 'answerBtn','style', 'margin:auto; text-align:center;');
      answerButtonsElement.appendChild(button);
      body.appendChild(scoreDiv);
      scoreDiv.appendChild(quizScoreEl);
     
 })
 
  }
 
  function setNextQuestion() {
    var nextBtnDiv = document.createElement('div');
    body.appendChild(nextBtnDiv);
    nextBtnDiv.appendChild(nextBtnEl);
    nextBtnDiv.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    nextBtnEl.setAttribute('id', 'nextBtn');
    nextBtnEl.innerHTML = 'Next';
    resetState();
    showQuestions(shuffledQuestions[currentQuestionIndex]);
  }

  function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
   // setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      //setStatusClass(button, button.dataset.correct)
      })
      if (correct) {
        //element.classList.add('correct');
        score++;
        alert('You have answered correct!, Keep it up!');
        console.log(score);
        quizScoreEl.textContent = 'Score: '+ score + ' /4';
        } else {
          alert('You have answered incorrect, you will be deducted 10 seconds');
          totalSeconds = totalSeconds - 10;
          //element.classList.add('wrong');
          console.log('The wrong answer is selected');
        }
        
      if(shuffledQuestions.length > currentQuestionIndex +1) {
      nextBtnEl.style.display='block';
      nextBtnEl.setAttribute('style', 'margin:auto; width:100px; text-align:center;');
  } else {
    $("#instructions").show();
    startBtnEl.innerText = 'Restart';
    //startBtnEl.style.display='block';
    startBtnEl.setAttribute('style', 'margin:auto; text-align:center;');
    }  
    
  }

   function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
   }

// Question Object     
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

