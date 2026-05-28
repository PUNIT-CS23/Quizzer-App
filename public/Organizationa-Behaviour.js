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
        question: "What does 'individual differences' in organizational behavior refer to?",
        correct_answer: "Differences in behavior and traits among individuals",
        incorrect_answers: [
          "Similarities among individuals in an organization",
          "Differences in age within a group",
          "Differences in physical abilities among individuals"
        ]
      },
      {
        question: "What does evidence-based management rely on?",
        correct_answer: "Scientific evidence and data",
        incorrect_answers: [
          "Personal opinions",
          "Randomized experiments",
          "Intuition"
        ]
      },
      {
        question: "Who is known for the theory of bureaucracy in organizational studies?",
        correct_answer: "Max Weber",
        incorrect_answers: [
          "Peter Drucker",
          "Chester Bernard",
          "Fred Luthans"
        ]
      },
      {
        question: "According to Chester Bernard, what is an organization?",
        correct_answer: "A system of consciously coordinated activities",
        incorrect_answers: [
          "A system of rules and protocols",
          "A place for people to socialize",
          "A strict hierarchy of roles"
        ]
      },
      {
        question: "What is Peter Drucker's view of an organization?",
        correct_answer: "A system for turning resources into results",
        incorrect_answers: [
          "A group of friends",
          "An informal gathering of people",
          "A government authority"
        ]
      },
      {
        question: "Theory Y assumes that employees:",
        correct_answer: "Are self-motivated and capable of self-direction",
        incorrect_answers: [
          "Need external rewards to work",
          "Are inherently lazy",
          "Need strict supervision"
        ]
      },
      {
        question: "Chris Argyris is known for introducing:",
        correct_answer: "Double-loop learning",
        incorrect_answers: [
          "Bureaucracy",
          "Theory of Personality and Environment",
          "Hierarchy of needs"
        ]
      },
      {
        question: "What is organizational culture primarily concerned with?",
        correct_answer: "Shared values and norms within an organization",
        incorrect_answers: [
          "Market dynamics",
          "Individual personalities",
          "Formal job roles"
        ]
      },
      {
        question: "Which of the following is an example of intrinsic motivation?",
        correct_answer: "Enjoyment of job tasks",
        incorrect_answers: [
          "Promotion incentives",
          "Salary increase",
          "Recognition awards"
        ]
      },
      {
        question: "An example of extrinsic motivation is:",
        correct_answer: "Receiving a bonus",
        incorrect_answers: [
          "Personal interest in a task",
          "A feeling of accomplishment",
          "Enjoying the work itself"
        ]
      },
      {
        question: "Which concept is described as \"celebrating neurological differences such as autism and ADHD\"?",
        correct_answer: "Neurodiversity",
        incorrect_answers: [
          "Surface-level diversity",
          "Deep-level diversity",
          "Functional adaptability",
          "psychological alignment"
        ]
      },
      {
        question: "What is a common disadvantage of diversity?",
        correct_answer: "Communication barriers",
        incorrect_answers: [
          "Better decision-making",
          "Increased creativity",
          "Higher employee retention",
          "Enhanced learning opportunities"
        ]
      },
      {
        question: "What role does empathy play in managing diversity?",
        correct_answer: "Putting oneself in another's place to understand their perspective",
        incorrect_answers: [
          "Encouraging stereotypes",
          "Ignoring individual struggles",
          "Avoiding organizational diversity",
          "Limiting employees' contributions"
        ]
      },
      {
        question: "How is neurodiversity advantageous for organizations?",
        correct_answer: "Improves attention to detail and problem-solving",
        incorrect_answers: [
          "Reduces legal compliance",
          "Eliminates the need for inclusion",
          "Simplifies decision-making",
          "Encourages homogeneity"
        ]
      },
      {
        question: "What does managing similarities in a workforce involve?",
        correct_answer: "Leveraging shared attributes for organizational goals",
        incorrect_answers: [
          "Ignoring common skills",
          "Eliminating uniformity",
          "Encouraging conflict among similar individuals",
          "Avoiding teamwork"
        ]
      },
      {
        question: "Which of these tools is useful for understanding diversity trends in organizations?",
        correct_answer: "Data science and machine learning",
        incorrect_answers: [
          "Guesswork",
          "Intuition-based management",
          "Outdated organizational structures",
          "None of the above"
        ]
      },
      {
        question: "Which of these is NOT a key trait of an inclusive leader?",
        correct_answer: "Rigid adherence to cultural norms",
        incorrect_answers: [
          "Humility",
          "Awareness of bias",
          "Cultural intelligence",
          "Curiosity about others"
        ]
      },
      {
        question: "What is one risk associated with a lack of perceived inclusion?",
        correct_answer: "Decreased sense of belonging and commitment",
        incorrect_answers: [
          "Enhanced employee retention",
          "Simplified communication",
          "Improved team dynamics",
          "Better access to information"
        ]
      },
      {
        question: "Why might stereotyping be harmful in a workplace?",
        correct_answer: "It hinders appreciation of individual differences",
        incorrect_answers: [
          "It reduces communication barriers",
          "It encourages diverse viewpoints",
          "It fosters learning and empathy",
          "It increases productivity"
        ]
      },
      {
        question: "What is the first stage towards creating a multicultural organization?",
        correct_answer: "Exclusionary organization",
        incorrect_answers: [
          "Redefining the organization",
          "Compliance organization",
          "Club organization",
          "Inclusive organization"
        ]
      },
      {
        question: "What is organizational behavior primarily concerned with?",
        correct_answer: "Understanding and managing people at work",
        incorrect_answers: [
          "Managing personal finances",
          "Planning infrastructure development",
          "Creating government policies",
          "Conducting academic research only"
        ]
      },
      {
        question: "Which aspect of self-concept involves having different roles or identities?",
        correct_answer: "Complexity",
        incorrect_answers: [
          "Clarity",
          "Consistency",
          "Emotional stability",
          "Transparency"
        ]
      },
      {
        question: "In attribution theory, what does high consistency usually indicate?",
        correct_answer: "Internal factors influencing behavior",
        incorrect_answers: [
          "External factors influencing behavior",
          "A random and unpredictable pattern",
          "A lack of responsibility for actions",
          "External locus of control"
        ]
      },
      {
        question: "What is the primary aim of meaningful interaction in improving perception?",
        correct_answer: "Reducing perceptual biases through interaction",
        incorrect_answers: [
          "Enhancing personal bias",
          "Limiting collaboration",
          "Avoiding difficult conversations",
          "Developing strict personal boundaries"
        ]
      },
      {
        question: "Which of these is a type of perceptual error?",
        correct_answer: "Selective perception",
        incorrect_answers: [
          "Productivity lag",
          "Organizational hierarchy",
          "Group consensus",
          "Job dissatisfaction"
        ]
      },
      {
        question: "What is selective attention?",
        correct_answer: "The tendency to focus on specific stimuli while ignoring others",
        incorrect_answers: [
          "The act of choosing career paths",
          "A method of multitasking",
          "Concentrating on negative thoughts",
          "A team-building exercise"
        ]
      },
      {
        question: "What does the Johari Window aim to improve?",
        correct_answer: "Self-awareness and mutual understanding",
        incorrect_answers: [
          "Organizational structure",
          "Financial planning",
          "Technological adoption in organizations",
          "Communication within top management"
        ]
      },
      {
        question: "What is the main issue caused by stereotyping?",
        correct_answer: "Ignoring individual differences",
        incorrect_answers: [
          "Encouraging inclusivity",
          "Building a better organizational culture",
          "Simplifying managerial decisions",
          "Increasing employee engagement"
        ]
      },
      {
        question: "What is the role of self-enhancement in self-concept?",
        correct_answer: "Motivating oneself to maintain a positive self-concept",
        incorrect_answers: [
          "Developing negative attitudes",
          "Ignoring one's abilities",
          "Criticizing coworkers' performance",
          "Focusing on external validation"
        ]
      },
      {
        question: "Which is an example of internal locus of control?",
        correct_answer: "Believing success is due to personal effort and abilities",
        incorrect_answers: [
          "Blaming poor results on a faulty system",
          "Relying on team decisions for outcomes",
          "Avoiding accountability for failures",
          "Following instructions without questioning"
        ]
      },
      {
        question: "How are emotions different from moods?",
        correct_answer: "Emotions are often caused by specific events, while moods are not",
        incorrect_answers: [
          "Emotions are less intense than moods",
          "Emotions are more enduring than moods",
          "Moods are unrelated to emotions",
          "None of the above"
        ]
      },
      {
        question: "Which of these is NOT considered a basic emotion?",
        correct_answer: "Jealousy",
        incorrect_answers: [
          "Happiness",
          "Contempt",
          "Surprise",
          "Joy"
        ]
      },
      {
        question: "What does the term \"emotional labor\" refer to?",
        correct_answer: "Expressing organizationally desired emotions during interactions",
        incorrect_answers: [
          "Physical effort at work",
          "Suppressing all emotions in the workplace",
          "Managing others' emotions at work",
          "None of the above"
        ]
      },
      {
        question: "Deep acting is:",
        correct_answer: "Trying to modify one’s true inner feelings",
        incorrect_answers: [
          "Displaying emotions without effort",
          "Suppressing emotional expressions entirely",
          "Avoiding emotional interactions altogether",
          "None of the above"
        ]
      },
      {
        question: "What is a major difference between emotions and moods?",
        correct_answer: "Moods are less intense than emotions",
        incorrect_answers: [
          "Emotions last longer than moods",
          "Moods are always positive, emotions are negative",
          "Moods are triggered by specific events, emotions are not",
          "None of the above"
        ]
      },
      {
        question: "Which theory suggests that emotions and physiological reactions occur simultaneously?",
        correct_answer: "Cannon-Bard Theory",
        incorrect_answers: [
          "James-Lange Theory",
          "Affective Events Theory",
          "Schachter-Singer Theory",
          "None of the above"
        ]
      },
      {
        question: "What is the primary focus of Affective Events Theory?",
        correct_answer: "How emotions and moods influence job performance and satisfaction",
        incorrect_answers: [
          "The link between cognition and behavior",
          "The biological basis of emotions",
          "Reducing stress at the workplace",
          "None of the above"
        ]
      },
      {
        question: "The term \"emotional dissonance\" refers to:",
        correct_answer: "Expressing feelings that are inconsistent with actual emotions",
        incorrect_answers: [
          "Experiencing intense positive emotions",
          "Avoiding emotional expressions altogether",
          "The absence of any emotions in the workplace",
          "None of the above"
        ]
      },
      {
        question: "Stress arising from unclear job responsibilities is an example of:",
        correct_answer: "Hindrance stressors",
        incorrect_answers: [
          "Challenge stressors",
          "Positive stressors",
          "Daily uplifts",
          "None of the above"
        ]
      },
      {
        question: "Which of the following is NOT a source of emotions and moods?",
        correct_answer: "None of the above",
        incorrect_answers: [
          "Sleep",
          "Exercise",
          "Age",
          "Task deadlines"
        ]
      },
      {
        question: "Which of the following is an example of a terminal value?",
        correct_answer: "Wisdom",
        incorrect_answers: [
          "Honesty",
          "Self-discipline",
          "Responsibility",
          "Humility"
        ]
      },
      {
        question: "Instrumental values are:",
        correct_answer: "Means or behaviors to achieve terminal values",
        incorrect_answers: [
          "End goals in life",
          "Tools used in performance assessments",
          "Specific job-related skills",
          "Techniques for conflict resolution"
        ]
      },
      {
        question: "What is the core difference between sympathy and empathy?",
        correct_answer: "Empathy involves action beyond understanding feelings",
        incorrect_answers: [
          "Sympathy is always preferred in organizations",
          "Sympathy is a value, empathy is not",
          "Empathy is limited to professional interactions",
          "Sympathy leads to compassion"
        ]
      },
      {
        question: "What does \"person-job fit\" refer to?",
        correct_answer: "Alignment of an individual’s strengths and job requirements",
        incorrect_answers: [
          "Employee's compatibility with coworkers",
          "Flexibility in job roles",
          "Job satisfaction scores",
          "Adherence to organizational culture"
        ]
      },
      {
        question: "In John Holland's theory, which type of personality prefers creative and unsystematic activities?",
        correct_answer: "Artistic",
        incorrect_answers: [
          "Realistic",
          "Investigative",
          "Social",
          "Enterprising"
        ]
      },
      {
        question: "What value is critical in conflict resolution?",
        correct_answer: "Justice",
        incorrect_answers: [
          "Integrity",
          "Compassion",
          "Flexibility",
          "Responsibility"
        ]
      },
      {
        question: "Which cultural context emphasizes punctuality and task completion?",
        correct_answer: "Monochronic culture",
        incorrect_answers: [
          "High-context culture",
          "Polychronic culture",
          "Individualistic culture",
          "Collectivist culture"
        ]
      },
      {
        question: "Which type of values can evolve with exposure and learning?",
        correct_answer: "Dynamic values",
        incorrect_answers: [
          "Genetic values",
          "Rigid values",
          "Instrumental values",
          "Static values"
        ]
      },
      {
        question: "What is a defining feature of collectivist cultures?",
        correct_answer: "Prioritization of group harmony",
        incorrect_answers: [
          "High competition among members",
          "Emphasis on personal goals",
          "Focus on hierarchical leadership",
          "Strong resistance to change"
        ]
      },
      {
        question: "Why are values important in organizations?",
        correct_answer: "They influence attitudes, motivation, and behaviors",
        incorrect_answers: [
          "They reduce the need for training",
          "They enhance objectivity in decisions",
          "They eliminate workplace conflicts",
          "They guarantee employee loyalty"
        ]
      },
      {
        question: "What differentiates empathy from sympathy?",
        correct_answer: "Sympathy is about understanding feelings, while empathy involves action",
        incorrect_answers: [
          "Empathy is superficial, while sympathy is deep",
          "Sympathy is always better than empathy",
          "Both are identical concepts",
          "None of the above"
        ]
      },
      {
        question: "Which value is emphasized in organizational recruitment advertisements?",
        correct_answer: "Equality",
        incorrect_answers: [
          "Honesty",
          "Environmental stewardship",
          "Independence",
          "Compassion"
        ]
      },
      {
        question: "Which of the following values is categorized under Schwartz’s ‘self-transcendence’?",
        correct_answer: "Universalism",
        incorrect_answers: [
          "Stimulation",
          "Power",
          "Achievement",
          "Tradition"
        ]
      },
      {
        question: "What does the term \"value congruence\" refer to?",
        correct_answer: "Alignment between individual and organizational values",
        incorrect_answers: [
          "A mismatch between personal and organizational values",
          "Values that evolve over time",
          "Values that remain constant across cultures",
          "None of the above"
        ]
      },
      {
        question: "What is a terminal value according to Rokeach?",
        correct_answer: "Happiness",
        incorrect_answers: [
          "Honesty",
          "Self-discipline",
          "Kindness",
          "Humility"
        ]
      },
      {
        question: "Which personality type in Holland’s theory prefers activities involving helping others?",
        correct_answer: "Social",
        incorrect_answers: [
          "Investigative",
          "Realistic",
          "Enterprising",
          "Conventional"
        ]
      },
      {
        question: "What is the significance of person-job fit?",
        correct_answer: "All of the above",
        incorrect_answers: [
          "Reduces turnover",
          "Enhances employee performance",
          "Increases job satisfaction",
          "None of the above"
        ]
      },
      {
        question: "Which cultural value emphasizes personal achievements over group harmony?",
        correct_answer: "Individualism",
        incorrect_answers: [
          "Collectivism",
          "Hierarchy",
          "Tradition",
          "Conformity"
        ]
      },
      {
        question: "What is the primary purpose of job crafting?",
        correct_answer: "To adapt roles to match employee strengths",
        incorrect_answers: [
          "To train employees in new skills",
          "To enforce organizational hierarchy",
          "To increase company profits",
          "To enhance managerial control"
        ]
      },
      {
        question: "Person-organization (P-O) fit refers to:",
        correct_answer: "The alignment between an individual's values, personality, and goals with the organization’s culture and values",
        incorrect_answers: [
          "The extent to which an employee's skills match the technical requirements of a job",
          "The degree to which an individual adapts to various job roles within an organization",
          "The relationship between a supervisor and an employee in terms of leadership style and communication",
          "The compatibility between an employee’s work experience and the job description"
        ]
      },
      {
        question: "Intrinsic motivation is primarily driven by:",
        correct_answer: "Internal satisfaction and purpose",
        incorrect_answers: [
          "External rewards",
          "Social recognition",
          "Financial incentives",
          "Peer pressure"
        ]
      },
      {
        question: "What does 'intensity' in motivation refer to?",
        correct_answer: "How hard a person tries",
        incorrect_answers: [
          "The duration of effort",
          "The level of enthusiasm shown",
          "The external rewards received",
          "The number of tasks completed"
        ]
      },
      {
        question: "Which statement best describes extrinsic motivation?",
        correct_answer: "It is influenced by external factors",
        incorrect_answers: [
          "It arises from personal satisfaction.",
          "It is solely based on internal desires.",
          "It is irrelevant in organizational settings.",
          "It only applies to academic achievements."
        ]
      },
      {
        question: "Persistence in motivation refers to:",
        correct_answer: "The duration one can maintain effort towards a goal",
        incorrect_answers: [
          "The ability to focus on one task.",
          "The intensity of effort put into a task.",
          "The number of goals set by an individual.",
          "The variety of tasks undertaken."
        ]
      },
      {
        question: "What can lead to a lack of persistence in efforts?",
        correct_answer: "Loss of interest or focus over time",
        incorrect_answers: [
          "Clear goals and objectives",
          "High intrinsic motivation",
          "Support from peers and mentors",
          "Regular feedback and recognition"
        ]
      },
      {
        question: "According to the lecture, motivation is defined as:",
        correct_answer: "The process that accounts for an individual's intensity, direction, and persistence of effort toward attaining a goal.",
        incorrect_answers: [
          "The desire to earn money.",
          "The ability to influence others.",
          "The skill to manage time effectively.",
          "The willingness to work overtime."
        ]
      },
      {
        question: "Which example illustrates intrinsic motivation?",
        correct_answer: "Completing a challenging puzzle for personal satisfaction",
        incorrect_answers: [
          "Studying for an exam to receive a scholarship.",
          "Attending workshops for promotions.",
          "Participating in competitions for prizes.",
          "Following trends to gain social approval."
        ]
      },
      {
        question: "High intensity without proper direction can lead to:",
        correct_answer: "Wasted effort and resources",
        incorrect_answers: [
          "Increased job satisfaction",
          "Successful goal achievement",
          "Enhanced team collaboration",
          "Personal growth and development"
        ]
      },
      {
        question: "What role does feedback play in motivation?",
        correct_answer: "It helps individuals align their efforts with goals.",
        incorrect_answers: [
          "It decreases competition among employees.",
          "It provides external rewards only.",
          "It is irrelevant in motivating teams.",
          "It only serves as a formality in organizations."
        ]
      },
      {
        question: "Which factor can enhance intrinsic motivation?",
        correct_answer: "Job contentment and personal growth opportunities",
        incorrect_answers: [
          "Monetary bonuses",
          "Strict deadlines and pressure",
          "External validation from peers",
          "Competitive environments"
        ]
      },
      {
        question: "Which motivation theory aligns with employee involvement?",
        correct_answer: "Expectancy theory",
        incorrect_answers: [
          "Trait theory",
          "Behavioral reinforcement theory",
          "Pavlovian conditioning",
          "Transactional leadership theory"
        ]
      },
      {
        question: "What is continuous improvement in the workplace often called in Japanese management practices?",
        correct_answer: "Kaizen",
        incorrect_answers: [
          "Just-in-time management",
          "Lean production",
          "Six Sigma",
          "Kanban"
        ]
      },
      {
        question: "Which of the following strategies increases employee motivation by allowing them to contribute ideas freely?",
        correct_answer: "Employee empowerment",
        incorrect_answers: [
          "Centralized decision-making",
          "Bureaucratic control",
          "Strict hierarchical supervision",
          "Eliminating employee feedback sessions"
        ]
      },
      {
        question: "Which theory states that employees compare their input-output ratio with others?",
        correct_answer: "Equity theory",
        incorrect_answers: [
          "Expectancy theory",
          "Self-determination theory",
          "Transformational leadership theory",
          "Herzberg’s two-factor theory"
        ]
      },
      {
        question: "What is telecommuting in the workplace?",
        correct_answer: "Working from home or a remote location using technology",
        incorrect_answers: [
          "Working only at night shifts",
          "Working exclusively in office settings",
          "Eliminating work flexibility",
          "A system where employees never interact with managers"
        ]
      },
      {
        question: "Which financial reward system directly ties employee earnings to performance?",
        correct_answer: "Piece-rate pay",
        incorrect_answers: [
          "Fixed salary",
          "Seniority-based pay",
          "Standardized pay scales",
          "Pension benefits"
        ]
      },
      {
        question: "Which of the following is a key aspect of employee involvement?",
        correct_answer: "Participation in decision-making",
        incorrect_answers: [
          "Increased job rotation",
          "Decreased work responsibilities",
          "Independent work without collaboration",
          "Reduction in team-based work"
        ]
      },
      {
        question: "What is institutional memory in an organization?",
        correct_answer: "The accumulated experiences and knowledge of employees",
        incorrect_answers: [
          "A database of all company transactions",
          "A system where only managers retain decision-making power",
          "A training module for new hires",
          "A method to replace employees frequently"
        ]
      },
      {
        question: "Which HR practice ensures that employees’ values and goals align with the organization’s culture?",
        correct_answer: "Recruitment and selection",
        incorrect_answers: [
          "Compensation management",
          "Outsourcing",
          "Downsizing",
          "Benchmarking"
        ]
      },
      {
        question: "What is the primary benefit of a strong person-organization fit?",
        correct_answer: "Enhanced organizational commitment",
        incorrect_answers: [
          "Higher employee turnover",
          "Increased job dissatisfaction",
          "Lower teamwork efficiency",
          "Reduced need for employee training"
        ]
      },
      {
        question: "What is the fundamental principle of the behavioristic school of thought?",
        correct_answer: "Environmental cues guide behavior",
        incorrect_answers: [
          "Learning is an innate ability",
          "Behavior is solely determined by genetics",
          "Learning occurs only through punishment",
          "Cognitive factors play no role in learning"
        ]
      },
      {
        question: "What was the key finding in Pavlov’s classical conditioning experiment?",
        correct_answer: "A neutral stimulus can become a conditioned stimulus",
        incorrect_answers: [
          "Learning occurs through reinforcement",
          "Behavior is influenced by punishment",
          "Learning is based on cognitive reasoning",
          "Reward plays no role in behavior formation"
        ]
      },
      {
        question: "According to Skinner, operant conditioning is based on:",
        correct_answer: "Consequences of actions",
        incorrect_answers: [
          "Inherited behaviors",
          "Cognitive decision-making",
          "Emotional intelligence",
          "Unconscious motivation"
        ]
      },
      {
        question: "How does operant conditioning differ from classical conditioning?",
        correct_answer: "Operant conditioning is response-stimulus based, while classical is stimulus-response based",
        incorrect_answers: [
          "Classical conditioning focuses on rewards, while operant does not",
          "Operant conditioning only applies to humans",
          "Classical conditioning involves punishment rather than rewards",
          "There is no difference between the two"
        ]
      },
      {
        question: "What is a primary advantage of simulation-based learning?",
        correct_answer: "It provides unlimited opportunities to fail and learn",
        incorrect_answers: [
          "It is cost-effective",
          "It is limited to physical training",
          "It is an outdated method",
          "It removes all risks from training"
        ]
      },
      {
        question: "What is the main characteristic of action learning?",
        correct_answer: "Learning through real-world problem-solving",
        incorrect_answers: [
          "Focus on theoretical knowledge",
          "Emphasis on punishment for mistakes",
          "Rigidly structured curriculum",
          "No involvement of group discussions"
        ]
      },
      {
        question: "What is the primary purpose of Kirkpatrick’s model of learning evaluation?",
        correct_answer: "To assess the impact of learning on behavior",
        incorrect_answers: [
          "To measure intelligence levels",
          "To analyze textbook comprehension",
          "To compare different educational systems",
          "To focus only on organizational training"
        ]
      },
      {
        question: "What is the main goal of organizational learning?",
        correct_answer: "To enhance collective knowledge and improve performance",
        incorrect_answers: [
          "To maximize individual success only",
          "To ensure employees memorize all procedures",
          "To focus only on training new employees",
          "To eliminate the need for social interactions"
        ]
      },
      {
        question: "What is a key benefit of feedback in learning?",
        correct_answer: "It helps learners refine and improve their approach",
        incorrect_answers: [
          "It discourages learning",
          "It replaces the need for active engagement",
          "It ensures immediate success in learning",
          "It is only useful in academic settings"
        ]
      },
      {
        question: "What distinguishes social cognitive theory from other learning theories?",
        correct_answer: "It emphasizes learning through observation and self-regulation",
        incorrect_answers: [
          "It focuses solely on environmental factors",
          "It disregards behavior modification",
          "It views reinforcement as unnecessary",
          "It suggests all learning is instinctive"
        ]
      },
      {
        question: "What is a key requirement for creativity in an organization?",
        correct_answer: "Novelty and usefulness",
        incorrect_answers: [
          "A large number of ideas regardless of their usability",
          "The presence of a strong leader",
          "Complete autonomy in decision-making",
          "A rigid hierarchical structure"
        ]
      },
      {
        question: "What is the first stage of the creative process according to Graham Wallace?",
        correct_answer: "Preparation",
        incorrect_answers: [
          "Incubation",
          "Verification",
          "Illumination",
          "Implementation"
        ]
      },
      {
        question: "What does the concept of \"functional fixedness\" refer to?",
        correct_answer: "The inability to think of an object beyond its typical use",
        incorrect_answers: [
          "The tendency to generate multiple solutions for a problem",
          "The ability to use objects and concepts in novel ways",
          "The use of external motivation for creativity",
          "The reliance on team-based ideation over individual brainstorming"
        ]
      },
      {
        question: "What is a key element of psychological capital?",
        correct_answer: "Hope",
        incorrect_answers: [
          "Intelligence",
          "Motivation",
          "Creativity",
          "Discipline"
        ]
      },
      {
        question: "Which of the following best defines psychological capital?",
        correct_answer: "The positive psychological state that helps employees improve performance",
        incorrect_answers: [
          "The sum of an individual’s financial and social resources",
          "A person’s ability to control external stressors",
          "A measurement of an employee’s IQ and emotional intelligence",
          "A set of skills that employees must develop through formal training"
        ]
      },
      {
        question: "What is a key characteristic of an optimistic employee?",
        correct_answer: "They expect positive outcomes and persist through challenges",
        incorrect_answers: [
          "They avoid taking risks in the workplace",
          "They focus on potential negative outcomes to prepare better",
          "They are unaffected by failures or obstacles",
          "They rely solely on others for motivation"
        ]
      },
      {
        question: "Which leadership style is most effective in fostering Psychological Capital in employees?",
        correct_answer: "Transformational leadership",
        incorrect_answers: [
          "Autocratic leadership",
          "Transactional leadership",
          "Laissez-faire leadership",
          "Directive leadership"
        ]
      },
      {
        question: "Mindfulness at work primarily involves:",
        correct_answer: "Engaging fully in the present moment with awareness and non-judgment",
        incorrect_answers: [
          "Ignoring distractions by focusing only on deadlines",
          "Planning excessively to control future uncertainties",
          "Multitasking to maximize efficiency",
          "Suppressing emotions to maintain professionalism"
        ]
      },
      {
        question: "Which of the following is a mindfulness practice commonly used in the workplace?",
        correct_answer: "Guided meditation",
        incorrect_answers: [
          "Passive listening",
          "Overthinking past mistakes",
          "Suppressing negative emotions",
          "Engaging in repetitive multitasking"
        ]
      },
      {
        question: "What is a major obstacle to practicing mindfulness in the workplace?",
        correct_answer: "A culture of multitasking and constant distractions",
        incorrect_answers: [
          "High levels of emotional intelligence",
          "The ability to focus deeply on the present moment",
          "Encouragement from leadership to prioritize well-being",
          "A work environment that supports open communication"
        ]
      },
      {
        question: "What does the concept of \"knowledge hoarding\" refer to?",
        correct_answer: "Intentionally withholding knowledge for personal advantage",
        incorrect_answers: [
          "Encouraging widespread knowledge sharing",
          "Training employees to improve knowledge transfer",
          "Assigning knowledge management roles to employees",
          "Documenting organizational knowledge in shared databases"
        ]
      },
      {
        question: "What is one major reason employees engage in knowledge hiding?",
        correct_answer: "Fear of losing competitive advantage",
        incorrect_answers: [
          "Organizational encouragement",
          "Desire to mentor new employees",
          "Lack of managerial support",
          "Preference for teamwork"
        ]
      },
      {
        question: "Which of the following is NOT a common strategy for knowledge hiding?",
        correct_answer: "Encouraging collaboration",
        incorrect_answers: [
          "Evasive hiding",
          "Playing dumb",
          "Rationalized hiding",
          "Counter-questioning"
        ]
      },
      {
        question: "Which personality trait is most negatively correlated with knowledge hiding?",
        correct_answer: "Openness",
        incorrect_answers: [
          "Neuroticism",
          "Conscientiousness",
          "Extraversion",
          "Agreeableness"
        ]
      },
      {
        question: "What is a key factor in determining an organization's knowledge management success?",
        correct_answer: "The presence of psychological safety",
        incorrect_answers: [
          "A strict hierarchical structure",
          "Limiting access to knowledge",
          "Encouraging competition over collaboration",
          "Reducing knowledge-sharing incentives"
        ]
      },
      {
        question: "Which of the following is an example of tacit knowledge?",
        correct_answer: "An employee’s personal problem-solving ability",
        incorrect_answers: [
          "A company’s financial report",
          "A machine operation manual",
          "A software user guide",
          "A product brochure"
        ]
      },
      {
        question: "In the SECI model of knowledge creation, what does the \"S\" stand for?",
        correct_answer: "Socialization",
        incorrect_answers: [
          "Standardization",
          "Simplification",
          "Synchronization",
          "Structure"
        ]
      },
      {
        question: "Which type of power is derived from an individual’s expertise or skills?",
        correct_answer: "Expert power",
        incorrect_answers: [
          "Coercive power",
          "Referent power",
          "Legitimate power",
          "Reward power"
        ]
      },
      {
        question: "What is a potential negative consequence of excessive knowledge sharing?",
        correct_answer: "Knowledge overload for employees",
        incorrect_answers: [
          "Increased workplace conflicts",
          "Reduced organizational efficiency",
          "Decreased employee motivation",
          "Increased job dissatisfaction"
        ]
      },
      {
        question: "Which of the following is NOT a knowledge management strategy?",
        correct_answer: "Secrecy strategy",
        incorrect_answers: [
          "Codification strategy",
          "Personalization strategy",
          "Incentive-based strategy",
          "Socialization strategy"
        ]
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
    const quizName = "Organizational Behaviour"; // Get quiz name dynamically from input
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
