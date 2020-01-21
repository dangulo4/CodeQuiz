// HTML Page via DOM Methods here!
var body = document.body;

// Create all the necessary elements
var infoEl  = document.createElement('div');
var linkEl  = document.createElement('a');  
var timerEl = document.createElement('p');
var h1El    = document.createElement('h1');
var h2El    = document.createElement('h2');
// var infoEl      = document.createElement('div');
// var imgEl       = document.createElement('img');
// var kittenEl    = document.createElement('div');
// var nameEl      = document.createElement('div');
// var favoriteEl  = document.createElement('div');
// var listEl      = document.createElement('ol');
// var li1         = document.createElement('li');
// var li2         = document.createElement('li');
// var li3         = document.createElement('li');
// var li4         = document.createElement('li');

//Store the li elements in variables
//var listItems           = document.getElementsByTagName('li');
linkEl.innerHTML    = 'View High Scores';
timerEl.textContent = 'Time + 0';     
h1El.textContent    = 'Coding Quiz Chanllenge';
h2El.textContent    = 'Try to answer the code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!';
// kittenEl.textContent    = 'This is my Kitten';
// nameEl.textContent      = 'His name is Jax';
// favoriteEl .textContent = 'My favorite foods are';
// li1.textContent         = 'Chicken Fingers';
// li2.textContent         = 'Pizza';
// li3.textContent         = 'Burgers';
// li4.textContent         = 'Sushi';

// var anchorElem = document.createElement('a');
// anchorElem.setAttribute("href", yourLink);
// anchorElem.innerHTML = yourLinkText;

// document.body.appendChild(anchorElem); // append your new link to the bod

//Append all elements
body.appendChild(infoEl);
infoEl.appendChild(linkEl);
infoEl.appendChild(timerEl);
body.appendChild(h1El);
body.appendChild(h2El);
// body.appendChild(infoEl);
// infoEl.appendChild(imgEl);
// infoEl.appendChild(kittenEl);
// infoEl.appendChild(nameEl);
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

//Style elements
infoEl.setAttribute('style','margin:auto; width:100%; text-align:left;');
linkEl.setAttribute('href','https://www.google.com');
timerEl.setAttribute('style', 'margin:auto; width:100%; text-align:right;');
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center');

// imgEl.setAttribute('src', 'http://placekitten.com/200/300');
// imgEl.setAttribute('height', 200);
// imgEl.setAttribute('width', 200);
// nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
// kittenEl.setAttribute('style', 'font-size:25px;, text-align:center;');
// favoriteEl.setAttribute('style', 'font-size:20px;');
// listEl.setAttribute('style', 'background: #333333; padding:20px;');
// listItems[0].setAttribute('style', 'color:white; background: #666666; padding: 5px; margin-left:35px;');
// listItems[1].setAttribute('style', 'color:white; background: #777777; padding: 5px; margin-left:35px;');
// listItems[2].setAttribute('style', 'color:white; background: #888888; padding: 5px; margin-left:35px;');
// listItems[3].setAttribute('style', 'color:white; background: #999999; padding: 5px; margin-left:35px;');
