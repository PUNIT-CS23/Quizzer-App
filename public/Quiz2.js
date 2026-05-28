// management 

const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

const startBtn = document.querySelector(".start"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

let questions = [
  {
    question: "Which of the following is an area of marketing research subsystem?",
    correct_answer: "Advertising research",
    incorrect_answers: ["Inventory research", "Supplier research", "Financial research"]
  },
  {
    question: "Which one is not a subsystem of sales and distribution information system?",
    correct_answer: "Sales Order Tabulation",
    incorrect_answers: ["Sales Forecasting", "Sales Force Automation", "Sales Order Processing"]
  },
  {
    question: "Which of the following is a component of payroll subsystem?",
    correct_answer: "all of these",
    incorrect_answers: ["Tax deductions", "Leave and attendance data", "Previous tax reports"]
  },
  {
    question: "Which of the following is an example of master data required by Sales and Distribution Information Systems (SDIS)?",
    correct_answer: "Customer Master Data",
    incorrect_answers: ["Product Master Data", "Sales Master Data", "Financial Master Data"]
  },
  {
    question: "Human resource information system focuses on:",
    correct_answer: "all of these",
    incorrect_answers: ["Talent management", "Employee development", "Succession planning"]
  },
  {
    question: "Operational information required for human resource information system is/are:",
    correct_answer: "All of these",
    incorrect_answers: ["Skills Inventory", "Attendance Record", "Routine Assessment"]
  },
  {
    question: "Training and Development subsystem does not give detailed information about:",
    correct_answer: "Training period",
    incorrect_answers: ["Details of Trainers, Training Feedback", "Training Feedback, Training Modules and Content, and Trainees skills", "Training Modules and Content"]
  },
  {
    question: "Which of the following is/are component of Payroll Subsystem?",
    correct_answer: "Option a and b",
    incorrect_answers: ["Previous tax reports", "Provident fund contributions", "None of these"]
  },
  {
    question: "Sales function of sales and distribution information system is concerned with:",
    correct_answer: "Contacting the customers",
    incorrect_answers: ["Contacting the suppliers", "Providing supplier support", "None of these"]
  },
  {
    question: "What is the primary function of the General Ledger (GL) Accounting subsystem?",
    correct_answer: "To record all business transactions",
    incorrect_answers: ["To manage customer relationships", "To analyze market trends", "To forecast sales"]
  },
  {
    question: "Accounts Payables (AP) subsystem helps to record the liability of which of the following?",
    correct_answer: "Goods or services purchased from suppliers",
    incorrect_answers: ["Customer orders", "Employee attendance", "Marketing promotions"]
  },
  {
    question: "Which of the following things influence the amount of inventory to be maintained?",
    correct_answer: "All of these",
    incorrect_answers: ["Demand", "Suppliers’ reliability", "Lead time"]
  },
  {
    question: "What does the Bill of Material (BOM) include?",
    correct_answer: "List of all components required for a product",
    incorrect_answers: ["Only finished products", "List of production schedules", "List of quality control measures"]
  },
  {
    question: "Which department generates a material withdrawal slip?",
    correct_answer: "Production",
    incorrect_answers: ["Sales", "Warehouse", "Procurement"]
  },
  {
    question: "Which sort of data can be processed by marketing information system (MKIS) to access the appropriate information to be used for decision-making?",
    correct_answer: "Both b and c",
    incorrect_answers: ["Profitability and Organizational Policies", "Sales Figures", "Past Trends"]
  },
  {
    question: "What document certifies the number of units of a product received and available for sales?",
    correct_answer: "Goods receipt document",
    incorrect_answers: ["Production order", "Sales invoice", "Inventory report"]
  },
  {
    question: "Which of the following is/are the primary objectives of MIS for 'materials management'?",
    correct_answer: "All of these",
    incorrect_answers: ["To maintain up-to-date stocks of all materials", "To immediately respond to any changes in the production plan", "To respond to changes in the demand pattern"]
  },
  {
    question: "What is the main function of Materials Requirement Planning (MRP)?",
    correct_answer: "To monitor stocks and determine material requirements",
    incorrect_answers: ["To reduce manufacturing costs", "To manage human resources", "To develop new production technologies"]
  },
  {
    question: "Which of the following quality management processes is/are supported during production?",
    correct_answer: "All of these",
    incorrect_answers: ["Inspection during production", "Statistical process control", "Test equipment calibration"]
  },
  {
    question: "What are the following quality management processes supported by information system for quality management?",
    correct_answer: "All of these",
    incorrect_answers: ["Delivering Material as per Customer’s Quality Specification", "Quality Certificate", "Quality Inspection for Delivery"]
  },
  {
    question: "Which type of information is required for determining the location of new production facilities?",
    correct_answer: "Strategic information",
    incorrect_answers: ["Operational information", "Tactical information", "Financial information"]
  },
  {
    question: "Which of the following is NOT a component of CRM?",
    correct_answer: "Raw materials",
    incorrect_answers: ["People", "Processes", "Technology"]
  },
  {
    question: "CRM can help in reducing the costs of which areas?",
    correct_answer: "Marketing, sales, and customer service",
    incorrect_answers: ["Production, inventory, and logistics", "Human resources, finance, and IT", "Research, development, and compliance"]
  },
  {
    question: "What is the 'bullwhip effect' in supply chain management?",
    correct_answer: "The uncertainty caused by distorted information flowing up and down the supply chain",
    incorrect_answers: ["A strategy to increase production speed", "A method to increase inventory levels", "A process to automate customer service"]
  },
  {
    question: "What are the impacts of Bull-Whip effect?",
    correct_answer: "All of these",
    incorrect_answers: ["Excess inventories", "Increased wastage", "Stockouts"]
  },
  {
    question: "Which of the following is not a method of coping with the Bull-Whip effect?",
    correct_answer: "Transportation",
    incorrect_answers: ["Establish a demand-driven supply chain", "Eliminate gaming in shortage situations", "Break order batches into smaller lots"]
  },
  {
    question: "What are the challenges in supply chain management?",
    correct_answer: "All of these",
    incorrect_answers: ["Traceability", "Cost", "Quality of food supply"]
  },
  {
    question: "Which of the following technologies are used in supplier collaboration?",
    correct_answer: "All of these",
    incorrect_answers: ["Portal", "Collaborative Forecasting", "Inventory collaboration"]
  },
  {
    question: "What is the primary feature of lean systems in supply chain management?",
    correct_answer: "Elimination of waste",
    incorrect_answers: ["Increasing production speed", "Reducing customer interaction", "Enhancing financial reporting"]
  },
  {
    question: "CRM analytics can provide insights into which of the following areas?",
    correct_answer: "Sales, marketing, and customer service",
    incorrect_answers: ["Production, inventory, and logistics", "Human resources, finance, and IT", "Research, development, and compliance"]
  },
  {
    question: "Which one of the following is not a key capability of e-commerce applications?",
    correct_answer: "Inventory control",
    incorrect_answers: ["Online ordering", "Campaigns", "Online auctions"]
  },
  {
    question: "Identify correct statements. 1. Database system controls data redundancy 2. Database system eliminates data inconsistency. 3. Database system is simple to implement in comparison to the traditional file system. 4. Database system is secure in comparison to the traditional file system.",
    correct_answer: "1,2,4",
    incorrect_answers: ["1,2", "1,2,3", "1,2,3,4"]
  },
  {
    question: "Which of the following is a diagrammatical representation of the logical structure of the database?",
    correct_answer: "Entity-relationship diagram",
    incorrect_answers: ["Flow chart", "Entity diagram", "Tree diagram"]
  },
  {
    question: "What are the main objectives of database normalization?",
    correct_answer: "To reduce data redundancy and ensure data integrity",
    incorrect_answers: ["To increase data redundancy and complexity", "To enhance query performance and add redundancy", "To make the database structure more complex"]
  },
  {
    question: "How does a data mart differ from a data warehouse?",
    correct_answer: "Data marts focus on specific subjects or business lines.",
    incorrect_answers: ["Data marts are smaller versions of data warehouses.", "Data marts store only historical data.", "Data marts are used for transactional processing."]
  },
  {
    question: "In the given table, which attribute will be eligible for the primary key? Employee (Employee_Id, Department_Id, Salary, Name)",
    correct_answer: "Employee_Id",
    incorrect_answers: ["Department_Id", "Salary", "Name"]
  },
  {
    question: "In the given table, which attribute will be eligible for a foreign key? Sales (Sales_Id, Product_Id, Amount, Customer_Id)",
    correct_answer: "Product_Id, Customer_Id",
    incorrect_answers: ["Sales_Id", "Product_Id", "Amount"]
  },
  {
    question: "State True/ False: Statement I: OLAP supports multidimensional data analysis. Statement II: In OLAP, each attribute of the information is a different dimension.",
    correct_answer: "Both statement I and statement II are true.",
    incorrect_answers: ["Statement I is True, and Statement II is False.", "Statement I is False, and Statement II is True.", "Statement I is False, and Statement II is False."]
  },
  {
    question: "Which type of data analytics focuses on identifying the root causes of past performance or events?",
    correct_answer: "Diagnostic analytics",
    incorrect_answers: ["Descriptive analytics", "Predictive analytics", "Prescriptive analytics"]
  },
  {
    question: "Which technique is commonly used in predictive analytics to forecast future outcomes based on past data?",
    correct_answer: "Regression",
    incorrect_answers: ["Decision trees", "Support vector machines", "Data visualization"]
  },
  {
    question: "Given data on customers' past purchases, their browsing history, and demographics, your model needs to predict the likelihood of each customer purchasing a new product. This is a:",
    correct_answer: "Classification task",
    incorrect_answers: ["Regression Task", "Clustering task", "None"]
  },
  {
    question: "Which of the following is a predictive analytics application in retail?",
    correct_answer: "Estimating future sales based on historical data and seasonal trends.",
    incorrect_answers: ["Tracking real-time inventory levels.", "Analyzing customer feedback from surveys.", "Managing employee work schedules."]
  },
  {
    question: "Statement I- An information system is a set of interrelated components that collect or retrieve, process, store, and distribute information to support decision-making and control in an organization. Statement II- Computers and software are technical foundation and tools for building any Information system.",
    correct_answer: "Both statement I and statement II are True.",
    incorrect_answers: ["Statement I is True, and Statement II is False.", "Statement I is False, and Statement II is True.", "Statement I is False, and Statement II is False."]
  },
  {
    question: "How are information systems transforming businesses?",
    correct_answer: "All of the above",
    incorrect_answers: ["By reducing costs", "By improving efficiency and productivity", "By enhancing decision-making"]
  },
  {
    question: "What ethical considerations are associated with information systems?",
    correct_answer: "All of the above",
    incorrect_answers: ["Privacy and data protection", "Intellectual property rights", "Cybersecurity and hacking"]
  },
  {
    question: "Statement I: In an organization, all the functionalities, such as finance, manufacturing, sales, and purchase, are interrelated. Statement II: Enterprise resource planning is one of the backbones of management information systems.",
    correct_answer: "Both statement I and statement II are true.",
    incorrect_answers: ["Statement I is True, and Statement II is False.", "Statement I is False, and Statement II is True.", "Statement I is False, and Statement II is False."]
  },
  {
    question: "Statement I: In cloud computing, private clouds are more secure than public clouds. Statement II: In cloud computing, public clouds are more expensive in comparison to private clouds.",
    correct_answer: "Statement I is True, and Statement II is False.",
    incorrect_answers: ["Both statement I and statement II are true.", "Statement I is False, and Statement II is True.", "Statement I is False, and Statement II is False."]
  },
  {
    question: "You search for laptops on Amazon, and later, you see laptop ads on other websites. This concept is called:",
    correct_answer: "Customer and Supplier intimacy",
    incorrect_answers: ["Operational excellence", "Improved decision-making", "All of these"]
  },
  {
    question: "Statement I: IT flattens Organizations because, in post-industrial societies, authority increasingly relies on knowledge and competence rather than formal positions. Statement II: IT affects the cost and quality of information and changes the economics of information.",
    correct_answer: "Both statement I and statement II are true.",
    incorrect_answers: ["Statement I is True, and Statement II is False.", "Statement I is False, and Statement II is True.", "Statement I is False, and Statement II is False."]
  },
  {
    question: "Ms. Priya manages the company's budget and financial reports. Which of the business functions is she performing?",
    correct_answer: "Finance and accounting",
    incorrect_answers: ["Sales and marketing", "Human resources management", "Manufacturing and production"]
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
    const quizName = "MANAGEMENT INFORMATION SYSTEM"; // Get quiz name dynamically from input
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
