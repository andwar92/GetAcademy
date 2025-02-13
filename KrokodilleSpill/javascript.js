// Model
let upNum = 0;
let downNum = 0;
let points = 0;

// Veiw

function updateNumbers() {
    upNum = getRandomNumber();
    downNum = getRandomNumber();
    document.getElementById('upNum').innerHTML = upNum;
    document.getElementById('downNum').innerHTML = downNum;
}

function submit() {
    
   let input = document.getElementById('input').value;
   let correctAnswer;

    if (upNum<downNum) {
        correctAnswer = "<";   
    }
    else if (upNum>downNum) {
        correctAnswer = ">";
    } else {
        correctAnswer = "=";
    }
    if (input == correctAnswer) {
        points++;
        document.getElementById('results').innerText = "Riktig! =D"
    }
     else {
        points --;
         document.getElementById('results').innerText = "Feil! =("
     }

        document.getElementById('points').innerText = points;
        document.getElementById('input').value = "";
        updateNumbers();

    
}

function reset() {
    document.getElementById('points').innerText = points;
    document.getElementById('results').innerText = "";

 updateNumbers();
}




// Controller
function getRandomNumber() {
    return Math.round(Math.random() *10)+1;
}
updateNumbers();