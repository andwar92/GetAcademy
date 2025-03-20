//Model
let adjektivOgSubstantiv1 = '___';
let adjektivOgSubstantiv2 = '___';
let adjektivOgSubstantiv3 = '___';
let adjektivOgSubstantiv4 = '___';

//View
function updateView(){
    document.getElementById('ord1').innerText = adjektivOgSubstantiv1;
    document.getElementById('ord2').innerText = adjektivOgSubstantiv2;
    document.getElementById('ord3').innerText = adjektivOgSubstantiv3;
    document.getElementById('ord4').innerText = adjektivOgSubstantiv4;
}

//Controller
function wordInput1(adjektivOgSubstantiv) {
    adjektivOgSubstantiv1 = adjektivOgSubstantiv;
    updateView();
}
function wordInput2(adjektivOgSubstantiv) {
    adjektivOgSubstantiv2 = adjektivOgSubstantiv;
    updateView();
}
function wordInput3(adjektivOgSubstantiv) {
    adjektivOgSubstantiv3 = adjektivOgSubstantiv;
    updateView();
}
function wordInput4(adjektivOgSubstantiv) {
    adjektivOgSubstantiv4 = adjektivOgSubstantiv;
    updateView();
}