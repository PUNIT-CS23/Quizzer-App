// Ethics in enviromental practice 
const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML =`${value}` ;
};

const startBtn = document.querySelector(".start"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

  let questions = [

  
    {
        question: "According to Mahatma Gandhi, what is an example of 'Politics without Principles'?",
        correct_answer: "Pursuit of power at the expense of truth",
        incorrect_answers: ["Political strategies", "Politicians pursuing truth", "Politicians' loyalty to their party"]
      },
      {
        question: "What is an example of 'Wealth without Work' as per Mahatma Gandhi?",
        correct_answer: "The Zamindari system",
        incorrect_answers: ["Hard-earned money", "Inheritance through hard work", "Business profits"]
      },
      {
        question: "According to Mahatma Gandhi, what does 'Pleasure without Conscience' refer to?",
        correct_answer: "Addictions",
        incorrect_answers: ["Enjoying success", "Taking part in social events", "Indulging in hobbies"]
      },
      {
        question: "What does Mahatma Gandhi consider an example of 'Science without Humanity'?",
        correct_answer: "Science used for destruction",
        incorrect_answers: ["Space exploration", "Medical advancements", "Technological inventions"]
      },
      {
        question: "In Swami Vivekananda's view, what quality is essential for 'cleaving through the walls of difficulties'?",
        correct_answer: "Character",
        incorrect_answers: ["Fame", "Wealth", "Learning"]
      },
      {
        question: "According to Swami Vivekananda, what should one prioritize for true success in life?",
        correct_answer: "Love and character",
        incorrect_answers: ["Money and fame", "Learning and knowledge", "Name and recognition"]
      },
      {
        question: "Which of the following is not listed by Swami Vivekananda as part of developing character?",
        correct_answer: "Fame and power",
        incorrect_answers: ["Strength and gentleness", "Broadmindedness and faith", "Fearlessness and compassion"]
      },
      {
        question: "What is the role of parents and teachers in character building according to Abdul Kalam?",
        correct_answer: "Creating enlightened human beings",
        incorrect_answers: ["Shaping the financial success of children", "Encouraging children to compete academically", "Teaching technical skills"]
      },
      {
        question: "Which of the following does Abdul Kalam believe is crucial for the future of children?",
        correct_answer: "Creativity",
        incorrect_answers: ["Memorization", "Sports", "Discipline"]
      },
      {
        question: "What does Abdul Kalam say is essential to creating a nation of beautiful minds?",
        correct_answer: "The combined effort of parents and teachers",
        incorrect_answers: ["Government reforms", "Strong leadership", "Advanced technology"]
      },
      {
        question: "According to Abdul Kalam, which quality should teachers possess?",
        correct_answer: "Creativity",
        incorrect_answers: ["Strictness", "Patience", "Competitiveness"]
      },
      {
        question: "What is the ultimate purpose of education according to Abdul Kalam?",
        correct_answer: "To make good human beings with skill and expertise",
        incorrect_answers: ["To earn a lucrative career", "To achieve fame and recognition", "To become financially independent"]
      },
      {
        question: "Why is it important for computing professionals to perform tasks conscientiously?",
        correct_answer: "Because their decisions affect system performance and the welfare of users",
        incorrect_answers: ["To enhance their reputation", "To increase job satisfaction", "To meet employer expectations"]
      },
      {
        question: "Who shares moral responsibility in an organization, according to the text?",
        correct_answer: "All members of the organization",
        incorrect_answers: ["Only the management", "Only the computing professionals", "Only the clients and users"]
      },
      {
        question: "What is one of the reasons spamming is considered unethical?",
        correct_answer: "It can clog computer networks",
        incorrect_answers: ["It is not profitable", "It is reversible", "It benefits the sender"]
      },
      {
        question: "Which ethical theory is applied when considering whether an action can be accepted as a general rule?",
        correct_answer: "Deontology (Duty Ethics)",
        incorrect_answers: ["Utilitarianism", "Virtue Ethics", "Ethical Egoism"]
      },
      {
        question: "What ethical rule suggests that an agent should consider whether they would switch places with the sufferer of their actions?",
        correct_answer: "The Golden Rule",
        incorrect_answers: ["Consequentialism", "Duty Ethics", "Virtue Ethics"]
      },
      {
        question: "In the fictional example, what is the first ethical concern about monitoring web access?",
        correct_answer: "It intrudes on employees’ privacy",
        incorrect_answers: ["The cost of monitoring", "It violates property rights", "It increases productivity"]
      },
      {
        question: "What conflict of interest exists in the example scenario with Chris at XYZ Corporation?",
        correct_answer: "Chris does not inform his employer about Robin's relationship",
        incorrect_answers: ["Chris overcharges for the data mining program", "Chris is unaware of the software's origin", "Chris developed the program himself"]
      },
      {
        question: "Why is it problematic that Robin developed the program while employed at UVW Corporation?",
        correct_answer: "Robin signed an agreement that software developed during employment belongs to UVW",
        incorrect_answers: ["UVW does not have rights to the program", "Robin did not finish the program", "Robin's development was unrelated to work"]
      },
      {
        question: "What ethical principle is violated if property rights are not honored in professional computing?",
        correct_answer: "Professional standards",
        incorrect_answers: ["Consequentialism", "Duty to clients", "Ethical egoism"]
      },
      {
        question: "Which of the following is NOT a reason why spamming is considered unethical in computing?",
        correct_answer: "It benefits the sender unfairly",
        incorrect_answers: ["It has bad consequences", "It cannot be reversed", "It cannot be accepted as a general practice"]
      },

  {
  question: "What is the process of Value Education primarily based on?",
  correct_answer: "Self-exploration",
  incorrect_answers: ["Memorizing moral principles", "Learning from others", "Religious practices"]
},
{
  question: "What does Self-Exploration aim to help individuals investigate?",
  correct_answer: "What is valuable and true for themselves",
  incorrect_answers: ["What others expect from them", "The environment only", "Professional responsibilities"]
},
{
  question: "According to the process of Self-Exploration, what does 'environment' refer to?",
  correct_answer: "The entirety of human beings and Nature",
  incorrect_answers: ["The physical world only", "Only society and its norms", "Nature without humans"]
},
{
  question: "Which of the following is NOT a purpose of Self-Exploration?",
  correct_answer: "Achieving material success",
  incorrect_answers: ["Understanding one’s own emotions and behavior", "Dialogue between 'What you are?' and 'What you want?'", "Recognizing one’s relationships"]
},
{
  question: "What does the term 'svatva' refer to in the process of Self-Exploration?",
  correct_answer: "Innateness",
  incorrect_answers: ["Self-independence", "Social responsibility", "Professional goals"]
},
{
  question: "Which of the following is a key component of Self-Exploration?",
  correct_answer: "Self-investigation and self-evolution",
  incorrect_answers: ["Gaining social status", "Aligning with societal expectations", "Competing with others"]
},
{
  question: "What are the two fundamental questions explored in Self-Exploration?",
  correct_answer: "What are basic aspirations and how to fulfill them",
  incorrect_answers: ["How to live and how to succeed", "What is happiness and how to achieve it", "How to get ahead and how to stay ahead"]
},
{
  question: "What does 'Natural Acceptance' refer to in Self-Exploration?",
  correct_answer: "Happiness that is objective and not influenced by external factors",
  incorrect_answers: ["Personal preferences based on societal norms", "Subjective feelings that change over time", "Acceptance based on personal goals"]
},
{
  question: "How can one validate their self-exploration according to the process described?",
  correct_answer: "By living the realization and understanding it experientially",
  incorrect_answers: ["By consulting others", "By reading books on philosophy", "By performing religious rituals"]
},
{
  question: "What is the ultimate result of achieving harmony with oneself through Self-Exploration?",
  correct_answer: "Mutual prosperity of all",
  incorrect_answers: ["Gaining social acceptance", "Material success", "Emotional dependence on others"]
},
{
    question: "What does the term 'deontology' mean?",
    correct_answer: "Obligation or duty",
    incorrect_answers: ["Happiness", "Virtue", "Consequentialism"]
  },
  {
    question: "Which of the following best describes the normative theory of Deontology?",
    correct_answer: "Actions are judged based on a set of rules and principles.",
    incorrect_answers: ["Actions are judged based on their consequences.", "Actions are judged based on emotions.", "Actions are inherently good or bad."]
  },
  {
    question: "Who first used the term 'deontological' to describe its current meaning?",
    correct_answer: "C. D. Broad",
    incorrect_answers: ["Immanuel Kant", "W.D. Ross", "René Descartes"]
  },
  {
    question: "According to Kantian ethics, what is the highest good?",
    correct_answer: "A good will",
    incorrect_answers: ["Happiness", "Pleasure", "Knowledge"]
  },
  {
    question: "What does Kant argue is the determining factor for whether an action is morally right?",
    correct_answer: "The motives of the person",
    incorrect_answers: ["Consequences of the action", "Societal approval", "The laws of the land"]
  },
  {
    question: "Which of the following is NOT one of Kant's formulations of the Categorical Imperative?",
    correct_answer: "Act in a way that produces the best consequences.",
    incorrect_answers: ["Act only according to that maxim that you can will to become a universal law.", "Act in such a way that you treat humanity always as an end, never merely as a means.", "Act based on a principle that can be universalized."]
  },
  {
    question: "The Divine Command Theory states that an action is right if:",
    correct_answer: "God has decreed that it is right.",
    incorrect_answers: ["It maximizes happiness.", "It is in accordance with societal norms.", "It follows legal regulations."]
  },
  {
    question: "W.D. Ross introduced which concept to address moral dilemmas in deontological pluralism?",
    correct_answer: "Absolute duties",
    incorrect_answers: ["Virtue ethics", "Categorical Imperative", "Consequentialism"]
  },
  {
    question: "Which of the following is NOT considered a duty by W.D. Ross?",
    correct_answer: "Duty of deception",
    incorrect_answers: ["Duty of reparation", "Duty of gratitude", "Duty of beneficence"]
  },
  {
    question: "One limitation of deontology is that it:",
    correct_answer: "Does not focus on consequences.",
    incorrect_answers: ["Considers feelings and emotions.", "Is applicable to all situations.", "Provides clear action-guiding moral prescriptions."]
  },
  {
    question: "Virtue is a Greek word meaning:",
    correct_answer: "Excellence",
    incorrect_answers: ["Knowledge", "Duty", "Justice"]
  },
  {
    question: "Which philosopher is most closely associated with Virtue Theory?",
    correct_answer: "Aristotle",
    incorrect_answers: ["Immanuel Kant", "John Stuart Mill", "René Descartes"]
  },
  {
    question: "According to Virtue Theory, ethical behavior is determined by:",
    correct_answer: "The character of the individual",
    incorrect_answers: ["The consequences of actions", "Societal norms", "Religious beliefs"]
  },
  {
    question: "What is 'phronesis' in the context of Virtue Ethics?",
    correct_answer: "Practical wisdom in decision-making",
    incorrect_answers: ["A state of happiness", "A moral obligation", "A universal law"]
  },
  {
    question: "Eudaimonia refers to:",
    correct_answer: "A state of happiness",
    incorrect_answers: ["A state of ignorance", "A moral dilemma", "A legal obligation"]
  },
  {
    question: "Which of the following is NOT one of the four major moral values of virtue ethics?",
    correct_answer: "Wealth",
    incorrect_answers: ["Prudence", "Temperance", "Justice"]
  },
  {
    question: "Theological virtues in Virtue Theory include:",
    correct_answer: "Faith, Hope, Love",
    incorrect_answers: ["Wisdom, Knowledge, Courage", "Justice, Fortitude, Temperance", "Honesty, Loyalty, Integrity"]
  },
  {
    question: "A limitation of Virtue Theory is that:",
    correct_answer: "It lacks codifiability.",
    incorrect_answers: ["It provides a clear framework for moral decisions.", "It emphasizes the importance of character.", "It is universally accepted."]
  },
  {
    question: "Risk-benefit analysis involves evaluating:",
    correct_answer: "Both risks and benefits of an action",
    incorrect_answers: ["Only the benefits of an action", "The feelings of individuals involved", "The legality of an action"]
  },
  {
    question: "Real future risk is dependent on:",
    correct_answer: "Real circumstances",
    incorrect_answers: ["Historical data", "Available data", "Perceptions of individuals"]
  },
  {
    question: "Which type of risk is based on historical studies?",
    correct_answer: "Projected risk",
    incorrect_answers: ["Real future risk", "Statistical risk", "Perceived risk"]
  },
  {
    question: "Perceived risk is influenced primarily by:",
    correct_answer: "Individual intuition",
    incorrect_answers: ["Available data", "Statistical analysis", "Past experiences"]
  },
  {
    question: "Kant's moral philosophy is best characterized as:",
    correct_answer: "Deontological",
    incorrect_answers: ["Consequentialist", "Utilitarian", "Hedonistic"]
  },
  {
    question: "What is a key feature of deontological pluralism?",
    correct_answer: "Recognition of multiple moral duties",
    incorrect_answers: ["Emphasis on pleasure", "Focus on the consequences of actions", "Advocacy for a single moral law"]
  },
  {
    question: "Which of the following duties emphasizes making amends for wrongful acts?",
    correct_answer: "Duty of reparation",
    incorrect_answers: ["Duty of non-injury", "Duty of beneficence", "Duty of justice"]
  },
  {
    question: "Which ethical theory is primarily agent-centered?",
    correct_answer: "Virtue Theory",
    incorrect_answers: ["Consequentialism", "Deontology", "Utilitarianism"]
  },
  {
    question: "Fortitude, as a virtue, refers to:",
    correct_answer: "The courage to overcome obstacles",
    incorrect_answers: ["The ability to reflect on one's actions", "The fairness in dealings with others", "The discipline in managing desires"]
  },
  {
    question: "A significant problem faced by deontological pluralists is:",
    correct_answer: "Conflicts between different duties",
    incorrect_answers: ["The universality of moral laws", "Lack of moral obligations", "Overemphasis on emotions"]
  },
  {
    question: "According to Virtue Theory, moral values are:",
    correct_answer: "Context-dependent and evolving",
    incorrect_answers: ["Static and unchanging", "Based on societal norms", "Universally applicable"]
  },
  {
    question: "Which virtue emphasizes practicality and wisdom in decision-making?",
    correct_answer: "Prudence",
    incorrect_answers: ["Justice", "Temperance", "Fortitude"]
  },
  {
    question: "What is distributive justice primarily concerned with?",
    correct_answer: "Fairness in the distribution of goods and resources",
    incorrect_answers: ["Fairness in the punishment of wrongdoers", "Fairness in legal proceedings", "Fairness in social recognition"]
  },
  {
    question: "Which principle does procedural justice emphasize?",
    correct_answer: "Fairness in the processes used to determine distribution",
    incorrect_answers: ["Fairness in what people receive", "The consequences of actions", "Restoration of relationships"]
  },
  {
    question: "What is the primary aim of restorative justice?",
    correct_answer: "To restore relationships and correct the harm done",
    incorrect_answers: ["To ensure fair distribution of resources", "To punish the wrongdoer", "To determine guilt or innocence"]
  },
  {
    question: "Retributive justice focuses on which of the following principles?",
    correct_answer: "Punishment for wrongdoing",
    incorrect_answers: ["Fair distribution of goods", "Fairness in processes", "Restoration of relationships"]
  },
  {
    question: "If a person believes they have been treated unfairly in terms of resources, which type of justice are they likely to pursue first?",
    correct_answer: "Distributive Justice",
    incorrect_answers: ["Procedural Justice", "Restorative Justice", "Retributive Justice"]
  },
  {
    question: "What is a characteristic of retributive justice?",
    correct_answer: "It focuses on punishment for the wrongdoer.",
    incorrect_answers: ["It seeks to restore relationships through apologies.", "It relies on fair processes to determine outcomes.", "It emphasizes equitable resource distribution."]
  },
  {
    question: "What is a common form of restitution in restorative justice?",
    correct_answer: "A straightforward apology",
    incorrect_answers: ["A formal trial", "Redistribution of resources", "Imprisonment of the wrongdoer"]
  },
  {
    question: "In what situation would individuals most likely seek both restorative and retributive justice?",
    correct_answer: "When they believe they have been treated unfairly in a legal context",
    incorrect_answers: ["When they feel procedural injustices have occurred", "When they are satisfied with the outcome of a process", "When they have received an adequate apology"]
  },
  {
    question: "What is a potential negative consequence of relying solely on retributive justice?",
    correct_answer: "It can result in excessive punishment driven by revenge.",
    incorrect_answers: ["It may lead to a fair outcome for victims.", "It may help restore relationships between parties.", "It focuses on equitable distribution of resources."]
  },
  {
    question: "Distributive justice is fundamentally rooted in which social principle?",
    correct_answer: "Social order and equality",
    incorrect_answers: ["Legal fairness", "Procedural integrity", "Restorative practices"]
  }



];
let time = 30,
  score = 0,
  currentQuestion,
  timer;

// Utility function to shuffle an array (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let selectedQuestionsCount;
const startQuiz = () => {
  loadingAnimation();
  
  // Get the selected number of questions
  selectedQuestionsCount = parseInt(document.querySelector("#num-questions").value);

  // Shuffle the questions and slice based on the selected number
  questions = shuffleArray(questions).slice(0, selectedQuestionsCount);
  
  setTimeout(() => {
    startScreen.classList.add("hide");
    quiz.classList.remove("hide");
    currentQuestion = 1;
    showQuestion(questions[0]);
  }, 1000);
};


startBtn.addEventListener("click", startQuiz);

const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper");
  questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  let answers = [
    ...question.incorrect_answers,
    question.correct_answer.toString(),
  ];
  answers = shuffleArray(answers); // Shuffle options
  answersWrapper.innerHTML = "";
  
  answers.forEach((answer) => {
    answersWrapper.innerHTML += `
      <div class="answer">
        <span class="text">${answer}</span>
        <span class="checkbox">
          <i class="fas fa-check"></i>
        </span>
      </div>
    `;
  });

  questionNumber.innerHTML = `Question <span class="current">${questions.indexOf(question) + 1}</span>
  <span class="total">/${selectedQuestionsCount}</span>`;
  
  // Add event listener to each answer
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });

  time = timePerQuestion.value;
  startTimer(time);
};

