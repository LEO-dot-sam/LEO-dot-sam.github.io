const THEMES = {
  "All Medicine": "theme-all",
  "Cardiology": "theme-cardiology",
  "Neurology": "theme-neurology",
  "Radiology": "theme-radiology",
  "Surgery": "theme-surgery",
  "Pediatrics": "theme-pediatrics",
  "OB/GYN": "theme-obgyn",
  "Oncology": "theme-oncology",
  "Infectious Disease": "theme-infectious-disease",
  "Emergency Medicine": "theme-emergency-medicine",
  "Psychiatry": "theme-psychiatry",
  "Dermatology": "theme-dermatology",
  "Nephrology": "theme-nephrology",
  "Pulmonology": "theme-pulmonology",
  "Endocrinology": "theme-endocrinology",
  "Hematology": "theme-hematology",
  "Pharmacology": "theme-pharmacology",
  "Pathology": "theme-pathology",
  "Anatomy": "theme-anatomy"
};

const WORDS = [
  { word: "AORTA", specialty: "Anatomy", category: "Anatomy / Cardiology", hint: "The largest artery in the body." },
  { word: "ATRIA", specialty: "Cardiology", category: "Anatomy / Cardiology", hint: "The two upper chambers of the heart." },
  { word: "VALVE", specialty: "Cardiology", category: "Cardiology", hint: "A structure that prevents backward blood flow." },
  { word: "STENT", specialty: "Cardiology", category: "Cardiology / Interventional Medicine", hint: "A small tube used to keep a vessel open." },
  { word: "SYNCOPE", specialty: "Cardiology", category: "Cardiology / Neurology", hint: "Transient loss of consciousness from cerebral hypoperfusion." },
  { word: "MURMUR", specialty: "Cardiology", category: "Physical Exam / Cardiology", hint: "Abnormal heart sound caused by turbulent flow." },
  { word: "STROKE", specialty: "Neurology", category: "Neurology", hint: "Acute neurologic deficit due to vascular injury." },
  { word: "SEIZURE", specialty: "Neurology", category: "Neurology", hint: "Abnormal synchronous neuronal activity." },
  { word: "APHASIA", specialty: "Neurology", category: "Neurology", hint: "Language impairment often associated with dominant hemisphere injury." },
  { word: "DOPPLER", specialty: "Radiology", category: "Imaging / Ultrasound", hint: "Technique used to assess flow velocity." },
  { word: "ULTRASOUND", specialty: "Radiology", category: "Imaging", hint: "Imaging modality using high-frequency sound waves." },
  { word: "CONTRAST", specialty: "Radiology", category: "Radiology", hint: "Agent used to improve visualization on imaging." },
  { word: "SUTURE", specialty: "Surgery", category: "Surgery", hint: "Material used to close tissue." },
  { word: "SCALPEL", specialty: "Surgery", category: "Surgery", hint: "A sharp surgical cutting instrument." },
  { word: "SEPSIS", specialty: "Infectious Disease", category: "Infectious Disease", hint: "Life-threatening organ dysfunction due to infection." },
  { word: "VIRUS", specialty: "Infectious Disease", category: "Infectious Disease", hint: "A pathogen requiring host cells to replicate." },
  { word: "ASTHMA", specialty: "Pulmonology", category: "Pulmonology", hint: "Reversible airway obstruction with bronchial hyperresponsiveness." },
  { word: "HYPOXIA", specialty: "Pulmonology", category: "Physiology / Pulmonology", hint: "Insufficient oxygen at the tissue level." },
  { word: "ANEMIA", specialty: "Hematology", category: "Hematology", hint: "Low hemoglobin or red blood cell mass." },
  { word: "PLASMA", specialty: "Hematology", category: "Hematology", hint: "Liquid component of blood." },
  { word: "CANCER", specialty: "Oncology", category: "Oncology", hint: "Uncontrolled malignant cell growth." },
  { word: "TUMOR", specialty: "Oncology", category: "Oncology", hint: "Abnormal mass of tissue." },
  { word: "BIOPSY", specialty: "Pathology", category: "Pathology / Procedures", hint: "Tissue sampling for diagnosis." },
  { word: "FIBROSIS", specialty: "Pathology", category: "Pathology", hint: "Excess deposition of connective tissue." },
  { word: "INSULIN", specialty: "Endocrinology", category: "Endocrinology / Pharmacology", hint: "A hormone used to lower blood glucose." },
  { word: "THYROID", specialty: "Endocrinology", category: "Endocrinology", hint: "Neck gland that regulates metabolism." },
  { word: "NEPHRON", specialty: "Nephrology", category: "Renal", hint: "Functional unit of the kidney." },
  { word: "DIURESIS", specialty: "Nephrology", category: "Renal / Cardiology", hint: "Increased urine production, often targeted in heart failure." },
  { word: "STATIN", specialty: "Pharmacology", category: "Pharmacology / Cardiology", hint: "A drug class used to lower LDL cholesterol." },
  { word: "OPIOID", specialty: "Pharmacology", category: "Pharmacology", hint: "Analgesic drug class acting on opioid receptors." },
  { word: "LUPUS", specialty: "Rheumatology", category: "Rheumatology", hint: "Autoimmune disease classically associated with anti-dsDNA antibodies." },
  { word: "MANIA", specialty: "Psychiatry", category: "Psychiatry", hint: "Elevated mood state with decreased need for sleep." },
  { word: "DELIRIUM", specialty: "Psychiatry", category: "Psychiatry / Medicine", hint: "Acute fluctuating disturbance in attention and awareness." },
  { word: "ECZEMA", specialty: "Dermatology", category: "Dermatology", hint: "Inflammatory itchy skin condition." },
  { word: "NEVUS", specialty: "Dermatology", category: "Dermatology", hint: "A mole." },
  { word: "PLACENTA", specialty: "OB/GYN", category: "OB/GYN", hint: "Organ supporting fetal oxygen and nutrient exchange." },
  { word: "UTERUS", specialty: "OB/GYN", category: "OB/GYN", hint: "Muscular organ that carries pregnancy." },
  { word: "VACCINE", specialty: "Pediatrics", category: "Pediatrics / Preventive Medicine", hint: "Biologic preparation that stimulates immunity." },
  { word: "FONTANELLE", specialty: "Pediatrics", category: "Pediatrics", hint: "Soft spot on an infant's skull." },
  { word: "TRAUMA", specialty: "Emergency Medicine", category: "Emergency Medicine", hint: "Physical injury requiring acute evaluation." },
  { word: "TRIAGE", specialty: "Emergency Medicine", category: "Emergency Medicine", hint: "Process of prioritizing patients by acuity." }
];

