let leftPosition = 175;
let topPosition = 25;
let character = document.getElementById("character");

function moveLeft() {
    if (leftPosition > 0) {
        leftPosition -= 10;
        character.style.left = leftPosition + "px";
    }
}

function moveRight() {
    if (leftPosition < 350) {
        leftPosition += 10;
        character.style.left = leftPosition + "px";
    }
}

function moveUp() {
    if (topPosition > 0) {
        topPosition -= 10;
        character.style.top = topPosition + "px";
    }
}

function moveDown() {  
    if (topPosition < 350) {
        topPosition += 10;
        character.style.top = topPosition + "px";
    }
}

addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    } else if (event.key === "ArrowUp") {
        moveUp();
    } else if (event.key === "ArrowDown") {
        moveDown();
    }
});