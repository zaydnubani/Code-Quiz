// ## query selectors
// ```
var startBTN = document.querySelector("#startBtn");
var btn = document.querySelector("#btn");
var codeQTitle = document.querySelector("#codeQTitle");
var scoreTimer = document.querySelector("#scoreTimer");
var timer = document.querySelector("#timer");
var Q1 = document.querySelector("#Q1");
var Q2 = document.querySelector("#Q2");
var Q3 = document.querySelector("#Q3");
var Q4 = document.querySelector("#Q4");
var gameOver = document.querySelector("#gameOver");
var qPoint = document.querySelector(".qPoint");
var nextQ = document.querySelector("#nextQ");
var rightWrong = document.querySelector("#rightWrong");
var nextQBtn = document.querySelector("#nextQBtn");
var score = document.querySelector("#score");
var finScore = document.querySelector("#finScore");
var scoreBoard = document.querySelector("#scoreBoard");
var submit = document.querySelector("#submit");
var scoreList = document.querySelector("#scoreList");
var nameInput = document.querySelector("#name");
// ```

// WHEN I OPEN the page I am presented with: a(n) Welcome Statement and a(n) Start Button.
// ```
var startVal = "false";

function startValFal(){
   if (startVal === "false"){
      codeQTitle.setAttribute("class", "displayNone");
      scoreTimer.setAttribute("class", "displayNone");
      gameOver.setAttribute("class", "displayNone");
      scoreBoard.setAttribute("class", "displayNone");
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayNone");
      Q4.setAttribute("class", "displayNone");
      nextQ.setAttribute("class", "displayNone");
   };
};

startValFal();
// ```

// THEN I CLICK-ON the Start Button.
// WHEN I CLICK-ON the Start Button I am presented with: a(n) Game Title, a(n) Timer, a(n) Score, a(n) Question, and Choice(s). 
// ```
btn.addEventListener("click", function() {
   if (startVal === "false"){
      startVal = "true";
      console.log(startVal);
      codeQTitle.setAttribute("class", "displayVis");
      scoreTimer.setAttribute("class", "displayVis");
      Q1.setAttribute("class", "displayVis");
      startBTN.setAttribute("class", "displayNone");
   }
   else {
      startVal = "false";
      startValFal();
   }
});

// console.log(startVal); 
// ```

// THEN the Timer Starts.
// ```
var timeLeft = 60;
var timerInterval = null;
var clearTime = clearInterval(timerInterval);

btn.addEventListener("click", function() {
         timerInterval = setInterval(function() {
         timeLeft--;
         timer.textContent = "Time Left: " + timeLeft + " seconds.";
         
         if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timesUp();
         }
      }, 1000);
});
// ```

// IF the Timer runs-out.
// THEN I am presented with: a(n) Score, a(n) Text Box, and a(n) Submit Button.
// ```
function timesUp() {
      gameOver.setAttribute("class", "displayVis");
      scoreTimer.textContent = "Times Up!";
      codeQTitle.setAttribute("class", "displayNone");
      score.setAttribute("class", "displayNone");
      nextQ.setAttribute("class", "displayNone");
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayNone");
      Q4.setAttribute("class", "displayNone");
      finScore.textContent = "Your Score: " + scoreCount + ".";
};
// ```

// WHEN I CLICK-ON the Next Button I am present with: the next question.
// WHEN I finish I am presented with: a(n) Score, a(n) Text Box, and a(n) Submit Button.
// ```
var secondVal = "false";
var thirdVal = "false";
var fourthVal = "false";
var fifthVal = "false";

nextQBtn.addEventListener ("click", function(){
   if (secondVal === "false"){
      secondVal = "true";
      nextQ.setAttribute("class", "displayNone");
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayVis");
   }
   else if (thirdVal === "false"){
      thirdVal = "true";
      nextQ.setAttribute("class", "displayNone");
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayVis");
   }
   else if (fourthVal === "false"){
      fourthVal = "true";
      nextQ.setAttribute("class", "displayNone");
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayNone");
      Q4.setAttribute("class", "displayVis");
   }
   else if (fifthVal === "false"){
      fifthVal = "true";
      nextQ.setAttribute("class", "displayNone");
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayNone");
      Q4.setAttribute("class", "displayNone");
      gameOver.setAttribute("class", "displayVis");
      clearInterval(timerInterval);
      finScore.textContent = "Your Score: " + scoreCount + ".";
   }
   else {
      nextQBtn.textContent = "Not Working"
   };
});

var scoreCount = 0;

function scoreDraw(){
   if(startVal === "true");
   score.innerHTML = "Score: " + scoreCount;
};

scoreDraw();

// ## Question
// ```
function runQuestion(v, w, x, y, z) {
   v.addEventListener ("click", function(event) {
      console.log(event.target);
      console.log("Im Here");
      if (event.target.getAttribute("data-correct") === "true"){
         nextQ.setAttribute("class", "displayVis");
         rightWrong.textContent = "You're Right!";
         w.setAttribute("class", "displayNone");
         x.setAttribute("class", "displayNone");
         y.setAttribute("class", "displayNone");
         z.setAttribute("class", "displayNone");
         truFal = "true";
         console.log(truFal);
         scoreCount = scoreCount +1;
         console.log(scoreCount);
         score.innerHTML = "Score: " + scoreCount;
      }
      else {
         console.log(event.target);
         console.log("Im Here");
         nextQ.setAttribute("class", "displayVis");
         rightWrong.textContent = "You're Wrong!";
         w.setAttribute("class", "displayNone");
         x.setAttribute("class", "displayNone");
         y.setAttribute("class", "displayNone");
         z.setAttribute("class", "displayNone");
         timeLeft = timeLeft - 10;
         truFal = "false";
      };
   });
};

runQuestion(Q1, Q1, Q2, Q3, Q4);

runQuestion(Q2, Q1, Q2, Q3, Q4);

runQuestion(Q3, Q1, Q2, Q3, Q4);

runQuestion(Q4, Q1, Q2, Q3, Q4);

// ## Scoreboard
// ```

submit.addEventListener("click", function(event){
   event.preventDefault;
   scoreBoard.setAttribute("class", "displayVis");
   gameOver.setAttribute("class", "displayNone");
   // scoreTimer.setAttribute("class", "displayNone");
   // JSON.parse(localStorage.getItem("finalScore"));
   // localStorage.setItem("finalScore", JSON.stringify(nameInput.value + " " + scoreCount));
   savedScore();
});

// function savedScore(){
//    if(localStorage.getItem("finalScore") !== null) localStorage.getItem("finalScore") = [];
//    if(localStorage.getItem("finalScore") !== null){
//       var endingScore = localStorage.finalScore;
//       parseInt(localStorage.getItem("finalScore"));
//       var child = document.createElement("li");
//       var appendedChild = scoreList.appendChild(child);
//       appendedChild.innerHTML = endingScore;
//    }
// }

function savedScore(){
   var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
   if(existingEntries == null) existingEntries = [];
   var savedName = nameInput.value;
   var savedScore = scoreCount;
   var save = savedScore + " " + savedName;
   localStorage.setItem("save", JSON.stringify(save));
   existingEntries.push(save);
   localStorage.setItem("allEntries", JSON.stringify(existingEntries));
   var allEntries = JSON.parse(localStorage.allEntries);
   console.log(allEntries);
   for(i=0;i<allEntries.length;i++){
      var child = document.createElement("li");
      var appendedChild = scoreList.appendChild(child);
      appendedChild.innerHTML = allEntries[i];
   };
};