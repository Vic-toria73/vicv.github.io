let choiceNumber = prompt('Donnes moi un nombre ?' + " ")

function number(choiceNumber) {
    return ('Le numéro est ' + choiceNumber);
}

let givenNumber = alert('Vous avez choisi le nombre ' + choiceNumber);

function didWin(givenNumber) {

    if (givenNumber < 22) {
        alert('Dommage le nombre est plus grand')
        return false;
    } else if (choiceNumber > 22) {
        alert('Dommage le nombre est plus petit')
        return false;
    } else {
        alert('Bravo ! Vous avez deviné le nombre.')
        return true;
    }
}


function gamePlay() {

    number(choiceNumber);
    return didWin(givenNumber);
}
let resultatFinal = gamePlay();