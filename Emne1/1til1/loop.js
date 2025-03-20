//model
const app = document.getElementById('app');
let aCount = 0;
let eCount = 0;

//veiw
updateVeiw();
function updateVeiw(){
    app.innerHTML= /*HTML*/ `
    <input onchange="count(this.value)" type="text" placeholder="Skriv en tekst her!">
    <ul>
        <li>A = ${aCount}</li>
        <li>E = ${eCount}</li>
    </ul>
    `;
};


//controller

function count(word){
    reset();
    for(let i = 0; i<word.length;i++){
        if(word[i].toUpperCase() == 'A'){
            aCount++;
        }
        else if(word[i].toUpperCase() == 'E'){
            eCount++;
        }
    }
    updateVeiw();
};

function reset(){
    aCount = 0;
    eCount = 0;
}