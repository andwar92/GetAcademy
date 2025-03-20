/*
    Man skal kjøpe bilett på en buss: barnebilitt eller voksen bilett
    prisene på disse er forskjellige - og de skal lagres i variabler.
    
    Man kjøper biletter ved å trykke på knapper.
    1. Vis frem hva slags bilett man har kjøpt på skjermen
    2. Vis pris
    2. Gjør så man kan se totalpris for alle bilettene man har kjøpt også
*/

//model
const app = document.getElementById('app');
let selectedTicket = "";
let selectedTicketPrice = 0;
const childTicket = 35;
const adultTicket = 95;
let totalPrice = 0;


//view
updateVeiw();
function updateVeiw(){
    app.innerHTML = /*HTML*/`
    <button onclick="bilettPriser('voksen')">Voksen bilett</button>
    <button onclick="bilettPriser('barn')">Barne bilett</button> <br>
    ${selectedTicket} til prisen av ${selectedTicketPrice} blanke kroner! <br> 
    Totalpris: ${totalPrice}
    `;
};


//controller
function bilettPriser(ticketType){
    if(ticketType === 'voksen'){
        selectedTicketPrice = adultTicket;
    }
    else if(ticketType === 'barn'){
        selectedTicketPrice = childTicket;
    }
    else {
        console.log("something went wrong...")
    }
    selectedTicket = ticketType;
    totalPrice += selectedTicketPrice;
    updateVeiw();
};

