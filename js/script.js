<script src="js/script.js"></script>
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded correctly");
});
``
<html>
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");
}); startImages = document.querySelectorAll('.start-image');
const introSection = document.getElementById('intro');
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const progressElement = document.getElementById('progress');

const countries = {
  Italy: { Food: 5, Cleanliness: 3, Size: 4, Friendliness: 5, score: 0 },
  Switzerland: { Food: 3, Cleanliness: 5, Size: 3, Friendliness: 4, score: 0 },
  Portugal: { Food: 4, Cleanliness: 4, Size: 4, Friendliness: 5, score: 0 }
};

const quizzesData = {
  food: {
    title: 'Food Quiz',
    questions: [
      {
        text: 'What cuisine excites you most?',
        options: [
          { label: 'A) Mediterranean flavors', value: 'food' },
          { label: 'B) Simple, healthy dishes', value: 'food' },
          { label: 'C) Street food and markets', value: 'food' },
          { label: 'D) Local family recipes', value: 'food' }
        ]
      },
      {
        text: 'How important is culinary experience in travel?',
        options: [
          { label: 'A) Essential - food is the main attraction', value: 'food' },
          { label: 'B) Very important - it shapes memories', value: 'food' },
          { label: 'C) Somewhat important - nice to explore', value: 'food' },
          { label: 'D) I like trying new things when I travel', value: 'food' }
        ]
      },
      {
        text: 'What level of food adventure appeals to you?',
        options: [
          { label: 'A) Exotic dishes I\'ve never tried', value: 'food' },
          { label: 'B) Authentic local specialties', value: 'food' },
          { label: 'C) Well-known regional dishes', value: 'food' },
          { label: 'D) Both local and fine dining', value: 'food' }
        ]
      },
      {
        text: 'Which food destination sounds best?',
        options: [
          { label: 'A) Italy - pasta and wine', value: 'food' },
          { label: 'B) Portugal - fresh seafood', value: 'food' },
          { label: 'C) Switzerland - chocolate and cheese', value: 'food' },
          { label: 'D) Somewhere with bustling food markets', value: 'food' }
        ]
      }
    ]
  },
  cleanliness: {
    title: 'Cleanliness Quiz',
    questions: [
      {
        text: 'What is your cleanliness standard when traveling?',
        options: [
          { label: 'A) Spotless and pristine', value: 'cleanliness' },
          { label: 'B) Very clean and well-maintained', value: 'cleanliness' },
          { label: 'C) Clean enough to be comfortable', value: 'cleanliness' },
          { label: 'D) I\'m flexible about it', value: 'cleanliness' }
        ]
      },
      {
        text: 'How much do clean streets matter to you?',
        options: [
          { label: 'A) Extremely - I prefer spotless areas', value: 'cleanliness' },
          { label: 'B) Very much - organized cities', value: 'cleanliness' },
          { label: 'C) Moderately - general cleanliness', value: 'cleanliness' },
          { label: 'D) Not much - charm over cleanliness', value: 'cleanliness' }
        ]
      },
      {
        text: 'What environment do you prefer?',
        options: [
          { label: 'A) Immaculate, quiet parks', value: 'cleanliness' },
          { label: 'B) Well-kept public spaces', value: 'cleanliness' },
          { label: 'C) Mix of clean and character', value: 'cleanliness' },
          { label: 'D) Lively, bustling street life', value: 'cleanliness' }
        ]
      },
      {
        text: 'Which destination appeals to you most?',
        options: [
          { label: 'A) Switzerland - organized and pristine', value: 'cleanliness' },
          { label: 'B) Modern city with great infrastructure', value: 'cleanliness' },
          { label: 'C) Europe with nearby nature', value: 'cleanliness' },
          { label: 'D) Authentic, historic neighborhoods', value: 'cleanliness' }
        ]
      }
    ]
  },
  size: {
    title: 'Exploration Quiz',
    questions: [
      {
        text: 'What size destination do you prefer?',
        options: [
          { label: 'A) Small villages you can explore on foot', value: 'size' },
          { label: 'B) Compact towns with nearby countryside', value: 'size' },
          { label: 'C) Medium cities with character', value: 'size' },
          { label: 'D) Larger regions with diverse areas', value: 'size' }
        ]
      },
      {
        text: 'How do you like to explore?',
        options: [
          { label: 'A) Wandering small charming streets', value: 'size' },
          { label: 'B) Walking through cozy neighborhoods', value: 'size' },
          { label: 'C) Mixing walking with some transport', value: 'size' },
          { label: 'D) Covering lots of ground and areas', value: 'size' }
        ]
      },
      {
        text: 'What gives you travel satisfaction?',
        options: [
          { label: 'A) Discovering hidden corners', value: 'size' },
          { label: 'B) Thoroughly exploring one area', value: 'size' },
          { label: 'C) Balance of depth and variety', value: 'size' },
          { label: 'D) Seeing as much as possible', value: 'size' }
        ]
      },
      {
        text: 'Ideal travel pace?',
        options: [
          { label: 'A) Slow and immersive', value: 'size' },
          { label: 'B) Leisurely with some exploration', value: 'size' },
          { label: 'C) Balanced exploration', value: 'size' },
          { label: 'D) Active and fast-paced', value: 'size' }
        ]
      }
    ]
  },
  friendliness: {
    title: 'People Quiz',
    questions: [
      {
        text: 'What draws you to a destination?',
        options: [
          { label: 'A) Warm, welcoming locals', value: 'friendliness' },
          { label: 'B) Open and friendly communities', value: 'friendliness' },
          { label: 'C) Good hospitality', value: 'friendliness' },
          { label: 'D) Engaging local culture', value: 'friendliness' }
        ]
      },
      {
        text: 'How important are interactions with locals?',
        options: [
          { label: 'A) Essential - I want genuine connections', value: 'friendliness' },
          { label: 'B) Very important - great conversations', value: 'friendliness' },
          { label: 'C) Important - adds to the experience', value: 'friendliness' },
          { label: 'D) I like meeting people naturally', value: 'friendliness' }
        ]
      },
      {
        text: 'What kind of community appeals to you?',
        options: [
          { label: 'A) Very warm and embracing', value: 'friendliness' },
          { label: 'B) Friendly and sociable', value: 'friendliness' },
          { label: 'C) Hospitable and helpful', value: 'friendliness' },
          { label: 'D) Vibrant with great energy', value: 'friendliness' }
        ]
      },
      {
        text: 'Which aspect matters most?',
        options: [
          { label: 'A) People\'s warmth and openness', value: 'friendliness' },
          { label: 'B) Community spirit', value: 'friendliness' },
          { label: 'C) Good-natured locals', value: 'friendliness' },
          { label: 'D) Welcoming atmosphere', value: 'friendliness' }
        ]
      }
    ]
  }
};

