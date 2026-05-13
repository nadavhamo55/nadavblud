document.addEventListener("DOMContentLoaded", () => {
  const startImages = document.querySelectorAll(".image-tile");
  const startPage = document.getElementById("start-page");
  const quizPage = document.getElementById("quiz-page");
  const resultPage = document.getElementById("result-page");

  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const progress = document.getElementById("progress");
  const backBtn = document.getElementById("backBtn");
  const continueBtn = document.getElementById("continueBtn");
  const questionImage = document.getElementById("questionImage");
  const resultContainer = document.getElementById("result");

  const questions = [
    { question: "Do you like spicy food?", options: ["Yes", "A little", "No"] },
    { question: "How do you prefer to travel?", options: ["Walking", "Cab"] },
    { question: "Do you need help from locals?", options: ["Yes", "Doesn't matter", "No"] },
    { question: "How much do you care about clean streets?", options: ["Very", "Somewhat", "Not at all"] }
  ];

  const questionImages = ["food.svg", "flags.svg", "people.svg", "clean-street.svg"];
  const answers = new Array(questions.length).fill(null);
  let currentQuestion = 0;
  let selectedCategory = null;

  startImages.forEach(image => {
    image.addEventListener("click", (event) => {
      selectedCategory = event.currentTarget.dataset.category || "travel";
      startQuiz();
    });
  });

  function startQuiz() {
    startPage.classList.add("hidden");
    quizPage.classList.remove("hidden");
    resultPage.classList.add("hidden");
    currentQuestion = 0;
    renderQuestion();
  }

  function renderQuestion() {
    const question = questions[currentQuestion];
    progress.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    questionText.textContent = question.question;
    questionImage.src = `images/${questionImages[currentQuestion]}`;
    questionImage.alt = question.question;

    optionsList.innerHTML = "";
    question.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <label>
          <input type="radio" name="answer" value="${index}">
          ${option}
        </label>
      `;
      optionsList.appendChild(li);
    });

    const selectedAnswer = answers[currentQuestion];
    if (selectedAnswer !== null) {
      const radio = optionsList.querySelector(`input[value="${selectedAnswer}"]`);
      if (radio) radio.checked = true;
      continueBtn.disabled = false;
    } else {
      continueBtn.disabled = true;
    }

    backBtn.disabled = currentQuestion === 0;
    continueBtn.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Continue";

    optionsList.querySelectorAll("input[name='answer']").forEach(input => {
      input.addEventListener("change", () => {
        continueBtn.disabled = false;
      });
    });
  }

  continueBtn.addEventListener("click", () => {
    const selectedOption = optionsList.querySelector("input[name='answer']:checked");
    if (!selectedOption) return;

    answers[currentQuestion] = Number(selectedOption.value);

    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
    } else {
      showResult();
    }
  });

  backBtn.addEventListener("click", () => {
    if (currentQuestion === 0) return;
    currentQuestion -= 1;
    renderQuestion();
  });

  function showResult() {
    quizPage.classList.add("hidden");
    resultPage.classList.remove("hidden");

    const categoryLabel = selectedCategory
      ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
      : "Travel";

    resultContainer.innerHTML = `
      <div class="result-image">
        <img src="images/colosseum.svg" alt="Italy">
      </div>
      <h2>Your match: Italy 🇮🇹</h2>
      <p>Based on your answers and interest in ${categoryLabel}, Italy is the best fit for your next trip.</p>
      <div class="country-info">
        <ul>
          <li>Beautiful food and culture</li>
          <li>Clean historic streets</li>
          <li>Friendly locals and lively neighborhoods</li>
          <li>Easy travel between cities</li>
        </ul>
      </div>
      <button onclick="location.reload()" class="restart-btn">Try again</button>
    `;
  }
});
