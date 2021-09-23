/*hides welcome screen and displays question 1, hides all the other questions*/
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    
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

   /*hides question 5 and displays results
   function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
  }*/

