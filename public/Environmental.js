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
    question: "What is the main distinction between the First and Second Laws of Thermodynamics as applied to environmental systems?",
    correct_answer: "The First Law deals with energy quantity, and the Second Law concerns energy quality and entropy.",
    incorrect_answers: [
      "The First Law addresses energy quality, while the Second Law addresses energy conservation.",
      "Both laws focus on the conservation of energy in closed systems.",
      "The Second Law invalidates the First Law in high-energy systems."
    ]
  },
  {
    question: "The part of the earth and its atmosphere in which organisms live in is called _________.",
    correct_answer: "Biosphere",
    incorrect_answers: [
      "Hydrosphere",
      "Biomass",
      "None of the above"
    ]
  },
  {
    question: "How does the energy transfer efficiency from one trophic level to another typically follow the 10% rule?",
    correct_answer: "90% of energy is lost as heat and life activities at each trophic level.",
    incorrect_answers: [
      "Only 10% of energy is consumed at the primary producer level.",
      "10% of organisms survive between trophic levels.",
      "All energy is used to produce biomass."
    ]
  },
  {
    question: "Consider the following food chain which occurs in an aquatic ecosystem: Phytoplankton → Small Fish → Big fish If phytoplankton acquires 100 J of energy from solar radiation, calculate the total energy lost in the given food chain?",
    correct_answer: "99 J",
    incorrect_answers: [
      "10 J",
      "90 J",
      "9 J"
    ]
  },
  {
    question: "Which of the following is logical sequence of flow of energy?",
    correct_answer: "Producer → Consumer → Decomposer",
    incorrect_answers: [
      "Decomposer → Consumer → Producer",
      "Producer → Consumer → Decomposer",
      "Decomposer → Consumer → Decomposer"
    ]
  },
  {
    question: "What is the role of photolysis in atmospheric ozone dynamics?",
    correct_answer: "Breakdown of O₃ into O₂ and O.",
    incorrect_answers: [
      "Formation of ozone through O₂ photodissociation.",
      "Transformation of ozone into molecular nitrogen.",
      "Dissociation of nitrogen oxides into ozone precursors."
    ]
  },
  {
    question: "Find the hydrogen ion concentration and the hydroxide ions concentration in Lemon juice having pH of 6.1?",
    correct_answer: "7.94 * 10⁻⁷ mol/L & 1.26 * 10⁻⁸ mol/L",
    incorrect_answers: [
      "7.94 * 10⁻⁸ mol/L & 1.26 * 10⁻⁷ mol/L",
      "9.4 * 10⁻⁵ mol/L & 6.5 * 10⁻¹⁰ mol/L",
      "7.94 * 10⁻² mol/L & 1.26 * 10⁻¹¹ mol/L"
    ]
  },
  {
    question: "Which principle explains why biodiversity decreases as deforestation increases?",
    correct_answer: "Habitat destruction reduces ecological niches.",
    incorrect_answers: [
      "Invasive species thrive in disturbed environments.",
      "Increased soil fertility benefits monoculture crops.",
      "Loss of light penetration through deforested areas."
    ]
  },
  {
    question: "Why are equilibrium constants critical in chemical reactions?",
    correct_answer: "They describe the concentrations at reaction completion.",
    incorrect_answers: [
      "They predict the speed of the reaction.",
      "They determine the stoichiometric coefficients.",
      "They measure the enthalpy change during the reaction."
    ]
  },
  {
    question: "Subsurface half-lives for xylene and hexane are listed as 56, and 15 days respectively. What are the first-order rate constants for the given chemicals?",
    correct_answer: "0.012/day, 0.046/day",
    incorrect_answers: [
      "0.012/day, 0.061/day",
      "0.014/day, 0.024/day",
      "0.046/day, 0.012/day"
    ]
  },
  {
    question: "Calculate the quantity of CO₂ released by burning the 32 gram of methane gas completely?",
    correct_answer: "88 g of CO₂",
    incorrect_answers: [
      "44 g of CO₂",
      "34 g of CO₂",
      "32 g of CO₂"
    ]
  },
  {
    question: "The following data have been noted from the census department for a city A . Find the probable population in the year 2030 using arithmetic increase method.",
    correct_answer: "31667",
    incorrect_answers: [
      "30657",
      "41200",
      "43333"
    ]
  },
  {
    question: "Which of the following is not responsible for water pH decrease in polluted environments?",
    correct_answer: "Presence of heavy metals reducing alkalinity.",
    incorrect_answers: [
      "Dissolution of carbon dioxide forming carbonic acid.",
      "Accumulation of nitrogen-based acids.",
      "Increase in organic waste content."
    ]
  },
  {
    question: "Why does a high BOD level in a receiving water body pose a threat to aquatic life?",
    correct_answer: "It depletes dissolved oxygen needed by aquatic organisms for survival.",
    incorrect_answers: [
      "It reduces carbon dioxide concentrations required for photosynthesis.",
      "It causes excessive nutrient enrichment leading to algal blooms.",
      "It increases the temperature of water, causing thermal pollution."
    ]
  },
  {
    question: "Which of the following processes reduces atmospheric nitrogen (N₂) into a form usable by plants?",
    correct_answer: "Nitrogen fixation",
    incorrect_answers: [
      "Ammonification",
      "Denitrification",
      "Mineralization"
    ]
  },
  {
    question: "Which waste treatment method uses bacteria to drive an electric current?",
    correct_answer: "Microbial fuel cells (MFCs)",
    incorrect_answers: [
      "Anaerobic digestion",
      "Composting",
      "Bioremediation"
    ]
  },
  {
    question: "Which type of land cover has the highest runoff coefficient?",
    correct_answer: "Pavements and yards",
    incorrect_answers: [
      "Lawns and gadens",
      "Open ground",
      "Single-family dwellings"
    ]
  },
  {
    question: "Which of the following factors does NOT affect per capita water demand?",
    correct_answer: "Type of soil in the area",
    incorrect_answers: [
      "Cost of water",
      "Size of the city",
      "Climate conditions."
    ]
  },
  {
    question: "What is the permissible limit of fluoride in drinking water to prevent fluorosis?",
    correct_answer: "1.5 ppm",
    incorrect_answers: [
      "0.5 ppm",
      "1.0 ppm",
      "2.0 ppm"
    ]
  },
  {
    question: "Maximum daily demand is typically how many times the average daily demand?",
    correct_answer: "1.8",
    incorrect_answers: [
      "1.5",
      "2.0",
      "2.7"
    ]
  },
  {
    question: "A catchment area of 200 hectares has the following surface cover: Roofs (20%), Pavements (30%), Lawns (50%). The runoff coefficients are 0.9, 0.8, and 0.15 respectively. Calculate the overall runoff coefficient.",
    correct_answer: "0.50",
    incorrect_answers: [
      "0.63",
      "0.70",
      "0.45"
    ]
  },
  {
    question: "If the intensity of rainfall is 40 mm/hour and the runoff coefficient is 0.63 for the catchment area of 200 hectares, what is the quantity of storm water runoff (Q) in m³/sec?",
    correct_answer: "14 m³/sec",
    incorrect_answers: [
      "5.6 m³/sec",
      "5 m³/sec",
      "1.4 m³/sec"
    ]
  },
  {
    question: "Using the Hazen-Williams equation, estimate the head loss (hf) in a pipe with diameter 0.3m, length 5 m, and flow rate 1.2 m3/s, with Hazen-Williams coefficient (C) as 130.",
    correct_answer: "3.2 m",
    incorrect_answers: [
      "4.5 m",
      "6.1 m",
      "7.0 m"
    ]
  },
  {
    question: "If the population of a city in 2021 is 2,000,000 and it grows at a constant rate of 1.5% annually, predict its population in 2031 using the Geometrical Increase Method.",
    correct_answer: "2,319,393",
    incorrect_answers: [
      "2,30,000",
      "2,548,008",
      "2,817,048"
    ]
  },
  {
    question: "If the average increment is 8,000 and the incremental increase is 1,000, what is the population in 2021 using the Incremental Increase Method, given the 2011 population was 28,000?",
    correct_answer: "38,000",
    incorrect_answers: [
      "35,000",
      "36,000",
      "37,000"
    ]
  },
  {
    question: "A water sample has 100 mg/L of Ca²⁺ and 120 mg/L of Mg²⁺. Calculate the total hardness in mg/L as CaCO₃.",
    correct_answer: "750 mg/L",
    incorrect_answers: [
      "500 mg/L",
      "520 mg/L",
      "560 mg/L"
    ]
  },
  {
    question: "The main cause of methemoglobinemia (Blue Baby Syndrome) is due to excess of:",
    correct_answer: "Nitrates, 45 mg/L",
    incorrect_answers: [
      "Fluoride",
      "Nitrites, 45 mg/L",
      "Hardness"
    ]
  },
  {
    question: "Which of the following is NOT a component of the hydrologic cycle?",
    correct_answer: "Sedimentation",
    incorrect_answers: [
      "Evaporation",
      "Condensation",
      "Precipitation"
    ]
  },
  {
    question: "Which population forecasting method assumes a constant rate of increase?",
    correct_answer: "Arithmetic Increase Method",
    incorrect_answers: [
      "Geometric Increase Method",
      "Incremental Increase Method",
      "Logistic Curve Method"
    ]
  },
  {
    question: "Which of the following is NOT a basic method of dealing with solid waste?",
    correct_answer: "Electrolysis",
    incorrect_answers: [
      "Dumping",
      "Incineration",
      "Recycling"
    ]
  },
  {
    question: "The \"3Rs\" of waste management stand for:",
    correct_answer: "Reduce, Reuse, Recycle",
    incorrect_answers: [
      "Reduce, Reclaim, Recycle",
      "Recover, Reuse, Remediate",
      "Restore, Recycle, Rebuild"
    ]
  },
  {
    question: "Which of the following waste management strategies is most effective in reducing waste at the source?",
    correct_answer: "Waste minimization",
    incorrect_answers: [
      "Incineration",
      "Recycling",
      "Landfilling"
    ]
  },
  {
    question: "What is the primary reason for methane emissions in landfills?",
    correct_answer: "Anaerobic decomposition of biodegradable waste",
    incorrect_answers: [
      "Combustion of organic waste",
      "Chemical reactions between metals and plastics",
      "Evaporation of leachate"
    ]
  },
  {
    question: "What is the most dominant component in municipal solid waste (MSW) worldwide?",
    correct_answer: "Organic waste",
    incorrect_answers: [
      "Glass",
      "Plastics",
      "Metals"
    ]
  },
  {
    question: "The volatile matter of solid waste is determined by heating the sample at:",
    correct_answer: "950°C",
    incorrect_answers: [
      "575°C",
      "1200°C",
      "1600°C"
    ]
  },
  {
    question: "A landfill has a capacity of 200,000 tons and receives 6000 tons of waste per year. Calculate how many years it will take to fill the landfill.",
    correct_answer: "33.33",
    incorrect_answers: [
      "45",
      "35",
      "55"
    ]
  },
  {
    question: "Composting of organic waste can produce biogas, which is primarily methane. If 1000 tons of organic waste are composted and 60% of it can be converted into methane, calculate the potential energy recovery assuming methane has an energy content of 55 MJ/kg.",
    correct_answer: "33 × 10⁹ MJ",
    incorrect_answers: [
      "35 × 10⁹ MJ",
      "55 × 10⁹ MJ",
      "65 × 10⁹ MJ"
    ]
  },
  {
    question: "A waste-to-energy plant processes 3,000 tonnes of MSW daily and operates 330 days a year. Assume: Net calorific value of waste = 12 MJ/kg. Plant efficiency = 30%. Energy conversion factor= 1 MJ=0.2778 kWh; Calculate the total energy output?",
    correct_answer: "9.9 × 10⁷ kWh",
    incorrect_answers: [
      "9.5 × 10⁷ kWh",
      "10.5 × 10⁷ kWh",
      "9.7 × 10⁷ kWh"
    ]
  },
  {
    question: "A city generates plastic waste at a rate of 10,000 tonnes annually, which is managed as follows: Recycling: 60% Incineration (with energy recovery): 40% Assume: Energy content of plastic waste = 40 MJ/kg. Recycling saves $100/tonne in raw material costs. Incineration efficiency = 35%. Calculate the energy recovered from incineration annually in kWh",
    correct_answer: "1.557 × 10⁸ kWh",
    incorrect_answers: [
      "15.6 × 10⁶ kWh",
      "16.5 × 10⁶ kWh",
      "17.5 × 10⁶ kWh"
    ]
  },
  {
    question: "A landfill has a surface area of 15 hectares and receives an annual rainfall of 1200 mm. 60% of rainfall percolates through the waste and contributes to leachate formation. Estimate the annual leachate volume generated.",
    correct_answer: "108,000 m³",
    incorrect_answers: [
      "10200 m²",
      "9200 m³",
      "8200 m³"
    ]
  },
  {
    question: "The optimal Carbon-to-Nitrogen (C:N) ratio for composting is:",
    correct_answer: "20:1",
    incorrect_answers: [
      "10:1",
      "30:1",
      "50:1"
    ]
  },
  {
    question: "What is the purpose of a landfill liner system?",
    correct_answer: "To prevent leachate from contaminating groundwater",
    incorrect_answers: [
      "To accelerate decomposition of waste",
      "To allow methane gas to escape freely",
      "To absorb CO₂ emissions"
    ]
  },
  {
    question: "If the wet weight of a solid waste sample is 100 kg and the dry weight is 80 kg. what is the moisture content on dry weight basis?",
    correct_answer: "25%",
    incorrect_answers: [
      "20%",
      "30%",
      "40%"
    ]
  },
  {
    question: "The term \"Integrated Solid Waste Management (ISWM)\" includes all of the following EXCEPT:",
    correct_answer: "Open dumping",
    incorrect_answers: [
      "Waste collection",
      "Energy production",
      "Composting"
    ]
  },
  {
    question: "How many 60 Watt Incandescent lamps are equivalent to three 15 Watt CFL?",
    correct_answer: "7",
    incorrect_answers: [
      "22",
      "10",
      "21"
    ]
  },
  {
    question: "Which of the following is a major greenhouse gas responsible for global warming?",
    correct_answer: "Carbon dioxide (CO₂)",
    incorrect_answers: [
      "Hydrogen sulphide (H₂S)",
      "Carbon monoxide (CO)",
      "Oxygen (O₂)"
    ]
  },
  {
    question: "One of the most famous and important examples of groundwater pollution in New York state (USA) is the",
    correct_answer: "Love canal tragedy",
    incorrect_answers: [
      "Chernobyl Accident",
      "Donora smog",
      "Cuyahoga River fire"
    ]
  },
  {
    question: "The effect of a defined population on the environment, including land, water and other resources is termed as",
    correct_answer: "Ecological Footprint",
    incorrect_answers: [
      "Ecological Fingerprint",
      "Ecological History",
      "Sustainability"
    ]
  },
  {
    question: "Human impacts on the environmental system can be calculated by which of the following equation?",
    correct_answer: "Population × Affluence × Technology",
    incorrect_answers: [
      "Population × Affluence × Time",
      "Population × Affluence × Temperature",
      "Population × Poverty × Technology"
    ]
  },
  {
    question: "How much input of resources is required per person per day on average?",
    correct_answer: "50 Kg",
    incorrect_answers: [
      "60 Kg",
      "100kg",
      "40 Kg"
    ]
  },
  {
    question: "Sustainable development is",
    correct_answer: "Meeting the present needs without compromising the ability of future generations",
    incorrect_answers: [
      "Meeting the present needs with compromising the ability of future generations",
      "Using the material and resources at maximum levels",
      "None of these"
    ]
  },
  {
    question: "The most effective management intervention of water and health are",
    correct_answer: "Provision of safe drinking water and proper disposal of human waste",
    incorrect_answers: [
      "Provision of safe drinking water and improper disposal of human waste",
      "No provision of safe drinking water and proper disposal of human waste",
      "No provision of safe drinking water and improper disposal of human waste"
    ]
  },
  {
    question: "Which gas is responsible for Bhopal Gas Tragedy (1984)?",
    correct_answer: "Methyl Isocyanate",
    incorrect_answers: [
      "Ethyl Isocyanate",
      "Methyl Isocyanide",
      "Hydrogen Cyanide"
    ]
  },
  {
    question: "Identify the correct statement/statements regarding the Resource Conservation and Recovery Act (RCRA).",
    correct_answer: "The primary goal of the act is to protect human health and the environment from the potential hazards of waste disposal, conserving energy and natural resources.",
    incorrect_answers: [
      "It was enacted by Congress in 1978.",
      "It focuses on waste management in the environment.",
      "It focuses on waste maximization in the environment."
    ]
  },
  {
    question: "Sustainable development is an integration of which of the following elements:",
    correct_answer: "Environment",
    incorrect_answers: [
      "Society",
      "Energy",
      "Economy"
    ]
  },
  {
    question: "What is the potential benefit of design and innovation in advanced sustainability?",
    correct_answer: "Existing solution can be optimized",
    incorrect_answers: [
      "The problem can be redefined",
      "The existing system can be interrupted",
      "A new system can be corrupted"
    ]
  },
  {
    question: "Which of the following statements is/are correct?",
    correct_answer: "Systems thinking is the process of understanding how things influence one another within a whole",
    incorrect_answers: [
      "In the circular economy, materials flow in a linear system",
      "Without LifeCycle and system thinking frameworks, significant and varied environmental impacts across the life cycle cannot be understood",
      "In the circular economy, materials flow in a closed-loop system"
    ]
  },
  {
    question: "Which of the following is a principle of Green Chemistry?",
    correct_answer: "Use of Renewable feedstock",
    incorrect_answers: [
      "Increased use of derivatives",
      "Overdue analysis for pollution prevention",
      "Less hazardous synthesis"
    ]
  },
  {
    question: "Which of the following is an example of a primary pollutant?",
    correct_answer: "Smoke from combustion processes",
    incorrect_answers: [
      "Smog",
      "Ozone",
      "Sulphur trioxide"
    ]
  },
  {
    question: "Air pollution is primarily caused by:",
    correct_answer: "The introduction of harmful substances like gases, particles, and biological molecules into Earth's atmosphere.",
    incorrect_answers: [
      "The release of natural gases in minute quantities.",
      "Routine agricultural practices.",
      "The purification of ambient air by natural processes."
    ]
  },
  {
    question: "Which pollutant is primarily produced due to incomplete combustion of fuels?",
    correct_answer: "Carbon monoxide",
    incorrect_answers: [
      "Ozone",
      "Sulphur dioxide",
      "Nitrogen dioxide"
    ]
  },
  {
    question: "Short term exposure to particulate matter (PM) can lead to:",
    correct_answer: "Respiratory symptoms and increased hospital admissions",
    incorrect_answers: [
      "Enhanced lung capacity",
      "Improved cardiovascular performance",
      "Reduced medication use"
    ]
  },
  {
    question: "An industrial process emits 5 g of the pollutant NO₂ every minute. The stack height is 40 m, and there is zero plume rise. Assume the wind speed is 4 m/s, the horizontal dispersion coefficient (σy) is 30 m, and the vertical dispersion coefficient (σz) is 20 m for this situation. What is the concentration of the air pollutant 1 km downwind of the release along the centerline?",
    correct_answer: "1.5 µg / m³",
    incorrect_answers: [
      "0.5 µg / m³",
      "2.5 µg / m³",
      "3.5 µg / m³"
    ]
  },
  {
    question: "How do greenhouse gases contribute to global warming?",
    correct_answer: "By absorbing infrared radiation and trapping heat in the atmosphere",
    incorrect_answers: [
      "By reflecting sunlight back into space",
      "By increasing the albedo of Earth's surface",
      "By cooling the upper atmosphere"
    ]
  },
  {
    question: "Under which atmospheric condition is vertical movement of an air parcel discouraged?",
    correct_answer: "Inversion conditions",
    incorrect_answers: [
      "Unstable conditions",
      "Neutral stability",
      "Turbulent conditions"
    ]
  },
  {
    question: "Which of the following air pollution control units removes both gaseous pollutants and particulate matter?",
    correct_answer: "Venturi scrubber",
    incorrect_answers: [
      "Electrostatic precipitator",
      "Thermal oxidizer",
      "Cyclone separator"
    ]
  },
  {
    question: "At what rate does the temperature of a dry air parcel increase as it descends into the atmosphere?",
    correct_answer: "+9.8 °C/km",
    incorrect_answers: [
      "9.8 °C/km",
      "+6.5 °C/km",
      "6.5 °C/km"
    ]
  },
  {
    question: "Which of the following is an effective strategy to reduce noise pollution in residential areas?",
    correct_answer: "Installation of green barriers and soundproofing measures",
    incorrect_answers: [
      "Increasing industrial activity near homes",
      "Expanding vehicular traffic in urban centres",
      "Removing noise regulations"
    ]
  },
  {
    question: "Which of the following is not a greenhouse gas?",
    correct_answer: "Sulphur dioxide",
    incorrect_answers: [
      "Hydrofluorocarbons",
      "Methane",
      "Carbon dioxide"
    ]
  },
  {
    question: "Which of the following statements is correct according to the WHO indoor air pollution statistics?",
    correct_answer: "4.2 million deaths are reported every year as a result of exposure to ambient air pollution",
    incorrect_answers: [
      "3.8 million deaths every year are attributed to the ambient air pollution exposure",
      "50% of all deaths related to pneumonia are linked to household air pollution",
      "91% of the world's population lives in places where air quality is within WHO guideline limits."
    ]
  },
  {
    question: "Which air pollution control technology removes particulate matter and other pollutants such as SO₂ and HCl together by impaction of airborne pollutants on water droplets?",
    correct_answer: "Venturi scrubber",
    incorrect_answers: [
      "Thermal oxidizer",
      "Electrostatic precipitator",
      "Cyclone separator"
    ]
  },
  {
    question: "What is the key assumption in the mass balance equation for a batch reactor?",
    correct_answer: "Complete mixing with no inflow or outflow",
    incorrect_answers: [
      "Continuous inflow and outflow of mass",
      "Constant temperature and pressure",
      "Mass transfer occurs at steady-state conditions"
    ]
  },
  {
    question: "How does the concentration change in a continuous stirred tank reactor (CSTR) under steady-state conditions?",
    correct_answer: "Remains constant",
    incorrect_answers: [
      "Linearly with time",
      "Exponentially with time",
      "Oscillates periodically"
    ]
  },
  {
    question: "What is the fundamental difference between advection and dispersion in pollutant transport?",
    correct_answer: "Advection transports pollutants with bulk flow, while dispersion spreads them due to random motion.",
    incorrect_answers: [
      "Advection involves random motion, while dispersion is due to bulk flow.",
      "Advection requires molecular diffusion, while dispersion is unrelated to diffusion.",
      "Advection depends on turbulent flow, while dispersion occurs only in laminar flow."
    ]
  },
  {
    question: "Which law is used to calculate dispersive flux density in mass transport processes?",
    correct_answer: "Fick's Law",
    incorrect_answers: [
      "Stokes' Law",
      "Bernoulli's Equation",
      "Planck's Equation"
    ]
  },
  {
    question: "Calculate the time to reduce the concentration of pollutant A to 1% of its initial value in a constant volume batch reactor for the reaction A → B With reaction rate = -kCA, when k = 0.23 min⁻¹",
    correct_answer: "20 min",
    incorrect_answers: [
      "50 min",
      "40 min",
      "30 min"
    ]
  },
  {
    question: "What determines the terminal settling velocity of a particle in a fluid according to Stokes Law?",
    correct_answer: "All of the above",
    incorrect_answers: [
      "Viscosity of the fluid",
      "Particle diameter",
      "Density difference between particle and fluid"
    ]
  },
  {
    question: "Calculate the flow rate of the CSTR if the volume of the reactor is 100 m³ and the retention time is 5 days?",
    correct_answer: "20 m³/day",
    incorrect_answers: [
      "25 m³/day",
      "50 m³/day",
      "10 m³/day"
    ]
  },
  {
    question: "Determine the volume of Plug flow reactor to obtain the effluent concentration of 50 mg/L by assuming the flow rate of 100 m³/day and first order decay rate constant of k = 0.23/day and influent concentration is 200 mg/L?",
    correct_answer: "603 m³",
    incorrect_answers: [
      "525 m³",
      "500 m³",
      "900 m³"
    ]
  },
  {
    question: "Why is the Reynold's number significant in determining flow patterns in fluid mechanics?",
    correct_answer: "It predicts whether flow is laminar or turbulent.",
    incorrect_answers: [
      "It quantifies the rate of molecular diffusion.",
      "It measures the efficiency of heat transfer.",
      "It calculates the net flux in advection."
    ]
  },
  {
    question: "How is energy loss as waste heat typically calculated in a thermal power plant?",
    correct_answer: "By subtracting the generator's output energy from the total input energy",
    incorrect_answers: [
      "By using the Reynolds number",
      "By measuring the efficiency of cooling systems",
      "By applying Stokes' drag equation"
    ]
  },
  {
    question: "______is the dimensionless quantity used to find the laminar flow pattern of the flow.",
    correct_answer: "Reynolds number",
    incorrect_answers: [
      "Vortex number",
      "Viscosity number",
      "None of the above"
    ]
  },
  {
    question: "What is the significance of the drag force in Stokes' law for gravitational settling of particles?",
    correct_answer: "It resists the gravitational force acting on a particle.",
    incorrect_answers: [
      "It depends on the temperature gradient in the fluid.",
      "It decreases with an increase in fluid velocity.",
      "It is inversely proportional to particle density."
    ]
  },
  {
    question: "In a zero-order reaction occurring in a batch reactor, what is the dependency of the rate of reaction on the reactant concentration?",
    correct_answer: "Independent of concentration",
    incorrect_answers: [
      "Directly proportional",
      "Inversely proportional",
      "Exponentially dependent"
    ]
  },
  {
    question: "Which assumption is not made in applying Fick's Law to diffusion processes?",
    correct_answer: "Flow velocity is constant",
    incorrect_answers: [
      "Steady-state concentration gradients",
      "Molecular motion is random",
      "Diffusion is isotropic"
    ]
  },
  {
    question: "Which type of pollutant transport is most likely to dominate in highly turbulent water bodies?",
    correct_answer: "Eddy dispersion",
    incorrect_answers: [
      "Advection",
      "Molecular diffusion",
      "Gravitational settling"
    ]
  },
  {
    question: "Which treatment process is designed for removing pathogens in a water treatment plant?",
    correct_answer: "Disinfection",
    incorrect_answers: [
      "Plain sedimentation",
      "Coagulation",
      "Filtration"
    ]
  },
  {
    question: "Which of the following law establishes the relationship between particle size and its settling velocity?",
    correct_answer: "Stoke's law",
    incorrect_answers: [
      "Pascal's law",
      "Darcy's law",
      "Hooke's law"
    ]
  },
  {
    question: "A sedimentation tank designed to capture 0.015 mm diameter particles with a specific gravity of 2.65. If the sedimentation tank is designed for a surface overflow rate of 30 m³/day/m². Find the efficiency of particle removal. Take the kinetic viscosity of water: 0.01 cm²/sec.",
    correct_answer: "58.27%",
    incorrect_answers: [
      "64.98%",
      "48.69%",
      "38.85%"
    ]
  },
  {
    question: "Which of the following is not a coagulant?",
    correct_answer: "Sodium hydroxide",
    incorrect_answers: [
      "Aluminium sulphate",
      "Ferrous Sulphate",
      "Sodium sulphate"
    ]
  },
  {
    question: "Which of the following is not the characteristic of a slow sand filter?",
    correct_answer: "It requires high power and chemical requirements",
    incorrect_answers: [
      "It will have a long design life",
      "It is inexpensive and easy to construct",
      "It reduces bacteria, colloids, and organic contaminants"
    ]
  },
  {
    question: "Find the length and width of the slow sand filter required to handle 10 MLD of water with a filtration rate of 150 lit/hr/m². Assume Length: Width = 2:1.",
    correct_answer: "B = 20.5 m, L = 41 m",
    incorrect_answers: [
      "B = 10.6m L = 11.2m",
      "B = 15.2 m, L = 30.4 m",
      "B = 25m L = 50m"
    ]
  },
  {
    question: "Which of the following is not a disinfection method?",
    correct_answer: "Coagulation",
    incorrect_answers: [
      "Boiling",
      "Silver or electro-katadyn process",
      "Chlorination"
    ]
  },
  {
    question: "Identify the correct order of chlorine forms in terms of their disinfecting strength.",
    correct_answer: "ClO₂ > Free chlorines > Chloramines",
    incorrect_answers: [
      "ClO₂ > Chloramines > Free chlorines",
      "ClO₂ = Free chlorines = Chloramines",
      "Free chlorines > ClO₂ > Chloramines"
    ]
  },
  {
    question: "Find Cl₂ demand, if Cl₂ dose of 0.8 mg/L is added to have Cl₂ residual of 0.3 mg/L. Find the dose of bleaching powder required if it contains only 20% of Cl₂.",
    correct_answer: "Cl₂ demand = 0.5 mg/L, Bleaching powder dosage = 2.5 mg/L",
    incorrect_answers: [
      "Cl₂ demand=0.4 mg/L, Bleaching powder dosage=2 mg/L",
      "Cl₂ demand=0.2 mg/L, Bleaching powder dosage=3 mg/L",
      "Cl₂ demand=0.4 mg/L, Bleaching powder dosage=5 mg/L"
    ]
  },
  {
    question: "The design flow rate for a water supply system is:",
    correct_answer: "Maximum of Maximum day demand plus fire demand and Maximum hourly rate",
    incorrect_answers: [
      "Equal to maximum day demand plus fire demand",
      "Equal to maximum hourly rate",
      "Minimum of Maximum day demand plus fire demand and Maximum hourly rate"
    ]
  },
  {
    question: "Which of the following is not a desired property of disinfectants?",
    correct_answer: "Should not provide any residual",
    incorrect_answers: [
      "Must be non-toxic and palatable",
      "Must be dispensable and storable",
      "Destroy pathogens within a reasonable time and in various temperatures"
    ]
  },
  {
    question: "State whether the following statements are True/False. \"The suspended particles tend to escape from the settling basin if the settling velocity exceeds the overflow rate.\"",
    correct_answer: "True",
    incorrect_answers: [
      "False"
    ]
  },
  {
    question: "A 4 number of rapid sand filters treat 20 MLD of water with rate of filtration 4000 lit/hr/m². Find the volume of filtered water required to backwash each filter, if backwashing rate is 5 times rate of filtration. Duration of backwash is 15 mins and it is carried out once in every 24 hours.",
    correct_answer: "156.25 m³",
    incorrect_answers: [
      "260.4 m³",
      "153.9 m³",
      "364.8 m³"
    ]
  },
  {
    question: "Which of the following statement(s) is/are true regarding rapid sand filters?",
    correct_answer: "Because of the higher filtration rates, the area requirement of a rapid filtration plant is about 20% of that required for the slow sand filters.",
    incorrect_answers: [
      "A filter that operates continuously typically requires backwashing on a monthly basis.",
      "Large quantities of backwash water and sludge generated from filtration can be directly discharged to the environment.",
      "Operating a rapid sand filter requires trained personnel."
    ]
  },
  {
    question: "100 ml of water is analyzed and found to contain 2.0 mg of TCE. What is the TCE concentration in the water sample in mg/L?",
    correct_answer: "20 mg/L",
    incorrect_answers: [
      "2 mg/L",
      "200 mg/L",
      "10 mg/L"
    ]
  },
  {
    question: "A gas mixture contains 0.005 moles of carbon monoxide (CO) and 0.995 moles of air. What is the CO concentration in air, expressed in units of ppmv?",
    correct_answer: "5000 ppmv",
    incorrect_answers: [
      "5 ppmv",
      "500 ppmv",
      "50 ppmv"
    ]
  },
  {
    question: "The gas-phase trichloroethylene (TCE) concentration in the air above Lake Superior was 500 micrograms per cubic meter. What is the partial pressure (in atm) of TCE at STP condition?",
    correct_answer: "8.5 × 10⁻⁸ atm",
    incorrect_answers: [
      "8.5 × 10⁻⁶ atm",
      "7.5 × 10⁻⁸ atm",
      "6.5 × 10⁻⁸ atm"
    ]
  },
  {
    question: "There are two gases (A & B) present in a container and exert a pressure of 5 atm on the base of the container. If the volumetric ratio of the gases A:B is 2:3, find the partial pressure exerted by the gas A in the container?",
    correct_answer: "2 atm",
    incorrect_answers: [
      "5 atm",
      "3 atm",
      "1 atm"
    ]
  },
  {
    question: "Which of the following gas exerts the highest partial pressure in the atmosphere?",
    correct_answer: "Oxygen",
    incorrect_answers: [
      "Argon",
      "Methane",
      "Carbon dioxide"
    ]
  },
  {
    question: "Calculate the weight of calcium hydroxide (Ca(OH)₂) present in 2/3M aqueous Ca(OH)₂ solution?",
    correct_answer: "49.3 g",
    incorrect_answers: [
      "23.5 g",
      "51.2 g",
      "74.0 g"
    ]
  },
  {
    question: "The strength of a solution measured as gram equivalent per litre is called",
    correct_answer: "Normality",
    incorrect_answers: [
      "Molality",
      "Molarity",
      "Nolality"
    ]
  },
  {
    question: "Hardness and Alkalinity of water are expressed in terms of",
    correct_answer: "mg/L of CaCO₃",
    incorrect_answers: [
      "mg/L of Ca(HCO₃)₂",
      "mg/L of MgCO₃",
      "mg/L of Al (HCO₃)₃"
    ]
  },
  {
    question: "Calculate the equivalent weight of calcium bicarbonate?",
    correct_answer: "81 g",
    incorrect_answers: [
      "162 g",
      "101 g",
      "40 g"
    ]
  },
  {
    question: "Calculate the normality of the aqueous solution if 30 grams of sulphuric acid is mixed in 1 litre of water?",
    correct_answer: "0.61 N",
    incorrect_answers: [
      "1 N",
      "2 N",
      "0.5 N"
    ]
  },
  {
    question: "Normality depends on which of the following factors?",
    correct_answer: "Dilution of the solution",
    incorrect_answers: [
      "Colour of the solution",
      "Temperature of the solution",
      "Odour of the solution"
    ]
  },
  {
    question: "Select the orthophosphates from the following.",
    correct_answer: "H₃PO₄",
    incorrect_answers: [
      "H₄P₂O<0xE2><0x82><0x87>",
      "H₂PO₄⁻",
      "HP₃O<0xE2><0x82><0x89>²⁻"
    ]
  },
  {
    question: "Which of the following ions are responsible for hardness in water?",
    correct_answer: "Ca²⁺",
    incorrect_answers: [
      "Na⁺",
      "CO₃²⁻",
      "Al³⁺"
    ]
  },
  {
    question: "Which of the following are the different chemical preparation methods for sample analysis?",
    correct_answer: "Chemical oxidation",
    incorrect_answers: [
      "Mixing",
      "Titration",
      "Acid digestion"
    ]
  },
  {
    question: "What are the different solids components present in Total solids?",
    correct_answer: "Total Volatile Solids",
    incorrect_answers: [
      "Fixed Dissolved Solids",
      "Dissolved Oxygen",
      "Fixed Suspended Solids"
    ]
  },
  {
    question: "What is another common term for municipal wastewater?",
    correct_answer: "Sewage",
    incorrect_answers: [
      "Sullage",
      "Refuse",
      "Grit"
    ]
  },
  {
    question: "The main disadvantage of the combined sewerage system is:",
    correct_answer: "Increased treatment plant load",
    incorrect_answers: [
      "Increased construction cost",
      "Difficult cleaning",
      "Reduced flow"
    ]
  },
  {
    question: "What is the main disadvantage of trickling filters?",
    correct_answer: "Ponding due to clogging",
    incorrect_answers: [
      "High power requirements",
      "Ineffective at high flow rates",
      "No solid removal"
    ]
  },
  {
    question: "In the BOD test, what should the final DO be to ensure a valid test?",
    correct_answer: "Not less than 1 mg/L",
    incorrect_answers: [
      "Equal to zero",
      "Close to the initial DO",
      "Greater than 5 mg/L"
    ]
  },
  {
    question: "Why is dilution needed in the BOD test?",
    correct_answer: "To decrease the organic strength of the sample",
    incorrect_answers: [
      "To increase the organic strength of the sample",
      "To increase the DO level",
      "To speed up the reaction rate"
    ]
  },
  {
    question: "What is the purpose of the rotating influent distributor in a trickling filter?",
    correct_answer: "To distribute wastewater uniformly",
    incorrect_answers: [
      "To remove grit",
      "To increase dissolved oxygen",
      "To enhance suspend solids removal"
    ]
  },
  {
    question: "What is the typical detention time for a grit chamber?",
    correct_answer: "1 minute",
    incorrect_answers: [
      "10 minutes",
      "30 minutes",
      "1 hour"
    ]
  },
  {
    question: "Which process removes floating matter such as grease, oils, and fats from wastewater?",
    correct_answer: "Skimming",
    incorrect_answers: [
      "Grit chamber",
      "Screening",
      "Sedimentation"
    ]
  },
  {
    question: "What are the end products of the oxidation of organic matter in the BOD process?",
    correct_answer: "Carbon dioxide and water",
    incorrect_answers: [
      "Methane and hydrogen sulfide",
      "Ammonia and phosphates",
      "Nitrogen gas and sulfur dioxide"
    ]
  },
  {
    question: "What is the population equivalent used to estimate?",
    correct_answer: "The amount of oxygen-demanding substances in wastewater",
    incorrect_answers: [
      "The total population of a city",
      "The flow rate of wastewater",
      "The number of treatment plants needed"
    ]
  },
  {
    question: "In a BOD test, the initial DO of the diluted sample is 8 mg/L, and the final DO after 5 days is 3 mg/L. If the dilution factor is 50, what is the BOD₅?",
    correct_answer: "250 mg/L",
    incorrect_answers: [
      "100 mg/L",
      "400 mg/L",
      "150 mg/L"
    ]
  },
  {
    question: "A standard trickling filter receives a wastewater flow of 1.5 MLD with an influent BOD of 180 mg/L. If the desired effluent BOD is 30 mg/L and the depth is 2m, what is the required volume of the filter media (approximately in ha.m)?",
    correct_answer: "0.205 ha.m",
    incorrect_answers: [
      "0.155 ha.m",
      "0.255 ha.m",
      "0.305 ha.m"
    ]
  },
  {
    question: "A grit chamber is designed to maintain a flow-through velocity of 0.3 m/s with a flow rate of 0.5 m³/s. What is the required cross-sectional area of the grit chamber?",
    correct_answer: "1.67 m²",
    incorrect_answers: [
      "0.67 m²",
      "2.67 m²",
      "3.67 m²"
    ]
  },
  {
    question: "If 5 day BOD at 20 °C is 300 mg/l. Find 3 day BOD at 10 °C and 7 day BOD at 30°C. Take K₂₀ = 0.23 d⁻¹ (base e)",
    correct_answer: "170 mg/l, 410 mg/l",
    incorrect_answers: [
      "160,406",
      "180,415",
      "190,420"
    ]
  },
  {
    question: "How can ponding be avoided in trickling filters?",
    correct_answer: "By adding chlorine or copper sulfate",
    incorrect_answers: [
      "By increasing the flow rate",
      "By reducing the filter depth",
      "By increasing the organic loading"
    ]
  },
  {
    'question': "Why does a high BOD level in a receiving water body pose a threat to aquatic life?",
    'correct_answer': "It depletes dissolved oxygen needed by aquatic organisms for survival.",
    'incorrect_answers': [
      "It reduces carbon dioxide concentrations required for photosynthesis.",
      "It causes excessive nutrient enrichment leading to algal blooms.",
      "It increases the temperature of water, causing thermal pollution."
    ]
  },
  {
    'question': "Which of the following processes reduces atmospheric nitrogen (N₂) into a form usable by plants?",
    'correct_answer': "Nitrogen fixation",
    'incorrect_answers': [
      "Ammonification",
      "Denitrification",
      "Mineralization"
    ]
  },
  {
    'question': "In the context of eutrophication, which nutrient is typically considered the limiting factor in freshwater ecosystems?",
    'correct_answer': "Phosphorus",
    'incorrect_answers': [
      "Nitrogen",
      "Carbon",
      "Sulfur"
    ]
  },
  {
    'question': "What is the discharge limit of BOD (mg/L) in surface water?",
    'correct_answer': "30 mg/L",
    'incorrect_answers': [
      "50 mg/L",
      "5 mg/L",
      "100 mg/L"
    ]
  },
  {
    'question': "In a BOD test, what does the term \"seed\" refer to?",
    'correct_answer': "Microorganisms added to initiate the oxidation process",
    'incorrect_answers': [
      "The organic matter in the sample",
      "A chemical oxidant used for the reaction",
      "The initial dissolved oxygen content"
    ]
  },
  {
    'question': "Which of the following is the biggest sink of carbon dioxide?",
    'correct_answer': "Ocean",
    'incorrect_answers': [
      "Plants",
      "Dead animals",
      "Soil"
    ]
  },
  {
    'question': "A 2% solution of a sewage sample is incubated for 5 days at 20 °C. The depletion of oxygen was found to be 4 ppm. Determine the BOD of the sewage?",
    'correct_answer': "200 mg/L",
    'incorrect_answers': [
      "150 mg/L",
      "300 mg/L",
      "250 mg/L"
    ]
  },
  {
    'question': "Which of the following environmental event fixes nitrogen present in air?",
    'correct_answer': "Lightning",
    'incorrect_answers': [
      "Animals",
      "Forest fires",
      "Both b and c"
    ]
  },
  {
    'question': "10 mL of wastewater sample is mixed with dilution water to make a total volume of 300 mL. It is desirable to have at least 1.5 mg/L DO drop during the 5-day test. What is the minimum detectable BOD₅ with this dilution?",
    'correct_answer': "45 mg/L",
    'incorrect_answers': [
      "30 mg/L",
      "25 mg/L",
      "12 mg/L"
    ]
  },
  {
    'question': "Which parameter is used to express the theoretical oxygen demand (ThOD) of organic matter in water?",
    'correct_answer': "Oxygen equivalent based on stoichiometry",
    'incorrect_answers': [
      "Dissolved oxygen (DO)",
      "Chemical oxygen demand (COD)",
      "Biochemical oxygen demand (BOD)"
    ]
  },
  {
    'question': "What distinguishes chemical oxygen demand (COD) from biochemical oxygen demand (BOD)?",
    'correct_answer': "COD uses a chemical oxidation, while BOD relies on microbial oxidation.",
    'incorrect_answers': [
      "COD measures total organic and inorganic demand, while BOD measures only carbonaceous demand.",
      "COD is always lower than BOD for the same sample.",
      "COD is determined over five days, while BOD measures the instantaneous oxygen demand."
    ]
  },
  {
    'question': "Why is the sulfur cycle considered significant for geological processes?",
    'correct_answer': "Sulfur drives the formation of minerals in rocks.",
    'incorrect_answers': [
      "Sulfur is primarily found in the biosphere.",
      "Sulfur affects the pH of rainwater.",
      "Sulfur is a greenhouse gas."
    ]
  },
  {
    'question': "What are the end products of acetogenesis step in the anaerobic digestion?",
    'correct_answer': "Acetic acid",
    'incorrect_answers': [
      "Simple sugars",
      "Organic acid",
      "Methane"
    ]
  },
  {
    'question': "Which biogeochemical cycle does NOT include a gaseous phase?",
    'correct_answer': "Phosphorus cycle",
    'incorrect_answers': [
      "Nitrogen cycle",
      "Carbon cycle",
      "Sulfur cycle"
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
