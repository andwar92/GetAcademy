const app = document.getElementById('app')

lampIndex();
function updateVeiw() {
    console.log("kjører update view")
    app.innerHTML = /*HTML*/ `
    <h1>Reaksjon Test!</h1>
    <div class="container">
        ${Game()}
    </div>
    points:
    ${model.data.points}<br>
    Tid per klikk:
    ${model.data.secondsTimer}<br>
    Tid igjen:<br>
    <h1 id="countdown">${model.data.timeLeftMessage}</h1>
    <button onclick="start()"><h2>Start reaction test!</h2></button>
    <ul>${printList()}</ul>
`};

function Game() {
    let reactionTest = '';
    for (let i = 0; i < 25; i++) {
        if (model.data.selectedLampIndex == i) {
            reactionTest += `<div id="${i}" class="lightBulb lightOn" onclick ="randomLamp()"></div>`;
        }
        else {
            reactionTest += `<div id="${i}" class="lightBulb"></div>`;
        }
    }
    model.data.startTimer = new Date().getTime();
    return reactionTest
};
function printList() {
    let html = '';
    console.log(model.data.rounds)
    for (let i = 0; i > model.data.rounds.length; i++) {
        html +=/*HTML*/`
        <li>Runde: ${model.data.rounds[i].runde} - Klikk: ${model.data.rounds[i].clicks}</li> 
        `;
        console.log("går i loop")
    }
    console.log("html:", html)
    return html;
};

function summary() {
    return /*HTML*/`
    <div>
        Du klarte ${model.data.points} klikk på ${model.data.timeLeft} sekunder!
    </div>
    `;
}