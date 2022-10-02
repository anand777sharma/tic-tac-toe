console.log("Welcome to tic tac toe ")
let music=new Audio("music.mp3")
let audioTurn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn ="x"
// function to change the tuen
const changeTurn=()=>{

return turn==="x"?"0":"x"

}
// function to check for win
const checkWin=()=>{

}
// Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListenenr('click',()=>{
        if(boxtext.innerText===''){
        boxtext.innerText= turn;
        turn=changeTurn();
        audioTurn.play();
        checkWin();
        document.getElementsByClassName(turn)[0].innerText="turn for"
        }
    })
})