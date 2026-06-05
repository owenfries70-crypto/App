function showAnswer() {
    document.getElementById("answer").textContent = "Hello";
}
const lesson = [
  {
    question: 'What does "Hallo" mean?',
    choices: ["Goodbye", "Hello", "Thank you", "Please"],
    answer: "Hello"
  },

  {
    question: 'What does "Danke" mean?',
    choices: ["Sorry", "Thank you", "Morning", "Friend"],
    answer: "Thank you"
  },

  {
    question: 'What does "Ja" mean?',
    choices: ["No", "Yes", "Maybe", "Good"],
    answer: "Yes"
  }
];
let xp = Number(localStorage.getItem("xp")) || 0;

function addXP() {
  xp += 10;
  localStorage.setItem("xp", xp);
}
let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question").textContent =
        lesson[currentQuestion].question;
}
{
    question: 'What does "der Hund" mean?',
    choices: [
        "the dog",
        "the cat",
        "the house",
        "the car"
    ],
    answer: "the dog"
}
function checkAnswer(choice) {
    if (choice === lesson[currentQuestion].answer) {
        addXP();
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    currentQuestion++;
    loadQuestion();
}
let currentQuestion = 0;

function loadQuestion() {
    const q = lesson[currentQuestion];

    document.getElementById("question").textContent = q.question;

    document.getElementById("btn1").textContent = q.choices[0];
    document.getElementById("btn2").textContent = q.choices[1];
    document.getElementById("btn3").textContent = q.choices[2];
    document.getElementById("btn4").textContent = q.choices[3];

    document.getElementById("xp").textContent = xp;
}

window.onload = loadQuestion;