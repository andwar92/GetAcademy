const app = document.getElementById('app');
let savedInput = '';
const email = {
    correct: ["@","."],
    wrong: [" "]
}
updateVeiw();
function updateVeiw(){
    app.innerHTML = /*HTML*/`
    <input type="text" placeholder= "Epostadresse" onchange = "saveEmail(this.value)">
    <div>${checkIfEmail()}</div>
    `;
};


function saveEmail(inputText){
    savedInput = inputText
    updateVeiw();
};

function checkIfEmail(inputText){
    for (char of inputText) {
        if(char === inputText)
            
        return "email!"
    };
    
    // //skjekke hvis den lagrede teksten inneholder @
    // //returner true hvis den gjør det, returner false hvis den ikke gjør det. 
    // i++;   
    // return "denne returnerer noe"
};