const startTimer = (time) => {
  timer = setInterval(() => {
    if (time >= 0) {
      progress(time);
      time--;
    } else {
      checkAnswer();
    }
  }, 1000);
};

const loadingAnimation = () => {
  startBtn.innerHTML = "Loading";
  const loadingInterval = setInterval(() => {
    if (startBtn.innerHTML.length === 10) {
      startBtn.innerHTML = "Loading";
    } else {
      startBtn.innerHTML += ".";
    }
  }, 500);
};

const submitBtn = document.querySelector(".submit"),
  nextBtn = document.querySelector(".next");

submitBtn.addEventListener("click", () => {
  checkAnswer();
});

nextBtn.addEventListener("click", () => {
  nextQuestion();
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
});

const checkAnswer = () => {
  clearInterval(timer);
  const selectedAnswer = document.querySelector(".answer.selected");
  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector(".text").innerHTML;
    if (answer === questions[currentQuestion - 1].correct_answer) {
      score++;
      selectedAnswer.classList.add("correct");
    } else {
      selectedAnswer.classList.add("wrong");
      document.querySelectorAll(".answer").forEach((answer) => {
        if (
          answer.querySelector(".text").innerHTML ===
          questions[currentQuestion - 1].correct_answer
        ) {
          answer.classList.add("correct");
        }
      });
    }
  }
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.add("checked");
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};

const nextQuestion = () => {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
  } else {
    showScore();
  }
};

const endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score");

  const submitQuiz = async () => {
    const quizName = "Ethics in enviromental practice "; // Get quiz name dynamically from input
    const totalQuestions = selectedQuestionsCount; // Use dynamically selected question count
    const marksObtained = score; // Use the final score
    const attemptedDate = new Date(); // Current date/time
  
    const quizData = { quizName, totalQuestions, marksObtained, attemptedDate };
  
    console.log("Sending quiz data:", quizData);
  
    try {
        const response = await fetch("/save-quiz-history", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include", // Ensures JWT-based authentication is included
            body: JSON.stringify(quizData),
        });
  
        console.log("Response status:", response.status);
        const result = await response.json();
        console.log("Response from server:", result);
    } catch (error) {
        console.error("Network error:", error);
    }
  };
  
  
  const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `/ ${questions.length}`;
  
  submitQuiz();
  };

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
});

const playAudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};
