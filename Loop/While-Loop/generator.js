//Model
const app = document.getElementById('app');
let number1 = 0;
let number2 = 0;
let equealNumbers = ' ';
//Veiw
updateVeiw();
function updateVeiw() {
    app.innerHTML = /*HTML*/`
<ul>
    <li>${number1}</li>
    <li>${number2}</li>
    <div>${equealNumbers}</div>
    
</ul>
<Button onclick="generateNumbers()">Generate numbers</Button>
`;
};
//controller
function generateNumbers() {
    updateVeiw();
    number1 = Math.floor(Math.random() * 11);
    number2 = Math.floor(Math.random() * 11);
    while (number1 === number2){
        equealNumbers =("Equal numbers found! Get new numbers!...");
        console.log(number1,number2, 'Equal numbers');
        break; 
    }
    console.log(number1,number2);


};
