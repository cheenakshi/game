let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);
var countis=0;

//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas
let primary = document.getElementById('primary-number');
    primary.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById('secondary-number');
    secondary.innerHTML = `<p>${secondNumber}</p>`


//get guess from user
let button = document.getElementById('btn')

button.addEventListener('click', function(){

let guess = document.getElementById('guess').value;
    guess = Number(guess);
//check answer
if (guess === total){
    alert('Correct');
    window.location.reload()
} else {
    alert('Sorry. Incorrect. The correct answer was ' + total + '.')
    window.location.reload()

}
setTimeout(function(){
    $("#game").show();
    countup = setInterval(function(){
    countis-=1;
    $("#countis").text(countis+":00");
    if(countis<=0){
     $(".endresult").html("Total Tries :"+(right+wrong)+"<br>Right: "+right+"<br>Wrong :"+wrong+"<br>right quota: "+(Math.floor((right*100)/(right+wrong)))+"%")
      clearInterval(countup);
      $("#countis").text("00:00");
      $("#html").hide();
      $("#endresult").show();
    }
  },1000);
  },4100);

    });

