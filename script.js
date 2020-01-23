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
var questionsEl = document.createElement('p');
var linebreak = document.createElement("br");


//Store elements in variables

linkEl.innerHTML    = 'View High Scores';
timerEl.textContent = 'Time + 0';     
h1El.textContent    = 'Coding Quiz Chanllenge';
h2El.textContent    = 'Try to answer the code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
startBtnEl.innerHTML = 'Start';
questionsEl.textContent  = 'This is where the questions go';


// document.body.appendChild(anchorElem); // append your new link to the bod

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
body.appendChild(questionContainer);
questionContainer.appendChild(questionsEl);


//Style elements
infoEl.setAttribute('style','margin:auto; width:100%; text-align:left;');
linkEl.setAttribute('href','https://www.google.com');
timerEl.setAttribute('style', 'margin:auto; width:100%; text-align:right;');
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center');
btnDiv.setAttribute('style','margin:auto; width:100%; text-align:center;');
startBtnEl.setAttribute('id', 'startBtn');
btnDiv.setAttribute('style','margin:auto; width:100%; text-align:center;');
questionsEl.setAttribute('id', 'questions', 'style', 'margin:auto; width:100%; text-align:center;');
questionsEl.setAttribute('style', 'margin:auto; width:100%; text-align:center;');

document.getElementById('questions').style.display='none';

startBtnEl.addEventListener('click', function() {
    console.log('The game has started');
    document.getElementById("startBtn").style.display="none";
    startQuiz();
});

function startQuiz() {
  startBtnEl.classList.add('hide')
  document.getElementById('questions').style.display='block';
   
   currentQuestionIndex = 0
// questionContainerElement.classList.remove('hide')
  showQuestions(quizQuestions, questionsEl);

    function showQuestions(quizQuestions, questionsEl) {
    var output = [];
    var answers;
        for(var i = 0; i < quizQuestions.length; i++) {
            answers = [];
            for(letter in quizQuestions[i].answers){

              //push out the 
              answers.push(
                '<label>'
                  + '<input  type="radio" name=" question' +i+ '">'
                  + letter + ': '
                  + quizQuestions[i].answers[letter]
                + '</label>');
            }
        
            // add this question and its answers to the output
            output.push(
              '<div class="question">' + quizQuestions[i].question + '</div>'
              + '<div class="answers">' + answers.join(' ') + '</div>');
             
          }
          questionsEl.innerHTML = output.join('');
          var nextBtnDiv     = document.createElement('div');
          var nextBtnEl  = document.createElement('button');
          body.appendChild(nextBtnDiv);
          nextBtnDiv.appendChild(nextBtnEl);
          nextBtnDiv.setAttribute('style','margin:auto; width:100%; text-align:center;');
          nextBtnEl.setAttribute('id', 'nextBtn');
          nextBtnEl.innerHTML = 'Next';
    
      }
}

 var quizQuestions = [
    {
      question: 'What can be broken, but never held?',
      answers: {
        a: '  Air',
        b: '  Glass',
        c: '  A promise'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What can one catch that nothing is thrown?',
      answers: {
        a: '  A kite',
        b: '  A cold',
        c: '  The solar system'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What is always coming, but never arrives?',
      answers: {
        a: 'Tomorrow',
        b: 'Undefined',
        c: 'A clock'
      },
      correctAnswer: 'a'
    }
  ];