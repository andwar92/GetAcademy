const app = document.getElementById('app');
let savedInput = '';
let tegn = ['@','.'];
const filter = {
    shouldContain:["@",+".",+"!"] ,
    shouldNotContain:["@",".","!",+ " "],
} 
    





updateVeiw();
function updateVeiw() {
    app.innerHTML = /*HTML*/`
    <input type="text" placeholder= "Epostadresse" onchange = "saveEmail(this.value)">
    <div>${checkIfEmail(savedInput) ?? ''}</div>
    `;
};





function saveEmail(inputText) {
    savedInput = inputText
    updateVeiw();
};

function checkIfEmail(inputText) {
        for (let i = 0; i<filter.shouldContain.length; i++) {
            if ( inputText.includes(filter.shouldContain[i])){
            console.log('Test')
            return "Email!"; //får opp riktig email når jeg skriver: @.     
            }   
            if ( inputText === filter.shouldNotContain[i]) {
            return "Ingen Email!"
            }       
        }     
};   
