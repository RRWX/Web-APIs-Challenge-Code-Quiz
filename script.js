var buttonStart = document.querySelector(".starQ-b");
var scoresButton =  document.querySelector(".highScores")
var timer = document.getElementsByClassName("timer");
var quizTextBox = document.querySelector(".text-Box");
var scores = document.querySelector(".scores-TextBox");
var quizText = document.querySelector(".quizText");
var andButtons = document.getElementsByClassName('and-btn');
var correctAnswer =["Hypertext markup language", "Cascading Style Sheets", "Document Object Model"];
var quesions =["what does HTML stand for?", "what does css stand for?","what does Dom stand for in html?"];
var timeLeft = 50;
var points =0;
var game = false;
// var input = document.querySelector(".initialsTextInput");
var submitInitals = document.querySelector(".submitInitals-Btn");
var formIn = document.querySelector('form');
var retryBtn = document.querySelector('.retry');


retryBtn.addEventListener('click', function() {
  location.reload();
});

submitInitals.addEventListener('click', addInitals);

function addInitals(event){
  event.preventDefault();
  
  localStorage.setItem("name", document.querySelector(".initialsTextInput").value);
  localStorage.setItem("scoreData", points);

  document.forms[0].reset();
  formIn.style.display = "none";
  scores.style.display = "block";
  quizTextBox.style.display = "none";
}


scoresButton.addEventListener("click", showScores);

function showScores(){

  if (scores.style.display === "none") {
    scores.style.display = "block";
    quizTextBox.style.display = "none";
  } else {
    scores.style.display = "none";
    quizTextBox.style.display = "block";
  }
  scores.textContent="High Score: " + localStorage.getItem("name") +" "+ localStorage.getItem("scoreData") ;

}

  function showAnds(){
    andButtons[0].style.display = "block";
    andButtons[1].style.display = "block";
    andButtons[2].style.display = "block";
    andButtons[3].style.display = "block";
  }

  function hideAllAnds(){
    andButtons[0].style.display = "none";
    andButtons[1].style.display = "none";
    andButtons[2].style.display = "none";
    andButtons[3].style.display = "none";
  }
  
function setAnswer1(){
  andButtons[0].textContent="hyper tweet made-up language";
  andButtons[1].textContent="Henry took my lock";
  andButtons[2].textContent= correctAnswer[0];
  andButtons[3].textContent="none of the above";
}

function setAnswer2(){
  andButtons[0].textContent=correctAnswer[1];
  andButtons[1].textContent="capybara surfing smoothly";
  andButtons[2].textContent= "coding sources sheets";
  andButtons[3].textContent="none of the above";
}

function setAnswer3(){
  andButtons[0].textContent="document object pointer";
  andButtons[1].textContent=correctAnswer[2];
  andButtons[2].textContent= "doctor of marrow";
  andButtons[3].textContent="Dominic object modele";
}

function setQuesions2Worng(){
  timeLeft = timeLeft-5;
  quizText.textContent=quesions[1];
  setAnswer2();
  andButtons[0].addEventListener("click", setQuesions3Right);
  andButtons[1].addEventListener("click", setQuesions3Worng);
  andButtons[2].addEventListener("click", setQuesions3Worng);
  andButtons[3].addEventListener("click", setQuesions3Worng);
}


  function setQuesions2Right(){
      points+=5;
    quizText.textContent=quesions[1];
    setAnswer2();
    andButtons[0].addEventListener("click", setQuesions3Right);
    andButtons[1].addEventListener("click", setQuesions3Worng);
    andButtons[2].addEventListener("click", setQuesions3Worng);
    andButtons[3].addEventListener("click", setQuesions3Worng);
  }

  function setQuesions3Right(){
    points+=5;
    quizText.textContent=quesions[2];
    setAnswer3();
    andButtons[0].addEventListener("click", setQuesions4Worng);
    andButtons[1].addEventListener("click", setQuesions4Right);
    andButtons[2].addEventListener("click", setQuesions4Worng);
    andButtons[3].addEventListener("click", setQuesions4Worng);
  }
  
  function setQuesions3Worng(){
    timeLeft = timeLeft-5;
    quizText.textContent=quesions[2];
    setAnswer3();
    andButtons[0].addEventListener("click", setQuesions4Worng);
    andButtons[1].addEventListener("click", setQuesions4Right);
    andButtons[2].addEventListener("click", setQuesions4Worng);
    andButtons[3].addEventListener("click", setQuesions4Worng);
  }
  
  function setQuesions4Worng(){
    timeLeft = timeLeft-5;
    finalGameScreen();
  }

  function setQuesions4Right(){
    points+=5;
    finalGameScreen();
  }

 function finalGameScreen(){
  game =false;
  hideAllAnds();
  timer[0].style.display ="none";
  quizText.textContent="All Done your finnal score is: " + points;
  formIn.style.display ="block";
  submitInitals.style.display ="block";
  showScores();
  retryBtn.style.display ="block";
 }


buttonStart.addEventListener("click", sartQuiz);


function sartQuiz(){
  game = true;
  buttonStart.style.display = "none";
  quizText.textContent=quesions[0];
  setAnswer1();
  showAnds();
  startTime();
  andButtons[0].addEventListener("click", setQuesions2Worng);
  andButtons[1].addEventListener("click", setQuesions2Worng);
  andButtons[2].addEventListener("click", setQuesions2Right);
  andButtons[3].addEventListener("click", setQuesions2Worng);
  
}

function startTime(){
    timer[0].textContent = "Time: "+ timeLeft;
    var timeInterval = setInterval(function () {
      // console.log(timeLeft);
        timeLeft--;
        timer[0].textContent = "Time: "+ timeLeft;
    
        if(timeLeft<=5){
          timer[0].style.color="red";
        }
        
        if(timeLeft===0){
          clearInterval(timeInterval);
          if(game){
          finalGameScreen();
          }
        }
    
      }, 1000);

}