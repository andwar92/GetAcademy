//Model
let startTime = new Date().getTime();
let finishTime = new Date().getTime();
let spentMilliseconds = 0;
let spentSeconds = 0;
let selecredLampIndex = '';
const app = document.getElementById('app')
//Veiw
lampIndex();
function updateVeiw(){
    app.innerHTML = /*HTML*/ `
    <button onclick="timer()">Start</button>
    <div>
    ${timer()}
    </div>
    <h1>Reaksjon Test!</h1>
    <div class="container">
    ${reactionTest()}
    </div>
`};

function reactionTest() {
    let reactionTest = '';
    for (let i = 0; i < 25; i++) {
        console.log(selecredLampIndex == i)
        if (selecredLampIndex == i){
            console.log("is correct")
        reactionTest += `<div id="${i}" class="lightBulb lightOn" onclick ="randomLamp()"></div>`;
        }
        else {
        reactionTest += `<div id="${i}" class="lightBulb"></div>`;    
        }
        
    }
    return reactionTest
};

//Controller
function timer(){
    seconds++;
  spentMilliseconds = Math.floor(finishTime - startTime);  
};
function randomLamp(){
    
    lampIndex();
};
function startGame(){

};
function lampIndex() {
    selecredLampIndex = Math.floor(Math.random()*25)
    updateVeiw();
};
