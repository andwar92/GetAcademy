// updateView();
// function updateView() {
//     app.innerHTML =/*HTML*/ `
    
//     <div>Respect: ${respect}</div>
//     <div>${situations[randomSituationIndex].greeting}</div>
//     <div>${quest}</div>
//     <input onchange="checkGreeting(this.value)" type="text">
//     <button onclick="randomSituation()" >Neste</button>
//     <div></div>
//     `;

// };
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${getRespectView()}
        ${getSituationView()}
        ${getQuestView()}
        ${getInputView()}
        ${getNextButtonView()}
    `;
}

function getRespectView() {
    return `<div id="respect" >Respect: ${respect}</div>`;
}

function getSituationView() {
    return `<div>${situations[randomSituationIndex].greeting}</div>`;
}

function getQuestView() {
    return `<div>${quest}</div>`;
}

function getInputView() {
    return `<input onchange="checkGreeting(this.value)" type="text">`;
}

function getNextButtonView() {
    return `<button onclick="randomSituation()">Neste</button>`;
}
