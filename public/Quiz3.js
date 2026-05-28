// software engineering

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
    question: "Which one of the following types of software development most closely resembles the exploratory style of software development?",
    correct_answer: "First deFirst develop the software, and then keep on modifying the software until the customer accepts it",
    incorrect_answers: ["First specify the software, then design the test cases, then develop the software, and keep on modifying it until it passes all the test cases",
       "First specify the system, then develop the software, and finally test the developed software", 
       "Keep on specifying a little, designing a little, and testing a little until the full software is developed",
      "Develop a prototype to collect customer feedbacks, then develop the software, and finally test the developed software"],
  },
  {
    question: "Which one of the following statements is FALSE about the consequence of developing software by deploying the exploratory style? ",
    correct_answer: "When large projects are developed using an exploratory style, very high-quality software is frequently produced.",
    incorrect_answers: ["It is difficult to use exploratory style in team development environment", 
      "For moderate and large-sized projects, use of exploratory style leads to high cost and project delays", 
      "When exploratory approach is used to construct toy projects, such as assignments in an introductory programming course, the developed software is invariably of poor quality and also takes an unreasonable amount of time to complete",
      " Development of large projects using the exploratory style, sometimes leads to project failure"],
  },
  {
    question: "Which one of the following is not justified by the magic number 7?",
    correct_answer: " A function should not be called by more than 7 functions",
    incorrect_answers: ["Number independent variables in a function should not exceed 7", 
      " A function should not call more than 7 functions",
       "Number of decision statements in a function should not exceed 7",
       "A function should not have more than 7 parameters"
      ],
  },
  {
    question: "Which one of the following involves using the abstraction principle ?",
    correct_answer: " Model building",
    incorrect_answers: ["Decomposition",
       "Modularization",
        " Structured programming",
        "Functional decomposition"
      ],
  },
  {
    question: "Defects get introduced into a work product due to mistakes committed by the members of the development team. A mistake in an activity pertaining to which one of the following phases is likely to be most expensive to correct when detected during system testing? ",
    correct_answer: "  Requirements analysis and specification",
    incorrect_answers: [" System testing",
       "Design",
        "Coding and unit testing ",
        " Maintenance"
      ],
  },
  {
    question: "While using the exploratory development style, the effort required to develop a software grows exponentially with the size of the software. Which one of the following is a possible reason behind it?",
    correct_answer: " As the number of independent variables in the program increases, it quickly exceeds the grasping power of an individual",
    incorrect_answers: ["Testing effort increases exponentially",
       " Code size becomes exponentially large",
        "As the size of a program increases, it becomes very difficult to correct compilation errors.",
        " As the size of a program increases, program compilation takes an unduly large amount of time."
      ],
  },
  {
    question: "Which one of the following activities would span all stages of a software development life cycle (SDLC) in waterfall-based software development? ",
    correct_answer: " Project management",
    incorrect_answers: ["Coding",
       "Testing",
        "Design",
        "Requirements specification"
      ],
  },
  {
    question: "In waterfall-based development, which one of the following phases accounts for the maximum effort during development of a typical software? ",
    correct_answer: " Testing",
    incorrect_answers: ["Implementation ",
       "Designing", 
        " Specification",
        "Feasibility study"
      ],
  },
  {
    question: " Prototyping life cycle model is appropriate when a project suffers from which one of the following risks? ",
    correct_answer: " Incomplete and uncertain requirements",
    incorrect_answers: ["Schedule slippage",
       "Manpower turnover",
        "Poor quality of outsourced work",
        "Technological obsolescence"
      ],
  },
  {
    question: "The operation phase of the waterfall model is a synonym for which one of the following phases?",
    correct_answer: "Maintenance phase",
    incorrect_answers: ["Integration and system testing phase ",
       "Design phase",
        "Requirements specification phase",
        "Coding and unit testing phase"
      ],
  },
  {
    question: "Agile model advocates which of the following approaches?",
    correct_answer: "In each increment, get something of business-value delivered, consistent with the right level of quality",
    incorrect_answers: ["In each increment, get something “quick and dirty” delivered, which may or may not add much value to the customer",
       "In each increment, get something simple and minimal released, but as quickly as possible",
        "In each increment, get something delivered once it has been fully documented and the documentation has been signed off as complete",
        "In each increment, complete and deliver the working software for one use case"
      ],
  },  
  {
    question: "Which one of the following is not true in a Scrum development?",
    correct_answer: " During a Sprint, customer feedback is continually obtained and the Sprint backlog is accordingly modified",
    incorrect_answers: ["Sprint is the fundamental process flow of Scrum",
       "A sprint is a month-long iteration, during which an incremental product functionality completed",
        "Each day begins with a daily Scrum meeting",
      ],
  },

  {
    question: " Pair programming intends to take which one of the following best practices to the extreme?",
    correct_answer: "Code review",
    incorrect_answers: ["Design",
       "Incremental development",
        "Simplicity",
        "Spike development",
        "Daily integration",
      ],
  },

  {
    question: "Consider the following requirement for a word processor software: The software should providefacility to import an existing image available as a jpeg file into the document being created. Which one of the following types of requirements is this? ",

    correct_answer: "Functional requirement ",
    incorrect_answers: ["Non-functional requirement",
       "Constraint on the implementation ",
        "Goal of implementation",
        " External interface requirement",
      ],
  },

  {
    question: "Consider the following partial description of the IIT security software. “Employees of the company should be able to register their vehicles with the payroll software.” Which one of the following types of requirements is this?",
    correct_answer: "Functional requirement",
    incorrect_answers: ["Non-Functional requirement",
       "Design requirement",
        "Design constraint",
        "External interface requirement",
      ],
  },

  {
    question: "Consider the following partial requirement for a software: “It should be possible to use a web browser as the front end.” It can be considered to be which one of the following types of requirements?",
    correct_answer: "Non-functional requirement ",
    incorrect_answers: ["Functional requirement",
        "Design constraint",
        "External interface",
        "Goal of implementation",
      ],
  },

  {
    question: "When a company plans to develop a generic product, who among the following is usually the source of the requirements?",
    correct_answer: " Sales personnel",
    incorrect_answers: [" Development team members",
       " Project manager",
        "Personnel from finance department",
        " A future user of the product",
      ],
  },

  {
    question: "Which of the following problems in the gathered requirements is not the focus of the requirements analysis task?",
    correct_answer: "Grammar and sentence construction problems ",
    incorrect_answers: [" Inconsistency",
       "Ambiguity",
        "Incompleteness",
        "Unstructuredness",
      ],
  },

  {
    question: " Which one of the following views is implicit in an SRS document?",
    correct_answer: "Black box ",
    incorrect_answers: [" White box",
       " Grey box",
        "Glass box",
        "Both grey and glass box",
      ],
  },

  {
    question: " Which one of the following most accurately reflects the style of software development that takes place in an agile software development project?",
    correct_answer: "Both incremental and iterative development",
    incorrect_answers: ["Incremental development",
       " Iterative development",
        "Prototyping ",
        " Linear development",
      ],
  },

  {
    question: " In which of the following SDLC models, testing activities are spread over the entire development life cycle?",
    correct_answer: "V model  & Scrum model ",
    incorrect_answers: ["Iterative waterfall model",
       "  Prototyping model ",
        " Classical waterfall model",
      ],
  },

  {
    question: "The extent of data exchanges between two modules is indicated by which one of the following terms?",
    correct_answer: "Coupling",
    incorrect_answers: ["Cohesion",
       "Structure",
        "Union",
        "Integration",
      ],
  },

  {
    question: "Which one of the following types of cohesion can be considered as the best form of cohesion?",
    correct_answer: "Functional ",
    incorrect_answers: ["Logical",
       " Coincidental",
        "Temporal ",
        "Procedural",
      ],
  },

  {
    question: "The modules in a good software design should have which one of the following characteristics?",
    correct_answer: "High cohesion, low coupling  ",
    incorrect_answers: ["Low cohesion, high coupling ",
       " Low cohesion, low coupling",
        "High cohesion, high coupling",
        "Moderate cohesion, high coupling",
      ],
  },

  {
    question: "Which of the following is the best (most desirable) type of module coupling?",
    correct_answer: "Data coupling ",
    incorrect_answers: ["Control coupling",
       "Stamp coupling ",
        "Content coupling ",
        "Common coupling",
      ],
  },

  {
    question: "Which one of the following is the worst type of module coupling? ",
    correct_answer: " Content coupling",
    incorrect_answers: ["Control coupling",
       "Stamp coupling ",
        "External coupling ",
        "Common coupling",
      ],
  },

  {
    question: "Which one of the following is the worst type of module cohesion? ",
    correct_answer: "Coincidental cohesion",
    incorrect_answers: ["Logical cohesion",
       "Temporal cohesion",
        " Functional cohesion",
        "Communicational cohesion",
      ],
  },

  {
    question: "In which one of the following types of coupling, complete data structures are passed from one module to another?",
    correct_answer: "Stamp coupling ",
    incorrect_answers: ["Control coupling",
       "External Coupling ",
        "Content coupling ",
        "Common coupling",
      ],
  },

  {
    question: " If all tasks must be executed in the same time-span, what type of cohesion is being exhibited? ",
    correct_answer: "Temporal Cohesion",
    incorrect_answers: ["Functional Cohesion",
       "Sequential Cohesion ",
        "Communicational cohesion",
      ],
  },

  {
    question: " Which one of the following is the correct ordering of the coupling of modules from strongest (least desirable) to weakest (most desirable)?",
    correct_answer: "content, common, control, stamp, data",
    incorrect_answers: ["common, content, control, stamp, data",
       "content, data, common ,stamp, common",
        " data, control, common, stamp, content",
        " common, data, control, stamp, content ",
        "content, data, control, common, stamp",
      ],
  },

  {
    question: "During the detailed design of a module, which one of the following is designed? ",
    correct_answer: "Data structures and algorithms ",
    incorrect_answers: ["Module hierarchy",
       "Control structure",
        " Data flow structure",
        "Module interfaces",
      ],
  },

  {
    question: "A data flow diagram represents which one of the following? ",
    correct_answer: "The transformation of data through processing stations ",
    incorrect_answers: ["The conditions based on which data items may be processed",
       "The order in which different activities are carried out",
        "The order in which various functions of a program are invoked",
        "Interaction among different modules of a program",
      ],
  },

  {
    question: "For a given programming problem, a DFD (data Flow Diagram) model depicts which of the following? ",
    correct_answer: "Flow of data",
    incorrect_answers: ["Flow of control ",
       "Flow of decisions ",
        "Flow of atomic conditions",
        "Sequence of interaction among processes",
        "Interaction among modules",
      ],
  },

  {
    question: "In a procedural design approach, during the detailed design stage, which of the following is undertaken? ",
    correct_answer: "Data structures and algorithms for the individual modules are designed ",
    incorrect_answers: ["Module structure is designed",
       "Data flow representation is developed",
        "Structure chart is developed ",
        "Module call relationships are designed",
        "Module interactions are designed",
      ],
  },

  {
    question: "Which one of the following is true of a function-oriented design approach?",
    correct_answer: "Top-down",
    incorrect_answers: ["Bottom-up",
       "Mixed-in ",
        " Bottom-out",
        "Bottom-up at system level and top-down at module level",
      ],
  },

  {
    question: " A context diagram should not represent which of the following?",
    correct_answer: "Data structures and algorithms ",
    incorrect_answers: ["Module hierarchy",
       "Control structure",
        " Data flow structure",
        "Module interfaces",
      ],
  },

  {
    question: "During the detailed design of a module, which one of the following is designed? ",
    correct_answer: "Module Interactions & Module structure",
    incorrect_answers: ["External entities.",
       "Data input to the system by the external entities,",
        "Output data generated by the system.",
      ],
  },

  {
    question: "Which of the following information are not present in a structure chart model of a software system?",
    correct_answer: "Data structures and algorithms of the modules  &  How the data is transformed by the functions",
    incorrect_answers: ["Various modules making up the system",
       "Module call structure ",
        "Parameters passed among different modules",
      ],
  },

  {
    question: "Which of the following term means packing of data and functions into a single unit in a program? ",
    correct_answer: "Encapsulation ",
    incorrect_answers: ["Polymorphism",
       "Abstraction ",
        "Inheritance  ",
        "Decomposition ",
      ],
  },

  {
    question: "Which of the followings are important advantages of applying the principle of data hiding to a design solution?",
    correct_answer: "Low coupling & High cohesion ",
    incorrect_answers: ["Low cohesion",
       "High Coupling ",
        "Low fan out ",
      ],
  },

  {
    question: "Which of the followings are characterize the inheritance relation between two classes? ",
    correct_answer: "Generalization and specialization & “Is a” relation ",
    incorrect_answers: ["Encapsulation.",
       "Aggregation ",
        "Polymorphism",
        " “Has a” relation ",
        "Composition",
      ],
  },

  {
    question: "Consider the statement: 'An employee is either a worker or a manager'. Assuming that Employee and Manager to be two classes, what can be said about the relationship between these two classes?",
    correct_answer: " Generalization-specializationm ",
    incorrect_answers: ["Association ",
       "Aggregation  ",
        "Polymorphism",
        "Composition",
        "Dependency",
      ],
  },

  {
    question: "Which one of the following can be said about an abstract data type (ADT)?",
    correct_answer: " A data type that can only be used through the operations defined on it ",
    incorrect_answers: ["It is a synonym for an abstract class",
       "A data type that cannot be instantiated  ",
        "It is the same as a collection of data items ",
        "It is the same as an aggregation of data items",
      ],
  },

  {
    question: "Which one of the following phrases indicates the relationship that exists between a class and its public parent class?",
    correct_answer:'"...is a..."',
    incorrect_answers: ['"...has a..." ',
       '"...is implemented as a..."',
        '"...uses a..."',
        '“…implementation of…”',
      ],
  },

  {
    question: "Which one of the following sentences most closely describes 'multiple inheritance' in object-oriented development? ",
    correct_answer: "A child class has two or more parent classes ",
    incorrect_answers: ["Two classes inherit from each other",
       "A base class has two or more derived classes ",
        "A child class has both an 'is a' and a 'has a' relationship with its parent class ",
        "A class is derived from its parent class, which in turn is derived from its parent class",
      ],
  },

  {
    question: "Which one of the following is true of a design solution that involves several deep inheritance hierarchies?",
    correct_answer: "It is a sign of bad design as it breaks encapsulation ",
    incorrect_answers: ["It is a sign of a good design as it increases reuse",
       "It is a sign of a good design as it leads to sophisticated and versatile classes at the leaf level ",
        "It is a sign of good design as it increases polymorphic bindings ",
        "It is a sign of bad design as it causes repeated inheritance",
      ],
  },

  {
    question: "Which of the following statements are false regarding UML models of a system?",
    correct_answer: "All UML models are design models of the system AND In general, from a system implementation, all UML models can be extracted ",
    incorrect_answers: ["Construction UML models help handle complexity in the problem",
       "All UML designs are models of the system ",
        "Dynamic UML models represent behavioral aspects of the system ",
        "Static UML models represent structural aspects of the system",
      ],
  },

  {
    question: "Consider the following sentence: “A square is a polygon”. From an analysis of the sentence, identify the relations between the two classes Square and Polygon that can be inferred from the sentence. ",
    correct_answer: "Inheritance ",
    incorrect_answers: ["Association",
       "Aggregation ",
        "Composition ",
        "Dependency",
      ],
  },

  {
    question: "Consider the sentence: A college has many Students. Which one of the following best characterizes the relationship that exists between the College class and the Student class?",
    correct_answer: "Association ",
    incorrect_answers: ["Inheritance ",
       "Specialization ",
        "Composition ",
        "Dependency",
      ],
  },

  {
    question: "Consider the following sentence: “100 paisa is one rupee”. From an analysis of the sentence, identify the relation between the two classes Paisa and Rupee that can be inferred from the sentence.",
    correct_answer: "Composition ",
    incorrect_answers: ["Inheritance",
       "Association",
        "Aggregation ",
        "Dependency",
      ],
  },

  {
    question: "A collaboration diagram is used by the designers for its capability to effectively depict which one of the following types of information?",
    correct_answer: "Structural information such as class association",
    incorrect_answers: ["The decision structure among the classes",
       "The looping structure ",
        "The attribute values of the objects ",
        "Times at which collaboration occurs among classes",
      ],
  },

  {
    question: "Consider the following sentence: “Students live in hostels”. From an analysis of the sentence, identify the relation between the two classes Student and Hostel that can be inferred from the sentence",
    correct_answer: "Association ",
    incorrect_answers: ["Inheritance",
       "Aggregation",
        "Composition ",
        "Dependency",
      ],
  },

  {
    question: "How is an external system represented in a use case diagram?",
    correct_answer: "By stereotyping the actor icon ",
    incorrect_answers: ["By using a specific icon available for this purpose",
       "By using text description ",
        "By using object constraint language (OCL)",
        "By inheriting a special icon from the actor icon",
      ],
  },

  {
    question: "Consider the following statement: “India shares borders with Pakistan, Bangladesh, and China.” Which one of the following is the best way to implement this in an object-oriented program?",
    correct_answer: "Define a unary association on Country class ",
    incorrect_answers: ["Let Country class implement the Border interface",
       "Define Country class as an aggregate of Border classes ",
        "Define a dependency of Country class on Border class ",
        "Define a quaternary association relation between the Countries India, Pakistan, Bangladesh, and China",
      ],
  },

  {
    question: "Which of the following features of the state chart model are primarily responsible towards reduced number of states in the finite state modelling of a given problem? ",
    correct_answer: "Nested states &  Concurrent states ",
    incorrect_answers: ["History state",
       "Broadcast messages ",
        "Actions on state entry and exit ",
      ],
  },

  {
    question: "In an informal (natural language) description of a programming problem, which parts of the description are likely represent objects?",
    correct_answer: "Some of the nouns. ",
    incorrect_answers: ["All of the nouns and all of the verbs",
       "All of the verbs and some of the nouns ",
        "Some of the verbs  ",
        "Some of the nouns and some of the verbs",
      ],
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
  const quizName = "SOFTWARE ENGINEERING"; // Get quiz name dynamically from input
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
