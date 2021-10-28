let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    target = Math.floor(Math.random() * 10);
    return target;
}

const getAbsoluteDistance = (guess, target) => {
    difference = Math.abs(target - guess);
    return difference
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

    if (humanGuess < 0 || humanGuess > 9) {
        alert('Invalid Number.');
    }

    if (computerGuess < 0 || computerGuess > 9) {
        alert('Invalid Number.')
    }

    const humanDiff = getAbsoluteDistance(humanGuess, secretTarget);
    const computerDiff = getAbsoluteDistance(computerGuess, secretTarget);
    if (humanDiff <= computerDiff) {
        return true
    } else {
        return false
    }
}

const updateScore = string => {
    if (string === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
}

