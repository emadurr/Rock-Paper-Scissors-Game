console.log("Emad Ur Rehman")


let choices = document.querySelectorAll(".choice");
let clearScore = document.querySelector(".clearScore");
let playAgain = document.querySelector(".playAgain");
let compScore = document.querySelector(".compScore");
let userScore = document.querySelector(".userScore");
let mess = document.querySelector(".mess");


let uScore = 0;
let cScore = 0;
let userChoice;
let compChoice;
let x=true;
playAgain.disabled = true;


let compGen = ()=>{
    let comparr = ["Rock" , "Paper" , "Scissors"];
    let idx = Math.floor(Math.random()*3);
    return comparr[idx];
};

let draw = ()=>{
    // console.log("Game Draw");
    mess.innerText = "Match draw! You both selected '" + compChoice + "'";
    mess.style.backgroundColor = "rgb(0, 175, 202)";
}

let showWin = (userWin)=>{
    if(userWin === false){
        // console.log("Computer Win");
        cScore++;
        compScore.innerText = cScore;
        mess.innerText = "You Lost, computer '" + compChoice + "' beats your '" + userChoice +"'." ;
        mess.style.backgroundColor = "rgb(255, 58, 58)";

    }
    else{
        // console.log("You Win");
        uScore++;
        userScore.innerText = uScore;
        mess.innerText = "You Won! Your '" +  userChoice + "' beats computer '" + compChoice+"'.";
         mess.style.backgroundColor = "rgb(78, 255, 87)";

    }
}

let playGame = ()=>{
    // console.log("User choice = " , userChoice);
    compChoice = compGen();
    // console.log("Computer choice = " , compChoice);

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin;
        if(userChoice === "Rock" ){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{ //user = scisseros
            userWin = compChoice === "Rock" ? false : true;
        }

        showWin(userWin);
    }
};

let disable = ()=>{
    for(let cut of choices){
        cut.style.pointerEvents ="none";
    }
};

let enable = ()=>{
    for(let jor of choices){
        jor.style.pointerEvents ="";
        jor.style.backgroundColor="transparent";
    }
};



choices.forEach((box)=>{
    console.log(box);
    box.addEventListener("click" , ()=>{
        userChoice = box.getAttribute("id");
        // console.log("you clicked");
        
        box.style.backgroundColor= "red"
        playAgain.disabled = false;
        playAgain.classList.add("class" , "hov"); 
        disable();
        playAgain.style.backgroundColor="#395f64";
        playAgain.innerText="Click for computer choice";
    }) 
    
});



playAgain.addEventListener("click" , ()=>{

    
    if(x===true){
    clearScore.classList.remove("class" , "hide");
    playAgain.innerText = "Play again";
    x=false;
    playGame();
    }
    else{
    clearScore.classList.add("class" , "hide");
    playAgain.innerText = "Select any item";
    playAgain.style.backgroundColor = "gray";
    playAgain.disabled = true ;
    playAgain.classList.remove("class" , "hov"); 
    x=true;
    enable();
    mess.style.backgroundColor = "transparent";
    };
});

clearScore.addEventListener("click" , ()=>{
    uScore = 0;
    cScore = 0;
    userScore.innerText = 0;
    compScore.innerText = 0;
    console.log("clear")
})