const MAX_ATTEMPTS = 6;
let selectedSpecialty = localStorage.getItem("medwordleSpecialty") || "All Medicine";
let answerObj;
let answer;
let currentRow = 0;
let gameOver = false;
let guesses = [];

const board = document.getElementById("board");
const categoryEl = document.getElementById("category");
const hintEl = document.getElementById("hint");
const messageEl = document.getElementById("message");
const form = document.getElementById("guessForm");
const input = document.getElementById("guessInput");
const hintBtn = document.getElementById("hintBtn");
const newGameBtn = document.getElementById("newGameBtn");
const keyboard = document.getElementById("keyboard");
const specialtySelect = document.getElementById("specialtySelect");

function classNameForSpecialty(specialty) {
  return THEMES[specialty] || "theme-all";
}

function applyTheme(specialty) {
  Object.values(THEMES).forEach(cls => document.body.classList.remove(cls));
  document.body.classList.add(classNameForSpecialty(specialty));
}

function chooseWord() {
  let pool = WORDS;
  if (selectedSpecialty !== "All Medicine") {
    pool = WORDS.filter(item => item.specialty === selectedSpecialty);
  }

  if (!pool.length) pool = WORDS;

  const index = Math.floor(Math.random() * pool.length);
  answerObj = pool[index];
  answer = answerObj.word.toUpperCase();
}

