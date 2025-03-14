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
    // inputText.includes("@",".");
    // if (savedInput = inputText){
    // inputText.push(index,100<0)

    // }
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
//             console.log("Punktum er rett etter alfakrøll!");
//             return "Email!";
//         }
//         index++;
    
//     }
    

//     return "Ingen Email!"
    
// };




//     // if(atIndex!== -1 && inputText[atIndex+1]==filter.shouldContain[1]){
//     //    console.log("inneholder punktum etter alfakrøll")
//     //    return "email"; 
//     // }
    
// // 


