// organisational behavior

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
        question: "Response of the organism or system to various stimuli or inputs, whether internal or external, conscious or subconscious, overt or covert, voluntary or involuntary is called:",
        correct_answer: "Behaviour",
        incorrect_answers: ["Organization", "Resource", "Productivity"],
      },
      {
        question: "Hawthorne experiments were a set of experiments conducted to study the impact of assembly line on the health of the workers.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
  
      {
        question: "The social expectation on an individual is called:",
        correct_answer: "Role",
        incorrect_answers: ["Designation", "Job", "Task"],
      },
      {
        question: "Which of the following is not an organization?",
        correct_answer: "Germany",
        incorrect_answers: ["TATA Steels", "UNICEF", "Facebook Inc."],
      },
      {
        question: "More output for less input or being able to provide optimal output for a given input is called:",
        correct_answer: "Efficiency",
        incorrect_answers: ["Effectiveness", "Productivity", "Motivation"],
      },
      {
        question: "Which field can be called as the mother of Organizational behaviour?",
        correct_answer: "Industrial Psychology",
        incorrect_answers: ["Anthropology", "Economics", "Law"],
      },
      {
        question: "In an experiment, the group in which you make no changes is called the:",
        correct_answer: "Control Group",
        incorrect_answers: ["Experimental Group", "Focus Group", "Target Group"],
      },
      {
        question: "The assembly line of production was first introduced by Henry Ford.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        question: "The scientific management movement was pioneered by:",
        correct_answer: "Frederick W Taylor",
        incorrect_answers: ["Walter Dill Scott", "Edward K Strong Jr.", "Hugo Munsterberg"],
      },
      {
        question: "The process of breaking down the entire job into specific tasks and see how each of these tasks are performed and how much time on an average a person will take to finish it is called:",
        correct_answer: "Time and Motion Study",
        incorrect_answers: ["Workplace management", "Job Profile", "Productivity"],
      },
      {
        question: "Perception is highly objective.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        question: "There are many women at the bottom and middle level management roles but only a very few make it to the top. This is due to:",
        correct_answer: "Glass-ceiling effect",
        incorrect_answers: ["Impression Management techniques", "Golem effect", "Pygmalion effect"],
      },
      {
        question: "The process of giving meaning to sensory stimuli through organizing and interpreting is called:",
        correct_answer: "Perception",
        incorrect_answers: ["Sensation", "Sublimation", "Organization"],
      },
      {
        question: "Which of the following is an internal factor that influences the principles of perceptual selection?",
        correct_answer: "Habit",
        incorrect_answers: ["Contrast", "Repetition", "Motion"],
      },
      
        {
          question: "In the above picture, we tend to see columns of dots due to a perceptual grouping effect called:",
          correct_answer: "Proximity",
          incorrect_answers: ["Similarity", "Continuity", "Symmetry"],
        },
        {
          question: "In the above image, one can still perceive the opening door to be of a rectangle shape due to:",
          correct_answer: "Perceptual Constancy",
          incorrect_answers: ["Figure-Ground Perception", "Optical Illusions", "Social Perception"],
        },
        {
          question: "The process through which individuals attempt to determine the causes behind others’ behaviour is called attribution.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          question: "According to Kelley’s theory of causal attribution, the extent to which other people behave in the same manner as the person we are judging is called:",
          correct_answer: "Consensus",
          incorrect_answers: ["Consistency", "Distinctiveness", "Identity"],
        },
        {
          question: "The tendency to attribute others’ action to internal causes while largely ignoring external factors is called:",
          correct_answer: "Fundamental attribution error",
          incorrect_answers: ["Halo effect", "Team-Halo effect", "Similar-to-me effect"],
        },
        {
          question: "The word “Carpenter” immediately brings in to memory the image of a male individual rather than a female individual. This is an example of a job stereotype.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          question: "In Johari’s Window model of self-awareness, the part of the self which is not known to ourselves, but others know is called:",
          correct_answer: "Blind",
          incorrect_answers: ["Open", "Hidden", "Unknown"],
        },
        {
          question: "The meaning of the Latin word ‘Persona’ from which the word Personality arises is:",
          correct_answer: "Mask",
          incorrect_answers: ["Behaviour", "Thought", "Person"],
        },
        {
          question: "Many psychologists argue that one’s personality can be changed over a period of time because those qualities are formed because of social factors.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          question: "According to Big Five Personality Theory, people who like to experiment and try and find out new things and are less judgmental about people of other cultures are high on:",
          correct_answer: "Intellectual Openness",
          incorrect_answers: ["Adjustment", "Agreeableness", "Conscientiousness"],
        },
        {
          question: "According to Sigmund Freud’s psychoanalytic theory, the deepest level of consciousness is:",
          correct_answer: "Unconscious",
          incorrect_answers: ["Subconscious", "Conscious state", "Awareness"],
        },
        
            {
              question: "According to Sigmund Freud, reality principle is followed by:",
              correct_answer: "Ego",
              incorrect_answers: ["Id", "Super Ego", "Dream"],
            },
            {
              question: "In social learning theory, the withdrawal of something which somebody likes to strengthen a behaviour is called:",
              correct_answer: "Negative Reinforcement",
              incorrect_answers: ["Positive Reinforcement", "Reward", "Punishment"],
            },
            {
              question: "The main proponent of Self Theory was:",
              correct_answer: "Carl Rogers",
              incorrect_answers: ["Sigmund Freud", "Albert Bandura", "B.F. Skinner"],
            },
            {
              question: "Employees with high self-esteem are more ready to take responsibilities.",
              correct_answer: "True",
              incorrect_answers: ["False"],
            },
            {
              question: "People with _______ locus of control believe that others control their life and whatever happens in their life is because of outside factors.",
              correct_answer: "External",
              incorrect_answers: ["Internal"],
            },
            {
              question: "__________ are evaluative statements towards objects, people or events.",
              correct_answer: "Attitudes",
              incorrect_answers: ["Learning", "Memory", "Personality"],
            },
            {
              question: "A relatively permanent change in behaviour occurring as a result of experience is called:",
              correct_answer: "Learning",
              incorrect_answers: ["Thinking", "Sensation", "Prejudice"],
            },
            {
              question: "Providing more information can lead to change in attitude.",
              correct_answer: "True",
              incorrect_answers: ["False"],
            },
            {
              question: "In Pavlov’s Dog experiment, the food presented which makes the dog salivate is:",
              correct_answer: "Unconditional stimulus",
              incorrect_answers: ["Unconditional response", "Conditioned stimulus", "Conditioned response"],
            },
            {
              question: "In Operant conditioning, the process through which the responses that are no longer reinforced tend to gradually diminish in strength is called:",
              correct_answer: "Extinction",
              incorrect_answers: ["Positive reinforcement", "Negative Reinforcement", "Punishment"],
            },
            {
              question: "After watching a Dance TV show, a kid starts to make dance moves. This is an example of:",
              correct_answer: "Observational learning",
              incorrect_answers: ["Operant conditioning", "Classical conditioning", "Negative Reinforcement"],
            },

            
                {
                  question: "What are the behavioural symptoms of stress?",
                  correct_answer: "All of the above",
                  incorrect_answers: ["Low productivity", "Interpersonal conflicts", "Suicidal tendencies"],
                },
                {
                  question: "__________ is a mild form of hate.",
                  correct_answer: "Resentment",
                  incorrect_answers: ["Guilt", "Humiliation", "Shame"],
                },
                {
                  question: "___________ is the willingness of a person to put high levels of efforts to reach a goal.",
                  correct_answer: "Motivation",
                  incorrect_answers: ["Emotions", "Frustration", "Incentives"],
                },
                {
                  question: "The need to be part of a group is categorized as:",
                  correct_answer: "Affiliation motive",
                  incorrect_answers: ["Achievement motive", "Power motive", "Role conflict"],
                },
                {
                  question: "Money is a form of extrinsic motivation.",
                  correct_answer: "True",
                  incorrect_answers: ["False"],
                },
                {
                  question: "According to Maslow’s hierarchy of needs, the highest level of needs one can achieve is:",
                  correct_answer: "Self-actualization",
                  incorrect_answers: ["Social Needs", "Esteem needs", "Safety needs"],
                },
                {
                  question: "According to Herzberg’s two-factor theory of motivation, pay and security provided by a job is a Motivator.",
                  correct_answer: "False",
                  incorrect_answers: ["True"],
                },
                {
                  question: "In Alderfer’s ERG theory of motivation, R stands for",
                  correct_answer: "Relatedness",
                  incorrect_answers: ["Reputation", "Regression", "Resilience"],
                },
                {
                  question: "____________ means that employees feel that the organization treats its employees in a fair manner and a just way.",
                  correct_answer: "Organizational Justice Climate",
                  incorrect_answers: ["Intra-personal conflict", "Self-esteem", "Power motive"],
                },
                {
                  question: "__________ is when you are moving towards a certain goal, but certain barriers are stopping you from achieving that goal.",
                  correct_answer: "Frustration",
                  incorrect_answers: ["Goal conflict", "Role conflict", "Satisfaction"],
                },
                {
                  question: "One of the drawbacks of using money as a motivator is that it can reduce extra-role performance.",
                  correct_answer: "True",
                  incorrect_answers: ["False"],
                },
                {
                  question: "John had applied for several jobs after graduation. One day he received a job offer from Tata Motors and Mahindra Group, both of which he loved to work. The conflict Mr. John is facing in selecting one job is called:",
                  correct_answer: "Approach-approach conflict",
                  incorrect_answers: ["Role Conflict", "Approach-avoidance conflict", "Avoidance-avoidance conflict"],
                },
               
                    {
                      question: "___________ is the willingness of a person to put high levels of efforts to reach a goal.",
                      correct_answer: "Motivation",
                      incorrect_answers: ["Emotions", "Frustration", "Incentives"],
                    },
                    {
                      question: "The need to be part of a group is categorized as:",
                      correct_answer: "Affiliation motive",
                      incorrect_answers: ["Achievement motive", "Power motive", "Role conflict"],
                    },
                    {
                      question: "Money is a form of extrinsic motivation.",
                      correct_answer: "True",
                      incorrect_answers: ["False"],
                    },
                    {
                      question: "According to Maslow’s hierarchy of needs, the highest level of needs one can achieve is:",
                      correct_answer: "Self-actualization",
                      incorrect_answers: ["Social Needs", "Esteem needs", "Safety needs"],
                    },
                    {
                      question: "According to Herzberg’s two-factor theory of motivation, pay and security provided by a job is a Motivator.",
                      correct_answer: "False",
                      incorrect_answers: ["True"],
                    },
                    {
                      question: "In Alderfer’s ERG theory of motivation, R stands for:",
                      correct_answer: "Relatedness",
                      incorrect_answers: ["Reputation", "Regression", "Resilience"],
                    },
                    {
                      question: "____________ means that employees feel that the organization treats its employees in a fair manner and a just way.",
                      correct_answer: "Organizational Justice Climate",
                      incorrect_answers: ["Intra-personal conflict", "Self-esteem", "Power motive"],
                    },
                    {
                      question: "__________ is when you are moving towards a certain goal, but certain barriers are stopping you from achieving that goal.",
                      correct_answer: "Frustration",
                      incorrect_answers: ["Goal conflict", "Role conflict", "Satisfaction"],
                    },
                    {
                      question: "One of the drawbacks of using money as a motivator is that it can reduce extra-role performance.",
                      correct_answer: "True",
                      incorrect_answers: ["False"],
                    },
                    {
                      question: "John had applied for several jobs after graduation. One day he received a job offer from Tata Motors and Mahindra Group, both of which he loved to work. The conflict Mr. John is facing in selecting one job is called:",
                      correct_answer: "Approach-approach conflict",
                      incorrect_answers: ["Role Conflict", "Approach-avoidance conflict", "Avoidance-avoidance conflict"],
                    },
                    {
                      question: "When each party involved in a task tries to maximize its own gains, often at the expense of others, it is called:",
                      correct_answer: "Competition",
                      incorrect_answers: ["Cooperation", "Interdependency", "None of the above"],
                    },
                    {
                      question: "The degree of confidence we have on others in a relationship is called:",
                      correct_answer: "Trust",
                      incorrect_answers: ["Transactional contract", "Relational contract", "Norms"],
                    },
                    {
                      question: "The kind of psychological contract that focuses on long-term interaction and a widely defined relationship is called relational contract.",
                      correct_answer: "True",
                      incorrect_answers: ["False"],
                    },
                    {
                      question: "The type of trust that is established based on the credibility of a person, for e.g., trusting the doctor:",
                      correct_answer: "Swift trust",
                      incorrect_answers: ["Trust based on familiarity", "Trust based on similarity", "Trust based on social networks"],
                    },
                   
                        {
                          question: "The degree of confidence we have on others in a relationship is called:",
                          correct_answer: "Trust",
                          incorrect_answers: ["Transactional contract", "Relational contract", "Norms"],
                        },
                        {
                          question: "The kind of psychological contract that focuses on long-term interaction and a widely defined relationship is called relational contract.",
                          correct_answer: "True",
                          incorrect_answers: ["False"],
                        },
                        {
                          question: "The type of trust that is established based on the credibility of a person, for e.g., trusting the doctor:",
                          correct_answer: "Swift trust",
                          incorrect_answers: ["Trust based on familiarity", "Trust based on similarity", "Trust based on social networks"],
                        },
                        {
                          question: "The characteristic of being and respectful towards others is:",
                          correct_answer: "Courtesy",
                          incorrect_answers: ["Conscientiousness", "Sportsmanship", "Civic virtue"],
                        },
                        {
                          question: "Treating the common resources responsibly is called:",
                          correct_answer: "True",
                          incorrect_answers: ["False"],
                        },
                        {
                          question: "__________ is helping without expecting anything in return.",
                          correct_answer: "Altruism",
                          incorrect_answers: ["Competition", "Cooperation", "Conscientiousness"],
                        },
                        {
                          question: "Disagreements on strategy and sharing of responsibility and resources is called:",
                          correct_answer: "Process conflict",
                          incorrect_answers: ["Relational conflict", "Task conflict", "Avoiding"],
                        },
                        {
                          question: "People who focus on maximizing the joint outcomes of everyone involved are called:",
                          correct_answer: "Cooperators",
                          incorrect_answers: ["Competitors", "Individualists", "Equalizers"],
                        },
                        {
                          question: "Which conflict handling style is best for both the parties involved?",
                          correct_answer: "Collaborating",
                          incorrect_answers: ["Competing", "Avoiding", "Accommodating"],
                        },
                        {
                          question: "The communication style that is supportive and avoids change and confrontation is called:",
                          correct_answer: "Amiable communication style",
                          incorrect_answers: ["Animated communication style", "Driver communication style", "Analytical communication style"],
                        },
                        {
                          question: "In communication, the process of converting a message into symbols is called:",
                          correct_answer: "Encoding",
                          incorrect_answers: ["Message", "Channel", "Decoding"],
                        },
                        {
                          question: "Any disturbance that interfere with the transmission, receipt or feedback of a message is called noise.",
                          correct_answer: "True",
                          incorrect_answers: ["False"],
                        },
                        {
                          question: "The level of openness which exists in an organization which gives a certain level of comfort to its members is called:",
                          correct_answer: "Communication climate",
                          incorrect_answers: ["Common information effect", "Hidden profile paradigm", "Paralinguistic communication"],
                        },
                        {
                          question: "Which of the following is NOT a non-verbal mode of communication?",
                          correct_answer: "None of the above",
                          incorrect_answers: ["Facial expressions", "Pupil dilation", "Gestures"],
                        },
                        {
                          question: "The study of spatial inter-relationships is called:",
                          correct_answer: "Proxemics",
                          incorrect_answers: ["Kinesics", "Silence", "Symbols"],
                        },
                        {
                          question: "Maintaining and distributing minutes of the meeting is helpful in reducing miscommunication in team meetings.",
                          correct_answer: "True",
                          incorrect_answers: ["False"],
                        },
                        {
                          question: "When parts of some information are shared with the group members whereas other pieces of information are unshared, it gives rise to:",
                          correct_answer: "Hidden profile paradigm",
                          incorrect_answers: ["Awareness", "Trust building", "Minimizing status difference"],
                        },
                        {
                          question: "In information sharing scenario, the case that has to be avoided to reduce decision making problems is:",
                          correct_answer: "Distributed partial overlap",
                          incorrect_answers: ["Fully shared case", "Non-overlapping case", "All of the above"],
                        },
                        {
                          question: "Most eastern cultures are comfortable with silence between conversations.",
                          correct_answer: "True",
                          incorrect_answers: ["False"],
                        },
                      
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
  const quizName = "ORGANIZATIONAL BEHAVIOUR"; // Get quiz name dynamically from input
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
