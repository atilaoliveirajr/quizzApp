let question1 = `Question 1`
let question2 = `Question 2`

let answer1 = `Robbie Williams`
let answer2 = `Lady Gaga`
let answer3 = `Tim Berners-Lee`
let answer4 = `Justin Bieber`

let questionNumber = 0;
let progress = 0;

function nextQuestion() {
    questionNumber += 1;
    progress = questionNumber * 10;
    document.getElementById(`progressBar`).innerHTML = `${progress}%`;
    document.getElementById(`progressBar`).style.width = `${progress}%`;
    if (document.getElementById(`question`).innerHTML == question1) {
        document.getElementById(`question`).innerHTML = question2;
    } else {
        document.getElementById(`question`).innerHTML = question1;
    }

    document.getElementById(`answer1`).innerHTML = answer1;
    document.getElementById(`answer2`).innerHTML = answer2;
    document.getElementById(`answer3`).innerHTML = answer3;
    document.getElementById(`answer4`).innerHTML = answer4;
}

function answer(a) {
    let selectedAnswer;
    switch (a) {
        case 1:
            selectedAnswer = answer1;
            break;
        case 2:
            selectedAnswer = answer2;
            break;
        case 3:
            selectedAnswer = answer3;
            break;
        case 4:
            selectedAnswer = answer4;
            break;
    }
    // alert(`Du hast ` + selectedAnswer + ` antwortet.`);

    if (selectedAnswer == answer3) {
        document.getElementById(`correctAnswer`).classList.remove(`d-none`)
        document.getElementById(`wrongAnswer`).classList.add(`d-none`)

        document.getElementById(`nextBtn`).classList.remove(`d-none`)
    } else {
        document.getElementById(`wrongAnswer`).classList.remove(`d-none`)
        document.getElementById(`correctAnswer`).classList.add(`d-none`)
    }
}