function initGame() {
  applyTheme(selectedSpecialty);
  chooseWord();
  currentRow = 0;
  gameOver = false;
  guesses = [];
  categoryEl.textContent = selectedSpecialty === "All Medicine" ? answerObj.category : selectedSpecialty;
  hintEl.textContent = `Hint: ${answerObj.hint}`;
  hintEl.classList.add("hidden");
  messageEl.textContent = `Guess the ${answer.length}-letter medical term.`;
  messageEl.className = "message";
  input.value = "";
  input.maxLength = answer.length;
  input.placeholder = `${answer.length}-letter term`;
  input.disabled = false;
  board.innerHTML = "";
  keyboard.innerHTML = "";
  buildBoard();
  buildKeyboard();
  input.focus();
}

function buildBoard() {
  board.style.gridTemplateRows = `repeat(${MAX_ATTEMPTS}, auto)`;

  for (let r = 0; r < MAX_ATTEMPTS; r++) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.gridTemplateColumns = `repeat(${answer.length}, auto)`;

    for (let c = 0; c < answer.length; c++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.id = `tile-${r}-${c}`;
      row.appendChild(tile);
    }

    board.appendChild(row);
  }
}

function buildKeyboard() {
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => {
    const key = document.createElement("div");
    key.className = "key";
    key.id = `key-${letter}`;
    key.textContent = letter;
    keyboard.appendChild(key);
  });
}

function scoreGuess(guess) {
  const result = Array(answer.length).fill("absent");
  const answerLetters = answer.split("");

  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) {
      result[i] = "correct";
      answerLetters[i] = null;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    if (result[i] === "correct") continue;
    const foundIndex = answerLetters.indexOf(guess[i]);
    if (foundIndex !== -1) {
      result[i] = "present";
      answerLetters[foundIndex] = null;
    }
  }

  return result;
}

function updateKeyboard(letter, status) {
  const key = document.getElementById(`key-${letter}`);
  if (!key) return;

  const rank = { absent: 1, present: 2, correct: 3 };
  const current = key.dataset.status || "";
  if (!current || rank[status] > rank[current]) {
    key.className = `key ${status}`;
    key.dataset.status = status;
  }
}

function submitGuess(rawGuess) {
  if (gameOver) return;

  const guess = rawGuess.toUpperCase().replace(/[^A-Z]/g, "");

  if (guess.length !== answer.length) {
    messageEl.textContent = `Enter exactly ${answer.length} letters.`;
    return;
  }

  if (guesses.includes(guess)) {
    messageEl.textContent = "You already tried that word.";
    return;
  }

  guesses.push(guess);
  const score = scoreGuess(guess);

  for (let i = 0; i < answer.length; i++) {
    const tile = document.getElementById(`tile-${currentRow}-${i}`);
    tile.textContent = guess[i];
    tile.classList.add(score[i]);
    updateKeyboard(guess[i], score[i]);
  }

  if (guess === answer) {
    gameOver = true;
    input.disabled = true;
    messageEl.textContent = "Correct — strong work.";
    messageEl.className = "message win";
    return;
  }

  currentRow++;

  if (currentRow >= MAX_ATTEMPTS) {
    gameOver = true;
    input.disabled = true;
    messageEl.textContent = `Good try. The answer was ${answer}.`;
    messageEl.className = "message loss";
  } else {
    messageEl.textContent = `${MAX_ATTEMPTS - currentRow} guesses remaining.`;
  }

  input.value = "";
  input.focus();
}

specialtySelect.value = selectedSpecialty;
applyTheme(selectedSpecialty);

specialtySelect.addEventListener("change", () => {
  selectedSpecialty = specialtySelect.value;
  localStorage.setItem("medwordleSpecialty", selectedSpecialty);
  initGame();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitGuess(input.value);
});

hintBtn.addEventListener("click", () => {
  hintEl.classList.toggle("hidden");
});

newGameBtn.addEventListener("click", initGame);

input.addEventListener("input", () => {
  input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");
});

initGame();
