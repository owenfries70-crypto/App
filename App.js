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