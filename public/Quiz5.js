// human resource dev


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
          question: "Which of the following is a component of the theory of HRD:",
          correct_answer: "d. psychological",
          incorrect_answers: ["a. political", "b. philosophical", "c. physical"],
        },
        {
          question: "Which of the following corresponds to the Chaos Theory of HRD:",
          correct_answer: "a. HRD must help its host organization retain its purpose and effectiveness given the uncertainty it faces",
          incorrect_answers: ["b. HRD must help its host organization shape alternative futures", "c. HRD must understand how it and other subsystems connect and disconnect from the host organization", "d. HRD must develop the knowledge and expertise of individual contributors, work process owners, and organizational leaders"],
        },
        {
          question: "Which of the following statements is incorrect:",
          correct_answer: "d. Gestalt theories are the foundation for instructional design",
          incorrect_answers: ["a. Gestalt theory focuses on the whole rather than the parts", "b. Rewards and motivation systems are a part of behaviorism", "c. Piaget and Bruner are representative theorists of Cognitive theories"],
        },
        {
          question: "Which of the following historical events led to the establishment of roots of training within organizations:",
          correct_answer: "c. Herbart’s psychological processes of learning as a means of devising educational programs",
          incorrect_answers: ["a. The emancipation of the serfs in Russia and the abolition of slavery in the United States", "b. Concepts of scientific management", "d. Introduction of computer-based training (CBT)"],
        },
        {
          question: "Level 1 of Garavan’s SHRD model includes:",
          correct_answer: "b. The global environment",
          incorrect_answers: ["a. Job value and uniqueness", "c. Strategy, structure, culture and leadership", "d. Individual expectations, employability and careers"],
        },
        {
          question: "According to Peterson’s model of SHRD, developing performance standards and promoting a continuous learning culture would help in achieving which of the following objectives:",
          correct_answer: "d. to create high-performance work systems and culture",
          incorrect_answers: ["a. to align systems and processes", "b. to forge strategic relationships", "c. to develop a system of accountability"],
        },
        {
          question: "Which is the second step of the basic model to align HR strategy and actions with business strategy:",
          correct_answer: "b. Identify workforce requirements",
          incorrect_answers: ["a. Develop detailed HR scorecard measures", "c. Formulate HR strategic policies and activities", "d. Formulate business strategy"],
        },
        {
          question: "Which of the following is a Traditional SHRD activity:",
          correct_answer: "a. Learning by doing",
          incorrect_answers: ["b. Training and development records", "c. Knowledge management", "d. Cultural change programs"],
        },
        {
          question: "Norms, group dynamics and team work are issues related to which of the following factors influencing employee behaviour:",
          correct_answer: "c. Coworkers",
          incorrect_answers: ["a. Outcomes", "b. Supervision", "d. Organization"],
        },
        {
          question: "An employee receives an award for being on-time for work daily. This is an example of which method of behavior modification:",
          correct_answer: "c. Positive reinforcement",
          incorrect_answers: ["a. Extinction", "b. Punishment", "d. Negative reinforcement"],
        },
        {
          question: "Which of the following is most stable and difficult to change:",
          correct_answer: "a. Attitudes",
          incorrect_answers: ["b. Skills", "c. Knowledge", "d. Abilities"],
        },
        {
          question: "Which of the following best defines the term ‘Knowledge’:",
          correct_answer: "b. understanding of the factors or principles related to a specific subject",
          incorrect_answers: ["a. person’s general feelings of favor or disfavor towards something", "c. general capacities related to the performance of specific tasks", "d. combines abilities and capacities, generally the result of training"],
        },
        {
          question: "The decision to participate in training activities and acquire skills is viewed as a rational choice on the part of individuals. This statement reflects which approach of SHRD:",
          correct_answer: "a. Human Capital Approach",
          incorrect_answers: ["b. Behavioural Perspective", "c. Resource based Approach", "d. None of these"],
        },
        {
          question: "Customer need satisfaction and innovation are typical metrics for measuring performance drivers for which of the following domains of performance:",
          correct_answer: "c. Process",
          incorrect_answers: ["a. Mission", "b. Critical performance subsystem", "d. Individual"],
        },
        {
          question: "Arrange these steps of HR scorecard approach in correct order- 1. Identify the required workforce behaviors, 2. Define the business strategy, 3. Outline the company’s value-chain activities, 4. Design the HR scorecard measurement system, 5. Identify the strategically relevant HR system policies and practices:",
          correct_answer: "d. 23154",
          incorrect_answers: ["a. 34215", "b. 23451", "c. 32514"],
        },
        {
            question: "Who coined the term “Human Resource Development” (HRD):",
            correct_answer: "b. Leonard Nadler",
            incorrect_answers: ["a. Hamlin and Stewart", "c. Robert Owen", "d. Fomburn"],
        },
        {
            question: "Which of the following is not a challenge for HRD professionals?",
            correct_answer: "a. Stagnant workforce demographic",
            incorrect_answers: ["b. Competing in the global economy", "c. Eliminating the skill gap", "d. Need for lifelong learning"],
        },
        {
            question: "Which of the following definitions of HRD is correct?",
            correct_answer: "a. Human resource development is the process of increasing the capacity of the human resource through development",
            incorrect_answers: ["b. Human resource development is fostering short-term work-related learning capacity at individual, group, and organizational level", "c. A set of systematic and planned activities designed by an organization to provide its members with the necessary skills to meet the financial demands of the organization", "d. Human resource development is fostering short-term work-related learning capacity at an organizational level"],
        },
        {
            question: "Who suggested 5 principles of Organizational learning?",
            correct_answer: "c. Peter Senge",
            incorrect_answers: ["a. Robert Owen", "b. T.V Rao", "d. Chris Argyris"],
        },
        {
            question: "Which of the following is not one of the 5 learning organization principles?",
            correct_answer: "a. individual learning",
            incorrect_answers: ["b. personal mastery", "c. shared visions", "d. system thinking"],
        },
        {
            question: "Employee orientation and coaching are primarily related to which of the following functions of HRD:",
            correct_answer: "c. Training",
            incorrect_answers: ["a. Scholarship", "b. Organizational development", "d. Personal growth"],
        },
        {
            question: "What improves an organization's effectiveness and member's well-being by applying behavioral science concepts?",
            correct_answer: "b. Organizational Development",
            incorrect_answers: ["a. organization learning", "c. Education", "d. Counselling"],
        },
        {
            question: "Professional associations, government departments, and voluntary organizations represent HRD at the:",
            correct_answer: "c. macro level",
            incorrect_answers: ["a. micro level", "b. individual level", "d. both macro and micro levels"],
        },
        {
            question: "Which of the following is correct in the context of HRD?",
            correct_answer: "d. proactiveness",
            incorrect_answers: ["a. reactiveness", "b. routine", "c. administrative"],
        },
        {
            question: "From an Organizational perspective, how many performance variables are there:",
            correct_answer: "a. 9",
            incorrect_answers: ["b. 12", "c. 6", "d. 18"],
        },
        {
            question: "Which of the following is the role of the supervisor in HRD?",
            correct_answer: "a. On-the-job training",
            incorrect_answers: ["b. Off-the-job training", "c. Research", "d. Promotes HRD as a profit enhancer"],
        },
        {
            question: "In which role does the HRD professional implement coaching activities:",
            correct_answer: "b. HRD professional as consultant",
            incorrect_answers: ["a. HRD professional as instructor", "c. HRD professional as researcher", "d. HRD professional as an executive"],
        },
        {
            question: "Which of the following is true in the context of HRM:",
            correct_answer: "a. Effective utilization of people for better performance",
            incorrect_answers: ["b. Creative and continuous process", "c. Concerned with developing knowledge, skills, and attitudes to improve performance and behavior", "d. Developing the competence of the people"],
        },
        {
            question: "Which of the options defines 'career development':",
            correct_answer: "d. process by which individuals progress through a series of changes until they achieve their maximum achievement.",
            incorrect_answers: ["a. process by which groups progress through single change actions to achieve their professional achievement as per the organization", "b. Developing the skills and attitude not directly related to the job linked to personal growth and development", "c. process of improving an organization’s effectiveness and member’s well-being through the application of behavioral science concepts"],
        },
        {
            question: "Which of the following is not one of the core principles of andragogy:",
            correct_answer: "c. Forced conditioning of learners",
            incorrect_answers: ["a. Motivation", "b. Self-concept of learner", "d. Readiness to learn and practice"],
        },
        {
            question: "What do you understand by the term 'front-end analysis' in the context of need assessment?",
            correct_answer: "b. A series of analytical and decision-making steps that lead to plans for overcoming deficiencies in human performance",
            incorrect_answers: ["a. A single step of analysis that leads to plans for overcoming deficiencies in human performance", "c. A series of decision-making steps lead to plans for overcoming deficiencies in machinery performance", "d. A series of analytical steps that lead to plans for overcoming deficiencies in human hiring process"],
        },
        {
            question: "Arrange the following steps of the need analysis process in the correct order: 1. Present training recommendation 2. Perform gap analysis 3. Determine current knowledge levels 4. Understand your environment 5. Identify learning objectives:",
            correct_answer: "c. 4,5,3,2,1.",
            incorrect_answers: ["a. 2,3,5,4,1", "b. 4,5,2,3,1", "d. 4,3,5,2,1"],
        },
        {
            question: "Which type of needs identify new or better ways to do things?",
            correct_answer: "b. analytical needs",
            incorrect_answers: ["a. Performance needs", "c. Compliance needs", "d. Diagnostic needs"],
        },
        {
            question: "Which of the following is true in the context of a structured questionnaire?",
            correct_answer: "c. requests typically information on a specific phenomenon and its importance.",
            incorrect_answers: ["a. asks employees what they know, have experience, or actually do.", "b. questionnaire is difficult to analyze and summarize", "d. questionnaire with unlimited close-ended questions is among the most frequently used"],
        },
        {
            question: "What level of needs assessment determines where training is needed and under what conditions?",
            correct_answer: "b. Organization",
            incorrect_answers: ["a. Person", "c. Task", "d. Process"],
        },
        {
            question: "In which of the following data collection methods do experts identify what needs to be done?",
            correct_answer: "b. DACUM",
            incorrect_answers: ["a. telephone interview", "c. questionnaire", "d. face-to-face interview"],
        },
        {
            question: "Which type of gap analysis finds deficiencies in skills, attitude, and knowledge needed by employees to carry out their assignments and duties?",
            correct_answer: "c. Needs gaps",
            incorrect_answers: ["a. Organizational gaps", "b. Management gaps", "d. Performance gaps"],
        },
        {
            question: "Select the correct set of levels for need assessment:",
            correct_answer: "a. organization, task, and person",
            incorrect_answers: ["b. organization, machine, feedback", "c. organization, person, feedback", "d. organization, task, outcome"],
        },
        {
            question: "Which of the following actions is done at the organizational analysis level of the need assessment process (Knoe, 2010):",
            correct_answer: "c. strategic direction",
            incorrect_answers: ["a. work activity", "b. feedback", "d. evaluation"],
        },
        {
            question: "What is the first step of designing a training program?",
            correct_answer: "d. setting objectives",
            incorrect_answers: ["a. setting lessons for development", "b. selecting trainer", "c. preparing materials"],
        },
        {
            question: "What are the sources for collection of data about a specific job or group of jobs?",
            correct_answer: "a. job description",
            incorrect_answers: ["b. systems change", "c. mission statement", "d. Quality of Working Life indicators"],
        },
        {
            question: "'What are the characteristics of the trainees?' is related to which of these features of a lesson plan:",
            correct_answer: "d. Target audience",
            incorrect_answers: ["a. Lesson outline", "b. Lesson outcome", "c. Support material"],
        },
        {
            question: "'Discover performance reasons' explains which type of person analysis:",
            correct_answer: "b. diagnostic",
            incorrect_answers: ["a. summary analysis", "c. preferred analysis", "d. system analysis"],
        },
        {
            question: "Define the term 'performance gaps':",
            correct_answer: "c. deficiencies in the way the organization manages Performance, designs jobs, or reinforces and rewards performance",
            incorrect_answers: ["a. deficiencies in skills, knowledge, and attitude the employees need to carry out their tasks and duties.", "b. deficiencies in how employees are managed and motivated within the organization", "d. deficiencies in the way organizations are conceived, designed, and managed."],
        },
        {
            question: "What is the last step of The Strategic Training and Development Process?",
            correct_answer: "a. matric that shows the value of training",
            incorrect_answers: ["b. a business strategy", "c. strategic training and development initiatives", "d. training and development activities"],
        },
        {
            question: "During the process of coaching, the one who provides one-on-one coaching is referred to as:",
            correct_answer: "a. Coach",
            incorrect_answers: ["b. Coachee", "c. Trainee", "d. Client"],
        },
        {
            question: "What is the role of HRD professionals in coaching?",
            correct_answer: "b. Provide training to correct performance problems",
            incorrect_answers: ["a. Advise and demonstrate desired teamwork behaviors and skills", "c. Establish and clarify the goals of the session", "d. Develop a plan to accomplish the tasks and responsibilities"],
        },
        {
            question: "The focus of coaching is:",
            correct_answer: "a. problem-centered",
            incorrect_answers: ["b. people-centered", "c. money-centered", "d. training centered"],
        },
        {
            question: "Arrange these steps of coaching in the correct order: 1. Responding to poor performance, 2. Using a coaching discussion, 3. Conducting a coaching analysis, 4. Defining poor performance:",
            correct_answer: "c. 4,1,3,2",
            incorrect_answers: ["a. 4,1,2,3", "b. 4,3,2,1", "d. 3,4,2,1"],
        },
        {
            question: "Which of the following is the antecedent in the Conceptual Framework for Understanding coaching?",
            correct_answer: "c. Coachee characteristics",
            incorrect_answers: ["a. coaching approach", "b. coaching relationship", "d. individual success"],
        },
        {
            question: "Showing favoritism and gossiping are examples of types of deviant workplace behavior:",
            correct_answer: "c. Political deviance",
            incorrect_answers: ["a. Production deviance", "b. Property deviance", "d. Personal aggression"],
        },
        {
            question: "What are the two types of performance standards?",
            correct_answer: "b. Absolute and relative",
            incorrect_answers: ["a. Absolute and standard", "c. Absolute and reliable", "d. Reliable and appropriate"],
        },
        {
            question: "What do you understand by Causal Attribution Theory?",
            correct_answer: "c. People assign causes to behavior",
            incorrect_answers: ["a. Assumes or attributes behavior comes from a cause within a person", "b. Attributes behavior comes from surrounding people", "d. People assign causes to supervisor"],
        },
        {
            question: "One of the critical success factors for coaching is supplementing the initial framing of the situation with an assessment to determine if there is a gap between the executive’s goals and reality. This factor is also known as:",
            correct_answer: "a. Conditions",
            incorrect_answers: ["b. Commitment", "c. Continuous improvement", "d. Clarity"],
        },
        {
            question: "“Engaging in ongoing cycles of action with intentional reflection to ensure that actions achieve the desired results, including celebration of successes and making adjustments as needed\" explains which of the critical success factors for coaching:",
            correct_answer: "a. continuous improvement",
            incorrect_answers: ["b. conditions", "c. clarity", "d. commitment"],
        },
        {
            question: "Define Coaching analysis:",
            correct_answer: "d. The process of analyzing the factors that contribute to unsatisfactory performance and deciding on the appropriate response to improve performance",
            incorrect_answers: ["a. The process of analyzing the employees that contribute to satisfactory performance and deciding on the appropriate response to improve performance", "b. The process of analyzing the employees that contribute to unsatisfactory performance and deciding on the appropriate response to hire new ones", "c. The process of analyzing the factors that contribute to satisfactory performance and deciding on the appropriate response to improve performance"],
        },
        {
            question: "Which part of the GROW model includes offering suggestions?",
            correct_answer: "b. options",
            incorrect_answers: ["a. reality", "c. goal", "d. will"],
        },
        {
            question: "Which of the following is not a component of Kinlaw’s Approach?",
            correct_answer: "d. Follow-up to measure results",
            incorrect_answers: ["a. Confronting or presenting", "b. Using reactions to develop information", "c. Resolving or resolution"],
        },
        {
            question: "Which of the following is not an essential skill of Coach?",
            correct_answer: "d. gives judgments",
            incorrect_answers: ["a. enables", "b. facilitates", "c. encourages"],
        },
        {
            question: "Which of the following is an enabling factor for a coach to achieve success in coaching?",
            correct_answer: "b. ability",
            incorrect_answers: ["a. learning style a", "c. support systems", "d. motivation"],
        },
        {
            question: "What is the primary role of a sponsor in an organization?",
            correct_answer: "b. Advocating for career advancement and opportunities",
            incorrect_answers: ["a. Providing advice and guidance to junior employees", "c. Offering emotional support during challenging times", "d. Facilitating team-building activities"],
        },
        {
            question: "Identify which of the following is the role of a line manager:",
            correct_answer: "a. Help learner build a relationship with team members",
            incorrect_answers: ["b. Help the learner develop insight into the cause of poor performance", "c. Challenge learner’s thinking and assumptions", "d. Be a role model for personal growth"],
        },
        {
            question: "The objectives of the mentoring programme are specified in which of these steps of the implementation process:",
            correct_answer: "a. Introduction of the programme",
            incorrect_answers: ["b. Creation of mentoring structures", "c. Training of coordinators", "d. Evaluation of the programme"],
        },
        {
            question: "At which stage of the mentoring programme uses brochures, newsletters, posters, and E-mail notices to provide information:",
            correct_answer: "b. Identifying mentors/mentees",
            incorrect_answers: ["a. Creating mentoring implementation structures", "c. Training of mentoring coordinators", "d. Introducing the mentoring programme"],
        },
        {
            question: "The final step in the implementation of the mentoring programme is:",
            correct_answer: "d. Evaluation and feedback",
            incorrect_answers: ["a. Training the mentors", "b. Goal-setting", "c. Implementation"],
        },
        {
            question: "Which of the following terms are NOT associated with the mentoring process:",
            correct_answer: "b. static",
            incorrect_answers: ["a. reciprocal", "c. mentee", "d. mentor"],
        },
        {
            question: "Which of the following questions can be used to evaluate the Program Outputs of the mentoring relationship:",
            correct_answer: "c. How many mentees are suitable for promotion after the mentoring process?",
            incorrect_answers: ["a. Are meetings sufficiently frequent?", "b. How many learning objectives were reached?", "d. Has the mentee improved?"],
        },
        {
            question: "An informal/Long-term mentoring process would be most suitable in which of these situations:",
            correct_answer: "c. “friendship” mentoring",
            incorrect_answers: ["a. New employees or graduate students", "b. Grooming to take over position", "d. Off-the-cuff strong intervention"],
        },
        {
            question: "'Getting the message right' is essential for which of the following stages of the formal mentoring lifecycle:",
            correct_answer: "a. Scale stage",
            incorrect_answers: ["b. Creation stage", "c. Pilot stage", "d. Concept stage"],
        },
        {
            question: "What is the key responsibility of a mentee in an organization?",
            correct_answer: "a. Actively seeking guidance and feedback from the mentor to enhance professional skills and knowledge.",
            incorrect_answers: ["b. Managing organizational finances.", "c. Conducting performance appraisals.", "d. Handling administrative tasks."],
        },
        {
            question: "At the end of a mentoring program, the mentee can integrate into the system and has improved technical competence. Which quality has the mentee developed:",
            correct_answer: "c. Knowledge",
            incorrect_answers: ["a. Wisdom", "b. Resilience", "d. Independence"],
        },
        {
            question: "A senior mentor in Company X had the technical skills but needed to be more empathetic and ready to listen to the mentee. In which area is the mentor lacking:",
            correct_answer: "b. emotional responsibility",
            incorrect_answers: ["a. credibility", "c. leadership", "d. experience"],
        },
        {
            question: "What is reverse mentoring?",
            correct_answer: "b. A partnership where junior employees mentor senior employees, often on technology and innovation.",
            incorrect_answers: ["a. A traditional mentorship where senior employees guide junior counterparts.", "c. A program where senior executives learn from their peers in the same age group.", "d. A process where employees switch roles between mentor and mentee periodically."],
        },
        {
            question: "Choose the INCORRECT statement about advice for potential mentors:",
            correct_answer: "d. Manage, do not advise",
            incorrect_answers: ["a. Break the ice by sharing some of your career experiences", "b. Stay in your zone of expertise/experience", "c. Be clear that the mentee sets the pace of the relationship"],
        },
        {
            question: "Which of the following is the best way to begin a formal mentoring relationship:",
            correct_answer: "b. Asking broad informal questions",
            incorrect_answers: ["a. Giving complex instructions/feedback", "c. Sharing sensitive personal information", "d. Providing impressions of third parties"],
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
    const quizName = "Human resource development"; // Get quiz name dynamically from input
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
