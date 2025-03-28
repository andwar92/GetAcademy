function start() {
    model.data.round++;
    model.data.points = 0;
    model.data.timeLeft = 10;
    model.data.timeLeftMessage = model.data.timeLeft;
    model.data.countdownTimer = setInterval(timer, 1000)
    updateVeiw()

};

function timer() {

    if ( model.data.timeLeft > 0) {
        model.data.timeLeft--;
        model.data.timeLeftMessage = model.data.timeLeft;
        document.querySelector("#countdown").innerHTML =  model.data.timeLeftMessage;
    } else {
        clearInterval(model.data.countdownTimer)
        model.data.timeLeft = 10;
        model.data.rounds.push(
            {
                runde: model.data.round,
                clicks: model.data.points
            },
        )
        model.data.timeLeftMessage = summary();
        document.querySelector("#countdown").innerHTML =  model.data.timeLeftMessage;
    }
};


function randomLamp() {
    model.data.endTime = new Date().getTime() +  model.data.countdownTime;
    model.data.endTimer = new Date().getTime();
    let milliSeonds =  model.data.endTimer -  model.data.startTimer;
    model.data.secondsTimer = milliSeonds / 1000;
    model.data.points++;
    lampIndex();
};

function lampIndex() {
    model.data.selectedLampIndex = Math.floor(Math.random() * 25)
    updateVeiw();
};
