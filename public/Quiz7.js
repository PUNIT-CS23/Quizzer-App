// experimental biotech
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
        question: "The expression of electrophoretic mobility can be given as _________________.",
        correct_answer: "v ∝  ze",
        incorrect_answers: ["v ∝  zr", "v ∝  er", "v ∝  re"]
    },
    {
        question: "Agarose Gel Electrophoresis is an example of ________________.",
        correct_answer: "Horizontal Gel electrophoresis",
        incorrect_answers: ["PAGE", "Moving Boundary Electrophoresis", "Vertical Gel Electrophoresis"]
    },
    {
        question: "__________________ is an initiator of acrylamide polymerization.",
        correct_answer: "Ammonium persulfate",
        incorrect_answers: ["TEMED", "Tris-HCl", "Acrylamide"]
    },
    {
        question: "The full-form of TEMED is ______________________.",
        correct_answer: "N,N,N’,N’-tetramethylenediamine",
        incorrect_answers: ["N,N-tetramethylenediamine", "N,N’-tetramethylenediamide.", "N’,N’-Tetramethyldiamine."]
    },
    {
        question: "The pore size in a poly-acrylamide gel is determined by the _________________________.",
        correct_answer: "Ratio of the concentration of Acrylamide and Bis-acrylamide.",
        incorrect_answers: ["Amount of APS used for gel formation", "Amount of TEMED used for the catalysis of the crosslinking reaction.", "Ratio of the concentration of APS and TEMED."]
    },
    {
        question: "If the amount of crosslinking reaction is more for a polyacrylamide gel, the pore size will be ________________.",
        correct_answer: "Smaller",
        incorrect_answers: ["Larger", "Unchanged", "No change in the pore size, but the number of pores will decrease."]
    },
    {
        question: "The role of Bromophenol Blue in loading dye is ________________.",
        correct_answer: "To understand the progression of proteins through the gel.",
        incorrect_answers: ["To stain the proteins.", "To stack the proteins properly.", "To check the pH of the sample."]
    },
    {
        question: "During Stacking, the sample gets sandwiched between ________________________.",
        correct_answer: "Slow moving Glycine and Fast-moving Tris",
        incorrect_answers: ["Slow-moving Tris and Fast-moving Glycine", "The Loading well and Glycine", "The loading well and Tris"]
    },
    {
        question: "In SDS-PAGE the resolution is based on the _______________ of the proteins.",
        correct_answer: "Molecular weight",
        incorrect_answers: ["Electrical charge", "Shape", "Size"]
    },
    {
        question: "An SDS-PAGE experiment is performed. The protein covers 4.5 cm, while the solvent front covers 10 cm. The Rf of the protein is ______________.",
        correct_answer: "0.45",
        incorrect_answers: ["0.35", "0.75", "0.65"]
    },
    {
        question: "Destaining Solution is used for __________________.",
        correct_answer: "Removal of CBB staining solution from protein Bands",
        incorrect_answers: ["Removal of CBB staining solution bound non-specifically to Polyacrylamide Gel", "Removal of Bromophenol Blue Stain", "Remove stains due to contaminations."]
    },
    {
        question: "EtBr is used for the staining of ____________.",
        correct_answer: "DNA",
        incorrect_answers: ["Protein", "RNA", "Lipids"]
    },
    {
        question: "In Native PAGE, a sample gives a molecular weight band of 189 kDa. In SDS-PAGE, the same sample gives two bands of molecular weights, 55 kDa and 67 kDa. The protein is ____________.",
        correct_answer: "Heterodimeric",
        incorrect_answers: ["Homodimeric", "Heterotrimeric", "Heterotetrametric."]
    },
    {
        question: "Agarose-acrylamide composite gels are used to analyse protein samples of Molecular weight of ____________.",
        correct_answer: "20-500 kDa",
        incorrect_answers: ["20-100 kDa", "100-200 kDa", "500-2000 kDa"]
    },
    {
        question: "A polyacrylamide gel cannot be cast on an agarose gel apparatus due to the presence of oxygen, which hampers the _________________.",
        correct_answer: "Polymerisation reaction",
        incorrect_answers: ["Gravitational force", "Resolution of protein samples", "Electric Field"]
    },
    {
        question: "__________ is used for strong acids and other fuming chemicals and solvents.",
        correct_answer: "Chemical Fume Hood",
        incorrect_answers: ["Laminar Hood", "Bio-Safety Hood", "Exhaust Fans"]
    },
    {
        question: "Biosafety level ___________ equipment is required to work with the Ebola virus.",
        correct_answer: "4",
        incorrect_answers: ["3", "2", "1"]
    },
    {
        question: "Disinfection is carried out with ___________.",
        correct_answer: "Quaternary ammonium salts",
        incorrect_answers: ["Soap", "Hydrogen peroxide", "Water"]
    },
    {
        question: "The F in the given equation V=EConstant+ 2.303 RTFpH is _______________.",
        correct_answer: "Faraday constant",
        incorrect_answers: ["Fuchs Rosenthall Constant", "Feigenbaum Constant", "Fransen-Robinson Constant"]
    },
    {
        question: "Sodium error gives ______________.",
        correct_answer: "Falsely lower pH",
        incorrect_answers: ["Falsely higher pH", "No change in pH", "Minor deviations in pH"]
    },
    {
        question: "Cleaning optically polished glassware’s with ethanolic KOH or other strong bases will cause _______________.",
        correct_answer: "etching",
        incorrect_answers: ["decontamination", "sterilization", "sanitization"]
    },
    {
        question: "Glass pipets with protein contamination can be washed with ____________.",
        correct_answer: "Chromic Acid",
        incorrect_answers: ["Nitric acid", "Sulfuric acid", "Carbonic Acid"]
    },
    {
        question: "Pyrogens are _______________.",
        correct_answer: "Metabolic by-products of microorganisms.",
        incorrect_answers: ["Inflammable contaminants", "Waste products", "Anti-pyrectic products"]
    },
    {
        question: "To prepare 80 ml 2% agarose gel solution, the amount of agarose required is__.",
        correct_answer: "1.6 gm",
        incorrect_answers: ["2 mg", "1 gm", "1 mg"]
    },
    {
        question: "To prepare a 100 ml NaCl solution of concentration 10 mM, the amount of NaCl required is _________________. (The molecular weight of NaCl is 58.44 g/mol)",
        correct_answer: "58.44 mg or 0.05844 gm",
        incorrect_answers: ["58.44 g", "0.58 g", "0.5844 g"]
    },
    {
        question: "For a reaction A+B=C , the Keq is ____________.",
        correct_answer: "[C]A[B]",
        incorrect_answers: ["A[B][C]", "[B][A][C]", "A[B][C]"]
    },
    {
        question: "The pH of a system is defined as the ___________.",
        correct_answer: "– log [H+]",
        incorrect_answers: ["– log [OH-]", "log [H+]", "log [OH-]"]
    },
    {
        question: "The Bicarbonate buffer helps to maintain the ____________________.",
        correct_answer: "pH of Blood",
        incorrect_answers: ["Temperature of Blood", "Concentration of Blood", "Circulation of Blood"]
    },
    {
        question: "Trypsin has an optimal pH of ______________.",
        correct_answer: "7.4",
        incorrect_answers: ["1.5", "3.7", "9.2"]
    },
    {
        question: "A solution contains 0.35 M CH3COONa  0.45M of CH3COOH. The pH of the solution is ___________________. (pKa of CH3COOH=4.74 )",
        correct_answer: "4.63",
        incorrect_answers: ["4.78", "3.99", "4.89"]
    },
    {
      question: "The term “Chromatography was coined by _______________________.",
      correct_answer: "Michaell Tsvet",
      incorrect_answers: ["Michael Faraday", "Michael Cain", "Michael Jordan"]
  },
  {
      question: "The partition coefficient of stationary phase A and mobile phase B can be expressed as Kd = _____________________.",
      correct_answer: "Concentration of Phase A / Concentration of Phase B",
      incorrect_answers: ["Concentration of Phase B / Concentration of Phase A", "Charge of Phase B / Charge of Phase A", "Charge of Phase A / Charge of Phase B"]
  },
  {
      question: "The plot of elution volume vs absorbance is known as a ___________.",
      correct_answer: "Chromatogram",
      incorrect_answers: ["Histogram", "Spectra", "Volcano Plot"]
  },
  {
      question: "Retention time is the time ___________________________.",
      correct_answer: "taken by the analyte to come out of the column",
      incorrect_answers: ["taken by the analyte to get inside the column", "taken by the solvent inside the column", "taken by the solvent to get inside the column"]
  },
  {
      question: "The formula for resolution of a chromatographic technique is _______________.",
      correct_answer: "Rs = Δtr / Wav",
      incorrect_answers: ["Rs = Wav / ΔtR", "Rs = Wav * tR", "Rs = ΔtR / WavV"]
  },
  {
      question: "Ion Exchange chromatography separates analytes based on their ________________.",
      correct_answer: "Charge",
      incorrect_answers: ["Size", "Hydrophobicity", "Molecular weight"]
  },
  {
      question: "In cation exchange chromatography, the matrix has an affinity for molecules that are __________________________.",
      correct_answer: "Positively Charged",
      incorrect_answers: ["Negatively Charged", "Uncharged", "It does not depend on the charge."]
  },
  {
      question: "In Hydrophobic interaction Chromatography, ___________ are immobilised on the matrix.",
      correct_answer: "Hydrophobic groups",
      incorrect_answers: ["Positively charged Groups", "Negatively Charged Groups", "Hydrophilic Groups"]
  },
  {
      question: "____________ helps in the binding of protein to matrix in Hydrophobic interaction Chromatography.",
      correct_answer: "Salting out",
      incorrect_answers: ["Salting in", "Hydrophilic patches", "Charge"]
  },
  {
      question: "0.05% of Sodium azide is used in column chromatography as it helps",
      correct_answer: "To prevent microbial growth while storing",
      incorrect_answers: ["To remove non-specifically bound proteins", "For washing the columns after elution", "To equilibrate the column"]
  },
  {
      question: "The Partition coefficient, Kd depends on",
      correct_answer: "Both Physical and Chemical properties of the molecule",
      incorrect_answers: ["Only Physical properties of the molecule", "Only Chemical properties of the molecule", "Is independent of the Physical and Chemical properties of the molecule"]
  },
  {
      question: "The increase in Height of distribution plane (H) will result in which of the following results?",
      correct_answer: "Decrease in resolution of the column",
      incorrect_answers: ["Increase in resolution of the column", "Resolution depends on the height of the column and thus no change is observed", "Increase in number of distribution planes (N)"]
  },
  {
      question: "Elution of bound protein from HIC can be achieved by",
      correct_answer: "By decreasing salt concentration",
      incorrect_answers: ["By changing the pH", "By increasing salt concentration", "with guanidine hydrochloride"]
  },
  {
      question: "The chromatographic technique used to separate analytes based on their size is",
      correct_answer: "Gel Filtration Chromatography",
      incorrect_answers: ["Ion-Exchange Chromatography", "Affinity Chromatography", "Hydrophobic Interaction Chromatography"]
  },
  {
      question: "Salting in is the process by which _______________.",
      correct_answer: "A low amount of salt increases the solubility of protein",
      incorrect_answers: ["A high amount of salt increases the solubility of protein", "High amount of salt-inducing protein precipitation", "Low amount of salt exposing a hydrophobic group of proteins"]
  },
  {
    question: "Gel filtration Chromatography separates protein based on _______________.",
    correct_answer: "Surface area",
    incorrect_answers: ["Charge", "Hydrophobicity", "Affinity"]
},
{
    question: "In the equation Vt = Vg + Vi + Vo, Vo refers to ______________.",
    correct_answer: "Void volume",
    incorrect_answers: ["Total Volume", "Volume of the gel matrix", "Pore volume"]
},
{
    question: "The hydrodynamic radius of 4 proteins are as follows: W = 4.65 nm, X = 1.03 nm, Y = 3.94 nm, Z = 1.94 nm. The order of retention time for these proteins will be __.",
    correct_answer: "X>Z>Y>W",
    incorrect_answers: ["W>X>Y>Z", "X>Y>Z>W", "W>Y>Z>X"]
},
{
    question: "The smaller protein molecules enter the ___________ part of the beads.",
    correct_answer: "Inner",
    incorrect_answers: ["Outer", "Does not enter the beads", "Exterior"]
},
{
    question: "The choice of the matrix for a given gel filtration chromatographic experiment depends on the ______________.",
    correct_answer: "Fractionation Range of the column",
    incorrect_answers: ["Charge on the matrix", "Hydrophobicity of the matrix", "Affinity of the matrix"]
},
{
    question: "The molecular weight of a protein is 300 kDa. The same molecule gave two bands in an SDS page, one of 90 kDa, and the other of 180 kDa. The protein is a _____________.",
    correct_answer: "Heterotrimeric",
    incorrect_answers: ["Heterodimeric", "Heterotetrametric", "Monomeric"]
},
{
    question: "The analyte with a Kd value greater than 1 is ____________________.",
    correct_answer: "Adsorbed by the column",
    incorrect_answers: ["excluded from pores of the column", "completely inside the pores of the column", "resolved at a lower volume"]
},
{
    question: "To regenerate the column for gel filtration chromatography, a ____________ is passed through the column.",
    correct_answer: "Salt solution",
    incorrect_answers: ["Imidazole", "6M Guanidium Hydrochloride solution", "EDTA solution"]
},
{
    question: "To study the protein folding using Gel Filtration Chromatography, the protein is treated with _______________.",
    correct_answer: "Urea",
    incorrect_answers: ["Salt solution", "Imidazole Buffer", "Glutathione Buffer"]
},
{
    question: "Three proteins, A, B and C, have similar molecular weights but different shapes. A is spherical, B is rod-shaped, C is randomly coiled. The order of radius of gyration of these proteins are ___________.",
    correct_answer: "RgB < RgC < RgA",
    incorrect_answers: ["RgA < RgB < RgC", "RgB < RgA < RgC", "RgA < RgC < RgB"]
},
{
    question: "______________ are used for making the stationary phase of a gel filtration column.",
    correct_answer: "Resin Beads",
    incorrect_answers: ["Agarose", "Dextran", "Carbon Nanoparticles"]
},
{
    question: "To obtain a CD of a purified protein in Ammonium sulfate buffer, we need to perform ___________.",
    correct_answer: "Desalting",
    incorrect_answers: ["Phenol Chloroform extraction", "Imidazole treatment", "Urea treatment"]
},
{
    question: "If a protein is incubated with 8M urea for a long period of time, it will be eluted with _____________.",
    correct_answer: "Vo",
    incorrect_answers: ["Vg", "Vi", "Vt"]
},
{
    question: "To purify proteins based on the molecular weight, _____________ is used.",
    correct_answer: "Size exclusion Chromatography",
    incorrect_answers: ["Ion exchange chromatography", "Affinity Chromatography", "Dialysis"]
},
{
    question: "A protein is treated with 2M and 8M urea. The retention time of the different species in increasing order would be ____________.",
    correct_answer: "Unfolded Protein > partially unfolded protein > native protein",
    incorrect_answers: ["Unfolded Protein > native protein > partially unfolded protein", "Native protein > Partially unfolded protein > Unfolded protein", "Partially unfolded protein > native protein > unfolded protein"]
},
{
  question: "________________ is used to elute the analyte during Affinity Chromatography.",
  correct_answer: "Counter Ligand",
  incorrect_answers: ["Ligand", "Receptor", "Counter receptor"]
},
{
  question: "Antibody-antigen receptor-ligand pairs are used in ______________.",
  correct_answer: "Bio-affinity Chromatography",
  incorrect_answers: ["Gel filtration Chromatography", "Ion Exchange Chromatography", "Pseudo affinity Chromatography"]
},
{
  question: "Ni2+ is used to purify proteins with a __________________ .",
  correct_answer: "6x His Tag",
  incorrect_answers: ["Streptavidin Tag", "Nus Tag", "Myc Tag"]
},
{
  question: "In irreversible affinity chromatography, the ligand-receptor pair interacts with __________.",
  correct_answer: "Covalent bonding",
  incorrect_answers: ["Hydrogen Bonding", "Vander Waals Interaction", "Hydrophobic Interaction"]
},
{
  question: "Lysine is used as a receptor to purify ______________________.",
  correct_answer: "rRNA",
  incorrect_answers: ["Poly U mRNA", "Glycoprotein", "Immunoglobulin"]
},
{
  question: "Carbodimides helps to immobilize ________________ functional groups present in receptors.",
  correct_answer: "Amine",
  incorrect_answers: ["Carboxyl", "Hydroxyl", "Esters"]
},
{
  question: "GST tags bind to ___________________ immobilized on the matrix.",
  correct_answer: "Glutathione",
  incorrect_answers: ["Glucose", "Glycogen", "Glutaraldehydes"]
},
{
  question: "Booster injections result in the formation of _________________.",
  correct_answer: "Memory B cells",
  incorrect_answers: ["Monoclonal antibodies", "T cells", "Macrophages"]
},
{
  question: "Affinity chromatography can be used to identify the interacting partner of the ______________.",
  correct_answer: "analyte",
  incorrect_answers: ["buffer", "urea", "matrix"]
},
{
  question: "____________________ is used for the blocking of nonspecific sites on the beads of a column.",
  correct_answer: "BSA",
  incorrect_answers: ["Salt", "Receptor", "Ligand"]
},
{
  question: "To identify the peptide sequence of a protein after affinity purification, _______________ is used.",
  correct_answer: "Mass spectrometry",
  incorrect_answers: ["UV spectroscopy", "Fluorescence spectroscopy", "Circular Dichroism"]
},
{
  question: "The cytokine levels of a lymphocyte can be measured by ______________ after performing affinity chromatography.",
  correct_answer: "ELISA",
  incorrect_answers: ["MALDI", "TOF", "Hybridoma technique"]
},
{
  question: "Antigens are isolated in denatured conditions using ____________.",
  correct_answer: "Electro-elution of Antigen from SDS-PAGE",
  incorrect_answers: ["Gel Filtration chromatography", "Ion Exchange Chromatography", "Affinity Chromatography"]
},
{
  question: "Proteins with DNA-binding sites can be purified with the help of the _____________________.",
  correct_answer: "Heparin-coupled matrix",
  incorrect_answers: ["CnBr activated Polysaccharide Matrix", "Biotinylated matrix", "Streptavidin coupled matrix"]
},
{
  question: "Non-specific binding of immobilized receptors with the analyte protein is done by ___________________.",
  correct_answer: "equilibration with 0.5 M NaCl solution",
  incorrect_answers: ["equilibration with 0.5 M Imidazole solution", "equilibration with 0.5 M urea", "equilibration with 0.5 M GnHCL"]
},
{
  question: "__________________ confers the immunity against cancer.",
  correct_answer: "Cell-mediated Immunity",
  incorrect_answers: ["Humoral Mediated Immunity", "Innate Immunity", "Compliments"]
},
{
  question: "Each antibody is made up of ________________________.",
  correct_answer: "Two heavy chains and two light chains",
  incorrect_answers: ["Two heavy chains and one light chain", "One light chain and one heavy chain", "One light chain and three heavy chains"]
},
{
  question: "______________ region of the antibody is susceptible to protease cleavage.",
  correct_answer: "Hinge",
  incorrect_answers: ["Variable", "Effector", "Constant"]
},
{
  question: "________________ is NOT an antigen-presenting cell.",
  correct_answer: "T cell",
  incorrect_answers: ["Macrophages", "B cell", "Dendritic cells"]
},
{
  question: "________________ cells differentiate to form the plasma cells.",
  correct_answer: "B cell",
  incorrect_answers: ["Macrophages", "T cell", "Dendritic cells"]
},
{
  question: "Monoclonal antibody is generated by __________________.",
  correct_answer: "Hybridoma Technique",
  incorrect_answers: ["Purification of antibodies from the serum", "SDS PAGE", "Western Blotting"]
},
{
  question: "During Monoclonal Antibody production, B cells are isolated from __________________.",
  correct_answer: "Spleen",
  incorrect_answers: ["Blood", "Liver", "Lymph"]
},
{
  question: "Antibody titres can be detected by ____________.",
  correct_answer: "ELISA",
  incorrect_answers: ["Microscopy", "Northern Blotting", "HPLC"]
},
{
  question: "____________ is the process of linking together of antigens by antibodies and formation of visible aggregates.",
  correct_answer: "Agglutination",
  incorrect_answers: ["Precipitation", "Proliferation", "Gelation"]
},
{
  question: "Blood Group Typing is an example of _______________.",
  correct_answer: "Direct Agglutination",
  incorrect_answers: ["Indirect Agglutination", "Precipitation", "Gelation"]
},
{
  question: "_______________ is an example of anticoagulant.",
  correct_answer: "EDTA",
  incorrect_answers: ["phenol Red", "KCl", "Glucose"]
},
{
  question: "_______________ is an example of Immunodiffusion test.",
  correct_answer: "Ouchterlony method",
  incorrect_answers: ["ELISA", "Western Blotting", "Northern Blotting"]
},
{
  question: "The _____________ of the precipitin ring in Radial immunodiffusion is directly proportional to the concentration of the antigen.",
  correct_answer: "Diameter",
  incorrect_answers: ["Area", "Circumference", "Surface area"]
},
{
  question: "With the help of Immunoprecipitation (IP), we can understand the ________________ of a protein.",
  correct_answer: "Interacting Proteins",
  incorrect_answers: ["Size", "Molecular weight", "pI"]
},
{
  question: "The reagent used to develop an HRP based secondary antibody system in western blot is",
  correct_answer: "Luminol/ H2O2",
  incorrect_answers: ["BCIP/NBT", "Dimezone", "Streptavidin"]
},
{
  question: "_____________ is the prokaryotic circular chromosomal DNA.",
  correct_answer: "Nucleoid",
  incorrect_answers: ["Plasmid", "Nucleolus", "Pili"]
},
{
  question: "The bacterial _______________ is made up of peptidoglycan.",
  correct_answer: "Cell wall",
  incorrect_answers: ["Plastids", "Cell membrane", "Nucleus"]
},
{
  question: "Mesosomes are also known as ______________.",
  correct_answer: "Chondrioids",
  incorrect_answers: ["Chloroplasts", "Peroxisome", "Vacuoles"]
},
{
  question: "__________________ is not a eukaryotic cell.",
  correct_answer: "Bacteria",
  incorrect_answers: ["Animal cells", "Yeast", "Fungi"]
},
{
  question: "Microbiology media are autoclaved at ________________ for 20 minutes.",
  correct_answer: "121°C",
  incorrect_answers: ["100°C", "10 °C", "58 °C"]
},
{
  question: "______________ is a commonly used media for the maintenance and propagation of P. pastoris and S. cerevisiae.",
  correct_answer: "YPD broth",
  incorrect_answers: ["CSM media", "YPGal", "YNB"]
},
{
  question: "______________ is a mammalian cell culture media.",
  correct_answer: "DMEM",
  incorrect_answers: ["Tryptone Broth", "YNB", "Hink's TNM-FH media"]
},
{
  question: "The role of FBS in cell culture media is ______________.",
  correct_answer: "to supply nutritional content",
  incorrect_answers: ["to help the cells adhere to the culture dish", "to help the cells grow in layers", "to help the growth of organoids"]
},
{
  question: "______________ antibiotics are commonly used in mammalian cell culture media.",
  correct_answer: "Penicillin and streptomycin",
  incorrect_answers: ["Ampicillin", "Ampicillin and Kanamycin", "Penicillin"]
},
{
  question: "Filtration of cell culture media is done to ____________ the media.",
  correct_answer: "Sterilize",
  incorrect_answers: ["froth", "Solubilize", "Anticoagulate"]
},
{
  question: "For the in-vitro cell culture of Drosophila ___________is used.",
  correct_answer: "Schneider’s Drosophila media",
  incorrect_answers: ["Schneider’s Dulbeco media", "Schneider’s Peptone media", "Schneider’s Insect media"]
},
{
  question: "____________________ does not contain DNA.",
  correct_answer: "Peroxisome",
  incorrect_answers: ["Nucleus", "Mitochondria", "Chloroplast"]
},
{
  question: "Ribosomes are pelleted down at __________________.",
  correct_answer: "300000 g",
  incorrect_answers: ["300 g", "3000 g", "30000 g"]
},
{
  question: "Periplasmic Fraction is isolated to ________________.",
  correct_answer: "purify periplasmic protein",
  incorrect_answers: ["To isolate cell organelles", "To isolate the nucleus", "To isolate mitochondria"]
},
{
  question: "In a CsCl density gradient centrifugation, the order of the gradient components is ___________________.",
  correct_answer: "RNA, DNA, proteins, organelles",
  incorrect_answers: ["DNA, RNA, Proteins, organelles", "Organelles, proteins, RNA, DNA", "RNA, DNA, organelles, proteins"]
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
    const quizName = "Experimental Biotech"; // Get quiz name dynamically from input
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
