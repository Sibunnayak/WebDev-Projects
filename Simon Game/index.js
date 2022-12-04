var buttonColours = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userclickedpattern = [];
var randomNumber;
var randomchoosencolor;
var userchoosencolor;
var level = 0;
function nextSequence() {
  userclickedpattern = [];
  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);
  randomNumber = Math.trunc(Math.random() * 4);
  randomchoosencolor = buttonColours[randomNumber];
  gamepattern.push(randomchoosencolor);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomchoosencolor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playsound(randomchoosencolor);
  level++;
}
$(".btn").click(function () {
  userchoosencolor = $(this).attr("id");
  //   console.log(userchoosencolor);
  userclickedpattern.push(userchoosencolor);
  //   console.log(userclickedpattern);
  playsound(userchoosencolor);
  animatePress(userchoosencolor);
  checkans(userclickedpattern.length - 1);
});
function playsound(name) {
  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

var track = false;
$(document).keypress(function () {
  if (!track) {
    $("#level-title").text("Level " + level);
    nextSequence();
    track = true;
  }
});
function checkans(currentlevel) {
  if (gamepattern[currentlevel] === userclickedpattern[currentlevel]) {
    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userclickedpattern.length === gamepattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    console.log("wrong");
  }
}
function startOver() {
  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamepattern = [];
  track = false;
}