const answerEffects = {
  food: { Food: 2, Cleanliness: 0, Size: 0, Friendliness: 0 },
  cleanliness: { Food: 0, Cleanliness: 2, Size: 0, Friendliness: 0 },
  size: { Food: 0, Cleanliness: 0, Size: 2, Friendliness: 0 },
  friendliness: { Food: 0, Cleanliness: 0, Size: 0, Friendliness: 2 }
};

let currentQuestion = 0;
let CompletedQuizzes = new Set();
const answers = [];
let completedQuizzes = new Set();
answers.push("Yes"); 
``

function updateCheckMarks() {
  document.querySelectorAll(".check-mark").forEach(mark => {
    mark.style.display = "none";
  });
  completedQuizzes.forEach(category => {
    const checkMark = document.getElementById(`check-${category}`);
    if (checkMark) {
      checkMark.style.display = "block";
    }
  });
}

function resetQuiz() {
  currentQuestion = 0;
  answers.length = 0;
  Object.values(countries).forEach((country) => (country.score = 0));
}

function renderQuestion() {
  }

  


function applyAnswer(answerValue) {
  const effect = answerEffects[answerValue];
  if (!effect) return;

  Object.values(countries).forEach((country) => {
    country.score +=
      country.Food * effect.Food +
      country.Cleanliness * effect.Cleanliness +
      country.Size * effect.Size +
      country.Friendliness * effect.Friendliness;
  });
}

function renderFinalSelection(topCountries) {
  resultSection.innerHTML = `
    <h2>It&apos;s a tie!</h2>
    <p>Two countries scored equally well for your ${quizzesData[currentCategory].title.toLowerCase()}. Pick the one you want to explore:</p>
    <div class="tie-buttons"></div>
    <button id="restartBtn" class="primary" style="margin-top: 2rem;">Restart Quiz</button>
  `;

  const buttonContainer = resultSection.querySelector('.tie-buttons');

  topCountries.forEach((countryName) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = countryName;
    button.addEventListener('click', () => showFinalResult(countryName));
    buttonContainer.appendChild(button);
  });

  document.getElementById('restartBtn').addEventListener('click', () => {
    currentCategory = null;
    currentQuestion = 0;
    answers.length = 0;
    resultSection.classList.add('hidden');
    introSection.classList.remove('hidden');
  });
}

function showFinalResult(countryName) {
  resultSection.innerHTML = `
    <h2>Your best match is ${countryName}</h2>
    <p>${countryName} is the top match based on your ${quizzesData[currentCategory].title.toLowerCase()}.</p>
    <button id="restartBtn" class="primary">Restart Quiz</button>
  `;

  document.getElementById('restartBtn').addEventListener('click', () => {
    currentCategory = null;
    currentQuestion = 0;
    answers.length = 0;
    resultSection.classList.add('hidden');
    introSection.classList.remove('hidden');
  });
}

function showResult() {
  quizSection.classList.add("hidden");
  introSection.classList.remove("hidden");
  currentCategory = null;
}
  introSection.classList.add('hidden');
  quizSection.classList.add('hidden');
  resultSection.classList.remove('hidden');

  const scoreEntries = Object.entries(countries).map(([name, data]) => ({
    name,
    score: data.score
  }));

  const highestScore = Math.max(...scoreEntries.map((entry) => entry.score));
  const topCountries = scoreEntries
    .filter((entry) => entry.score === highestScore)
    .map((entry) => entry.name);

  if (topCountries.length === 1) {
    showFinalResult(topCountries[0]);
    return;
  }

  renderFinalSelection(topCountries);


function startQuiz(event) {
  const category = event.target.getAttribute("data-category");
  if (!category || completedQuizzes.has(category)) return;
  currentCategory = category;
  currentCategory = category;
  resetQuiz();
  resultSection.classList.add('hidden');
  introSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
  renderQuestion(currentQuestion);
}

// Map image indices to categories
const categoryMap = ['food', 'size', 'cleanliness', 'friendliness'];

startImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    startQuiz(categoryMap[index]);
  });
});

backBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion(currentQuestion);
  }
});