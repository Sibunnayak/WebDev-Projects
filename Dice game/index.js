var c;
var a = 0;
var b = 0;
var image1;
function player1() {
  if (a < 1) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    c = randomNumber1;
    var randomDiceImage = `dice${randomNumber1}.png`;
    var randomImageSource = "images/" + randomDiceImage;
    image1 = document
      .querySelectorAll(".img1")[0]
      .setAttribute("src", randomImageSource);
  }
  a++;
}
var image2;
function player2() {
  if (b < 1 && a == 1) {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = `dice${randomNumber2}.png`;
    var randomImageSource1 = "images/" + randomDiceImage1;
    image2 = document
      .querySelectorAll("img")[1]
      .setAttribute("src", randomImageSource1);
    winner(c, randomNumber2);
  }
  b++;
}

function winner(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Play 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "🚩Play 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "😢Draw!";
  }
}

function refresh() {
  a = 0;
  b = 0;
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
  document.querySelector("h1").innerHTML = "Refresh Me";
}
