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
var Q1P1 = document.querySelector("#Q1P1");
var Q1P2 = document.querySelector("#Q1P2");
var Q1P3 = document.querySelector("#Q1P3");
var Q1P4 = document.querySelector("#Q1P4");
var Q2P1 = document.querySelector("#Q2P1");
var Q2P2 = document.querySelector("#Q2P2");
var Q2P3 = document.querySelector("#Q2P3");
var Q2P4 = document.querySelector("#Q2P4");
var Q3P1 = document.querySelector("#Q3P1");
var Q3P2 = document.querySelector("#Q3P2");
var Q3P3 = document.querySelector("#Q3P3");
var Q3P4 = document.querySelector("#Q3P4");
var Q4P1 = document.querySelector("#Q4P1");
var Q4P2 = document.querySelector("#Q4P2");
var Q4P3 = document.querySelector("#Q4P3");
var Q4P4 = document.querySelector("#Q4P4");
var nextQ = document.querySelector("#nextQ");
var rightWrong = document.querySelector("#rightWrong");
var nextQBtn = document.querySelector("#nextQBtn");
// ```

// ## Question Answers
// ```
var q1P1 = "true"; 
var q1P2 = "false";
var q1P3 = "false";
var q1P4 = "false";

var q2P1 = "false"; 
var q2P2 = "false";
var q2P3 = "true";
var q2P4 = "false";

var q3P1 = "false"; 
var q3P2 = "false";
var q3P3 = "false";
var q3P4 = "true";

var q4P1 = "false"; 
var q4P2 = "true";
var q4P3 = "false";
var q4P4 = "false";
// ```

// WHEN I OPEN the page I am presented with: a(n) Welcome Statement and a(n) Start Button.
// ```
var startVal = "false";

function startValFal(){
   if (startVal === "false"){
      codeQTitle.setAttribute("class", "displayNone");
      scoreTimer.setAttribute("class", "displayNone");
      gameOver.setAttribute("class", "displayNone");
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
// ```

// THEN the Timer Starts.
// ```
var timeLeft = 10;
var timerInterval = null;
// function wrongAnswer () {
//       timeLeft = timeLeft - 100;
// };

btn.addEventListener("click", function() {
         timerInterval = setInterval(function() {
         timeLeft--;
         timer.textContent = "Time Left: " + timeLeft;
         
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
      codeQTitle.setAttribute("class", "displayNone");
      scoreTimer.setAttribute("class", "displayNone");
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayNone");
      Q4.setAttribute("class", "displayNone");
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
   }
   else {
      nextQBtn.textContent = "Not Working"
   };
});
// ```

// WHEN I CLICK-ON a(n) Choice I am alerted if the chosen choice is WRONG or RIGHT. 
// ## Question 1
// ```
Q1.addEventListener ("click", function(event) {
   console.log(event.target);
   console.log("Im Here");
   if (event.target.getAttribute("data-correct") === "true"){
      nextQ.setAttribute("class", "displayVis");
      rightWrong.textContent = "You're Right!";
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayNone");
      Q4.setAttribute("class", "displayNone");
      
   }
   else {
      nextQ.setAttribute("class", "displayVis");
      rightWrong.textContent = "You're Wrong!";
      Q1.setAttribute("class", "displayNone");
      Q2.setAttribute("class", "displayNone");
      Q3.setAttribute("class", "displayNone");
      Q4.setAttribute("class", "displayNone");
      // if (rightWrong.textContent === "You're Wrong!") {
         timeLeft = timeLeft - 10;
         // clearInterval(timerInterval);
      // }
   };
});

// Q1P2.addEventListener ("click", function() {
//    if (q1P2 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q1P3.addEventListener ("click", function() {
//    if (q1P3 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q1P4.addEventListener ("click", function() {
//    if (q1P4 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });
// // ```
// // ## Question 2
// // ```
// Q2P1.addEventListener ("click", function() {
//    if (q2P1 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q2P2.addEventListener ("click", function() {
//    if (q2P2 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q2P3.addEventListener ("click", function() {
//    if (q2P3 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q2P4.addEventListener ("click", function() {
//    if (q2P4 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });
// // ```
// // ## Question 3
// // ```
// Q3P1.addEventListener ("click", function() {
//    if (q3P1 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q3P2.addEventListener ("click", function() {
//    if (q3P2 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q3P3.addEventListener ("click", function() {
//    if (q3P3 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q3P4.addEventListener ("click", function() {
//    if (q3P4 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });
// // ```
// // ## Question 4
// // ```
// Q4P1.addEventListener ("click", function() {
//    if (q3P1 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q4P2.addEventListener ("click", function() {
//    if (q3P2 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q4P3.addEventListener ("click", function() {
//    if (q3P3 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });

// Q4P4.addEventListener ("click", function() {
//    if (q3P4 === "true"){
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Right!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    }
//    else {
//       nextQ.setAttribute("class", "displayVis");
//       rightWrong.textContent = "You're Wrong!";
//       Q1.setAttribute("class", "displayNone");
//       Q2.setAttribute("class", "displayNone");
//       Q3.setAttribute("class", "displayNone");
//       Q4.setAttribute("class", "displayNone");
//    };
// });
// // ```

