let randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(randomNumber1);
let randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(randomNumber2);

let dice1 = document.querySelector(".img1");
console.log(dice1);

let dice2 = document.querySelector(".img2");
console.log(dice2);
dice1.setAttribute("src", `images/dice${randomNumber1}.png`);
dice2.setAttribute("src", `images/dice${randomNumber2}.png`);

let h1_content = document.querySelector("h1");

if (randomNumber1 == randomNumber2) {
  h1_content.textContent = "Draw 📍";
} else if (randomNumber1 > randomNumber2) {
  h1_content.textContent = "🚩 Player 1 Wins!";
} else {
  h1_content.textContent = "Player 2 Wins! 🚩";
}
