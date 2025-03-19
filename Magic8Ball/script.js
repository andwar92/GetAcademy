//Model
const app = document.getElementById('app');
let advice = '';
let advices = ['For å få bedre søvn, bør du legge deg på samme tid hver kveld',
'Gresset er alltid grønnere på andre siden'
]

//Veiw
updateVeiw();
function updateVeiw() {
    console.log("testing")
    app.innerHTML = /*HTML*/ `
    <button onclick="randomAdvices()">Advice</button>
    <h1>${advice}</h1>
    `;
}

//Control
function randomAdvices(){
    let index = Math.floor(Math.random()* advices.length)
    advice = advices[index];

    // for(let i =0; i<advices.length; i++){
    //     if(i == index){
    //         advice = advices[i];
    //     }
    // }

    updateVeiw();
};

