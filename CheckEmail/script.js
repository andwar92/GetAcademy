const app = document.getElementById('app');
let savedInput = '';
let tegn = ['@','.'];

const alphaCurl = "@";
const dot = ".";
const text = "";






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

    if(!inputText.includes(alphaCurl)) {
        return "Skriv inn Email."
    }

    if(!inputText.includes(dot)) {
        return "Ugyldig Email: Mangler dette tegnet: " + dot;
    }

    let first_alphaCurl =  inputText.indexOf(alphaCurl);
    let dot_alphaCurl = inputText.indexOf(dot);

    if(first_alphaCurl > dot_alphaCurl) {
        return "Ugyldig Email: dot kommer før alfakrøll";
    }

    return "Du har Email!";


       
};   


// for(let i =0; i<advices.length; i++){
    //     if(i == index){
    //         advice = advices[i];
// function checkIfEmail(inputText) {
//     let index = 0;
//     let atIndex = -1; //Dette er for å senere sjekke om denne verdien har endret seg, slik at vi vet om @ er i inputText
//     for (char of inputText) {
//         if (char == filter.shouldContain[index] && atIndex == -1) {  //den ekstra sjekken er for å passe på at vi kun setter atIndex en gang
//             
//             console.log('Fant @ på index', atIndex)
           
//         }
//         if( char === filter.shouldNotContain[index]){
//             return "Ingen Email!"
//         }
//         if (atIndex !== -1 && index === atIndex + 1 && char === filter.shouldContain[1]) { //sjekker om atIndex har endret seg, at vi er på index'en etter @, og om elementet er "."
//             console.log("dot er rett etter alfakrøll!");
//             return "Email!";
//         }
//         index++;
    
//     }
    

//     return "Ingen Email!"
    
// };




//     // if(atIndex!== -1 && inputText[atIndex+1]==filter.shouldContain[1]){
//     //    console.log("inneholder dot etter alfakrøll")
//     //    return "email"; 
//     // }
    
// // 


