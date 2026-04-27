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
  "Anatomy": "theme-anatomy",
  "Gastroenterology": "theme-gastroenterology",
  "Rheumatology": "theme-rheumatology"
};

const MODE_DESCRIPTIONS = {
  "High Yield": "Core Step 2-style terms across systems.",
  "All Outline": "Broader vocabulary inspired by USMLE content systems.",
  "Hard Mode": "Tougher and less obvious terms for challenge-level recall."
};

const MODE_RANK = {
  "High Yield": 1,
  "All Outline": 2,
  "Hard Mode": 3
};

const WORDS = [
  {
    "word": "STEMI",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "ST elevation myocardial infarction pattern in contiguous leads.",
    "pearl": "Immediate reperfusion with PCI is key when criteria are met."
  },
  {
    "word": "NSTEMI",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Myocardial infarction without ST elevation.",
    "pearl": "Treat ACS with antiplatelet/anticoagulation strategy and risk stratify."
  },
  {
    "word": "ANGINA",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Chest pain from myocardial ischemia.",
    "pearl": "Stable angina is exertional and relieved by rest or nitroglycerin."
  },
  {
    "word": "AFIB",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Irregularly irregular rhythm.",
    "pearl": "Anticoagulation decisions are guided by stroke risk."
  },
  {
    "word": "CHF",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Syndrome of impaired cardiac filling or pumping.",
    "pearl": "Look for dyspnea, edema, JVD, crackles, and BNP elevation."
  },
  {
    "word": "MURMUR",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Abnormal heart sound from turbulent flow.",
    "pearl": "Timing and radiation help identify the valve lesion."
  },
  {
    "word": "STENT",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Device placed to keep a vessel open.",
    "pearl": "Dual antiplatelet therapy is commonly needed after coronary stenting."
  },
  {
    "word": "VALVE",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Prevents backward blood flow.",
    "pearl": "Valve lesions are classic physical diagnosis questions."
  },
  {
    "word": "AORTA",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Largest artery in the body.",
    "pearl": "Chest/back tearing pain raises concern for aortic dissection."
  },
  {
    "word": "SYNCOPE",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Transient loss of consciousness.",
    "pearl": "Cardiac syncope is concerning when exertional or associated with abnormal ECG."
  },
  {
    "word": "TAMPONADE",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Obstructive shock from pericardial fluid compression.",
    "pearl": "Beck triad: hypotension, JVD, muffled heart sounds."
  },
  {
    "word": "TORSADES",
    "specialty": "Cardiology",
    "mode": "Hard Mode",
    "category": "Cardiology / Hard Mode",
    "hint": "Polymorphic VT associated with prolonged QT.",
    "pearl": "Treat unstable torsades with defibrillation; magnesium is classic therapy."
  },
  {
    "word": "MYXOMA",
    "specialty": "Cardiology",
    "mode": "Hard Mode",
    "category": "Cardiology / Hard Mode",
    "hint": "Benign cardiac tumor often in left atrium.",
    "pearl": "Can present with positional symptoms or embolic phenomena."
  },
  {
    "word": "QT",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "ECG interval affected by many drugs.",
    "pearl": "Prolonged QT increases torsades risk."
  },
  {
    "word": "DVT",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Deep venous thrombosis.",
    "pearl": "Risk factors include surgery, immobility, cancer, pregnancy, and thrombophilia."
  },
  {
    "word": "PAD",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Peripheral arterial disease.",
    "pearl": "Claudication with exertion suggests arterial insufficiency."
  },
  {
    "word": "VSD",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Ventricular septal defect.",
    "pearl": "Left-to-right shunts can lead to pulmonary hypertension if severe."
  },
  {
    "word": "ASD",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Atrial septal defect.",
    "pearl": "Fixed split S2 is a classic clue."
  },
  {
    "word": "ASTHMA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Episodic wheezing with reversible obstruction.",
    "pearl": "First-line rescue therapy is an inhaled short-acting beta agonist."
  },
  {
    "word": "COPD",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Chronic obstructive lung disease from airflow limitation.",
    "pearl": "Smoking is the major risk factor; spirometry confirms obstruction."
  },
  {
    "word": "ARDS",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Acute hypoxemic respiratory failure with bilateral infiltrates.",
    "pearl": "Use low tidal volume ventilation."
  },
  {
    "word": "PNEUMONIA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Infection of lung parenchyma.",
    "pearl": "Fever, cough, focal findings, and infiltrate support diagnosis."
  },
  {
    "word": "EMBOLUS",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Material obstructing a vessel.",
    "pearl": "Pulmonary embolism classically causes sudden dyspnea and tachycardia."
  },
  {
    "word": "HYPOXIA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Low tissue oxygen availability.",
    "pearl": "Always assess airway, breathing, and circulation first."
  },
  {
    "word": "PLEURITIS",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Inflammation causing pleuritic chest pain.",
    "pearl": "Pain worsens with inspiration."
  },
  {
    "word": "EMPHYSEMA",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Alveolar wall destruction causing air trapping.",
    "pearl": "Associated with smoking and alpha-1 antitrypsin deficiency."
  },
  {
    "word": "ASBESTOS",
    "specialty": "Pulmonology",
    "mode": "Hard Mode",
    "category": "Pulmonology / Hard Mode",
    "hint": "Occupational exposure linked with lung disease.",
    "pearl": "Classically associated with pleural plaques and mesothelioma."
  },
  {
    "word": "TB",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Mycobacterial infection affecting lungs and other organs.",
    "pearl": "Consider in chronic cough, weight loss, night sweats, and risk exposure."
  },
  {
    "word": "MELENA",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Black tarry stool.",
    "pearl": "Often suggests upper GI bleeding."
  },
  {
    "word": "GERD",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Reflux of gastric contents into esophagus.",
    "pearl": "Alarm symptoms warrant endoscopy."
  },
  {
    "word": "IBD",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Inflammatory bowel disease.",
    "pearl": "Crohn is transmural; ulcerative colitis starts at rectum and is continuous."
  },
  {
    "word": "CIRRHOSIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "End-stage liver fibrosis.",
    "pearl": "Complications include ascites, varices, encephalopathy, and HCC."
  },
  {
    "word": "ASCITES",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Free fluid in the peritoneal cavity.",
    "pearl": "New ascites requires diagnostic paracentesis."
  },
  {
    "word": "JAUNDICE",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Yellowing due to bilirubin elevation.",
    "pearl": "Differentiate hepatocellular, obstructive, and hemolytic patterns."
  },
  {
    "word": "APPENDIX",
    "specialty": "Gastroenterology",
    "mode": "All Outline",
    "category": "Gastroenterology / All Outline",
    "hint": "Inflamed structure in appendicitis.",
    "pearl": "Classically migratory periumbilical pain to RLQ."
  },
  {
    "word": "PANCREAS",
    "specialty": "Gastroenterology",
    "mode": "All Outline",
    "category": "Gastroenterology / All Outline",
    "hint": "Organ involved in endocrine and exocrine function.",
    "pearl": "Pancreatitis causes epigastric pain radiating to the back."
  },
  {
    "word": "VOLVULUS",
    "specialty": "Gastroenterology",
    "mode": "Hard Mode",
    "category": "Gastroenterology / Hard Mode",
    "hint": "Twisting of bowel causing obstruction.",
    "pearl": "Sigmoid volvulus shows a coffee-bean sign."
  },
  {
    "word": "ACHALASIA",
    "specialty": "Gastroenterology",
    "mode": "Hard Mode",
    "category": "Gastroenterology / Hard Mode",
    "hint": "Failure of LES relaxation.",
    "pearl": "Bird-beak appearance can be seen on barium swallow."
  },
  {
    "word": "AKI",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Acute kidney injury.",
    "pearl": "Separate prerenal, intrinsic, and postrenal causes."
  },
  {
    "word": "CKD",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Chronic kidney disease.",
    "pearl": "Track GFR, albuminuria, anemia, bone-mineral disease, and BP control."
  },
  {
    "word": "STONES",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Renal calculi.",
    "pearl": "Colicky flank pain with hematuria is classic."
  },
  {
    "word": "ANURIA",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Absent urine output.",
    "pearl": "Think obstruction, severe AKI, or shock."
  },
  {
    "word": "OLIGURIA",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Low urine output.",
    "pearl": "Assess volume status and kidney perfusion."
  },
  {
    "word": "NEPHRON",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Functional unit of the kidney.",
    "pearl": "Glomerulus filters; tubules reabsorb and secrete."
  },
  {
    "word": "ALPORT",
    "specialty": "Nephrology",
    "mode": "Hard Mode",
    "category": "Nephrology / Hard Mode",
    "hint": "Hereditary nephritis syndrome.",
    "pearl": "Hematuria plus hearing/ocular findings is classic."
  },
  {
    "word": "FANCONI",
    "specialty": "Nephrology",
    "mode": "Hard Mode",
    "category": "Nephrology / Hard Mode",
    "hint": "Proximal tubule dysfunction.",
    "pearl": "Causes glucose, amino acid, phosphate, and bicarbonate wasting."
  },
  {
    "word": "LITHIUM",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Drug associated with renal/endocrine effects.",
    "pearl": "Can cause nephrogenic diabetes insipidus."
  },
  {
    "word": "DKA",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Diabetic ketoacidosis.",
    "pearl": "Anion gap acidosis, ketones, hyperglycemia; treat fluids, insulin, potassium."
  },
  {
    "word": "HHS",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Hyperosmolar hyperglycemic state.",
    "pearl": "Severe hyperglycemia and dehydration with minimal ketosis."
  },
  {
    "word": "THYROID",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Endocrine gland regulating metabolism.",
    "pearl": "TSH is usually the first screening test."
  },
  {
    "word": "GRAVES",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Autoimmune hyperthyroidism.",
    "pearl": "Look for ophthalmopathy, diffuse goiter, and low TSH."
  },
  {
    "word": "ADDISON",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Primary adrenal insufficiency.",
    "pearl": "Hyperpigmentation, hypotension, hyponatremia, hyperkalemia."
  },
  {
    "word": "CUSHING",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Excess cortisol state.",
    "pearl": "Central obesity, striae, hypertension, glucose intolerance."
  },
  {
    "word": "SIADH",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Excess ADH causing euvolemic hyponatremia.",
    "pearl": "Treat based on severity; fluid restriction is common for mild cases."
  },
  {
    "word": "MEN",
    "specialty": "Endocrinology",
    "mode": "Hard Mode",
    "category": "Endocrinology / Hard Mode",
    "hint": "Multiple endocrine neoplasia syndrome.",
    "pearl": "Know MEN1 vs MEN2 tumor patterns."
  },
  {
    "word": "GOITER",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Thyroid enlargement.",
    "pearl": "Can occur with hypo-, hyper-, or euthyroid states."
  },
  {
    "word": "STROKE",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Acute neurologic deficit due to vascular injury.",
    "pearl": "Time last known well determines thrombolysis/thrombectomy eligibility."
  },
  {
    "word": "SEIZURE",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Abnormal synchronous neuronal activity.",
    "pearl": "First seizure workup often includes labs, imaging, and EEG depending context."
  },
  {
    "word": "MIGRAINE",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Recurrent headache often with photophobia/nausea.",
    "pearl": "Triptans are abortive therapy unless contraindicated."
  },
  {
    "word": "DELIRIUM",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Acute fluctuating inattention and awareness.",
    "pearl": "Search for underlying medical causes."
  },
  {
    "word": "APHASIA",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Language impairment.",
    "pearl": "Dominant hemisphere lesions are classic."
  },
  {
    "word": "PTOSIS",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Drooping eyelid.",
    "pearl": "Can suggest CN III palsy, Horner syndrome, or myasthenia."
  },
  {
    "word": "HORNER",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Ptosis, miosis, anhidrosis.",
    "pearl": "Consider sympathetic pathway disruption."
  },
  {
    "word": "GBS",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Ascending weakness after infection.",
    "pearl": "Monitor respiratory function; treat with IVIG or plasmapheresis."
  },
  {
    "word": "TETANUS",
    "specialty": "Neurology",
    "mode": "Hard Mode",
    "category": "Neurology / Hard Mode",
    "hint": "Toxin-mediated spastic paralysis.",
    "pearl": "Prevention with vaccination is key."
  },
  {
    "word": "BOTULISM",
    "specialty": "Neurology",
    "mode": "Hard Mode",
    "category": "Neurology / Hard Mode",
    "hint": "Descending flaccid paralysis.",
    "pearl": "Caused by toxin blocking acetylcholine release."
  },
  {
    "word": "ECTOPIC",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Pregnancy implanted outside uterus.",
    "pearl": "Reproductive-age patient with pain/bleeding: check pregnancy test first."
  },
  {
    "word": "ABRUPTION",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Premature placental separation.",
    "pearl": "Painful bleeding with uterine tenderness is classic."
  },
  {
    "word": "PREVIA",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Placenta covering cervical os.",
    "pearl": "Painless third-trimester bleeding; avoid digital exam until ruled out."
  },
  {
    "word": "HELLP",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Hemolysis, elevated liver enzymes, low platelets.",
    "pearl": "Severe preeclampsia spectrum; delivery is definitive."
  },
  {
    "word": "LOCHIA",
    "specialty": "OB/GYN",
    "mode": "All Outline",
    "category": "OB/GYN / All Outline",
    "hint": "Postpartum vaginal discharge.",
    "pearl": "Normal postpartum finding that changes over time."
  },
  {
    "word": "UTERUS",
    "specialty": "OB/GYN",
    "mode": "All Outline",
    "category": "OB/GYN / All Outline",
    "hint": "Muscular organ of pregnancy.",
    "pearl": "Uterine atony is a leading cause of postpartum hemorrhage."
  },
  {
    "word": "VACCINE",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Biologic that stimulates immunity.",
    "pearl": "Routine immunization schedules are high-yield preventive medicine."
  },
  {
    "word": "JAUNDICE",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Yellowing in newborns from bilirubin.",
    "pearl": "Assess age in hours and risk factors."
  },
  {
    "word": "FONTANELLE",
    "specialty": "Pediatrics",
    "mode": "All Outline",
    "category": "Pediatrics / All Outline",
    "hint": "Soft spot on infant skull.",
    "pearl": "Bulging may suggest increased intracranial pressure."
  },
  {
    "word": "SIDS",
    "specialty": "Pediatrics",
    "mode": "All Outline",
    "category": "Pediatrics / All Outline",
    "hint": "Sudden infant death syndrome.",
    "pearl": "Back-to-sleep positioning reduces risk."
  },
  {
    "word": "MDD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Major depressive disorder.",
    "pearl": "Screen for suicidality and functional impairment."
  },
  {
    "word": "MANIA",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Elevated mood with decreased need for sleep.",
    "pearl": "Bipolar disorder changes antidepressant strategy."
  },
  {
    "word": "BIPOLAR",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Mood disorder with mania/hypomania.",
    "pearl": "Mood stabilizers are central treatment."
  },
  {
    "word": "PTSD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Trauma-related disorder with re-experiencing/avoidance.",
    "pearl": "Symptoms persist beyond one month after trauma."
  },
  {
    "word": "OCD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Obsessions and compulsions.",
    "pearl": "SSRIs and CBT with exposure/response prevention are classic."
  },
  {
    "word": "DELUSION",
    "specialty": "Psychiatry",
    "mode": "All Outline",
    "category": "Psychiatry / All Outline",
    "hint": "Fixed false belief.",
    "pearl": "Assess psychosis, mood symptoms, substances, and medical causes."
  },
  {
    "word": "AUTISM",
    "specialty": "Psychiatry",
    "mode": "All Outline",
    "category": "Psychiatry / All Outline",
    "hint": "Neurodevelopmental disorder with social communication deficits.",
    "pearl": "Restricted/repetitive behaviors are part of criteria."
  },
  {
    "word": "AKATHISIA",
    "specialty": "Psychiatry",
    "mode": "Hard Mode",
    "category": "Psychiatry / Hard Mode",
    "hint": "Restlessness from dopamine-blocking meds.",
    "pearl": "Can be mistaken for anxiety/agitation."
  },
  {
    "word": "HIV",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Retroviral infection causing immune suppression.",
    "pearl": "CD4 count guides opportunistic infection risk."
  },
  {
    "word": "AIDS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Advanced HIV disease.",
    "pearl": "Defined by low CD4 or AIDS-defining illness."
  },
  {
    "word": "SEPSIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Life-threatening organ dysfunction due to infection.",
    "pearl": "Early antibiotics and source control matter."
  },
  {
    "word": "LYME",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Tick-borne Borrelia infection.",
    "pearl": "Erythema migrans is diagnostic clinically."
  },
  {
    "word": "SYPHILIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Treponema pallidum infection.",
    "pearl": "Can mimic many diseases; treat with penicillin when indicated."
  },
  {
    "word": "MALARIA",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Plasmodium infection.",
    "pearl": "Cyclic fevers after travel are a classic clue."
  },
  {
    "word": "DENGUE",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Mosquito-borne viral illness.",
    "pearl": "Severe disease can cause plasma leakage and shock."
  },
  {
    "word": "KAPOSI",
    "specialty": "Infectious Disease",
    "mode": "Hard Mode",
    "category": "Infectious Disease / Hard Mode",
    "hint": "HHV-8 associated vascular tumor.",
    "pearl": "Classically seen in immunocompromised patients."
  },
  {
    "word": "ANEMIA",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Low hemoglobin or red cell mass.",
    "pearl": "Use MCV and reticulocyte count to guide differential."
  },
  {
    "word": "SICKLE",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Hemoglobinopathy causing vaso-occlusion.",
    "pearl": "Functional asplenia increases encapsulated bacteria risk."
  },
  {
    "word": "ITP",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Immune thrombocytopenic purpura.",
    "pearl": "Isolated thrombocytopenia with mucocutaneous bleeding."
  },
  {
    "word": "DIC",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Consumptive coagulopathy.",
    "pearl": "Bleeding plus thrombosis with prolonged PT/PTT and low fibrinogen."
  },
  {
    "word": "LEUKEMIA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Malignancy of blood-forming tissues.",
    "pearl": "Acute leukemias can present with blasts and cytopenias."
  },
  {
    "word": "LYMPHOMA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Lymphoid malignancy.",
    "pearl": "B symptoms and lymphadenopathy are classic."
  },
  {
    "word": "MYELOMA",
    "specialty": "Hematology",
    "mode": "Hard Mode",
    "category": "Hematology / Hard Mode",
    "hint": "Plasma cell malignancy.",
    "pearl": "CRAB findings: calcium, renal, anemia, bone lesions."
  },
  {
    "word": "BIOPSY",
    "specialty": "Pathology",
    "mode": "High Yield",
    "category": "Pathology / High Yield",
    "hint": "Tissue sampling for diagnosis.",
    "pearl": "Often needed for definitive diagnosis of malignancy."
  },
  {
    "word": "NECROSIS",
    "specialty": "Pathology",
    "mode": "All Outline",
    "category": "Pathology / All Outline",
    "hint": "Cell death from injury.",
    "pearl": "Patterns of necrosis can suggest etiology."
  },
  {
    "word": "TRIAGE",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Prioritizing patients by acuity.",
    "pearl": "Unstable patients are addressed first."
  },
  {
    "word": "TRAUMA",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Physical injury requiring acute evaluation.",
    "pearl": "ATLS begins with airway, breathing, circulation."
  },
  {
    "word": "SUTURE",
    "specialty": "Surgery",
    "mode": "All Outline",
    "category": "Surgery / All Outline",
    "hint": "Material used to close tissue.",
    "pearl": "Wound care includes irrigation, debridement, and tetanus assessment."
  },
  {
    "word": "SCALPEL",
    "specialty": "Surgery",
    "mode": "All Outline",
    "category": "Surgery / All Outline",
    "hint": "Surgical cutting instrument.",
    "pearl": "Sterile technique and anatomy matter."
  },
  {
    "word": "HERNIA",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Protrusion through a defect.",
    "pearl": "Strangulation causes ischemia and requires urgent surgery."
  },
  {
    "word": "GOUT",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Crystal arthritis from monosodium urate.",
    "pearl": "Needle-shaped negatively birefringent crystals."
  },
  {
    "word": "LUPUS",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Systemic autoimmune disease.",
    "pearl": "Can affect skin, joints, kidneys, CNS, and blood counts."
  },
  {
    "word": "RAYNAUD",
    "specialty": "Rheumatology",
    "mode": "All Outline",
    "category": "Rheumatology / All Outline",
    "hint": "Vasospasm causing color changes in digits.",
    "pearl": "Can be primary or secondary to autoimmune disease."
  },
  {
    "word": "ECZEMA",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Inflammatory itchy skin condition.",
    "pearl": "Atopic dermatitis is associated with asthma/allergic rhinitis."
  },
  {
    "word": "MELANOMA",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Malignant melanocytic tumor.",
    "pearl": "ABCDE features help screen suspicious lesions."
  },
  {
    "word": "SCABIES",
    "specialty": "Dermatology",
    "mode": "All Outline",
    "category": "Dermatology / All Outline",
    "hint": "Mite infestation causing intense itching.",
    "pearl": "Burrows and interdigital involvement are classic."
  },
  {
    "word": "TEN",
    "specialty": "Dermatology",
    "mode": "Hard Mode",
    "category": "Dermatology / Hard Mode",
    "hint": "Toxic epidermal necrolysis.",
    "pearl": "Life-threatening drug reaction with skin sloughing."
  },
  {
    "word": "CT",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Cross-sectional imaging using x-rays.",
    "pearl": "Contrast choices depend on suspected diagnosis and renal function."
  },
  {
    "word": "MRI",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Magnetic resonance imaging.",
    "pearl": "Excellent soft tissue contrast; check contraindications."
  },
  {
    "word": "XRAY",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Basic imaging using ionizing radiation.",
    "pearl": "Often first-line for bones and chest evaluation."
  },
  {
    "word": "DOPPLER",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Ultrasound technique assessing flow.",
    "pearl": "Used in vascular studies and echocardiography."
  },
  {
    "word": "CONTRAST",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Agent used to improve visualization.",
    "pearl": "Consider allergy history and kidney function."
  },
  {
    "word": "AORTA",
    "specialty": "Anatomy",
    "mode": "High Yield",
    "category": "Anatomy / High Yield",
    "hint": "Major systemic artery.",
    "pearl": "Anatomy is essential for imaging and procedures."
  },
  {
    "word": "PLEURA",
    "specialty": "Anatomy",
    "mode": "All Outline",
    "category": "Anatomy / All Outline",
    "hint": "Membrane surrounding lungs.",
    "pearl": "Pleural disease can cause effusion or pneumothorax."
  },
  {
    "word": "RETINA",
    "specialty": "Anatomy",
    "mode": "All Outline",
    "category": "Anatomy / All Outline",
    "hint": "Light-sensitive tissue in the eye.",
    "pearl": "Vascular occlusions can cause sudden painless vision loss."
  }
];

