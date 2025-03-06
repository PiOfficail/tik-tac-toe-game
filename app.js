let box =document.querySelectorAll(".box")

let rst_btn = document.querySelector(".rst")
let new_btn = document.querySelector(".new-btn")
let msg = document.querySelector(".msg")
let hide = document.querySelector(".hide")

let turn0 = true;
let count = 0;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
] 

const resetGame = () => {
    turn0 = true;
    count = 0;
    enable_btn();
    hide.classList.add("hide");
  };

box.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("Button was Clicked");
        if(turn0){
            turn0 = false;
            box.innerText ="O"
            
            }
            else{
                turn0 = true
                box.innerText = "X"
                
            }
            box.disabled = true;
            checkwinner();
    })
}
);



// FUnction for disabling btns after win
const disable_btn = () =>{
    for (let abc of box){
        abc.disabled = true;}
}


const enable_btn = () =>{
    for (let abc of box){
        abc.disabled = false;
    abc.innerText = ""}
}

// const showWinner = (winner) =>{
//     msg.innerText = "congrats You have win the game",winner;
//     hide.classList.remove("hide")
//     disable_btn()

// }



const showWinner = (winner) =>{
    msg.innerText = `Congrats! Winner is ${winner}`; 
    hide.classList.remove("hide")
    disable_btn()}
const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;
    

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos2Val); 
                showWinner(pos1Val);
                return true;
                
            }
        }
    }
};

new_btn.addEventListener("click", resetGame);
rst_btn.addEventListener("click", resetGame);