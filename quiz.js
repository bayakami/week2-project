/*hides welcome screen and displays question 1, hides all the other questions*/
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "block";
  }

  /*hides question 1 and displays question 2*/
  function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
  }

   /*hides question 2 and displays question 3*/
   function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
  }

   /*hides question 3 and displays question 4*/
   function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
  }

   /*hides question 4 and displays question 5*/
   function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
  }

   /*hides question 5 and displays results*/
   function results() {
    calcResults();
    document.getElementById("question5").style.display = "none";
    document.getElementById("results").style.display = "block";
  }


function calcResults(){;
    var score = 0;
    var ele = document.getElementsByTagName("radio");
    var result = document.getElementById("results");
      for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked)             
                score+=parseInt(ele[i].value)
      }
    

  if (score<=8) {
    message = "PERL <br>Your best days may be behind you, but you you've still got it. Once you make a friend they are friends for life.   You are unpredictable, but those who know you best are used to it."
} else if (score>=9 && score<=12) {
  message = "JAVA <br>You are complex yet thorough in your work. You know the solution to everyone's problem but your own."
} else {
  message = "PYTHON <br>You are educated and enjoy research, especially in science. You also love a good book when you have time to read. You pay attention to the details and you don't accept mistakes."
}

document.getElementById("score").innerHTML = message
}
