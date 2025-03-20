const app = document.getElementById('app');
let quest = "";
let questanswer;
let hasAnswered = false;
let respect = 25;
let situations = [
    {
        greeting: "Du møter på Trevor,   Hva svarer du? <p> A:Hei, B:Fuck off, C:Ikke si noe</p>",
        correctGreeting: "A",
    },
    {
        greeting: "Du møter på Michael, Hva svarer du? <p>A:Yo, B:Fuck off, C:Ikke si noe</p>",
        correctGreeting: "A",
    },
    {
        greeting: "Du møter på Franklin, Hva svarer du? <p>A:Wassup, B:Fuck you, C: Ikke si noe</p>",
        correctGreeting: "A",
    },
    
]

let michaelSituation = [
    {
        greeting: "Du drar til Michael's oppkjørsel, der står yelling Karen. Hva gjør du? <p> A:Snakke fornuftig med henne, B:Ringe politiet, C:Klappe til Karen! </p> ",
        correctGreeting: "C",
    }

]
randomSituationIndex = Math.floor(Math.random() * situations.length);
