let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#newGame-btn");
let mgsContainer = document.querySelector(".mgs-container");
let mgs = document.querySelector("#mgs");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (turn0) {
            e.target.innerHTML = "O";
            turn0 = false;
        } else {
            e.target.innerHTML = "X";
            turn0 = true;
        }
        e.target.disabled = true;
        checkWinner();
    });
});

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
    });
}

resetGame = () => {
    turn0 = true;
    enableAllBoxes();
    mgsContainer.classList.add("hide");
    newBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
}

const showWinner = (winner) => {
    mgsContainer.classList.remove("hide");
    mgs.innerText = `${winner} wins!`;
    newBtn.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableAllBoxes();
}


const checkWinner = () => {
    for (let winPattern of winPatterns) {
        let pos1Val = boxes[winPattern[0]].innerText;
        let pos2Val = boxes[winPattern[1]].innerText;
        let pos3Val = boxes[winPattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);