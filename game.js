
var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern = [];
var gamePattern=[];
var level = 0;
function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  $("h1").text("Level "+level);

  level=level+1;
}

function playSound(name){

  switch(name){
    case "blue":
      var sound = new Audio("sounds/blue.mp3");
      sound.play();


    case "green":
      var sound = new Audio("sounds/green.mp3");
      sound.play();


    case "red":
      var sound = new Audio("sounds/red.mp3");
      sound.play();


    case "yellow":
      var sound = new Audio("sounds/yellow.mp3");
      sound.play();


  }

}
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}


function gameOver(){
  var sound = new Audio("sounds/wrong.mp3");
  sound.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200)
  $("h1").text("Game Over, Press Any Key to Restart");
  userClickedPattern = [];
  gamePattern=[];
  level = 0;

}

$(".btn").click(function(){
  if($("h1").text()!=="Press A Key to Start"){
    playSound(this.id);
    animatePress(this.id);
    userClickedPattern.push(this.id);

    if (userClickedPattern[userClickedPattern.length-1]!==gamePattern[userClickedPattern.length-1]){
      gameOver();
    }


    else if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },500)
      userClickedPattern = [];
    }


  }
});
$(document).keypress(function(){
  var level = 0;
  if($("h1").text()==="Press A Key to Start"||$("h1").text()==="Game Over, Press Any Key to Restart"){
    nextSequence();
  }
  })