const MAX_ATTEMPTS = 6;
let selectedSpecialty = localStorage.getItem("medwordleSpecialty") || "All Medicine";
let selectedMode = localStorage.getItem("medwordleMode") || "High Yield";
let answerObj;
let answer;
let currentRow = 0;
let gameOver = false;
let guesses = [];

const board = document.getElementById("board");
const categoryEl = document.getElementById("category");
const modeDescriptionEl = document.getElementById("modeDescription");
const hintEl = document.getElementById("hint");
const messageEl = document.getElementById("message");
const form = document.getElementById("guessForm");
const input = document.getElementById("guessInput");
const hintBtn = document.getElementById("hintBtn");
const newGameBtn = document.getElementById("newGameBtn");
const keyboard = document.getElementById("keyboard");
const specialtySelect = document.getElementById("specialtySelect");
const modeSelect = document.getElementById("modeSelect");
const pearlBox = document.getElementById("pearlBox");
const pearlText = document.getElementById("pearlText");

function classNameForSpecialty(specialty) {
  return THEMES[specialty] || "theme-all";
}

function applyTheme(specialty) {
  Object.values(THEMES).forEach(cls => document.body.classList.remove(cls));
  document.body.classList.add(classNameForSpecialty(specialty));
}

function modeAllows(item) {
  if (selectedMode === "High Yield") return item.mode === "High Yield";
  if (selectedMode === "All Outline") return item.mode === "High Yield" || item.mode === "All Outline";
  return true;
}

