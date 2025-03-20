//Model
const app = document.getElementById('app')
let secondsTimer;
let clicks = 0;
//Veiw
lampIndex();
function updateVeiw() {
    app.innerHTML = /*HTML*/ `
    <button onclick="start()">Start</button>
    <div>
    <h1>${clicks}
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
        if (selecredLampIndex == i) {
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
function start() {
    secondsTimer = 0;
    for (let seconds = 0; seconds < 0; seconds++) {
        if()
    }
        
    // secondsTimer = clicks(1000);
};
function timer() {
    secondsTimer = 
};
function randomLamp() {
    clicks++;
    lampIndex();
};

function lampIndex() {
    selecredLampIndex = Math.floor(Math.random() * 25)
    updateVeiw();
};
