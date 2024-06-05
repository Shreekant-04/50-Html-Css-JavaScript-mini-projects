let userScore=0;
let compScore=0;

const userScorePara=document.querySelector(".user-score");
const compScorePara=document.querySelector(".comp-score");

// display this if choices matched
function draw(){
    let msg=document.querySelector(".msgBox");
    msg.innerText='Draw!  Try Again!';
    msg.style.backgroundColor="#364652";
}

// to display winner i.e. user or computer will get one point.
const showWinner=(userWin ,userChoice,compChoice)=>{
    let msg=document.querySelector(".msgBox");
    msg.style.backgroundColor="Red";
   if(userWin){
    msg.innerText=`You win your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScorePara.innerText=userScore
   }else{
    msg.innerText=`You lose ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor="Red";
    compScore++;
    compScorePara.innerText=compScore;
   } 
}
//game condition 
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if (userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper scissor
            userWin=compChoice==="paper"?false:true;
        }else if (userChoice==="paper"){
            //rock scissor
            userWin=compChoice==="rock"?false:true;
        }else{
            //rock paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
// getting user choice
const choices=document.querySelectorAll(".choice");
 
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

//random choice from computer
const genCompChoice= ()=>{
    const options=["rock","paper","scissor"]
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
    
}

