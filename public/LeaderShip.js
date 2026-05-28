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
        question: "Which of the following defines leadership as 'the art of influencing others to their maximum performance'?",
        correct_answer: "Cohen (1990)",
        incorrect_answers: [ "Northouse (2004)", "Jacobs & Jaques (1990)", "Joanne Ciulla (1998)" ]
      },
      {
        question: "Which team type consists of members from the same department but lacks the authority to implement decisions independently?",
        correct_answer: "Problem-solving teams",
        incorrect_answers: [ "Cross-functional teams", "Self-managed teams", "Virtual teams" ]
      },
      {
        question: "What is the critical task for leaders during their first day on the job?",
        correct_answer: "Meet their boss and team",
        incorrect_answers: [ "Meet external stakeholders", "Lay down long-term goals", "Redesign organizational strategy" ]
      },
      {
        question: "Which leadership style described by Goleman focuses on emotional bonding?",
        correct_answer: "Affiliative",
        incorrect_answers: [ "Commanding", "Visionary", "Coaching" ]
      },
      {
        question: "Why is leadership considered both a science and an art?",
        correct_answer: "It combines formal education with practical skills",
        incorrect_answers: [ "It relies exclusively on scientific methods", "It avoids artistic principles entirely", "It depends solely on personal traits" ]
      },
      {
        question: "What is the purpose of benchmarking during the first 90 days as a leader?",
        correct_answer: "To gather external perspectives",
        incorrect_answers: [ "To replace team meetings", "To evaluate past leadership failures", "To finalize internal hiring decisions" ]
      },
      {
        question: "Which type of team operates across organizational boundaries?",
        correct_answer: "Cross-functional teams",
        incorrect_answers: [ "Self-managed teams", "Problem-solving teams", "Virtual teams" ]
      },
      {
        question: "According to the myths about leadership, A charismatic personality is must to become a leader.",
        correct_answer: "False",
        incorrect_answers: [ "True" ]
      },
      {
        question: "What is a common challenge new leaders face in their first 90 days?",
        correct_answer: "Balancing relational and task-oriented goals",
        incorrect_answers: [ "Understanding organizational finances", "Over-delegating responsibilities", "Avoiding long-term planning" ]
      },
      {
        question: "Which element is central to the 'interactional framework' for analyzing leadership?",
        correct_answer: "Leader, followers, and situation",
        incorrect_answers: [ "Organizational culture", "Individual capabilities", "Leadership charisma" ]
      },
      {
        question: "What are the three components of the Action-Observation-Reflection (AOR) model?",
        correct_answer: "Action, Observation, and Reflection",
        incorrect_answers: [ "Action, Analysis, and Reflection", "Observation, Decision, and Feedback", "Planning, Observation, and Evaluation" ]
      },
      {
        question: "Leader-Member Exchange (LMX) theory distinguishes between which two groups?",
        correct_answer: "In-group and out-group",
        incorrect_answers: [ "Core-group and peripheral group", "Leader-focused and team-focused", "Experienced and novice groups" ]
      },
      {
        question: "Which decision-making process involves the leader solving the problem independently?",
        correct_answer: "Autocratic (A1)",
        incorrect_answers: [ "Consultative (C1)", "Group (G2)", "Collaborative (C2)" ]
      },
      {
        question: "__________ leadership style is recommended for followers with low ability and low willingness in the Situational Leadership model?",
        correct_answer: "Telling",
        incorrect_answers: [ "Delegating", "Participating", "Selling" ]
      },
      {
        question: "What does Fiedler's Contingency Model use to determine leadership effectiveness?",
        correct_answer: "Leadership style and situational favorability",
        incorrect_answers: [ "Leadership style and task complexity", "Personality traits and maturity levels", "Emotional intelligence and readiness" ]
      },
      {
        question: "Which leadership behavior in the Path-Goal Theory involves providing emotional support and showing concern for followers?",
        correct_answer: "Supportive",
        incorrect_answers: [ "Directive", "Participative", "Achievement-oriented" ]
      },
      {
        question: "What is the primary focus of high-quality LMX relationships?",
        correct_answer: "Mutual trust and respect",
        incorrect_answers: [ "Hierarchical superiority", "Equal treatment for all team members", "Increased contractual obligations" ]
      },
      {
        question: "What is the least-used leadership style according to SLII research findings?",
        correct_answer: "High direction, low support",
        incorrect_answers: [ "High support, low direction", "High direction, high support", "Low direction, high support" ]
      },
      {
        question: "Which style of leadership in the Vroom-Yetton model involves the leader accepting group consensus?",
        correct_answer: "G2",
        incorrect_answers: [ "A1", "C2", "C1" ]
      },
      {
        question: "According to the AOR model, what is the most neglected phase in leadership development?",
        correct_answer: "Reflection",
        incorrect_answers: [ "Action", "Observation", "Decision-making" ]
      },
      {
        question: "What is the primary characteristic of charismatic leaders according to Weber?",
        correct_answer: "Superhuman qualities or powers",
        incorrect_answers: [ "Rational decision-making", "Systematic organization of leadership styles", "Democratic leadership behavior" ]
      },
      {
        question: "Which leadership type focuses on exchanges to meet individual needs?",
        correct_answer: "Transactional leadership",
        incorrect_answers: [ "Transformational leadership", "Charismatic leadership", "Situational leadership" ]
      },
      {
        question: "What is one key focus of transformational leadership?",
        correct_answer: "Articulating a compelling vision linked to followers' values",
        incorrect_answers: [ "Encouraging high dependency on leaders", "Maintaining the status quo", "Exchanging rewards for loyalty" ]
      },
      {
        question: "Belief in their ability to influence outcomes defines a leader with 'internal locus of control'.",
        correct_answer: "True",
        incorrect_answers: [ "False" ]
      },
      {
        question: "What does the term 'crucible' refer to in leadership development?",
        correct_answer: "Transformational life experiences",
        incorrect_answers: [ "Training for technical leadership skills", "Mandatory management workshops", "Peer-reviewed evaluations" ]
      },
      {
        question: "Which component is NOT a part of the Infosys 9-Pillar Leadership Model?",
        correct_answer: "Systematic resource allocation",
        incorrect_answers: [ "Community Empathy", "Feedback-intensive programs", "Action learning" ]
      },
      {
        question: "According to the Great Man Theory, what primarily drives leadership success?",
        correct_answer: "Certain individuals are born with leadership traits",
        incorrect_answers: [ "Leadership traits are developed through experience", "Collaborative team building enhances leadership", "Situational factors influence leadership emergence" ]
      },
      {
        question: "_____________ interpersonal skill is vital for understanding others.",
        correct_answer: "Emotional intelligence",
        incorrect_answers: [ "Awareness", "Problem-solving ability", "Resilience" ]
      },
      {
        question: "What is a central trait in Allport’s Trait Theory?",
        correct_answer: "Dominant traits shaping an individual’s entire personality",
        incorrect_answers: [ "Traits influencing behavior in specific situations", "General characteristics that form the foundation of personality", "Observable traits displayed in daily interactions" ]
      },
      {
        question: "Which Big Five personality trait measures an individual’s emotional stability?",
        correct_answer: "Neuroticism",
        incorrect_answers: [ "Agreeableness", "Openness", "Conscientiousness" ]
      },
      {
        question: "What is intelligence primarily defined as?",
        correct_answer: "All-around effectiveness in activities directed by thought",
        incorrect_answers: [ "The ability to manipulate objects", "The capacity to work collaboratively", "A measure of one's education level" ]
      },
      {
        question: "Sternberg's Triarchic Theory includes which of the following types of intelligence?",
        correct_answer: "Analytical, creative, and practical",
        incorrect_answers: [ "Musical and linguistic", "Fluid and crystallized", "Emotional and logical" ]
      },
      {
        question: "What does divergent thinking primarily involve?",
        correct_answer: "Generating multiple creative ideas",
        incorrect_answers: [ "Identifying one correct answer", "Memorizing data", "Simplifying complex problems" ]
      },
      {
        question: "According to Cognitive Resource Theory, does Emotional intelligence affect decision-making under stress?",
        correct_answer: "True",
        incorrect_answers: [ "False" ]
      },
      {
        question: "Which model of emotional intelligence focuses on broader leadership qualities?",
        correct_answer: "Mixed Model",
        incorrect_answers: [ "Ability Model", "Behavioral Model", "Trait Model" ]
      },
      {
        question: "What can emotional intelligence best be described as?",
        correct_answer: "Recognition and management of emotions",
        incorrect_answers: [ "Intelligence about logic", "Ability to solve analytical problems", "Understanding cultural nuances" ]
      },
      {
        question: "What is a core characteristic of emotionally intelligent leaders?",
        correct_answer: "Mood management",
        incorrect_answers: [ "High analytical skills", "Focus on coercion", "Avoidance of conflicts" ]
      },
      {
        question: "_________ type of power is most associated with personal relationships?",
        correct_answer: "Referent",
        incorrect_answers: [ "Coercive", "Legitimate", "Reward" ]
      },
      {
        question: "Legitimate power stems from Organizational authority.",
        correct_answer: "True",
        incorrect_answers: [ "False" ]
      },
      {
        question: "Dependency is the key to power because?",
        correct_answer: "The greater the dependency, the greater the power",
        incorrect_answers: [ "It simplifies organizational hierarchies", "It increases the scarcity of resources", "It aligns with financial resources" ]
      },
      {
        question: "What are the four key components of authentic leadership?",
        correct_answer: "Transparency, Self-awareness, Balanced processing, Internalized moral perspective",
        incorrect_answers: [ "Honesty, Integrity, Innovation, Compassion", "Empathy, Vision, Flexibility, Resilience", "Leadership, Strategy, Communication, Delegation" ]
      },
      {
        question: "Which of the following is NOT a characteristic of servant leadership?",
        correct_answer: "Self-interest",
        incorrect_answers: [ "Empathy", "Persuasion", "Commitment" ]
      },
      {
        question: "What is the primary purpose of the Leadership Pipeline model?",
        correct_answer: "To map leader development at all organizational levels",
        incorrect_answers: [ "To focus only on CEO development", "To reduce training costs", "To identify leadership errors" ]
      },
      {
        question: "What are the two core components of ethical leadership, as defined by Avolio and his associates?",
        correct_answer: "Moral person and moral manager",
        incorrect_answers: [ "Transparency and accountability", "Honesty and empathy", "Vision and influence" ]
      },
      {
        question: "Initiating structure leadership style, identified in the Ohio State studies, is task-oriented.",
        correct_answer: "True",
        incorrect_answers: [ "False" ]
      },
      {
        question: "In the Leadership Grid, which management style balances concern for people and production?",
        correct_answer: "Middle-of-the-Road Management",
        incorrect_answers: [ "Impoverished Management", "Team Management", "Authority-Compliance Management" ]
      },
      {
        question: "Is unrestricted freedom of decision-making a characteristic of ethical leadership?",
        correct_answer: "False",
        incorrect_answers: [ "True" ]
      },
      {
        question: "What does the 'balanced processing' component of authentic leadership entail?",
        correct_answer: "Objectively analyzing all relevant data before making a decision",
        incorrect_answers: [ "Focusing equally on personal and organizational goals", "Balancing work-life priorities effectively", "Processing feedback in a balanced manner" ]
      },
      {
        question: "__________ is a major mistake in developing a leadership pipeline?",
        correct_answer: "Promoting people too quickly",
        incorrect_answers: [ "Focusing on functional expertise", "Encouraging feedback", "Creating a vision for leaders" ]
      },
      {
        question: "The Leadership Pipeline passage from managing managers to managing functions requires:",
        correct_answer: "Broad, long-term strategic thinking",
        incorrect_answers: [ "Focus on task-oriented goals", "Narrow functional expertise", "Avoidance of delegation" ]
      },
      {
        question: "Which element is NOT part of the Toxic Triangle model in destructive leadership?",
        correct_answer: "Collaborative Teams",
        incorrect_answers: [ "Destructive Leadership", "Susceptible Followers", "Conducive Environment" ]
      },
      {
        question: "What is a primary characteristic of chronic managerial incompetence?",
        correct_answer: "Consistent failure to adapt to situational challenges",
        incorrect_answers: [ "Inability to build teams temporarily due to tough situations", "Short-term issues with follower engagement", "Lack of technical knowledge" ]
      },
      {
        question: "____________ negotiation style reflects a 'Win-Win' approach?",
        correct_answer: "Collaboration",
        incorrect_answers: [ "Competition", "Compromise", "Avoidance" ]
      },
      {
        question: "Is Risk Assessment the first stage in the Three-Stage Crisis Management Plan",
        correct_answer: "True",
        incorrect_answers: [ "False" ]
      },
      {
        question: "Which of the following is a trait of adaptive leadership?",
        correct_answer: "Encouraging shared responsibility",
        incorrect_answers: [ "Rigid decision-making", "Focusing on short-term gains", "Avoiding accountability" ]
      },
      {
        question: "What does the term 'task autonomy' refer to?",
        correct_answer: "The freedom to decide how to complete a task",
        incorrect_answers: [ "The degree of collaboration needed in tasks", "Feedback given after task completion", "The complexity of the task structure" ]
      },
      {
        question: "Is the Narcissism personality trait most associated with destructive leaders ignoring inputs from others?",
        correct_answer: "True",
        incorrect_answers: [ "False" ]
      },
      {
        question: "What is the primary focus of episodic managerial incompetence?",
        correct_answer: "Temporary disruption due to tough events",
        incorrect_answers: [ "Chronic inability to perform tasks", "Lack of organizational fit", "Failure to build teams permanently" ]
      },
      {
        question: "What is the primary aim of the Toxic to Transformative Triangle model?",
        correct_answer: "To transform toxic leadership into constructive leadership",
        incorrect_answers: [ "To enhance destructive leadership skills", "To provide tools for passive leadership", "To reduce organizational complexity" ]
      },
      {
        question: "Which of the following describes the 'Avoidance' negotiation style?",
        correct_answer: "Lose-Lose",
        incorrect_answers: [ "Win-Lose", "Win-Win", "Compromise" ]
      },
      {
        question: "What are the seven primary characteristics that define organizational culture?",
        correct_answer: "Innovation, risk-taking, attention to detail, outcome orientation, people orientation, team orientation, stability",
        incorrect_answers: [
          "Leadership styles, trust, collaboration, team orientation, creativity, adaptability, ethics",
          "Diversity, hierarchy, market orientation, team spirit, creativity, empathy, ethics",
          "Problem-solving, innovation, motivation, leadership agility, communication, collaboration, trust"
        ]
      },
      {
        question: "What is the primary aim of a leadership culture, as defined by Robin Sharma?",
        correct_answer: "Encouraging everyone to think like owners or CEOs",
        incorrect_answers: [
          "Promoting hierarchy in decision-making",
          "Minimizing risk in decision-making",
          "Fostering strict adherence to established procedures"
        ]
      },
      {
        question: "____________ is NOT one of Schein’s four key organizational culture factors.",
        correct_answer: "Behavioral modeling",
        incorrect_answers: [
          "Myths and stories",
          "Symbols and artifacts",
          "Language"
        ]
      },
      {
        question: "Which leadership approach is essential for creating a positive organizational culture?",
        correct_answer: "Rewarding employees more than punishing them",
        incorrect_answers: [
          "Delegation of tasks to subordinates",
          "Adopting a laissez-faire leadership style",
          "Focusing solely on profitability"
        ]
      },
      {
        question: "What is a key characteristic of market-oriented cultures?",
        correct_answer: "Focus on external competitiveness and results",
        incorrect_answers: [
          "Emphasis on teamwork and loyalty",
          "Stability and internal efficiency",
          "Adaptability and risk-taking"
        ]
      },
      {
        question: "According to the GLOBE study, which leadership style focuses on building trust and compassion?",
        correct_answer: "Humane-oriented leadership",
        incorrect_answers: [
          "Charismatic leadership",
          "Participative leadership",
          "Autonomous leadership"
        ]
      },
      {
        question: "Which of the following is considered a universal leadership attribute in the GLOBE study?",
        correct_answer: "Trustworthiness",
        incorrect_answers: [
          "Ruthlessness",
          "Egocentrism",
          "Dictatorial behavior"
        ]
      },
      {
        question: "What is the essence of a \"glocal\" mindset in global leadership?",
        correct_answer: "Balancing global integration with local responsiveness",
        incorrect_answers: [
          "Focusing solely on global strategies",
          "Ignoring local cultural nuances",
          "Avoiding risk-taking in complex environments"
        ]
      },
      {
        question: "What does the Pygmalion effect emphasize in goal setting?",
        correct_answer: "High expectations can lead to higher performance",
        incorrect_answers: [
          "Low expectations prevent goal achievement",
          "High goals demotivate employees",
          "Leadership should remain neutral to follower expectations"
        ]
      },
      {
        question: "Empowerment motivational theory emphasizes autonomy and self-determination.",
        correct_answer: "True",
        incorrect_answers: [
          "False"
        ]
      },
      {
        question: "Which of the following is NOT a principle of group dynamics as discussed by Dorwin Carl Wright?",
        correct_answer: "Group members with diverse opinions should be excluded to avoid conflict.",
        incorrect_answers: [
          "The more attractive a group is to its members, the greater its influence.",
          "Information relating to change must be shared by all relevant people in the group.",
          "Strong pressure for change can be created by fostering a shared perception of the need for change."
        ]
      },
      {
        question: "Forming stage of Tuckman's stages of group development is characterized by a strong sense of group identity and camaraderie.",
        correct_answer: "False",
        incorrect_answers: [
          "True"
        ]
      },
      {
        question: "According to Social Identity Theory, why do people have emotional reactions to the failure or success of their group?",
        correct_answer: "Their self-esteem is tied to the group's performance.",
        incorrect_answers: [
          "They fear punishment for group failure.",
          "They are naturally competitive.",
          "They are empathetic to other group members."
        ]
      },
      {
        question: "Which group dynamics theory suggests that individuals are drawn to groups based on shared attitudes towards common objects and goals?",
        correct_answer: "Balance Theory",
        incorrect_answers: [
          "Propinquity Theory",
          "Exchange Theory",
          "Homan's Theory"
        ]
      },
      {
        question: "Which of the following is NOT a class of group norms typically found in organizations?",
        correct_answer: "Leadership norms",
        incorrect_answers: [
          "Performance norms",
          "Appearance norms",
          "Allocation of resources norms"
        ]
      },
      {
        question: "What is the term for the tendency of individuals to put in less effort when working in a group compared to working alone?",
        correct_answer: "Social loafing",
        incorrect_answers: [
          "Groupthink",
          "Group-shift",
          "Deviant workplace behavior"
        ]
      },
      {
        question: "Which of the following strategies is recommended for effective group decision-making?",
        correct_answer: "Appoint a strategic dissenter.",
        incorrect_answers: [
          "Strive for homogeneity in group composition.",
          "Discourage independent opinion collection.",
          "Rely heavily on experts."
        ]
      },
      {
        question: "The case study about the housing bubble and collapse illustrates which group dynamic?",
        correct_answer: "Herd behavior",
        incorrect_answers: [
          "Groupthink",
          "Role behavior",
          "Status hierarchy"
        ]
      },
      {
        question: "What is the definition of teamwork?",
        correct_answer: "The combined efforts of team members working cohesively towards a common goal.",
        incorrect_answers: [
          "The sum of individual efforts by team members.",
          "The individual performances of team members working independently.",
          "The competition among team members to achieve personal goals."
        ]
      },
      {
        question: "Which of the following is NOT a primary benefit of implementing work teams?",
        correct_answer: "Increased individual recognition",
        incorrect_answers: [
          "Improved employee motivation",
          "Positive synergy",
          "Improved turnover"
        ]
      },
      {
        question: "Which of the following is NOT a characteristic of Team Effectiveness as suggested by Larson & LaFasto (1989)?",
        correct_answer: "Shared Leadership",
        incorrect_answers: [
          "Collaborative Climate",
          "Competent Team Members",
          "Standards of Excellence"
        ]
      },
      {
        question: "Which of the following is NOT a symptom of ineffective teams?",
        correct_answer: "High level of innovation",
        incorrect_answers: [
          "Confusion about assignments",
          "Loss of production",
          "Ineffective meetings"
        ]
      },
      {
        question: "Which of the following is NOT a leadership action that can improve environmental interface with the team?",
        correct_answer: "Collaborating (including, involving)",
        incorrect_answers: [
          "Buffering team members from environmental distractions",
          "Sharing relevant environmental information with the team",
          "Negotiating upward to secure necessary resources for the team"
        ]
      },
      {
        question: "What is the primary focus of the \"Team-Centered Decision-Making Model\"?",
        correct_answer: "Team members are empowered to make decisions.",
        incorrect_answers: [
          "The leader makes all final decisions.",
          "Decisions are made based on a strict hierarchy.",
          "The model emphasizes individual contributions over team consensus."
        ]
      },
      {
        question: "Which of the following is NOT a key characteristic of virtual teams?",
        correct_answer: "Always focused on short-term projects",
        incorrect_answers: [
          "Reliance on electronic communication",
          "Geographical dispersion of team members",
          "Can have members working at different times"
        ]
      },
      {
        question: "What is the main difference between \"Process Gain\" and \"Process Loss\" in team dynamics?",
        correct_answer: "Process Gain refers to exceeding expected team output, while Process Loss refers to underperforming compared to individual capabilities.",
        incorrect_answers: [
          "Process Gain focuses on individual performance, while Process Loss focuses on team performance.",
          "Process Gain is a measure of efficiency, while Process Loss is a measure of effectiveness.",
          "Process Gain highlights the positive aspects of team conflict, while Process Loss focuses on the negative aspects."
        ]
      },
      {
        question: "According to Hackman and Wageman, when is \"Motivational Coaching\" most effective in a team's life cycle?",
        correct_answer: "At the midpoint of a performance period",
        incorrect_answers: [
          "At the beginning of a performance period",
          "When performance activities have been completed",
          "Throughout the entire performance period"
        ]
      },
      {
        question: "What is \"Deterrence-Based Trust\" primarily based on in the context of virtual teams?",
        correct_answer: "Consistent behavior and the threat of punishment",
        incorrect_answers: [
          "Shared values and understanding",
          "Long-term relationships and shared experiences",
          "Open communication and mutual respect"
        ]
      },
      {
        question: "Which team decision-making technique involves gathering expert opinions from geographically dispersed individuals without face-to-face interaction?",
        correct_answer: "Delphi Technique",
        incorrect_answers: [
          "Brainstorming",
          "Nominal Group Technique",
          "Round Robin Technique"
        ]
      },
      {
        question: "Which of the following is NOT a benefit of offsite training for team development?",
        correct_answer: "Guaranteed long-term behavioral change",
        incorrect_answers: [
          "Improved communication",
          "Enhanced self-confidence",
          "Increased cooperation"
        ]
      },
      {
        question: "Which stage of the Multicultural Organization Development Model focuses on actively recruiting and promoting historically excluded groups?",
        correct_answer: "The Affirming Organization",
        incorrect_answers: [
          "The Exclusionary Organization",
          "The Club",
          "The Redefining Organization"
        ]
      },
      {
        question: "What is the primary focus of the \"Problem-Solving\" component in team building?",
        correct_answer: "Identifying major team problems",
        incorrect_answers: [
          "Strengthening interpersonal relations",
          "Establishing team norms",
          "Facilitating creative thinking"
        ]
      },
      {
        question: "According to Kolb’s Experiential Learning Cycle, what comes after Reflective Observation?",
        correct_answer: "Abstract Conceptualization",
        incorrect_answers: [
          "Active Experimentation",
          "Concrete Experience",
          "Direct Application"
        ]
      },
      {
        question: "_____________ learning style in Kolb's theory emphasizes reasoning and systematic assessment.",
        correct_answer: "Assimilating",
        incorrect_answers: [
          "Diverging",
          "Converging",
          "Accommodating"
        ]
      },
      {
        question: "What is a key principle of Action Learning?",
        correct_answer: "It centers on solving real-world problems.",
        incorrect_answers: [
          "It is an involuntary process.",
          "It focuses exclusively on technical problems.",
          "It avoids team collaboration."
        ]
      },
      {
        question: "Setting goals is the first step in conducting a GAPS analysis.",
        correct_answer: "True",
        incorrect_answers: [
          "False"
        ]
      },
      {
        question: "Which behavior is foundational in building a cohesive team?",
        correct_answer: "Trust building",
        incorrect_answers: [
          "Conflict avoidance",
          "Seeking consensus",
          "Establishing strict rules"
        ]
      },
      {
        question: "What is the advantage of using experiential learning in corporate training?",
        correct_answer: "It bridges theory and practice.",
        incorrect_answers: [
          "It minimizes engagement levels.",
          "It focuses on rote learning.",
          "It reduces the need for real-world application."
        ]
      },
      {
        question: "What does the \"Law of the Chain\" in team building imply?",
        correct_answer: "The strength of the team depends on its weakest link.",
        incorrect_answers: [
          "Every team is independent of individual performance.",
          "Teams function best without hierarchies.",
          "Leadership is the sole determinant of success."
        ]
      },
      {
        question: "Schedule meetings identifying the strengths of team members in the team-building process.",
        correct_answer: "True",
        incorrect_answers: [
          "False"
        ]
      },
      {
        question: "What is the primary focus of the GROW coaching model?",
        correct_answer: "Setting clear, inspiring goals",
        incorrect_answers: [
          "Establishing relationships",
          "Reviewing team performance",
          "Enhancing team autonomy"
        ]
      },
      {
        question: "Which characteristic is commonly associated with women leaders?",
        correct_answer: "Transformational leadership style",
        incorrect_answers: [
          "Command-and-control leadership style",
          "Task-oriented but independent decision-making",
          "Avoidance of collaboration"
        ]
      },
      {
        question: "According to Herzberg's Two-Factor Theory, Recognition is a motivator.",
        correct_answer: "True",
        incorrect_answers: [
          "False"
        ]
      },
      {
        question: "What is the core principle of supportive communication?",
        correct_answer: "Focusing on problems, not personal traits",
        incorrect_answers: [
          "Prioritizing global over specific messages",
          "Avoiding congruence in verbal and non-verbal cues",
          "Ignoring emotional responses during feedback"
        ]
      },
      {
        question: "_______________ is an essential trait followers desire in their leaders?",
        correct_answer: "Dependability",
        incorrect_answers: [
          "Authoritarian behavior",
          "Avoidance of collaboration",
          "Hesitation in decision-making"
        ]
      },
      {
        question: "Which type of mentoring involves senior professionals being mentored by younger employees?",
        correct_answer: "Reverse mentoring",
        incorrect_answers: [
          "Speed mentoring",
          "Peer mentoring",
          "Group mentoring"
        ]
      },
      {
        question: "Which factor contributes significantly to women's leadership challenges?",
        correct_answer: "Persistent societal stereotypes",
        incorrect_answers: [
          "Lack of educational opportunities",
          "Abundance of flexible work environments",
          "Declining opportunities for mentorship"
        ]
      },
      {
        question: "What does Graicuna’s Theory on the Span of Management primarily analyze?",
        correct_answer: "Relationships between supervisors and subordinates",
        incorrect_answers: [
          "Employee productivity",
          "Hierarchical leadership",
          "Team morale during management transitions"
        ]
      },
      {
        question: "What is a core component of effective communication?",
        correct_answer: "High probability of intended message understanding",
        incorrect_answers: [
          "Lack of clarity in delivery",
          "Ignoring feedback",
          "Avoiding symbols and signs"
        ]
      },
      {
        question: "Rigid work structures enhance followers' job satisfaction.",
        correct_answer: "False",
        incorrect_answers: [
          "True"
        ]
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
    const quizName = "LeaderShip"; // Get quiz name dynamically from input
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
