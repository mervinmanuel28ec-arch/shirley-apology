function openLetter() {

    const welcome = document.getElementById("welcome");

    welcome.style.opacity = "0";

    setTimeout(function() {
        welcome.style.display = "none";
    }, 1000);

}


function showChoice() {

    document.getElementById("choice").style.display = "block";

}


function sayYes() {

    document.getElementById("message").innerHTML =
        "YAYYYYY! ❤️🥹 I LOVE YOU MY SAIYARAA! 💕";

}


const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);


function moveNoButton() {

    const maxX = window.innerWidth - noButton.offsetWidth - 30;
    const maxY = window.innerHeight - noButton.offsetHeight - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

}