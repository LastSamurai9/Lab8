document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.querySelector(".user");
    const un = document.getElementById("un");
    const bn = document.getElementById("bn");
    const up = document.getElementById("up");
    const bp = document.getElementById("bp");
    const winner = document.getElementById("winner");
    const button = document.getElementById("button");
    let userName = "";
    let userScore = 0;
    let botScore = 0;
    const score = () => {
        up.innerHTML = 'Загальні бали:<br>' + userScore;
        bp.innerHTML = 'Загальні бали:<br>' + botScore;
    };
    const checkWinner = () => {
        if (userScore === 3) {
            winner.innerHTML = 'Переможець:<br>' + userName;
            button.disabled = true;
        } else if (botScore === 3) {
            winner.innerHTML = 'Переможець:<br>Bot';
            button.disabled = true;
        }
    };
    const round = () => {
        userName = userInput.value.trim() || "user";
        userInput.value = userName;
        const userNumber = Math.floor(Math.random() * 10) + 1;
        const botNumber = Math.floor(Math.random() * 10) + 1;
        un.innerHTML = 'Випадкове число:<br>' + userNumber;
        bn.innerHTML = 'Випадкове число:<br>' + botNumber;
        if (userNumber > botNumber) {
            userScore++;
        } else if (botNumber > userNumber) {
            botScore++;
        }
        score();
        checkWinner();
    };
    button.addEventListener("click", round);
});