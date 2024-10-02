const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
let turn0 = true;
let newGameButton = document.querySelector("#new-btn");
let winMessage = document.querySelector("#msg");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    newGameButton.classList.add("hide");
    winMessage.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.setAttribute("disabled", "true");
        checkWinner();
    });
});
const enableBoxes = () => {
    for (let box of boxes) {
        box.removeAttribute("disabled");
        box.innerHTML = "";
    }
};
const disableBoxes = () => {
    for (let box of boxes) {
        box.setAttribute("disabled", "true");
    }
};
const showWinner = (winner) => {
    winMessage.innerText = `Congraulations, Winner is ${winner}`;
    newGameButton.classList.remove("hide");
    winMessage.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (const pattern of winPatterns) {
        const pos1val = boxes[pattern[0]].innerText;
        const pos2val = boxes[pattern[1]].innerText;
        const pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos3val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};
newGameButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
