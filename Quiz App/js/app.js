const questions = [
  {
    ques: "Which of the following is the markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },

  {
    ques: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },

  {
    ques: "What does CSS stands for?",
    a: "Cascading Style Sheet",
    b: "Coloured Special Sheet",
    c: "Color and style sheet",
    d: "none of the above",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wroong = 0;
const question = document.getElementById("question");
const options = document.querySelectorAll(".optionss");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  question.innerText = `${index + 1}) ${data.ques}`;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wroong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
  <h3 style=" margin:30px 0px">Thank you for playing the quiz :)</h3>
  <h2>Here are the results ${right}/${total}</h2>
  </div>
  `;
};

loadQuestion();
