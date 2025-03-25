//Model
const app = document.getElementById('app')
let countdownTime = 30*1000;
let endTime = new Date().getTime() + countdownTime;
let timeLeft = 10;
let secondsTimer = '';
let startTimer = 0;
let endTimer = 0;
let clicks = 0;
//Veiw
lampIndex();
function updateVeiw() {
    app.innerHTML = /*HTML*/ `
    <h1>Reaksjon Test!</h1>
    <div class="container">
        ${Game()}
    </div>
    Runde:
    ${clicks}<br>
    Tid per klikk:
    ${secondsTimer}<br>
    Tid igjen:
    ${seconds}
    <button onclick="start()"><h2>Start reaction test!</h2></button>
`};

function Game() {
    let reactionTest = '';
    for (let i = 0; i < 25; i++) {
        if (selecredLampIndex == i) {
            reactionTest += `<div id="${i}" class="lightBulb lightOn" onclick ="randomLamp()"></div>`;
        }
        else {
            reactionTest += `<div id="${i}" class="lightBulb"></div>`;
        }
    }
    startTimer = new Date().getTime();
    return reactionTest
};

//Controller
function start() {
  let currentTime = new Date().getTime();
  let timeLeft = endTime - currentTime;

  if (timeLeft <= 0) {
    clearInterval(timer);
    altert("1-minute timer complete!");
  } else {
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    console.log(`Time left: ${seconds} seconds`);
  }
};


function randomLamp() {
    endTimer = new Date().getTime();
    let milliSeonds = endTimer - startTimer;
    secondsTimer = milliSeonds / 1000;
    clicks++;
    lampIndex();
};

function lampIndex() {
    timer=setTimeout(Game,1000)
    selecredLampIndex = Math.floor(Math.random() * 25)
    updateVeiw();
};
