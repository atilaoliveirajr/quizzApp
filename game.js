let question1 = `Wer hat HTML erfunden?`
let question1Answer1 = `Robbie Williams`
let question1Answer2 = `Lady Gaga`
let question1Answer3 = `Tim Berners-Lee`
let question1Answer4 = `Justin Bieber`

let question2 = `Was bedeutet das HTML tag &lta&gt?`
let question2Answer1 = `Text Fett`
let question2Answer2 = `Container`
let question2Answer3 = `Ein link`
let question2Answer4 = `Kursiv`

let questionNumber = 0;
let progress = 0;

let rightAnswer;

function nextQuestion() {
    questionNumber += 1;
    progress = questionNumber * 10;
    document.getElementById(`progressBar`).innerHTML = `${progress}%`;
    document.getElementById(`progressBar`).style.width = `${progress}%`;

    //Answers Controller
    switch (questionNumber) {
        case 1:
            {
                document.getElementById(`question`).innerHTML = question1;
                document.getElementById(`answer1`).innerHTML = question1Answer1;
                document.getElementById(`answer2`).innerHTML = question1Answer2;
                document.getElementById(`answer3`).innerHTML = question1Answer3;
                document.getElementById(`answer4`).innerHTML = question1Answer4;
                rightAnswer = 3;
            }
            break;

        case 2:
            {
                document.getElementById(`question`).innerHTML = question2;
                document.getElementById(`answer1`).innerHTML = question2Answer1;
                document.getElementById(`answer2`).innerHTML = question2Answer2;
                document.getElementById(`answer3`).innerHTML = question2Answer3;
                document.getElementById(`answer4`).innerHTML = question2Answer4;
                rightAnswer = 3;
            }
            break;

        case 3:
            document.getElementById(`question`).innerHTML = question2;
            break;

        case 4:
            document.getElementById(`question`).innerHTML = question2;
            break;

    }

    // Questions Controller
    if (document.getElementById(`question`).innerHTML == question1) {
        document.getElementById(`question`).innerHTML = question2;
    } else {
        document.getElementById(`question`).innerHTML = question1;
    }
}

function answer(a) {

    if (a == rightAnswer) {
        document.getElementById(`correctAnswer`).classList.remove(`d-none`)
        document.getElementById(`wrongAnswer`).classList.add(`d-none`)

        // The next question button will appear only if the user click on the right answer.
        document.getElementById(`nextBtn`).classList.remove(`d-none`)

    } else {
        document.getElementById(`wrongAnswer`).classList.remove(`d-none`)
        document.getElementById(`correctAnswer`).classList.add(`d-none`)
    }
}