function getPool() {
  let pool = WORDS.filter(modeAllows);

  if (selectedSpecialty !== "All Medicine") {
    const specialtyPool = pool.filter(item => item.specialty === selectedSpecialty);
    if (specialtyPool.length > 0) return specialtyPool;
  }

  return pool.length ? pool : WORDS;
}

function chooseWord() {
  const pool = getPool();
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

  categoryEl.textContent = selectedSpecialty === "All Medicine"
    ? `${answerObj.specialty} • ${selectedMode}`
    : `${selectedSpecialty} • ${selectedMode}`;

  modeDescriptionEl.textContent = MODE_DESCRIPTIONS[selectedMode];
  hintEl.textContent = `Hint: ${answerObj.hint}`;
  hintEl.classList.add("hidden");
  hintBtn.textContent = "Show Hint";
  messageEl.textContent = `Guess the ${answer.length}-letter medical term.`;
  messageEl.className = "message";
  pearlBox.classList.add("hidden");
  pearlText.textContent = "";
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

function showPearl() {
  pearlText.textContent = answerObj.pearl || "Review the clinical context and management associations for this term.";
  pearlBox.classList.remove("hidden");
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
    messageEl.textContent = `Correct — ${answer}.`;
    messageEl.className = "message win";
    showPearl();
    return;
  }

  currentRow++;

  if (currentRow >= MAX_ATTEMPTS) {
    gameOver = true;
    input.disabled = true;
    messageEl.textContent = `Good try. The answer was ${answer}.`;
    messageEl.className = "message loss";
    showPearl();
  } else {
    messageEl.textContent = `${MAX_ATTEMPTS - currentRow} guesses remaining.`;
  }

  input.value = "";
  input.focus();
}

specialtySelect.value = selectedSpecialty;
modeSelect.value = selectedMode;
applyTheme(selectedSpecialty);

specialtySelect.addEventListener("change", () => {
  selectedSpecialty = specialtySelect.value;
  localStorage.setItem("medwordleSpecialty", selectedSpecialty);
  initGame();
});

modeSelect.addEventListener("change", () => {
  selectedMode = modeSelect.value;
  localStorage.setItem("medwordleMode", selectedMode);
  initGame();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitGuess(input.value);
});

hintBtn.addEventListener("click", () => {
  hintEl.classList.toggle("hidden");
  hintBtn.textContent = hintEl.classList.contains("hidden") ? "Show Hint" : "Hide Hint";
});

newGameBtn.addEventListener("click", initGame);

input.addEventListener("input", () => {
  input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");
});

initGame();
