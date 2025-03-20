//Model
let adjektivOgSubstantiv1 = '___';
let adjektivOgSubstantiv2 = '___';
let adjektivOgSubstantiv3 = '___';
let adjektivOgSubstantiv4 = '___';

const gammelMann = 'ungkar';
const litenChihuahua = 'liten Chihuahua';
const påJakt = 'på jakt';
const finneEnPartner = 'å finne en partner';
const tjukkGris = 'tjukk gris';
const dvergMed = 'dverg med strapon på';
const skyte = 'skyte';
const løpeBort = 'løpe bort';
//View
updateView();
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="app">
    Det var en gang en ${adjektivOgSubstantiv1}, som skulle ut ${adjektivOgSubstantiv2}. Der traff hen på en
    ${adjektivOgSubstantiv3}, som skulte på hen med ett lurt smil, mens hen slikket seg rundt munnen. Hen tenkte på å ${adjektivOgSubstantiv4}! <br>
    
    
    <button onclick="wordInput(this)">${gammelMann}</button>
    <button onclick="wordInput(this)">${litenChihuahua}</button><br>
    <button onclick="wordInput(this)">${påJakt}</button>
    <button onclick="wordInput(this)">${finneEnPartner}</button><br>

    <button onclick="wordInput(this)">${tjukkGris}</button>
    <button onclick="wordInput(this)">${dvergMed}</button><br>
    <button onclick="wordInput(this)">${skyte}</button>
    <button onclick="wordInput(this)">${løpeBort}</button><br>
    </div>
    `;
}

//Controller
function wordInput(button) {
    if (button.textContent == gammelMann || button.textContent == litenChihuahua) {
        adjektivOgSubstantiv1 = button.textContent;
    }
    else if (button.textContent == påJakt || button.textContent == finneEnPartner) {
        adjektivOgSubstantiv2 = button.textContent;

    }
    else if (button.textContent == tjukkGris || button.textContent == dvergMed){
        adjektivOgSubstantiv3 = button.textContent;
    }

    else { adjektivOgSubstantiv4 = button.textContent;}
    updateView();


}