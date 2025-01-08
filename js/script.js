// Define Questions and Answers
const quizData = [
    {
        question: "What does HTML mean?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
    },
    {
        quetion: "What is the capital of Italy?",
        options: ["Paris", "Madrid", "Berlin"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
        correct: 0
    }
];

// Quiz initialization and interaction
document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let score = 0;

    const questionP1 = document.getElementById("question");
    const optionsP1 = document.getElementById("option");
    const next = document.getElementById("next");
    const feedbackP1 = document.getElementById("feedback");
    const finalScoreP1 = document.getElementById("final-score");
    const restart = document.getElementById("restart");
    const scoreContainer = document.querySelector(".score-container");

    function showQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionP1.textContent = currentQuestion.question;
        optionsP1.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.dataset.index = index;
            li.addEventListener("click", () => selectAnswer(index));
            optionsP1.appendChild(li);
        });

        feedbackP1.textContent = "";
    }

    function selectAnswer(selectedIndex) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedIndex === currentQuestion.correct) {
            feedbackP1.textContent = "Correct!";
            score++;
        } else {
            feedbackP1.textContent = "Wrong!";
        }
        next.disabled = false;
    }

    next.addEventListener("click", () => {
        currentQuestionIndex;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            displayScore();
        }
    });

    function displayScore() {
        questionP1.textContent = "";
        optionsP1.innerHTML = "";
        feedbackP1.textContent = "";
        scoreContainer.style.display = "block";
        finalScoreP1.textContent = `Your score: ${score} / ${quizData.length}`;
    }

    restart.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;

        scoreContainer.style.display = "none";
        showQuestion();
    });

    // Start the quiz
    showQuestion();
    next.disabled = true;
})

