const allQuestions = [
  // Arithmetic Operators
  {
    question: "What is the result of 15 + 5?",
    options: ["20", "15", "10"],
    answer: "20",
    type: "arithmetic",
  },
  {
    question: "What is the result of 20 - 8?",
    options: ["12", "28", "16"],
    answer: "12",
    type: "arithmetic",
  },
  {
    question: "What is the result of 6 * 4?",
    options: ["24", "10", "22"],
    answer: "24",
    type: "arithmetic",
  },
  {
    question: "What is the result of 15 / 3?",
    options: ["5", "3", "6"],
    answer: "5",
    type: "arithmetic",
  },
  {
    question: "What is the result of 17 % 5?",
    options: ["2", "3", "4"],
    answer: "2",
    type: "arithmetic",
  },
  {
    question: "What is the result of 2 ** 3?",
    options: ["8", "4", "6"],
    answer: "8",
    type: "arithmetic",
  },
  {
    question: "What is the result of 10 % 3?",
    options: ["1", "2", "3"],
    answer: "1",
    type: "arithmetic",
  },
  // Increment Operators
  {
    question: "What will be the value of x after: let x = 5; x++;",
    options: ["6", "5", "4"],
    answer: "6",
    type: "increment",
  },
  {
    question: "What's the difference between ++x and x++?",
    options: [
      "Pre-increment vs Post-increment",
      "No difference",
      "Syntax only",
    ],
    answer: "Pre-increment vs Post-increment",
    type: "increment",
  },
  {
    question: "What will be the value of x after: let x = 5; ++x;",
    options: ["6", "5", "4"],
    answer: "6",
    type: "increment",
  },
  {
    question: "What will be the value of x after: let x = 5; x++;",
    options: ["6", "5", "4"],
    answer: "6",
    type: "increment",
  },
  // Decrement Operators
  {
    question: "What will be the value of x after: let x = 5; x--;",
    options: ["4", "5", "6"],
    answer: "4",
    type: "decrement",
  },
  {
    question: "What's the difference between --x and x--?",
    options: [
      "Pre-decrement vs Post-decrement",
      "No difference",
      "Syntax only",
    ],
    answer: "Pre-decrement vs Post-decrement",
    type: "decrement",
  },
  {
    question: "What will be the value of x after: let x = 5; --x;",
    options: ["4", "5", "6"],
    answer: "4",
    type: "decrement",
  },
  {
    question: "What will be the value of x after: let x = 5; x--;",
    options: ["4", "5", "6"],
    answer: "4",
    type: "decrement",
  },

  // Comparison Operators
  {
    question: "What is the result of '5' === 5?",
    options: ["false", "true", "undefined"],
    answer: "false",
    type: "comparison",
  },
  {
    question: "What is the result of '5' == 5?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "comparison",
  },
  {
    question: "What is the result of '5' != 5?",
    options: ["false", "true", "undefined"],
    answer: "false",
    type: "comparison",
  },
  {
    question: "What is the result of '5' !== 5?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "comparison",
  },
  {
    question: "What is the result of '5' > 5?",
    options: ["false", "true", "undefined"],
    answer: "false",
    type: "comparison",
  },
  {
    question: "What is the result of '5' >= 5?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "comparison",
  },
  {
    question: "What is the result of '5' < 5?",
    options: ["true", "false", "undefined"],
    answer: "false",
    type: "comparison",
  },
  {
    question: "What is the result of '5' <= 5?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "comparison",
  },

  // Logical Operators
  {
    question: "What is the result of true && false?",
    options: ["false", "true", "undefined"],
    answer: "false",
    type: "logical",
  },
  {
    question: "What is the result of true || false?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "logical",
  },
  {
    question: "What is the result of !true?",
    options: ["false", "true", "undefined"],
    answer: "false",
    type: "logical",
  },
  {
    question: "What is the result of !false?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "logical",
  },
  {
    question: "What is the result of !undefined?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "logical",
  },
  {
    question: "What is the result of !null?",
    options: ["true", "false", "undefined"],
    answer: "true",
    type: "logical",
  },
  // Assignment Operators
  {
    question: "What will be the value of x after: let x = 5; x += 3;",
    options: ["8", "5", "3"],
    answer: "8",
    type: "assignment",
  },
  {
    question: "What will be the value of x after: let x = 10; x -= 4;",
    options: ["6", "14", "10"],
    answer: "6",
    type: "assignment",
  },
  {
    question: "What will be the value of x after: let x = 20; x *= 2;",
    options: ["40", "20", "10"],
    answer: "40",
    type: "assignment",
  },
  {
    question: "What will be the value of x after: let x = 10; x /= 2;",
    options: ["5", "10", "20"],
    answer: "5",
    type: "assignment",
  },
  {
    question: "What will be the value of x after: let x = 10; x %= 3;",
    options: ["1", "3", "0"],
    answer: "1",
    type: "assignment",
  },
  {
    question: "What will be the value of x after: let x = 10; x **= 2;",
    options: ["100", "10", "1000"],
    answer: "100",
    type: "assignment",
  },

  // Bitwise Operators
  {
    question: "What is the result of 5 & 3?",
    options: ["1", "2", "3"],
    answer: "1",
    type: "bitwise",
  },
  {
    question: "What is the result of 5 | 3?",
    options: ["7", "5", "3"],
    answer: "7",
    type: "bitwise",
    //ماذا يعني | (OR البتّي)؟
    // المعامل | (OR البتّي) يعمل على مقارنة القيم البتّية للعددين. كل رقم يُحول إلى تمثيل ثنائي (بناءً على النظام العددي الثنائي)، ثم يتم إجراء عملية OR بين كل زوج من البتات المقابلة.

    // الخطوات:
    // التمثيل الثنائي للعددين 5 و 3:

    // 5 في النظام الثنائي: 0101
    // 3 في النظام الثنائي: 0011
    // إجراء عملية OR البتّي بين الأرقام: في عملية OR البتّي، إذا كان أحد البتات في أي من الرقمين يساوي 1، فإن النتيجة في تلك البت تكون 1. إذا كانت البتات في كلا الرقمين تساوي 0، فإن النتيجة تكون 0.

    // لنقم بالعملية بتّياً:

    // markdown
    // Copy code
    // 0101  (العدد 5)
    // 0011  (العدد 3)
    // ----
    // 0111  (النتيجة)
    // النتيجة هي 0111، وهو التمثيل الثنائي للعدد 7.

    // النتيجة:
    // التمثيل الثنائي الناتج هو 0111، والذي يعادل الرقم 7 في النظام العشري.
    // الإجابة الصحيحة:
    // الإجابة هي "7".
    // إذن، عند تطبيق المعامل | على 5 و 3، النتيجة هي 7.
  },
  // Conditional Operator
  {
    question: "What is the result of: let x = 5 > 3 ? 'yes' : 'no';",
    options: ["yes", "no", "undefined"],
    answer: "yes",
    type: "conditional",
  },
  {
    question: "The ternary operator is a shorter way of writing what?",
    options: ["if/else statement", "switch statement", "while loop"],
    answer: "if/else statement",
    type: "conditional",
  },
  // ... Continue with more questions for each type
];

