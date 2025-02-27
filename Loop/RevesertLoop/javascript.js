//model
const app = document.getElementById('app');
let aCount = 0;
let eCount = 0;
let wordInput = '';
let vokaler = "aeiouyæøåAEIOUYÆØÅ";
let antallVokaler = 0;

//veiw
updateVeiw();
function updateVeiw() {
    app.innerHTML = /*HTML*/ `
    <input  onchange="countAndReversed(this.value)" type="text" placeholder="Skriv en tekst her!">
    <ul>
        <li> Reversert ord: ${wordInput}
        <li>A = ${aCount}</li>
        <li>E = ${eCount}</li>
        <li>Antall vokaler = ${antallVokaler}</li>
    </ul>
    `;
};


//controller
function countAndReversed(word) {
    reset();
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == 'A') {
            aCount++;
        }
        else if (word[i].toUpperCase() == 'E') {
            eCount++;
        }
    }
    for (let i = word.length - 1; i >= 0; i--) {
        wordInput += word[i];
    }
    for (let i = 0; i <= word.length; i++) {
        let tegn = word.charAt(i);

        for (let x = 0; x < vokaler.length; x++) {
            if (tegn === vokaler.charAt(x)) {
                antallVokaler++;
            }
        }
    }
    updateVeiw();
};

function reset() {
    aCount = 0;
    eCount = 0;
    wordInput = '';
    antallVokaler = 0;
}