console.log("Emad Ur Rehman")


let choices = document.querySelectorAll(".choice");
let clearScore = document.querySelector(".clearScore");
let playAgain = document.querySelector(".playAgain");
let compScore = document.querySelector(".compScore");
let userScore = document.querySelector(".userScore");
let mess = document.querySelector(".mess");
let mainMode = document.querySelector(".mainMode");
let setting = document.querySelector(".setting");
let mode = document.querySelector(".mode");
let compName = document.querySelector(".compName");
let userName = document.querySelector(".userName");


let uScore = 0;
let cScore = 0;
let userChoice;
let compChoice;
let x=true;
playAgain.disabled = true;
let settingNum = 0 ;
let otherMode = true;
let turn = 1;



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
        
        mainMode.classList.remove("class" , "extra");
        mode.classList.add("class" , "hideMode");
        settingNum = 0;


        if(turn === 1){
        userChoice = box.getAttribute("id");
        // console.log("you clicked");
        
        box.style.backgroundColor= "red"
        playAgain.disabled = false;
        playAgain.classList.add("class" , "hov"); 
        disable();
        playAgain.style.backgroundColor="#395f64";
        playAgain.innerText="Click for computer choice";
        }
        else if(turn === 2){
            userChoice = box.getAttribute("id");
            console.log("you clicked" , userChoice);
            
            box.style.backgroundColor= "pink"
            playAgain.disabled = false;
            playAgain.classList.add("class" , "hov"); 
            disable();
            playAgain.style.backgroundColor="#395f64";
            playAgain.innerText="Click for Player 2 turn";
            x=2;
        }
        else if( turn === 3){
            compChoice = box.getAttribute("id");
            console.log("p2 clicked" , compChoice );
            
            box.style.backgroundColor= "pink"
            playAgain.disabled = false;
            playAgain.classList.add("class" , "hov"); 
            disable();
            playAgain.style.backgroundColor="#395f64";
            turn = 2;
            clearScore.classList.remove("class" , "hide");
            playAgain.innerText = "Play again";
            x=false;
            turn ===2;
            playGame2();
        }


    }) 
})



    playAgain.addEventListener("click" , ()=>{

        mainMode.classList.remove("class" , "extra");
        mode.classList.add("class" , "hideMode");
        settingNum = 0;


        if(x===true){
        clearScore.classList.remove("class" , "hide");
        playAgain.innerText = "Play again";
        x=false;
        playGame();
        }
        else if (x=== false){
        clearScore.classList.add("class" , "hide");
        playAgain.innerText = "Select any item";
        playAgain.style.backgroundColor = "gray";
        playAgain.disabled = true ;
        playAgain.classList.remove("class" , "hov"); 
        compChoice = "";
        userChoice = "";
        x=true;
        enable();
        mess.style.backgroundColor = "transparent";
        }
        else if (x === 2){
            // clearScore.classList.remove("class" , "hide");
            // playAgain.innerText = "select 2nd if else ";
            playAgain.innerText = "Player 2 select an item";
            playAgain.classList.remove("class" , "hov");
            playAgain.style.backgroundColor = "gray";
            playAgain.disabled = true ;
            x=true;
            enable();
            turn = 3;
        }

    });

clearScore.addEventListener("click" , ()=>{
    uScore = 0;
    cScore = 0;
    userScore.innerText = 0;
    compScore.innerText = 0;
    console.log("clear")
});
// --------------------------palyGmae2 function --

let playGame2 = ()=>{
    // console.log("User choice = " , userChoice);
    console.log(compChoice);

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

        showWin2(userWin);
    }
}

let showWin2 = (userWin)=>{
    if(userWin === false){
        // console.log("Computer Win");
        cScore++;
        compScore.innerText = cScore;
        mess.innerText = "Player1 Lost, P2 '" + compChoice + "' beats P1 '" + userChoice +"'." ;
        mess.style.backgroundColor = "rgb(255, 58, 58)";

    }
    else{
        // console.log("You Win");
        uScore++;
        userScore.innerText = uScore;
        mess.innerText = "Player1 Won! P1 '" +  userChoice + "' beats P2 '" + compChoice+"'.";
         mess.style.backgroundColor = "rgb(78, 255, 87)";

    }
}

// --------------------------setting --

setting.addEventListener("click" , ()=>{
    if(settingNum === 0){
    mainMode.classList.add("class" , "extra");
    mode.classList.remove("class" , "hideMode")
    settingNum = 1;
    }
    else{
        mainMode.classList.remove("class" , "extra");
        mode.classList.add("class" , "hideMode")
        settingNum = 0;
    }

})


mode.addEventListener("click" , ()=>{
   if(otherMode === true){
      otherMode = false;
        console.log("this is tru");
        mode.innerText ="Play with Comp";
        turn=2;
        cScore = 0;
        uScore = 0;
        userScore.innerText = 0;
        compScore.innerText = 0;  
        compName.innerText = "Player 2";
        userName.innerText = "Player 1";
        

        clearScore.classList.add("class" , "hide");
        playAgain.innerText = "Select any item";
        playAgain.style.backgroundColor = "gray";
        playAgain.disabled = true ;
        playAgain.classList.remove("class" , "hov"); 
        compChoice = "";
        userChoice = "";
        x=true;
        
        enable();
        mess.style.backgroundColor = "transparent";
   }
   else{
    otherMode = true;
    console.log("this is fasl");
    mode.innerText = "Play with Friend";
    turn=1;
    cScore = 0;
    uScore = 0;
    userScore.innerText = 0;
    compScore.innerText = 0;
    compName.innerText = "Comp";
    userName.innerText = "Your";
    

    clearScore.classList.add("class" , "hide");
    playAgain.innerText = "Select any item";
    playAgain.style.backgroundColor = "gray";
    playAgain.disabled = true ;
    playAgain.classList.remove("class" , "hov"); 
    compChoice = "";
    userChoice = "";
    x=true;
    enable();
    mess.style.backgroundColor = "transparent";
   }
})