const arithmeticExtra = [
  {
    question: "What is the result of 25 % 7?",
    options: ["4", "3", "5"],
    answer: "4",
    type: "arithmetic",
  },
  {
    question: "What is the result of 12 * 8?",
    options: ["96", "100", "80"],
    answer: "96",
    type: "arithmetic",
  },
  {
    question: "What is the result of 18 + 15?",
    options: ["33", "28", "25"],
    answer: "33",
    type: "arithmetic",
  },
  {
    question: "What is the result of 45 - 12?",
    options: ["33", "35", "37"],
    answer: "33",
    type: "arithmetic",
  },
];

const incrementExtra = [
  {
    question: "let x = 3; let y = ++x; What is the value of y?",
    options: ["4", "3", "undefined"],
    answer: "4",
    type: "increment",
  },
  {
    question: "let x = 2; let y = x++; What is the value of y?",
    options: ["2", "3", "undefined"],
    answer: "2",
    type: "increment",
  },
  {
    question: "What is the result of: let x = 4; x--;?",
    options: ["4", "5", "3"],
    answer: "3",
    type: "increment",
  },
  {
    question: "What is the result of: let x = 5; x++;?",
    options: ["5", "6", "4"],
    answer: "6",
    type: "increment",
  },
];

// إضافة الأسئلة الإضافية
allQuestions.push(...arithmeticExtra, ...incrementExtra);

