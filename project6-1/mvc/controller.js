

function checkGreeting(greeting) {

    // for(situation of situations){
    //     if(randomSituationIndex === 0){
    //         if(greeting === situation.correctGreeting){
    //             if(respect < 75){
    //                 quest ="Du  har ikke nok respekt, fuck off!"
    //                 respect -= 25;
    //                 randomSituationIndex = 1;
    //             } else{
    //                 quest = "Du får en rocket launcher";
    //             }
    //         }
            
    //     }
    //     if(randomSituationIndex === 1){
    //         if(greeting === situation.correctGreeting){ 
    //             situations.push(michaelSituation[0]);
    //             quest = situations[3].greeting;
                
    //         }
    //     }
    // }   
    
    let currentSituation = situations[randomSituationIndex];
    
    if (randomSituationIndex === 0 && respect < 100){            
            quest = "Du har ikke nok respekt, fuck off!";
            respect -= 25;
            randomSituationIndex = 1;
        
            updateView();
            return; //Stopper videre kjøring
    
    }  
    
    if(randomSituationIndex === 1){        
            

            if(greeting === currentSituation.correctGreeting){
                quest = "Det står en yelling Karen i min oppkjørsel, dra dit og få henne vekk!"
                situations.push(michaelSituation[0]);
                randomSituationIndex = situations.length - 1;
                getQuestView();

            } else {
                quest = "Feil hilsen, du mister respekt!";
                respect -=10;
                return;
            } 
        
        }

        

    
    
        if(randomSituationIndex === 3){
            if(greeting === situations[3].correctGreeting){
                quest ="Du klapper til Karen, og hun løper avsted!"
                respect += 50;
                } else {
                    questanswer = "Karen står fortsatt der og roper, prøv igjen!";
                }
                updateView();
                return;
        }

};

function checkAction() {


};

function randomSituation() {





    updateView();
}
