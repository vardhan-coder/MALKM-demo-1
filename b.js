let userscore = 0;
let botscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const botscorepara = document.querySelector("#bot-score");
const genbotchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame = () => {
    msg.innerText = "Game was draw,play again";
    msg.style.backgroundColor = "#081b31";
}
const showwinner = (userwin,userchoice,botchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You won! Your ${userchoice} beats ${botchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        botscore++;
        botscorepara.innerText = botscore;
        msg.innerText = `You lost! ${botchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
const botchoice = genbotchoice();
    //DRAW GAME
    if(userchoice === botchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = botchoice === "paper"? false : true;
        }else if(userchoice === "paper"){
            userwin = botchoice === "scissors"? false : true;
        }else{
            userwin = botchoice === "rock"? false : true; 
        }
        showwinner(userwin,userchoice,botchoice);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});