// تجميع الأسئلة حسب النوع
const questions = {
  arithmetic: allQuestions.filter((q) => q.type === "arithmetic"),
  increment: allQuestions.filter((q) => q.type === "increment"),
  decrement: allQuestions.filter((q) => q.type === "decrement"),
  comparison: allQuestions.filter((q) => q.type === "comparison"),
  logical: allQuestions.filter((q) => q.type === "logical"),
  assignment: allQuestions.filter((q) => q.type === "assignment"),
  bitwise: allQuestions.filter((q) => q.type === "bitwise"),
  conditional: allQuestions.filter((q) => q.type === "conditional"),
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = [];
let engineerName = "";

// DOM Elements
const nameSetup = document.getElementById("name-setup");
const quizSetup = document.getElementById("quiz-setup");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCounter = document.getElementById("question-counter");
const successMessage = document.getElementById("success-message");
const retryQuizButton = document.getElementById("retry-quiz");
const startQuizButton = document.getElementById("start-quiz");
const nameSubmitButton = document.getElementById("name-submit");
const engineerNameInput = document.getElementById("engineer-name");
const userName = document.getElementById("user-name");
const scorePercent = document.getElementById("score-percent");
const wrongQuestionsList = document.getElementById("wrong-questions-list");
const quizTypeSelect = document.getElementById("quiz-type");

// Event Listeners
nameSubmitButton.addEventListener("click", submitName);
startQuizButton.addEventListener("click", startQuiz);
retryQuizButton.addEventListener("click", resetQuiz);

function submitName() {
  engineerName = engineerNameInput.value;
  if (engineerName.trim()) {
    nameSetup.classList.add("d-none");
    quizSetup.classList.remove("d-none");
  } else {
    alert("Please enter your name.");
  }
}

function startQuiz() {
  const quizType = quizTypeSelect.value;
  currentQuestions = allQuestions.filter((q) => q.type === quizType);

  if (currentQuestions.length === 0) {
    alert("Sorry, no questions available for this type of quiz");
    return;
  }

  correctAnswers = 0;
  wrongAnswers = [];
  currentQuestionIndex = 0;

  quizSetup.classList.add("d-none");
  quizContainer.classList.remove("d-none");
  loadQuestion();
}

function resetQuiz() {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = [];
  successMessage.classList.add("d-none");
  quizSetup.classList.remove("d-none");
}

function loadQuestion() {
  if (currentQuestionIndex < currentQuestions.length) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${
      currentQuestions.length
    }`;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className =
        "btn btn-outline-primary w-100 mb-2 btn-lg fs-4 fw-bold py-3 px-4 rounded-pill";
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });
  } else {
    showSuccess();
  }
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const buttons = optionsContainer.getElementsByTagName("button");

  Array.from(buttons).forEach((button) => (button.disabled = true));

  if (selectedAnswer === currentQuestion.answer) {
    correctAnswers++;
  } else {
    wrongAnswers.push(currentQuestion.question);
  }

  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 1000);
}

function showSuccess() {
  const totalQuestions = currentQuestions.length;
  const percentage = (correctAnswers / totalQuestions) * 100;

  quizContainer.classList.add("d-none");
  successMessage.classList.remove("d-none");

  userName.textContent = engineerName;
  scorePercent.textContent = `${percentage.toFixed(2)}%`;

  // Display wrong answers
  wrongQuestionsList.innerHTML = "";
  wrongAnswers.forEach((question) => {
    const listItem = document.createElement("li");
    listItem.textContent = question;
    wrongQuestionsList.appendChild(listItem);
  });
}
