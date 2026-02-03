let score = 0;
let pins = document.querySelectorAll(".pin");
let ball = document.getElementById("ball");

function rollBall() {
  ball.classList.add("roll");

  setTimeout(() => {
    let hit = Math.floor(Math.random() * (pins.length + 1));

    for (let i = 0; i < hit; i++) {
      if (pins[i]) pins[i].classList.add("fall");
    }

    score += hit;
    document.getElementById("score").textContent = score;
  }, 800);

  setTimeout(() => {
    ball.classList.remove("roll");
  }, 1200);
}

function resetGame() {
  score = 0;
  document.getElementById("score").textContent = score;

  pins.forEach(pin => {
    pin.classList.remove("fall");
  });
}
