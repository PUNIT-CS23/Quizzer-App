// learning analytics course

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
      question: "An instructor analyzes student interactions within an online learning platform, tracking discussion forum participation, video viewing times, and quiz attempts. Then the instructor correlates this data with student performance in the course. He realizes that students who score more than 90%, also have more than 75% in the quizzes. What type of analytics is she doing?",
      correct_answer: "Diagnostic Analytics",
      incorrect_answers: ["Descriptive Analytics", "Predictive Analytics", "Prescriptive Analytics"]
  },
  {
      question: "Which of the following is NOT true about Educational Data Mining?",
      correct_answer: "It is only a branch of Artificial intelligence.",
      incorrect_answers: ["It is the process of getting useful insight from Data.", "It includes validating a learner model or a hypothesis about learning from learners' data.", "It helps to make recommendations to the learner by analyzing the data."]
  },
  {
      question: "Mid-semester exams are over, and the course teacher plotted the histogram of students' scores to check how normally the scores are distributed. What kind of analytics is this?",
      correct_answer: "Descriptive analytics",
      incorrect_answers: ["Demonstrative analytics", "Predictive analytics", "Diagnostic analytics"]
  },
  {
      question: "“Scaffolding students to achieve their learning goal” and “Personalization in an Intelligent Tutoring Systems” are examples of",
      correct_answer: "Prescriptive Analytics",
      incorrect_answers: ["Descriptive Analytics", "Diagnostic Analytics", "Predictive Analytics"]
  },
  {
      question: "Which of the following questions is a type of Predictive Analytics?",
      correct_answer: "What will be the performance of a student in the next question? / Which courses will the student take in the next semester?",
      incorrect_answers: ["What is the average score of all students in the CBSE 10th Maths Exam?", "What is the average attendance of the class over the semester?"]
  },
  {
      question: "Which of the following is NOT true about Educational Data Mining?",
      correct_answer: "The major use of Educational Data mining is to improve marketing strategy.",
      incorrect_answers: ["It is the process of getting valuable insight from Data.", "Educational data mining includes validating a learner model or a hypothesis about learning.", "It helps to make recommendations to the learner by analyzing the data."]
  },
  {
      question: "A maths teacher decided to conduct extra lectures (remedial content) before the final exam for the students who got less than 30% in the mid-semester. What type of analytics is she using?",
      correct_answer: "Prescriptive Analytics",
      incorrect_answers: ["Descriptive Analytics", "Diagnostic Analytics", "Predictive Analytics"]
  },
  {
      question: "Fill in the blanks: _____ is concerned with the institution's business, whereas ____ deals with the students. (Note that the answer should have a particular order)",
      correct_answer: "Business Intelligence, Learning Analytics",
      incorrect_answers: ["Learning Analytics, Individual Intelligence", "Academic Analytics, Learning Analytics", "Learning Analytics, Academic Analytics"]
  },
  {
      question: "Which of the following is/are used in Descriptive analytics?",
      correct_answer: "Bar charts",
      incorrect_answers: ["Regression analysis", "Pattern mining", "Line graphs"]
  },
  
  {
    question: "In a classroom setting, what data can researchers and teachers collect to inform instructional decisions and assess student achievement?",
    correct_answer: "Students’ mid-sem exam / Score in Course- project / Assignments completion",
    incorrect_answers: ["Students co-curricular activity"]
  },
  {
    question: "Considering you are a researcher and want to collect data from any learning environment. What will be the primary steps to protect the ethics and data privacy of the learner?",
    correct_answer: "Get consent from the participant / Anonymize the data and classify it / Store the data in a secure place",
    incorrect_answers: ["Share the data with participants"]
  },
  {
    question: "While designing a study to collect data from class 4 students, which of the following factors is the most important in data collection?",
    correct_answer: "Get student’s and parent’s consent",
    incorrect_answers: ["Record all the interactions with student", "Students’ parents' information", "None of the above is important"]
  },
  {
    question: "Which of the following is part of Data Preprocessing?",
    correct_answer: "Flagging erroneous data / Dealing with missing data / Removing irrelevant attributes",
    incorrect_answers: ["Identifying other sources of data required for analysis"]
  },
  {
    question: "Which of the following are the true statements about privacy and ethics in research?",
    correct_answer: "It is someone’s right to keep information about themselves secret / It is a basic human right / Privacy has social benefits",
    incorrect_answers: ["Person privacy can be exploited for the sake of scientific advancement"]
  },
  {
    question: "Arrange the following sentences in the correct order of sequence: i. Analyze data ii. Pre-process data iii. Collect data iv. Get approval from the Ethics Committee to conduct research and collect data v. Get participants’ consent",
    correct_answer: "iv, v, iii, ii, i",
    incorrect_answers: ["v, iv, iii, ii, i", "iv, iii, v, ii, i", "iii, iv, v, ii, i"]
  },
  {
    question: "Which of the following features can be extracted from the MOOC platform?",
    correct_answer: "Time spent on Discussion Forum / Score in in-video Quizzes / Number of videos watched",
    incorrect_answers: ["Extra curriculum activities"]
  },
  {
    question: "Before conducting research studies with participants, which of the following information has to be provided to participants?",
    correct_answer: "What data will be collected / Why and how the data will be collected / How the data will be stored",
    incorrect_answers: ["Information about other participants"]
  },
  {
    question: "The stage where raw data is converted into actions/events is called",
    correct_answer: "Data pre-processing",
    incorrect_answers: ["Data analysis", "Data logging", "Data reporting"]
  },
  
    {
      question: "Arrange the following processes of ML in the correct sequence according to their time of occurrence from the first step.",
      correct_answer: "3-1-2-4",
      incorrect_answers: ["2-3-1-4", "3-2-4-1", "3-4-1-2"]
    },
    {
      question: "For imbalanced datasets, which of the following performance metrics is generally used?",
      correct_answer: "F-Score",
      incorrect_answers: ["Precision", "Recall", "Accuracy"]
    },
    {
      question: "For the below confusion matrix, the Accuracy value is ______ (Report your answers correct to two decimal places).",
      correct_answer: "57%",
      incorrect_answers: ["20%", "60%", "30%"]
    },
    {
      question: "Two Raters rate the engagement of the group of students in an aviation project. Calculate the value of kappa:",
      correct_answer: "0.40",
      incorrect_answers: ["0.6", "0.43", "0.10"]
    },
    {
      question: "ROC is generated by plotting:",
      correct_answer: "True Positive Rate (y-axis) against the False Positive Rate (x-axis)",
      incorrect_answers: ["True Positive Rate (x-axis) against the False Positive Rate (y-axis)", "True Positive Rate (x-axis) against the True Negative Rate (y-axis)", "True Positive Rate (x-axis) against the False Negative Rate (y-axis)"]
    },
    {
      question: "The harmonic mean of Precision and Recall is another performance metric known as?",
      correct_answer: "F1-score",
      incorrect_answers: ["Cohen’s Kappa", "Sensitivity", "Specificity"]
    },
    {
      question: "In MOOC data, what field in the data is used to identify user location?",
      correct_answer: "IP address",
      incorrect_answers: ["UserID", "Timestamp", "Session ID"]
    },
    {
        question: "What is the purpose of diagnostic analytics?",
        correct_answer: "To find out reasons behind data patterns",
        incorrect_answers: ["To understand patterns from educational data", "To provide recommendations to respective stakeholders", "To predict what will happen next based on existing data"]
      },
      {
        question: "Consider the following scenario: An instructor has kept a record of the last five years record of his class in an Excel sheet. The fields he maintained for every year are Attendance, Marks in mid-term exams, marks in end-semester exams, and a package of their campus placement. If instructor wants to know which year students got highest average package then analysis at what level needs to be performed?",
        correct_answer: "Descriptive Analytics",
        incorrect_answers: ["Diagnostic Analytics", "Prescriptive Analytics", "Predictive Analytics"]
      },
      {
        question: "Consider the following set of values for attendance and marks. Attendance%: 80, 90, 75, 60, 85 Marks%: 85, 88, 70, 65, 90. Find out the Pearson's Correlation coefficient.",
        correct_answer: "0.782",
        incorrect_answers: ["0.967", "0.889", "0.705"]
      },
      {
        question: "What are the limitations of Pearson's correlation?",
        correct_answer: "It is sensitive to outliers",
        incorrect_answers: ["It can not detect non-linear relationships", "Its slope can't detect the intensity of correlation", "It can't detect inverse relationship"]
      },
      {
        question: "Numerically what is the maximum possible range of Pearson's correlation coefficient?",
        correct_answer: "-1 to 1",
        incorrect_answers: ["0 to 1", "-1 to 0", "1 to 10"]
      },
      {
        question: "In week 5 lecture 32 in example of correlation matrix which two variable have highest value of correlation coefficient?",
        correct_answer: "Mid-term marks and Final Marks",
        incorrect_answers: ["Attendance and Final Marks", "Attendance and mid-term marks", "Student Id and attendance"]
      },
      {
        question: "In week 5 lecture 33, how rank of a variable is assigned in case if it has two identical values in the example of Spearman's Correlation?",
        correct_answer: "Same rank is assigned to both values",
        incorrect_answers: ["Next consecutive number is assigned to second value in list", "Rank is assigned to only first value", "Rank is divided e.g. 7 rank is assigned as 6.5 to both values"]
      },
      {
        question: "What is the advantage of adding the concept of rank in Spearman's correlation?",
        correct_answer: "It has made it insensitive to outliers",
        incorrect_answers: ["It made it capable for non-linear relationships also", "It has increased the accuracy of correlation", "It has made slope to be capable of detecting intensity of correlation"]
      },
      {
        question: "Consider the following sequence of actions: ABCCBABCACABBAC. What is the probability of A->C transition?",
        correct_answer: "3/5",
        incorrect_answers: ["2/5", "4/5", "3/4"]
      },
      {
        question: "Choose the most relevant option that can't be inferred from a transition state diagram of a student given that actions performed by students are: Read, Watch Video, Seek, Take Quiz, Review Page.",
        correct_answer: "Did the student go on a certain webpage or not",
        incorrect_answers: ["Did student access the quiz just after watching the video", "Did student watch the complete video or not", "Did the student watch the video or not"]
      },
      
        {
          question: "The s-support definition given in the video is: The number of individual action sequences for a group where that sequence of actions occurs at least once. What is the simplistic meaning of this definition?",
          correct_answer: "Count of students who perform that action",
          incorrect_answers: ["What are the most frequent actions", "Total count on how many times that action is performed", "Average count of a particular action performed"]
        },
        {
          question: "The i-support definition given in the video is: The number of individual action sequences for a group where that sequence of actions occurs at least once. What is the simplistic meaning of this definition?",
          correct_answer: "How many times does the pattern occur by at least one student",
          incorrect_answers: ["How many times does the pattern occur for every individual student", "How may times does the pattern occur by all students", "How many times does the pattern occur on average"]
        },
        {
          question: "What is the meaning of i-frequency for a particular action?",
          correct_answer: "Total number of students who performed that action",
          incorrect_answers: ["The average count of how many times that action was performed", "Total count of actions performed", "Maximum number of students who performed that action together"]
        },
        {
          question: "Consider the following values for a pattern: I-freq mean=6, I-freq Std=7.5, S-support=0.6 and N=10, than how many students have performed that action?",
          correct_answer: "6",
          incorrect_answers: ["4", "5", "7"]
        },
        {
          question: "What can be the effective use of node cutoff and edge cutoff?",
          correct_answer: "It helps to filter very less frequent actions",
          incorrect_answers: ["It helps to filter very less frequent students", "It helps to filter very frequent actions", "It helps to filter very frequent students"]
        },
        {
          question: "From the given options which set of operations is not possible with SPM?",
          correct_answer: "Understanding how many students have not performed a certain action",
          incorrect_answers: ["Understanding which set of actions is performed", "Comparing actions of high-performing and low-performing groups", "Understanding which set of actions is not performed by students"]
        },
        {
          question: "Consider the following actions: ABBAABBBABBA. What is the significance of action A?",
          correct_answer: "0.81",
          incorrect_answers: ["0.91", "0.71", "0.61"]
        },
        {
          question: "Consider the following actions: ABBAABBBABBA. Find the correlation of the sequence of action A->B?",
          correct_answer: "0.75",
          incorrect_answers: ["0.85", "0.65", "0.78"]
        },
        {
          question: "A high correlation value indicates that ________________",
          correct_answer: "Two nodes are more likely to occur together",
          incorrect_answers: ["Two nodes are less likely to occur together", "Two nodes will always occur together", "Two nodes are unrelated"]
        },
        {
          question: "Select the correct statement for calculating utility value of an edge.",
          correct_answer: "ur×sig of edge+(1−ur)×corr value of edge",
          incorrect_answers: ["ur×corr value of edge+(1−ur)×sig of edge", "ur+sig of edge×(1−ur)+corr value of edge", "ur×(sig of edge+corr value of edge)"]
        },
          {
            question: "What is the primary goal of K-means clustering?",
            correct_answer: "To assign each point to its nearest cluster center",
            incorrect_answers: ["To minimize the distance within each cluster", "To maximize the distance between different clusters", "To increase the number of clusters until all points are isolated"]
          },
          {
            question: "Which of the following is a limitation of K-means clustering?",
            correct_answer: "It requires the number of clusters to be specified in advance",
            incorrect_answers: ["It is insensitive to the initial placement of cluster centers", "It always finds the global optimum solution", "It can only handle numerical data"]
          },
          {
            question: "In K-means clustering, how are the new cluster centers determined after assigning points to clusters?",
            correct_answer: "By calculating the mean of all points in each cluster",
            incorrect_answers: ["By randomly selecting new points as cluster centers", "By calculating the median of all points in each cluster", "By selecting the farthest point from the current cluster center"]
          },
          {
            question: "Given the following data points: (2, 3), (3, 3), (6, 5), (8, 8), and (9, 10), if the initial cluster centers are (2, 3) and (8, 8), which of the following are the correct cluster assignments after the first iteration?",
            correct_answer: "Cluster 1: (2, 3), (3, 3), (6, 5); Cluster 2: (8, 8), (9, 10)",
            incorrect_answers: ["Cluster 1: (2, 3), (3, 3); Cluster 2: (6, 5), (8, 8), (9, 10)", "Cluster 1: (2, 3), (3, 3), (9, 10); Cluster 2: (6, 5), (8, 8)", "Cluster 1: (2, 3), (6, 5); Cluster 2: (3, 3), (8, 8), (9, 10)"]
          },
          {
            question: "You have the following data points: (1, 1), (2, 2), (4, 4), and (5, 5). If the initial cluster centers are (1, 1) and (5, 5), what will the new cluster centers be after the first iteration?",
            correct_answer: "(1.5, 1.5) and (4.5, 4.5)",
            incorrect_answers: ["(2, 2) and (5, 5)", "(1, 1) and (4, 4)", "(1, 1) and (5.5, 5.5)"]
          },
          {
            question: "You have 6 data points in a 2-dimensional space: (1, 2), (2, 1), (4, 5), (5, 4), (8, 9), and (9, 8). You are using K-means clustering with k=3. The initial cluster centers are (1, 2), (4, 5), and (9, 8). After the first iteration, what is the total within-cluster sum of squares (WCSS)?",
            correct_answer: "20.5",
            incorrect_answers: ["17.0", "15.5", "18.0"]
          },
          {
            question: "Which of the following statements best describes hierarchical clustering?",
            correct_answer: "It creates a nested sequence of clusters through a series of merges or splits",
            incorrect_answers: ["It divides the dataset into a predetermined number of clusters", "It assigns data points to the nearest cluster center iteratively", "It requires the number of clusters to be specified in advance"]
          },
          {
            question: "In hierarchical clustering, what is the difference between agglomerative and divisive approaches?",
            correct_answer: "Agglomerative is a bottom-up approach, and divisive is a top-down approach",
            incorrect_answers: ["Agglomerative starts with one cluster and splits it, while divisive starts with individual points and merges them", "Agglomerative uses centroids, while divisive uses medoids", "Agglomerative clustering requires the number of clusters in advance, while divisive does not"]
          },
          {
            question: "Given the following data points: (1, 2), (2, 3), (5, 6), (8, 8). Using single-linkage (nearest neighbor) agglomerative hierarchical clustering, what is the distance between the first two clusters that will be merged?",
            correct_answer: "1.0",
            incorrect_answers: ["1.41", "5.0", "3.0"]
          },
          {
            question: "You are given five data points: (1, 1), (2, 1), (4, 3), (5, 4), and (9, 8). After performing agglomerative hierarchical clustering using average linkage, the first two points to be merged are (1, 1) and (2, 1). What is the new cluster center?",
            correct_answer: "(1.5, 1)",
            incorrect_answers: ["(1, 2)", "(2, 2)", "(1, 1.5)"]
          },
            {
              question: "In the context of educational data, which of the following need not to be similar to perform predictive analytics?",
              correct_answer: "Number of Students",
              incorrect_answers: ["Domain", "Interaction behaviour", "Interaction time"]
            },
            {
              question: "How is Predictive Analytics different from Descriptive and Diagnostic Analytics?",
              correct_answer: "Predictive Analytics focuses on using past data to forecast future outcomes, while Descriptive and Diagnostic Analytics focus on understanding and explaining past events.",
              incorrect_answers: ["Predictive Analytics focuses on summarizing past data, while Descriptive Analytics focuses on predicting future trends.", "Predictive Analytics identifies the root causes of past events, whereas Diagnostic Analytics forecasts potential outcomes.", "Predictive Analytics is concerned with real-time data analysis, while Descriptive and Diagnostic Analytics are only concerned with historical data."]
            },
            {
              question: "What is the primary difference between Simple Linear Regression and Multiple Linear Regression?",
              correct_answer: "Simple Linear Regression uses one independent variable, while Multiple Linear Regression uses two or more independent variables.",
              incorrect_answers: ["Simple Linear Regression can only model non-linear relationships, while Multiple Linear Regression can model linear relationships.", "Simple Linear Regression uses one dependent variable, while Multiple Linear Regression uses multiple dependent variables.", "Simple Linear Regression and Multiple Linear Regression are identical techniques with different names."]
            },
            {
              question: "In which scenario is Multivariate Regression preferred over Multiple Linear Regression?",
              correct_answer: "When there are multiple dependent variables being predicted simultaneously.",
              incorrect_answers: ["When there are multiple independent variables and only one dependent variable.", "When the relationship between the variables is non-linear.", "When the dataset is very large and needs to be reduced."]
            },
            {
              question: "How does Logistic Regression differ from Linear Regression?",
              correct_answer: "Logistic Regression uses a logistic function to model binary outcomes, while Linear Regression models continuous outcomes.",
              incorrect_answers: ["Logistic Regression is used for predicting continuous outcomes, while Linear Regression is used for categorical outcomes.", "Logistic Regression requires multiple independent variables, while Linear Regression only requires one.", "Logistic Regression is more accurate than Linear Regression for all types of data."]
            },
            {
              question: "If you have multiple linear regression models for the given data, how can you find out which model is best out of the given models?",
              correct_answer: "By comparing the mean square value for each model and selecting whose mean square value is minimum.",
              incorrect_answers: ["By manually looking at points and finding out which line is closest to the maximum number of points.", "By comparing the mean square value for each model and selecting whose least mean square value is maximum.", "By calculating the slope of all lines and comparing them."]
            },
            {
              question: "In educational settings, what is the meaning of the intercept in linear regression?",
              correct_answer: "It specifies the minimum value of the dependent variable.",
              incorrect_answers: ["It specifies the minimum value of the independent variable.", "It is not recommended to find out the exact meaning of intercept in educational settings.", "It specifies exactly at what is the scale of the relationship between independent and dependent variables."]
            },
            {
              question: "Which of the following is a correct use case for Logistic Regression in an educational setting?",
              correct_answer: "Classifying whether a student will pass or fail a course based on their attendance and assignment scores.",
              incorrect_answers: ["Predicting a student's exact score on a final exam based on study hours.", "Estimating the number of students who will attend a workshop based on previous attendance rates.", "Modeling the relationship between study hours and final exam scores in a continuous scale."]
            },
            {
              question: "Consider the equation: Y=c+X1W1+X2W2. Here, what is the significance of W1 and W2?",
              correct_answer: "W1 specifies the relation between X1 and Y keeping all other values constant.",
              incorrect_answers: ["W2 specifies the relation between X1 and Y keeping all other values constant.", "W2 specifies the relation between X2 and Y keeping all other values constant.", "W1 specifies the relation between X2 and Y keeping all other values constant."]
            },
            {
              question: "A Linear Regression model is used to predict a student's final exam score based on the number of hours they study. The model is given by the equation: Final Exam Score=40+5×(Study Hours). If a student studies for 8 hours, what is their predicted final exam score?",
              correct_answer: "80",
              incorrect_answers: ["60", "90", "100"]
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
    const quizName = "Learning Analytics Course"; // Get quiz name dynamically from input
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
