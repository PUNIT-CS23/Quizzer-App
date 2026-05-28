// e-business


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
    question: "Which of the following is a line-of-sight technology for automatic object identification?",
    correct_answer: "Bar code",
    incorrect_answers: ["RFID", "IoT", "Cloud"],
  },
  {
    question: "A retail store is using RFID to improve its stock management. In this setting, the RFID tags are attached to",
    correct_answer: "The items",
    incorrect_answers: ["Middleware", "Reader", "Shopping carts"],
  },
  {
    question: "Which of the following is the energy source for the Passive RFID tag?",
    correct_answer: "Exclusively the reader’s magnetic field",
    incorrect_answers: ["Conventional electric power supply", "Battery", "Both the reader’s magnetic field and battery"]
  },
  {
    question: "In EPC information infrastructure, the component responsible for keeping the detailed description about the product and the process is?",
    correct_answer: "EPC Information Services (PML Server)",
    incorrect_answers: ["ID System", "EPC Middleware", "Discovery Services (ONS Database)"]
  },
  {
    question: "In EPC information infrastructure, the component responsible for mapping the EPC code present in the tag with a specific URL, wherein the details are available is?",
    correct_answer: "Discovery Services (ONS Database)",
    incorrect_answers: ["ID System", "EPC Middleware", "EPC Information Services (PML Server)"]
  },
  {
    question: "How do GPS devices communicate with the space segment?",
    correct_answer: "These devices are only receivers and do not send any data to the space segment",
    incorrect_answers: ["Using cellular network", "Using Wi-Fi services", "Using broadband services"]
  },
  {
    question: "A GPS device can know its location on the earth by receiving the data on _____?",
    correct_answer: "The position of at least 4 satellites",
    incorrect_answers: ["The position of at least 4 satellites and all the nearest ground stations", "The position of all the nearest ground stations", "None of the above"]
  },
  {
    question: "A smart building is using IoT to continuously monitor the internal ambience in various places using _____. These devices make a __________ and send the data to the _______. After analysis, if any deviation is found from the set parameters, an alert is sent to the ______.",
    correct_answer: "sensor node, sensor network, cloud, user device",
    incorrect_answers: ["sensor network, sensor node, cloud, user device", "cloud, sensor node, sensor network, user device", "user device, sensor node, sensor network, cloud"]
  },
  {
    question: "A cold storage monitoring IoT device is continuously sending the values of the environmental parameters such as Temperature, humidity, and carbon dioxide level to the supply chain stakeholders’ mobile devices. This process can be termed as supply chain?",
    correct_answer: "Tracking",
    incorrect_answers: ["Traceability", "Optimization", "Responsiveness"]
  },
  {
    question: "A cold storage monitoring IoT device is continuously sending the values of the environmental parameters such as Temperature, humidity, and carbon dioxide level to the supply chain. Based on these values the device uses a model to suggest the remaining shelf life of the produce to the customers. This is an example of ______ analytics.",
    correct_answer: "Predictive",
    incorrect_answers: ["Descriptive", "Prescriptive", "Imperative"]
  },
  {
    question: "Currency note is just a piece of printed paper. However, its value equates to the printed number on the paper. Who decides this value?",
    correct_answer: "The institution which issues this instrument in a country",
    incorrect_answers: ["International Monetary Fund", "The institutions which facilitate the payments in a country", "The legal system of a country"]
  },
  {
    question: "Using TLS for Credit Card Transaction is not advisable, because of the following?",
    correct_answer: "The payment information sent using TLS is available in merchant’s server and may be misused.",
    incorrect_answers: ["The credit card reading machine can be configured to transmit the sensitive information about the credit card.", "TLS is not a secure protocol. Hence, any kind of fraud may happen.", "The handshake phase of the TLS protocol cannot be executed from the credit card reading machine."]
  },
  {
    question: "A manufacturer sends 'advanced shipping notices' to a third-party distribution center. The ERP generated document from the manufacturer first goes through _________ to generate EDI document, then communicated over email to the distributor. At the distributor's end the document again goes through ________ process to convert it to a format compatible to be uploaded in its ERP.",
    correct_answer: "outbound translation, inbound translation",
    incorrect_answers: ["inbound translation, inbound translation", "outbound translation, outbound translation", "inbound translation, outbound translation"]
  },
  {
    question: "The software module that converts a data file to XML file with tags and values in a tree-like data structure is called _______?",
    correct_answer: "XML Wrapper",
    incorrect_answers: ["XML parser", "XML database", "XML server"]
  },
  {
    question: "Pravah is an API Platform for Indian Railways (IR) using which other businesses can integrate their software to access various data available from IR websites to enhance and transform their business. Which of the following interoperability technology best explains this technical connectivity?",
    correct_answer: "Web services",
    incorrect_answers: ["EDI", "Cloud service", "XML"]
  },
  {
    question: "I can access my Google doc file from anywhere in the world. Which type of cloud computing model is followed here?",
    correct_answer: "SaaS model",
    incorrect_answers: ["PaaS model", "IaaS model", "LaaS model"]
  },
  {
    question: "Cloud computing involves grouping and managing a set of hardware, software, or virtual machines, to be shared among multiple users or applications for efficient utilization and allocation based on demand. This property of cloud computing is called?",
    correct_answer: "Resource pooling",
    incorrect_answers: ["Rapid elasticity", "Ubiquitous", "Commodification"]
  },
  {
    question: "I am booking my LPG cylinder online using my Digital Payment App. This is possible because my KYC identity registered with LPG provider is also registered with the Digital Payment App. Because of this arrangement, I can never deny that I have booked the cylinder. Which of the following security category best describes this situation?",
    correct_answer: "Non-repudiation",
    incorrect_answers: ["Integrity", "Availability", "Confidentiality"]
  },
  {
    question: "A website is refusing connection when an HTTP request is made. It may be a case of _____?",
    correct_answer: "Denial of service attack",
    incorrect_answers: ["Sniffing", "IP Spoofing", "Open connection"]
  },
  {
    question: "Symmetric key cryptographic algorithms are faster than asymmetric key algorithms. However, the former has the following drawback?",
    correct_answer: "Key distribution in a secure manner between both the hosts",
    incorrect_answers: ["Lack of mathematical validity of the underlying algorithms", "Too much use of computing resources", "Unavailability of specialized hardware in both the hosts"]
  },
  {
    question: "The difference between a hacker and intruder is the former tries to ______, while the latter tries to ____:",
    correct_answer: "identify various security vulnerabilities, get unauthorized access to the system.",
    incorrect_answers: ["get unauthorized access to the system, identify various security vulnerabilities.", "block the access of legitimate users of a system, mask identity of unauthorized users", "get unauthorized access to the banks, get unauthorized access to defense establishments"]
  },
  {
    question: "During digital signature generation process, the sender’s credentials are signed using the ______ key of the _________?",
    correct_answer: "Private, Sender",
    incorrect_answers: ["Public, Sender", "Private, Receiver", "Public, Receiver"]
  },
  {
    question: "In the context of TLS protocol which of the following protocol uses symmetric key cryptographic algorithms?",
    correct_answer: "TLS Record Protocol",
    incorrect_answers: ["HTTP", "TLS Handshake protocol", "TCP"]
  },
  {
    question: "Using X.509 digital certificate which of the following security category cannot be addressed?",
    correct_answer: "Encryption",
    incorrect_answers: ["Integrity", "Authentication", "Non-repudiation"]
  },
  {
    question: "Average size of a file requested by the client during TLS transaction is 16, 385 bytes. Key Size used is 512 (bits), time for verification of server certificate, decryption of the master secret, key generation are 2.4 ms, 1.31 ms, 0.10 ms respectively. Decryption and message digest generation in mbps is 140 and 180 respectively. What is the service time at the client?",
    correct_answer: "Between 0.005 - 0.006",
    incorrect_answers: ["Between 0.05 - 0.06", "Between 0.5 - 0.6", "Between 5 - 6"]
  },
  {
    question: "During the execution of TLS protocol, use of cryptographic accelerator decreases computational time. Cryptographic accelerator is a?",
    correct_answer: "Hardware",
    incorrect_answers: ["Software", "Malware", "A combination of software and hardware"]
  },
  {
    question: "In a digital certificate the hash function is used to ensure?",
    correct_answer: "Data integrity",
    incorrect_answers: ["Authentication", "Non-repudiation", "Encryption"]
  },
  {
    question: "Good performance is one of the goals of any information service. Which of the following is a metric to measure it?",
    correct_answer: "Response Time",
    incorrect_answers: ["MTTF (meantime to failure)", "MTTR (meantime to repair)", "Bottleneck analysis"]
  },
  {
    question: "While accessing a website, I am getting a message 'You are being redirected, Please wait.' The website is using ______ for load balancing.",
    correct_answer: "Server based",
    incorrect_answers: ["DNS based", "Dispatcher based", "Router based"]
  },
  {
    question: "What is the effect of adding third party information services such as Security services, Ad services, Trust services, and Escrow services in a website?",
    correct_answer: "Increase in response time",
    incorrect_answers: ["Decrease in response time", "Decrease in customer footfall", "Increase in customer footfall"]
  },
  {
    question: "The organization responsible for Domain Name System management is _____?",
    correct_answer: "ICANN",
    incorrect_answers: ["IEEE", "ISO", "ARPANET"]
  },
  {
    question: "Which of the following is not the purpose of using Cookies by a website?",
    correct_answer: "Spying in the website user by compromising his/her privacy",
    incorrect_answers: ["Coping with stateless nature of HTTP", "Tracking a client to supporting applications like shopping cart", "All of the above"]
  },
  {
    question: "Internet is a packet switched network. When you request for a large webpage, it is broken into packets. These data packets may get routed through different paths, some may be lost and some may reach out of the sequence from one host to the other in a connectionless manner. Still, the connectivity is maintained using the following layer of TCP/IP protocol stack.",
    correct_answer: "TCP",
    incorrect_answers: ["IP", "Data Link", "HTTP"]
  },
  {
    question: "Which of the following hardware is a part of the physical layer in ISO-OSI model?",
    correct_answer: "Repeaters",
    incorrect_answers: ["Switches", "Bridges", "Routers"]
  },
  {
    question: "Which of the following software manages memory allocation to multiple processes?",
    correct_answer: "Operating system",
    incorrect_answers: ["Database management system", "Compiler", "Application server"]
  },
  {
    question: "In a spreadsheet software you can organize the data in the form of tables. Each table will have columns indicating attributes and rows indicating entities. However, in the secondary memory it is stored in physical memory blocks linked with each other. While the former is called the _____ view of the data, the latter is called ______ view.",
    correct_answer: "Logical, Physical",
    incorrect_answers: ["Physical, logical", "Diagrammatic, Collective", "Collective, Diagramatic"]
  },
  {
    question: "OLAP queries are used in _____?",
    correct_answer: "Data warehouses",
    incorrect_answers: ["Relational database system", "Distributed database system", "Transaction processing system"]
  },
  {
    question: "Common public can access the company related information from the following:",
    correct_answer: "Corporate website",
    incorrect_answers: ["Enterprise portal", "Both of the above", "None of the above"]
  },
  {
    question: "Which of the following is adopted as a potential e-procurement solution, as discussed in TATA Steel case?",
    correct_answer: "E-Commerce",
    incorrect_answers: ["E-market place based on industry consortium", "E-Bidding", "Stock information system for Vendor managed inventory"]
  },
  {
    question: "Which of the following is step in e-procurement step is rich in terms of analytics applications?",
    correct_answer: "Spend analysis",
    incorrect_answers: ["Supplier scorecarding", "Contract Management", "Sourcing"]
  },
  {
    question: "RFI in solicitation process stands for:",
    correct_answer: "Request for Information",
    incorrect_answers: ["Request for Illustration", "Request for Immigration", "Request for Innovation"]
  },
  {
    question: "Which of the following cannot be a part of RFx System used for contract negotiation?",
    correct_answer: "Supplier evaluation using a scorecard",
    incorrect_answers: ["Interface for bid submission", "Protocol for supplier bid evaluation", "Interface for winner declaration"]
  },
  {
    question: "Which of the following cannot be done through a contract management software?",
    correct_answer: "The contract commitments to be monitored can be automatically selected without involvement of the buyer and the supplier.",
    incorrect_answers: [
      "An alert notification can be sent when a contract is soon to expire.",
      "The buyer’s purchase volume commitments can be monitored with alert notifications sent if there is danger of buying under the minimum quantity within the designated time period.",
      "Notifications can be sent alerting the buyer and/or supplier of a supplier’s violation of a delivery commitment."
    ]
  },
  {
    question: "ABC company is trying to integrate its ERP system with e-catalogues provided by XYZ company. However, there are issues related to the required formats of the e-catalogue required by the ERP system. The software engineers of both ABC and XYZ are working towards resolving the issue. The risk involved in the process can be termed as_.",
    correct_answer: "External business risk",
    incorrect_answers: ["Internal business risk", "Process risk", "Technology risk"]
  },
  {
    question: "The purpose of Customer Relationship Management (CRM) is to provide the organization and all of its customer-facing employees with a single, complete view of every customer at every touchpoint and across all channels. Here, the 'touch point' and 'channel' means _______ and ______ respectively.",
    correct_answer: "Pre-planned mode of communication, Physical medium for communication",
    incorrect_answers: ["Physical medium for communication, Pre-planned mode of communication", "Contacting the customer for a meeting, Place of meeting", "Place of meeting, Contacting the customer for a meeting"]
  },
  {
    question: "A bank is trying to find the prospective customers who are likely to take car loan. It can do so by ______.",
    correct_answer: "Applying data mining and other analytics tools to customer data",
    incorrect_answers: ["Accessing customers’ e-mails and other online documents", "Using SQL queries on customer data", "Access to customer, inventory, and other corporate databases"]
  },
  {
    question: "ABC company has integrated Chat GPT in its website to answer customer queries. This is an example of:",
    correct_answer: "Operational CRM",
    incorrect_answers: ["Portal based CRM", "Analytical CRM", "Collaborative CRM"]
  },
  {
    question: "Which of the following stakeholder is inside the organizational information system boundary?",
    correct_answer: "Employee",
    incorrect_answers: ["Customer", "Supplier", "All of the above"]
  },
  {
    question: "When you order some items from an online store, the orders are first processed by the store’s local back office, then they are sent to respective manufacturers. The latter send the items to the store’s warehouse, wherein all the items coming from individual manufacturers are packaged together and sent to the customer along with the bill. This is an example of ______ business process.",
    correct_answer: "Inter-organizational",
    incorrect_answers: ["Functional", "Cross functional", "Intra-organizational"]
  },
  {
    question: "The difference between knowledge and data worker is:",
    correct_answer: "The former design products or services, the latter assist with scheduling and communications at all levels of the firm.",
    incorrect_answers: [
      "The former assist with scheduling and communications at all levels of the firm, the latter design products or services.",
      "The former is responsible for creating a knowledge management system, the latter is responsible for creating a database management system.",
      "The former assist in developing ERP, the latter is the user of ERP."
    ]
  },
  {
    question: "DMAIC (Define, Measure, Analyze, Improve and Control) Model is a data-driven improvement cycle used for improving, optimizing and stabilizing business processes and designs. 'Identifying the problem with data and fact' belongs to ______ step of DMAIC.",
    correct_answer: "Define",
    incorrect_answers: ["Measure", "Analyze", "Improve", "Control"]
  },
  {
    question: "The Election Commission of India publishes the list of candidates from each constituency. This is an example of:",
    correct_answer: "Data",
    incorrect_answers: ["Information", "Knowledge", "Wisdom"]
  },
  {
    question: "Your organization is using a web crawler to collect all the webpages that discuss about your organization and intend to analyze this to estimate the social sentiment about the organization. The collection of the webpages is an example of _____ data.",
    correct_answer: "Unstructured",
    incorrect_answers: ["Network", "Social", "Structured"]
  },
  {
    question: "A web-based ERP system provides an interface to the sales representatives to enter the sales lead data from around the world. This data is processed by an AI program to predict whether the lead can be approached further for conversion to a client. Based on this, each sales representative can generate a consolidated report to further approach the lead. While the AI-based module can be called _____, the consolidated report preparation is an ______.",
    correct_answer: "DSS, MIS",
    incorrect_answers: ["MIS, TPS", "DSS, TPS", "MIS, DSS"]
  },
  {
    question: "A car manufacturing company is deciding whether to continue with a very old model of petrol car or not. While the models built on market survey data show some customer segments are likely to prefer the brand, the recent advancements in hybrid technology and brainstorming with sales and marketing executives made the top management take the decision of dropping the brand. This is an example of __________ decision-making situation.",
    correct_answer: "Semi-structured",
    incorrect_answers: ["Structured", "Unstructured", "Collaborative"]
  },
  {
    question: "Which level of management is responsible for taking decisions based on both internal and external inputs?",
    correct_answer: "Top management",
    incorrect_answers: ["Middle management", "Operational management", "All of the above"]
  },
  {
    question: "Discovering the optimal path by covering all the delivery points while minimizing the travel time is an example of ______ decision support.",
    correct_answer: "Analytical",
    incorrect_answers: ["General", "Data driven", "Logical"]
  },
  {
    question: "ABC warehousing corporation is automating its business by purchasing a new forklift that is powered by AI and can locate the item in the warehouse by itself. While automated forklifts are costly, over the year they lead to cost saving, higher safety, increased productivity and can be integrated to Warehouse Management System. The decision to buy is supported by which objective of a company?",
    correct_answer: "Improving revenue",
    incorrect_answers: ["Delivering value to the customer", "Improving customer satisfaction", "All of the above"]
  },
  {
    question: "Delhivery is an Indian logistics and supply chain company. You have received a package containing some items you ordered from an online store through Delhivery. Operations carried by delivery for this purpose can be termed as a_________ activity.",
    correct_answer: "Business",
    incorrect_answers: ["Commercial", "Governance", "Philanthropic"]
  },
  {
    question: "For my start-up company, I pay Good and Services Tax (GST) online through a government portal. This can be termed as ______ type transaction.",
    correct_answer: "B2G",
    incorrect_answers: ["G2B", "C2G", "G2C"]
  },
  {
    question: "B&N Retailer has both online and offline store. The offline store is open from 8 AM to 8 PM. But customers can place orders through the online store 24×7 and get the delivery during the working hour of the store. Which of the following is a benefit of the online store?",
    correct_answer: "Better access to customer market",
    incorrect_answers: ["Better availability of service", "Cost reduction in information processing", "Lower operating expenses"]
  },
  {
    question: "The dot com boom occurred around the year 2000 and the bust happened after around 2 years down the line. This phenomena in terms of Gartner’s Hype Cycle can be compared to the:",
    correct_answer: "Peak of Inflated Expectations, Trough of Disillusionment",
    incorrect_answers: [
      "Innovation Trigger, Peak of Inflated Expectations, Trough of Disillusionment",
      "Slope of Enlightenment and Trough of Disillusionment",
      "Slope of Enlightenment, and Plateau of Productivity"
    ]
  },
  {
    question: "Who are the customers of a brokerage service like eBay? What kind of value is delivered to the customer? What is the source of revenue?",
    correct_answer: "Customers: Buyers & Sellers, Value: The transaction platform, Revenue: Transaction fee",
    incorrect_answers: [
      "Customers: Sellers, Value: Reputation of the service provider, Revenue: Product base price",
      "Customers: Buyers, Value: The product, Revenue: Transaction fee",
      "Customers: Buyers & Sellers, Value: Reputation of the service provider, Revenue: Product price"
    ]
  },
  {
    question: "YouTube is free. The models for major source for the platform are _____ for premium services and ____ for free services.",
    correct_answer: "Subscription, advertisement",
    incorrect_answers: ["Affiliation, brokerage", "Advertisement, subscription", "Brokerage, Affiliation"]
  },
  {
    question: "Advertising Networks like DoubleClick follow:",
    correct_answer: "Infomediary Model",
    incorrect_answers: ["Community Model", "Utility Model", "Affiliate Model"]
  },
  {
    question: "“ITC’s eChoupal” provides value to customers by _____.",
    correct_answer: "Eliminating intermediaries",
    incorrect_answers: ["Introducing farm mechanization", "Establishing kiosks", "Providing free food"]
  },
  {
    question: "Which of the following is likely to increase by the adoption of e-procurement?",
    correct_answer: "Savings in sourcing",
    incorrect_answers: ["Order lead time", "Inventory", "All of the above"]
  },
  {
    question: "A tour booking website is using the past customer reviews to assist the potential customer to choose the right package that best suits to their need. This effort can be attributed to _____ step of AIDA model of marketing communication.",
    correct_answer: "Desire",
    incorrect_answers: ["Attention", "Interest", "Action"]
  },
  {
    question: "I frequently purchase from XYZ online store. I can be termed as a ______ in e-marketing terminology.",
    correct_answer: "online key customer",
    incorrect_answers: ["online consumer", "online prosumer", "online buyer"]
  },
  {
    question: "There are two basic mode of Online Promotions Push and Pull. While Pull refers to the promotion by the _____, Push refers to the initiative by the _____",
    correct_answer: "Provider, user",
    incorrect_answers: ["User, Provider", "Buyer, Seller", "Seller, Buyer"]
  },
  {
    question: "Which of the following step in Supply Chain Operations Reference (SCOR) Model requires finding opportunities and forecasting?",
    correct_answer: "Plan",
    incorrect_answers: ["Source", "Make", "Deliver"]
  },
  {
    question: "Bullwhip effect refers to the increase in ______ variability as we travel up in the supply chain.",
    correct_answer: "Order quantity",
    incorrect_answers: ["Production cost", "Market price", "Supply quantity"]
  },
  {
    question: "Interoperability concerns with ______ during e-supply chain implementation.",
    correct_answer: "Technical",
    incorrect_answers: ["Strategic", "Managerial", "Resource sharing"]
  },
  {
    question: "Identifying, composing and operating together various applications that are designed and implemented independently during e-supply chain implementation can be termed as.",
    correct_answer: "Interoperability of service",
    incorrect_answers: ["Interoperability of data", "Interoperability of semantics", "None of the above"]
  },
  {
    question: "The task of directing the crane and providing feedback and diagnostics if the crane cannot fulfill the operation is performed by ________ under warehouse management system.",
    correct_answer: "Equipment Control systems",
    incorrect_answers: ["Pick-to-light", "Bar code", "RFID"]
  },
  {
    question: "Shipping Consolidation and Load/Trip Planning are the activities performed using.",
    correct_answer: "Transport Management System",
    incorrect_answers: ["E-procurement system", "Logistics management system", "Warehouse Management System"]
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
    const quizName = "E-BUSINESS"; // Get quiz name dynamically from input
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
