const THEMES = {
  "All Medicine": "theme-all", "Cardiology": "theme-cardiology", "Neurology": "theme-neurology",
  "Radiology": "theme-radiology", "Surgery": "theme-surgery", "Pediatrics": "theme-pediatrics",
  "OB/GYN": "theme-obgyn", "Oncology": "theme-oncology", "Infectious Disease": "theme-infectious-disease",
  "Emergency Medicine": "theme-emergency-medicine", "Psychiatry": "theme-psychiatry",
  "Dermatology": "theme-dermatology", "Nephrology": "theme-nephrology", "Pulmonology": "theme-pulmonology",
  "Endocrinology": "theme-endocrinology", "Hematology": "theme-hematology",
  "Pharmacology": "theme-pharmacology", "Pathology": "theme-pathology", "Anatomy": "theme-anatomy",
  "Gastroenterology": "theme-gastroenterology", "Rheumatology": "theme-rheumatology"
};

const MODE_DESCRIPTIONS = {
  "High Yield": "Core Step 2-style terms across systems.",
  "All Outline": "Broader vocabulary inspired by USMLE content systems.",
  "Hard Mode": "Tougher and less obvious terms for challenge-level recall."
};

const WORDS = [
  {
    "word": "STEMI",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Crushing chest pain with ST elevation in contiguous leads.",
    "diagnosis": "ST-elevation myocardial infarction",
    "management": "Aspirin 162–325 mg chewed, P2Y12 inhibitor such as ticagrelor/prasugrel/clopidogrel, anticoagulation such as unfractionated heparin or bivalirudin per cath protocol, high-intensity atorvastatin 80 mg, nitrates if no hypotension/RV infarct/PDE-5 use, and urgent reperfusion with primary PCI.",
    "nextStep": "Give aspirin immediately and activate the cath lab for primary PCI if it can be performed promptly.",
    "takeaway": "ST-elevation MI is a reperfusion emergency; do not delay PCI for serial biomarkers or stress testing.",
    "outline": {
      "section": "Cardiovascular System",
      "subsection": "Ischemic heart disease — acute coronary syndrome / myocardial infarction",
      "page": 18
    }
  },
  {
    "word": "NSTEMI",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Troponin elevation without ST elevation.",
    "diagnosis": "Non-ST elevation myocardial infarction",
    "management": "Aspirin, P2Y12 inhibitor when appropriate, anticoagulation with unfractionated heparin/enoxaparin/bivalirudin per setting, high-intensity statin, beta blocker if no contraindication, nitroglycerin for pain if safe, and early invasive strategy for high-risk features.",
    "nextStep": "Start ACS therapy and risk stratify for early invasive coronary angiography.",
    "takeaway": "Troponin-positive ACS without ST elevation is treated medically first, then risk-stratified for angiography.",
    "outline": {
      "section": "Cardiovascular System",
      "subsection": "Ischemic heart disease — acute coronary syndrome",
      "page": 18
    }
  },
  {
    "word": "AFIB",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Irregularly irregular rhythm.",
    "diagnosis": "Atrial fibrillation",
    "management": "If stable, rate control with metoprolol/diltiazem/verapamil depending comorbidities; rhythm control when appropriate; anticoagulation with apixaban/rivaroxaban/dabigatran/edoxaban or warfarin based on CHA2DS2-VASc, renal function, valves, and bleeding risk.",
    "nextStep": "First assess stability; unstable atrial fibrillation requires synchronized cardioversion.",
    "takeaway": "In tachyarrhythmia questions, stability decides cardioversion vs medication.",
    "outline": {
      "section": "Cardiovascular System",
      "subsection": "Dysrhythmias — atrial fibrillation/flutter",
      "page": 18
    }
  },
  {
    "word": "ANGINA",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Exertional chest discomfort relieved by rest.",
    "diagnosis": "Stable angina",
    "management": "Antianginal therapy and risk factor modification.",
    "nextStep": "Stress testing if diagnosis is uncertain and patient is stable.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CHF",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Dyspnea, edema, JVD, crackles, elevated BNP.",
    "diagnosis": "Heart failure",
    "management": "Diuresis for congestion; guideline-directed therapy when stable.",
    "nextStep": "Assess volume status and treat acute decompensation first.",
    "takeaway": "In acute decompensated heart failure, volume overload is treated first with diuresis and respiratory support as needed."
  },
  {
    "word": "DVT",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Unilateral leg swelling and pain after immobility.",
    "diagnosis": "Deep venous thrombosis",
    "management": "Anticoagulation unless contraindicated.",
    "nextStep": "Compression ultrasound is the usual diagnostic next step.",
    "takeaway": "Unilateral swelling with risk factors should trigger compression ultrasound and anticoagulation if confirmed or highly suspected."
  },
  {
    "word": "MURMUR",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Turbulent flow heard on cardiac auscultation.",
    "diagnosis": "Valvular or flow murmur",
    "management": "Treat based on valve lesion and severity.",
    "nextStep": "Use echo to characterize significant murmurs.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SYNCOPE",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Brief loss of consciousness with rapid recovery.",
    "diagnosis": "Syncope",
    "management": "Treat the underlying cause.",
    "nextStep": "Obtain ECG early; concerning cardiac features require urgent evaluation.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "TAMPONADE",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Hypotension, JVD, muffled heart sounds.",
    "diagnosis": "Cardiac tamponade",
    "management": "Urgent pericardiocentesis if unstable.",
    "nextStep": "Bedside echo is helpful but do not delay intervention in shock.",
    "takeaway": "Obstructive shock from tamponade is a clinical emergency; unstable patients need drainage rather than prolonged workup."
  },
  {
    "word": "TORSADES",
    "specialty": "Cardiology",
    "mode": "Hard Mode",
    "category": "Cardiology / Hard Mode",
    "hint": "Polymorphic VT with prolonged QT.",
    "diagnosis": "Torsades de pointes",
    "management": "IV magnesium; correct electrolytes and remove QT-prolonging drugs.",
    "nextStep": "Defibrillate if unstable or pulseless.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MYXOMA",
    "specialty": "Cardiology",
    "mode": "Hard Mode",
    "category": "Cardiology / Hard Mode",
    "hint": "Positional dyspnea or embolic symptoms from atrial mass.",
    "diagnosis": "Atrial myxoma",
    "management": "Surgical resection.",
    "nextStep": "Echocardiography is key for diagnosis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "DISSECTION",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Tearing chest pain radiating to the back.",
    "diagnosis": "Aortic dissection",
    "management": "Aggressive BP/HR control; surgery for ascending dissections.",
    "nextStep": "CT angiography if stable; TEE if unstable.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ENDOCARDITIS",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Fever, murmur, embolic signs, positive blood cultures.",
    "diagnosis": "Infective endocarditis",
    "management": "IV antibiotics guided by cultures; surgery for complications.",
    "nextStep": "Obtain multiple blood cultures before antibiotics if stable.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MYOCARDITIS",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Chest pain after viral illness with troponin elevation.",
    "diagnosis": "Myocarditis",
    "management": "Supportive care and treat heart failure/arrhythmias if present.",
    "nextStep": "ECG, troponin, echo; cardiac MRI can help.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PERICARDITIS",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Pleuritic chest pain better leaning forward.",
    "diagnosis": "Acute pericarditis",
    "management": "NSAIDs plus colchicine unless contraindicated.",
    "nextStep": "Look for diffuse ST elevation and PR depression.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ASTHMA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Episodic wheezing with reversible obstruction.",
    "diagnosis": "Asthma exacerbation",
    "management": "Inhaled albuterol; add ipratropium for moderate/severe exacerbation, systemic corticosteroid such as prednisone or IV methylprednisolone, oxygen, IV magnesium sulfate for severe refractory exacerbation, and intubation/ICU care if impending respiratory failure.",
    "nextStep": "Assess work of breathing, oxygen saturation, and peak flow if available; start bronchodilator therapy immediately.",
    "takeaway": "Asthma exacerbations are managed by severity and response; do not wait for testing before bronchodilators.",
    "outline": {
      "section": "Respiratory System",
      "subsection": "Obstructive airway disease — asthma/reactive airway disease",
      "page": 20
    }
  },
  {
    "word": "COPD",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Chronic cough, smoking history, obstructive spirometry.",
    "diagnosis": "COPD",
    "management": "Albuterol plus ipratropium, prednisone 40 mg daily for 5 days for most exacerbations, controlled oxygen target often 88–92% if chronic CO2 retention risk, and antibiotics such as azithromycin, doxycycline, or amoxicillin-clavulanate when increased sputum purulence/volume or severe exacerbation is present.",
    "nextStep": "Assess oxygenation/ventilation and severity; obtain chest x-ray if pneumonia, pneumothorax, or heart failure is possible.",
    "takeaway": "COPD exacerbation treatment is bronchodilator + steroid; antibiotics depend on sputum change and severity.",
    "outline": {
      "section": "Respiratory System",
      "subsection": "Obstructive airway disease — COPD/chronic bronchitis/emphysema",
      "page": 20
    }
  },
  {
    "word": "ARDS",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Acute hypoxemia with bilateral infiltrates after sepsis/trauma.",
    "diagnosis": "Acute respiratory distress syndrome",
    "management": "Low tidal volume ventilation and supportive care.",
    "nextStep": "Treat the underlying trigger and optimize oxygenation.",
    "takeaway": "The key management principle is lung-protective ventilation while treating the underlying trigger."
  },
  {
    "word": "PNEUMONIA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Fever, cough, focal lung findings, infiltrate.",
    "diagnosis": "Pneumonia",
    "management": "Healthy outpatient adults: amoxicillin 1 g PO TID or doxycycline 100 mg PO BID. Outpatient with comorbidities: amoxicillin-clavulanate plus azithromycin/doxycycline, or levofloxacin/moxifloxacin when appropriate. Inpatient nonsevere CAP: ceftriaxone plus azithromycin or a respiratory fluoroquinolone.",
    "nextStep": "Obtain chest x-ray in suspected CAP if clinically stable, then decide outpatient vs inpatient treatment using severity and comorbidities.",
    "takeaway": "CAP questions test site of care and empiric regimen choice; antibiotic selection changes with comorbidities and severity.",
    "outline": {
      "section": "Respiratory System",
      "subsection": "Lower airway infections — community-acquired pneumonia",
      "page": 20
    }
  },
  {
    "word": "EMBOLUS",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Sudden dyspnea, pleuritic chest pain, tachycardia.",
    "diagnosis": "Pulmonary embolism",
    "management": "Anticoagulation with heparin/enoxaparin or a DOAC when appropriate; systemic thrombolysis such as alteplase for massive PE with hemodynamic instability if no contraindication.",
    "nextStep": "If stable, use pretest probability/D-dimer or CT pulmonary angiography; if unstable with high suspicion, treat emergently.",
    "takeaway": "For PE, stability determines whether you image first or treat immediately.",
    "outline": {
      "section": "Respiratory System",
      "subsection": "Pulmonary vascular disorders — pulmonary embolism",
      "page": 21
    }
  },
  {
    "word": "HYPOXIA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Low oxygen delivery to tissues.",
    "diagnosis": "Hypoxemia/hypoxia",
    "management": "Oxygen and treatment of underlying cause.",
    "nextStep": "Assess airway, breathing, circulation immediately.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PNEUMOTHORAX",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Sudden pleuritic chest pain with decreased breath sounds.",
    "diagnosis": "Pneumothorax",
    "management": "Needle decompression if tension physiology; chest tube if large/symptomatic.",
    "nextStep": "Do not wait for imaging if unstable tension pneumothorax is suspected.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "HEMOTHORAX",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Blood in pleural space after trauma.",
    "diagnosis": "Hemothorax",
    "management": "Tube thoracostomy; surgery if massive or ongoing bleeding.",
    "nextStep": "Evaluate trauma patient with ABCs first.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ATELECTASIS",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Postoperative fever with low lung volumes.",
    "diagnosis": "Atelectasis",
    "management": "Incentive spirometry and mobilization.",
    "nextStep": "Common early postoperative pulmonary issue.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ASBESTOS",
    "specialty": "Pulmonology",
    "mode": "Hard Mode",
    "category": "Pulmonology / Hard Mode",
    "hint": "Pleural plaques and restrictive disease after exposure.",
    "diagnosis": "Asbestosis",
    "management": "Supportive care and cancer surveillance.",
    "nextStep": "Ask about occupational exposure.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SILICOSIS",
    "specialty": "Pulmonology",
    "mode": "Hard Mode",
    "category": "Pulmonology / Hard Mode",
    "hint": "Upper-lobe nodules after mining/sandblasting exposure.",
    "diagnosis": "Silicosis",
    "management": "Supportive care; screen for TB risk.",
    "nextStep": "Occupational history is key.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MELENA",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Black tarry stool.",
    "diagnosis": "Upper GI bleeding",
    "management": "Stabilize, IV PPI if suspected ulcer bleed, endoscopy.",
    "nextStep": "Assess hemodynamics and resuscitate first.",
    "takeaway": "Upper GI bleeding questions prioritize hemodynamic stabilization before diagnostic endoscopy."
  },
  {
    "word": "GERD",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Burning retrosternal pain after meals.",
    "diagnosis": "Gastroesophageal reflux disease",
    "management": "Lifestyle changes and PPI trial.",
    "nextStep": "Endoscopy for alarm symptoms.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CIRRHOSIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Ascites, varices, encephalopathy, thrombocytopenia.",
    "diagnosis": "Cirrhosis",
    "management": "Manage complications and screen for HCC/varices.",
    "nextStep": "New ascites warrants diagnostic paracentesis.",
    "takeaway": "Cirrhosis questions often test complications: ascites, varices, encephalopathy, SBP, and HCC screening."
  },
  {
    "word": "ASCITES",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Abdominal distention with shifting dullness.",
    "diagnosis": "Ascites",
    "management": "Salt restriction, diuretics; paracentesis when new or concerning.",
    "nextStep": "Check SAAG to classify cause.",
    "takeaway": "New ascites in cirrhosis should be tapped to evaluate for SBP and classify fluid with SAAG."
  },
  {
    "word": "JAUNDICE",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Yellow skin/sclera from bilirubin elevation.",
    "diagnosis": "Jaundice",
    "management": "Treat cause based on hepatocellular vs obstructive vs hemolytic pattern.",
    "nextStep": "Fractionated bilirubin and liver tests guide next step.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PANCREAS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Epigastric pain radiating to back with elevated lipase.",
    "diagnosis": "Acute pancreatitis",
    "management": "IV fluids, analgesia, nutrition; treat cause.",
    "nextStep": "RUQ ultrasound if gallstones suspected.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "APPENDIX",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Periumbilical pain migrating to RLQ.",
    "diagnosis": "Appendicitis",
    "management": "Appendectomy or antibiotics in select cases.",
    "nextStep": "CT abdomen in many adults if diagnosis uncertain.",
    "takeaway": "Migratory RLQ pain is classic; imaging is common in adults when diagnosis is uncertain."
  },
  {
    "word": "DIVERTICULITIS",
    "specialty": "Gastroenterology",
    "mode": "All Outline",
    "category": "Gastroenterology / All Outline",
    "hint": "LLQ pain, fever, bowel habit changes.",
    "diagnosis": "Diverticulitis",
    "management": "Antibiotics for selected cases; drainage/surgery if complicated.",
    "nextStep": "CT abdomen/pelvis confirms diagnosis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "VOLVULUS",
    "specialty": "Gastroenterology",
    "mode": "Hard Mode",
    "category": "Gastroenterology / Hard Mode",
    "hint": "Coffee-bean sign and large bowel obstruction.",
    "diagnosis": "Sigmoid volvulus",
    "management": "Endoscopic detorsion if no peritonitis.",
    "nextStep": "Surgery if ischemia, perforation, or recurrent disease.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ACHALASIA",
    "specialty": "Gastroenterology",
    "mode": "Hard Mode",
    "category": "Gastroenterology / Hard Mode",
    "hint": "Progressive dysphagia to solids and liquids.",
    "diagnosis": "Achalasia",
    "management": "Pneumatic dilation, Heller myotomy, or POEM.",
    "nextStep": "Manometry is diagnostic.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "AKI",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Acute rise in creatinine or drop in urine output.",
    "diagnosis": "Acute kidney injury",
    "management": "Treat cause; optimize volume and avoid nephrotoxins.",
    "nextStep": "Classify prerenal, intrinsic, or postrenal.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CKD",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Chronic reduced GFR or albuminuria.",
    "diagnosis": "Chronic kidney disease",
    "management": "BP control, diabetes control, ACEi/ARB when indicated.",
    "nextStep": "Monitor anemia, bone-mineral disease, and electrolytes.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "STONES",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Colicky flank pain radiating to groin with hematuria.",
    "diagnosis": "Nephrolithiasis",
    "management": "Analgesia, hydration; alpha blocker for selected stones.",
    "nextStep": "Noncontrast CT is highly sensitive.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "OLIGURIA",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Low urine output.",
    "diagnosis": "Oliguria",
    "management": "Assess volume status, perfusion, obstruction, and nephrotoxins.",
    "nextStep": "Bladder scan can quickly assess retention.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ANURIA",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Absent urine output.",
    "diagnosis": "Anuria",
    "management": "Urgently assess obstruction and severe renal failure.",
    "nextStep": "Postrenal obstruction must be ruled out.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "NEPHRON",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Functional unit of kidney.",
    "diagnosis": "Kidney physiology concept",
    "management": "Management depends on site of renal pathology.",
    "nextStep": "Use UA and microscopy to localize renal disease.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ALPORT",
    "specialty": "Nephrology",
    "mode": "Hard Mode",
    "category": "Nephrology / Hard Mode",
    "hint": "Hematuria with hearing and ocular findings.",
    "diagnosis": "Alport syndrome",
    "management": "Supportive renal care; genetic counseling.",
    "nextStep": "Think collagen IV defect.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "FANCONI",
    "specialty": "Nephrology",
    "mode": "Hard Mode",
    "category": "Nephrology / Hard Mode",
    "hint": "Proximal tubule wasting of glucose, phosphate, bicarbonate.",
    "diagnosis": "Fanconi syndrome",
    "management": "Treat cause and replace losses.",
    "nextStep": "Look for non-anion gap metabolic acidosis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "DKA",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Anion gap acidosis with ketones.",
    "diagnosis": "Diabetic ketoacidosis",
    "management": "IV normal saline or balanced crystalloid, IV regular insulin only after K+ is ≥3.3 mEq/L, potassium replacement as needed, add dextrose when glucose falls near 200 mg/dL, monitor anion gap, and treat trigger such as infection or missed insulin.",
    "nextStep": "Start isotonic IV fluids and check potassium before insulin.",
    "takeaway": "In DKA, fluids come first and potassium determines when insulin is safe.",
    "outline": {
      "section": "Endocrine System",
      "subsection": "Diabetes mellitus — diabetic ketoacidosis",
      "page": 32
    }
  },
  {
    "word": "HHS",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Severe hyperglycemia and dehydration with minimal ketosis.",
    "diagnosis": "Hyperosmolar hyperglycemic state",
    "management": "Aggressive fluids, insulin after volume resuscitation.",
    "nextStep": "Older type 2 diabetic patient with altered mental status is classic.",
    "takeaway": "HHS is mainly profound dehydration and hyperosmolarity, so aggressive fluids are central."
  },
  {
    "word": "GRAVES",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Hyperthyroidism with ophthalmopathy.",
    "diagnosis": "Graves disease",
    "management": "Beta blocker for symptoms; methimazole/PTU, radioiodine, or surgery.",
    "nextStep": "Check TSH and free T4; TSI supports diagnosis.",
    "takeaway": "Hyperthyroid symptoms plus eye findings point to Graves; beta blockers address symptoms quickly."
  },
  {
    "word": "ADDISON",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Hypotension, hyperpigmentation, hyponatremia, hyperkalemia.",
    "diagnosis": "Primary adrenal insufficiency",
    "management": "Glucocorticoid and mineralocorticoid replacement.",
    "nextStep": "Adrenal crisis needs immediate stress-dose steroids.",
    "takeaway": "Adrenal crisis is treated immediately with stress-dose steroids and fluids; do not wait for confirmatory tests."
  },
  {
    "word": "CUSHING",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Central obesity, striae, hypertension, glucose intolerance.",
    "diagnosis": "Cushing syndrome",
    "management": "Treat underlying source of cortisol excess.",
    "nextStep": "Screen with dexamethasone suppression, late-night salivary cortisol, or urinary cortisol.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SIADH",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Euvolemic hyponatremia with concentrated urine.",
    "diagnosis": "SIADH",
    "management": "Fluid restriction; hypertonic saline if severe symptoms.",
    "nextStep": "Avoid rapid sodium correction.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "THYROID",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Neck gland controlling metabolism.",
    "diagnosis": "Thyroid disorder",
    "management": "Treat based on hypo/hyperthyroid state.",
    "nextStep": "TSH is the usual initial test.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "GOITER",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Enlarged thyroid gland.",
    "diagnosis": "Goiter",
    "management": "Treat underlying thyroid dysfunction or compressive symptoms.",
    "nextStep": "Check thyroid function tests.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "STROKE",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Acute focal neurologic deficit.",
    "diagnosis": "Stroke",
    "management": "Reperfusion when eligible; secondary prevention afterward.",
    "nextStep": "Time last known well is critical.",
    "takeaway": "The time last known well drives eligibility for acute reperfusion therapy."
  },
  {
    "word": "SEIZURE",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Transient abnormal neuronal activity.",
    "diagnosis": "Seizure",
    "management": "Stabilize airway; benzodiazepines for active prolonged seizure.",
    "nextStep": "Evaluate reversible triggers after stabilization.",
    "takeaway": "Active prolonged seizure is treated first with benzodiazepines, then antiseizure loading if persistent."
  },
  {
    "word": "MIGRAINE",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Headache with photophobia, nausea, possible aura.",
    "diagnosis": "Migraine",
    "management": "NSAIDs/triptans for acute therapy; prophylaxis if frequent.",
    "nextStep": "Avoid triptans in significant vascular disease.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "DELIRIUM",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Acute fluctuating attention and awareness.",
    "diagnosis": "Delirium",
    "management": "Treat underlying medical cause; reorientation and sleep hygiene.",
    "nextStep": "Look for infection, meds, metabolic causes.",
    "takeaway": "Delirium is acute and fluctuating; search for medical causes and avoid assuming primary psychiatric disease."
  },
  {
    "word": "APHASIA",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Language impairment after dominant hemisphere injury.",
    "diagnosis": "Aphasia",
    "management": "Treat underlying cause, often stroke evaluation.",
    "nextStep": "Differentiate from dysarthria.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "GBS",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Ascending weakness after infection.",
    "diagnosis": "Guillain-Barre syndrome",
    "management": "IVIG or plasmapheresis; monitor respiratory function.",
    "nextStep": "Check vital capacity.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "HORNER",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Ptosis, miosis, anhidrosis.",
    "diagnosis": "Horner syndrome",
    "management": "Treat underlying sympathetic pathway lesion.",
    "nextStep": "Painful Horner can suggest carotid dissection.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PTOSIS",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Drooping eyelid.",
    "diagnosis": "Ptosis",
    "management": "Evaluate for CN III palsy, Horner, or myasthenia.",
    "nextStep": "Pupil involvement in CN III palsy is concerning for aneurysm.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "BOTULISM",
    "specialty": "Neurology",
    "mode": "Hard Mode",
    "category": "Neurology / Hard Mode",
    "hint": "Descending paralysis and pupillary findings.",
    "diagnosis": "Botulism",
    "management": "Antitoxin and supportive care.",
    "nextStep": "Infant botulism associated with honey exposure.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "TETANUS",
    "specialty": "Neurology",
    "mode": "Hard Mode",
    "category": "Neurology / Hard Mode",
    "hint": "Trismus and muscle spasms.",
    "diagnosis": "Tetanus",
    "management": "Immune globulin, metronidazole, wound care, vaccination.",
    "nextStep": "Prevention through vaccination is key.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ECTOPIC",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Pregnancy with abdominal pain and bleeding.",
    "diagnosis": "Ectopic pregnancy",
    "management": "Methotrexate for stable eligible patients; urgent surgery for rupture, instability, contraindication to methotrexate, or concerning ultrasound findings.",
    "nextStep": "In any reproductive-age patient with abdominal pain or bleeding, obtain pregnancy test first; use transvaginal ultrasound and quantitative beta-hCG when positive.",
    "takeaway": "Pregnancy test is the first move in reproductive-age abdominal pain/bleeding.",
    "outline": {
      "section": "Pregnancy, Childbirth, & the Puerperium",
      "subsection": "Obstetric complications — ectopic pregnancy",
      "page": 27
    }
  },
  {
    "word": "PREVIA",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Painless third-trimester bleeding.",
    "diagnosis": "Placenta previa",
    "management": "Avoid digital exam; cesarean delivery if persistent.",
    "nextStep": "Ultrasound confirms placental location.",
    "takeaway": "Painless third-trimester bleeding means avoid digital cervical exam until placenta previa is excluded by ultrasound."
  },
  {
    "word": "ABRUPTION",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Painful third-trimester bleeding with uterine tenderness.",
    "diagnosis": "Placental abruption",
    "management": "Maternal stabilization and delivery depending severity.",
    "nextStep": "Can be associated with hypertension or trauma.",
    "takeaway": "Painful bleeding with uterine tenderness suggests abruption; prioritize maternal stabilization."
  },
  {
    "word": "HELLP",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Hemolysis, elevated liver enzymes, low platelets.",
    "diagnosis": "HELLP syndrome",
    "management": "Magnesium sulfate for seizure prophylaxis, antihypertensives such as IV labetalol/hydralazine or oral nifedipine for severe BP, corticosteroids for fetal lung maturity if preterm when appropriate, delivery after stabilization.",
    "nextStep": "Stabilize with magnesium sulfate and blood pressure control, then proceed to delivery when indicated.",
    "takeaway": "HELLP is a severe preeclampsia-spectrum disease; maternal stabilization comes before delivery.",
    "outline": {
      "section": "Pregnancy, Childbirth, & the Puerperium",
      "subsection": "Obstetric complications — preeclampsia/eclampsia/HELLP",
      "page": 27
    }
  },
  {
    "word": "ECLAMPSIA",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Seizures in patient with preeclampsia.",
    "diagnosis": "Eclampsia",
    "management": "Magnesium sulfate for seizure treatment/prevention, antihypertensives such as IV labetalol/hydralazine or oral nifedipine for severe hypertension, then delivery.",
    "nextStep": "Give magnesium sulfate and stabilize airway/breathing/circulation; delivery follows maternal stabilization.",
    "takeaway": "For eclampsia, magnesium sulfate is the seizure drug of choice; delivery comes after stabilization.",
    "outline": {
      "section": "Pregnancy, Childbirth, & the Puerperium",
      "subsection": "Obstetric complications — eclampsia",
      "page": 27
    }
  },
  {
    "word": "LOCHIA",
    "specialty": "OB/GYN",
    "mode": "All Outline",
    "category": "OB/GYN / All Outline",
    "hint": "Normal postpartum vaginal discharge.",
    "diagnosis": "Lochia",
    "management": "Reassurance if normal pattern and no infection/bleeding concerns.",
    "nextStep": "Assess fever, uterine tenderness, and heavy bleeding if abnormal.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "VACCINE",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Immunization for disease prevention.",
    "diagnosis": "Routine vaccination",
    "management": "Follow age-based schedule and contraindications.",
    "nextStep": "Preventive care is high yield.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SIDS",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Sudden infant death during sleep.",
    "diagnosis": "Sudden infant death syndrome",
    "management": "Back-to-sleep and safe sleep counseling.",
    "nextStep": "Avoid prone sleeping and soft bedding.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "FONTANELLE",
    "specialty": "Pediatrics",
    "mode": "All Outline",
    "category": "Pediatrics / All Outline",
    "hint": "Soft spot on infant skull.",
    "diagnosis": "Fontanelle finding",
    "management": "Interpret with hydration and intracranial pressure context.",
    "nextStep": "Bulging suggests increased ICP; sunken suggests dehydration.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PYLORIC",
    "specialty": "Pediatrics",
    "mode": "Hard Mode",
    "category": "Pediatrics / Hard Mode",
    "hint": "Projectile nonbilious vomiting in young infant.",
    "diagnosis": "Pyloric stenosis",
    "management": "Surgical pyloromyotomy after correcting electrolytes.",
    "nextStep": "Hypochloremic metabolic alkalosis is classic.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MDD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Depressed mood or anhedonia with neurovegetative symptoms.",
    "diagnosis": "Major depressive disorder",
    "management": "Psychotherapy and/or SSRI; assess safety.",
    "nextStep": "Always screen for suicidal ideation.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MANIA",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Decreased need for sleep with elevated/irritable mood.",
    "diagnosis": "Manic episode",
    "management": "Mood stabilizer or antipsychotic; hospitalization if unsafe.",
    "nextStep": "Avoid antidepressant monotherapy in bipolar disorder.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "BIPOLAR",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Mood disorder with mania or hypomania.",
    "diagnosis": "Bipolar disorder",
    "management": "Mood stabilizer/atypical antipsychotic.",
    "nextStep": "Ask about past mania before starting antidepressants.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PTSD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Re-experiencing, avoidance, hyperarousal after trauma.",
    "diagnosis": "Post-traumatic stress disorder",
    "management": "Trauma-focused psychotherapy; SSRIs can help.",
    "nextStep": "Symptoms persist more than one month.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "OCD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Obsessions and compulsions.",
    "diagnosis": "Obsessive-compulsive disorder",
    "management": "CBT with exposure/response prevention and SSRIs.",
    "nextStep": "Insight may vary.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "AKATHISIA",
    "specialty": "Psychiatry",
    "mode": "Hard Mode",
    "category": "Psychiatry / Hard Mode",
    "hint": "Restlessness after antipsychotic use.",
    "diagnosis": "Akathisia",
    "management": "Beta blocker or benzodiazepine; adjust offending drug.",
    "nextStep": "Can be mistaken for anxiety.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SEPSIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Infection with organ dysfunction.",
    "diagnosis": "Sepsis",
    "management": "IV crystalloid resuscitation, broad-spectrum antibiotics tailored to source such as vancomycin plus piperacillin-tazobactam/cefepime/meropenem for severe healthcare-associated sepsis, source control, and norepinephrine for persistent hypotension after fluids.",
    "nextStep": "Recognize organ dysfunction, obtain cultures, start immediate resuscitation, and do not delay antibiotics in shock.",
    "takeaway": "Septic shock management is early antibiotics, fluids, source control, and vasopressors when hypotension persists.",
    "outline": {
      "section": "Multisystem Processes & Disorders",
      "subsection": "Infectious disorders / systemic host response / shock",
      "page": 34
    }
  },
  {
    "word": "HIV",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Retroviral infection with immune suppression.",
    "diagnosis": "HIV infection",
    "management": "Antiretroviral therapy for all; prophylaxis by CD4 count.",
    "nextStep": "Test with Ag/Ab screening followed by confirmatory testing.",
    "takeaway": "CD4 count predicts opportunistic infection risk, but ART is recommended for essentially all patients."
  },
  {
    "word": "AIDS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Advanced HIV or AIDS-defining illness.",
    "diagnosis": "AIDS",
    "management": "ART plus opportunistic infection prophylaxis/treatment.",
    "nextStep": "CD4 count helps predict infections.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "LYME",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Erythema migrans after tick exposure.",
    "diagnosis": "Lyme disease",
    "management": "Doxycycline for many nonpregnant patients.",
    "nextStep": "Clinical diagnosis with classic rash.",
    "takeaway": "Classic erythema migrans is a clinical diagnosis and does not require serology before treatment."
  },
  {
    "word": "SYPHILIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Painless chancre or systemic disease with varied findings.",
    "diagnosis": "Syphilis",
    "management": "Penicillin-based therapy depending stage.",
    "nextStep": "Screen other STIs and partners.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MALARIA",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Cyclic fever after travel.",
    "diagnosis": "Malaria",
    "management": "Species/severity-directed antimalarial therapy.",
    "nextStep": "Travel history is essential.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "DENGUE",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Fever, myalgias, thrombocytopenia after mosquito exposure.",
    "diagnosis": "Dengue",
    "management": "Supportive care; avoid NSAIDs if bleeding risk.",
    "nextStep": "Watch for shock and hemorrhage.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "KAPOSI",
    "specialty": "Infectious Disease",
    "mode": "Hard Mode",
    "category": "Infectious Disease / Hard Mode",
    "hint": "Purple vascular lesions in immunocompromised patient.",
    "diagnosis": "Kaposi sarcoma",
    "management": "Treat HIV with ART; oncology therapy if advanced.",
    "nextStep": "HHV-8 associated.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ANEMIA",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Low hemoglobin causing fatigue/pallor.",
    "diagnosis": "Anemia",
    "management": "Treat cause; transfuse if severe/symptomatic.",
    "nextStep": "Use MCV and reticulocyte count.",
    "takeaway": "Classify anemia by MCV and reticulocyte response before jumping to treatment."
  },
  {
    "word": "SICKLE",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Pain crises and functional asplenia.",
    "diagnosis": "Sickle cell disease",
    "management": "Hydration, analgesia, hydroxyurea prevention, vaccines.",
    "nextStep": "Fever needs urgent evaluation for infection.",
    "takeaway": "Fever in sickle cell disease is urgent because functional asplenia increases risk from encapsulated organisms."
  },
  {
    "word": "ITP",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Isolated thrombocytopenia with mucosal bleeding.",
    "diagnosis": "Immune thrombocytopenia",
    "management": "Steroids or IVIG if treatment needed.",
    "nextStep": "Platelets low with otherwise normal labs.",
    "takeaway": "Isolated thrombocytopenia with mucosal bleeding and otherwise normal labs is classic for ITP."
  },
  {
    "word": "DIC",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Bleeding and thrombosis with prolonged PT/PTT.",
    "diagnosis": "Disseminated intravascular coagulation",
    "management": "Treat underlying cause and support with blood products.",
    "nextStep": "Low fibrinogen and high D-dimer are clues.",
    "takeaway": "DIC shows simultaneous bleeding and clotting with consumption of platelets and coagulation factors."
  },
  {
    "word": "MYELOMA",
    "specialty": "Hematology",
    "mode": "Hard Mode",
    "category": "Hematology / Hard Mode",
    "hint": "Bone pain, anemia, renal dysfunction, hypercalcemia.",
    "diagnosis": "Multiple myeloma",
    "management": "Chemotherapy/immunotherapy; bisphosphonates/supportive care.",
    "nextStep": "Look for monoclonal protein.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "BIOPSY",
    "specialty": "Pathology",
    "mode": "High Yield",
    "category": "Pathology / High Yield",
    "hint": "Tissue sample for diagnosis.",
    "diagnosis": "Biopsy-based diagnosis",
    "management": "Management depends on pathology result.",
    "nextStep": "Often required for cancer diagnosis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "GOUT",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Acute red painful joint, often first MTP.",
    "diagnosis": "Gout",
    "management": "NSAIDs/colchicine/steroids acutely; urate-lowering chronically if indicated.",
    "nextStep": "Negatively birefringent needle-shaped crystals.",
    "takeaway": "Acute monoarthritis is confirmed by arthrocentesis when diagnosis is uncertain; crystals guide diagnosis."
  },
  {
    "word": "LUPUS",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Multisystem autoimmune disease.",
    "diagnosis": "Systemic lupus erythematosus",
    "management": "Hydroxychloroquine baseline; steroids/immunosuppression for organ disease.",
    "nextStep": "Renal involvement changes management.",
    "takeaway": "SLE management depends heavily on organ involvement, especially kidney and CNS disease."
  },
  {
    "word": "RAYNAUD",
    "specialty": "Rheumatology",
    "mode": "All Outline",
    "category": "Rheumatology / All Outline",
    "hint": "Color changes in fingers with cold/stress.",
    "diagnosis": "Raynaud phenomenon",
    "management": "Avoid triggers; calcium channel blockers if symptomatic.",
    "nextStep": "Secondary causes include systemic sclerosis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ECZEMA",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Pruritic inflammatory rash often in flexures.",
    "diagnosis": "Atopic dermatitis",
    "management": "Emollients and topical steroids for flares.",
    "nextStep": "Associated with asthma/allergic rhinitis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MELANOMA",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Asymmetric pigmented lesion with irregular border/color.",
    "diagnosis": "Melanoma",
    "management": "Excisional biopsy; staging guides treatment.",
    "nextStep": "ABCDE features help identify suspicious lesions.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SCABIES",
    "specialty": "Dermatology",
    "mode": "All Outline",
    "category": "Dermatology / All Outline",
    "hint": "Intense itching with burrows, worse at night.",
    "diagnosis": "Scabies",
    "management": "Permethrin for patient and close contacts.",
    "nextStep": "Wash bedding/clothing.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "TEN",
    "specialty": "Dermatology",
    "mode": "Hard Mode",
    "category": "Dermatology / Hard Mode",
    "hint": "Severe drug reaction with epidermal detachment.",
    "diagnosis": "Toxic epidermal necrolysis",
    "management": "Stop offending drug; burn-unit supportive care.",
    "nextStep": "Mucosal involvement is common.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "FRACTURE",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Pain, deformity, loss of function after trauma.",
    "diagnosis": "Fracture",
    "management": "Immobilization, pain control, reduction/surgery if indicated.",
    "nextStep": "Check neurovascular status before and after reduction.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "HERNIA",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Bulge through fascial defect.",
    "diagnosis": "Hernia",
    "management": "Elective repair if symptomatic; urgent surgery if strangulated.",
    "nextStep": "Incarceration/strangulation changes urgency.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "TRIAGE",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Prioritization by acuity.",
    "diagnosis": "Emergency triage",
    "management": "Stabilize life threats first.",
    "nextStep": "ABCDE approach comes first.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "TRAUMA",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Injury requiring acute evaluation.",
    "diagnosis": "Trauma evaluation",
    "management": "ATLS: airway, breathing, circulation, disability, exposure.",
    "nextStep": "Treat immediately life-threatening injuries first.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "STATIN",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "LDL-lowering drug class.",
    "diagnosis": "Hyperlipidemia treatment",
    "management": "High-intensity statin for ASCVD/high-risk patients.",
    "nextStep": "Monitor for myopathy and liver issues when clinically indicated.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "OPIOID",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "Analgesic causing respiratory depression/constipation.",
    "diagnosis": "Opioid effect or overdose",
    "management": "Naloxone for overdose; bowel regimen for constipation.",
    "nextStep": "Respiratory status is priority.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "WARFARIN",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "Vitamin K antagonist.",
    "diagnosis": "Anticoagulation management",
    "management": "Monitor INR; reverse with vitamin K/PCC depending severity.",
    "nextStep": "Teratogenic; many interactions.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "HEPARIN",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "Anticoagulant that can cause HIT.",
    "diagnosis": "Heparin therapy/HIT",
    "management": "Stop heparin if HIT suspected; use non-heparin anticoagulant.",
    "nextStep": "Platelet drop 5-10 days after exposure is classic.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MRI",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Magnetic resonance imaging.",
    "diagnosis": "MRI imaging",
    "management": "Excellent soft tissue and neuro/MSK imaging.",
    "nextStep": "Check implants and contraindications.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "XRAY",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Basic radiographic imaging.",
    "diagnosis": "X-ray imaging",
    "management": "First-line for many chest and bone complaints.",
    "nextStep": "Fast and accessible.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "DOPPLER",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Ultrasound flow assessment.",
    "diagnosis": "Doppler ultrasound",
    "management": "Used for vascular flow and cardiac evaluation.",
    "nextStep": "Helpful in DVT, torsion, and echo contexts.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CONTRAST",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Imaging agent to improve visualization.",
    "diagnosis": "Contrast-enhanced imaging",
    "management": "Weigh diagnostic benefit against kidney/allergy risks.",
    "nextStep": "Check renal function when relevant.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "AORTA",
    "specialty": "Anatomy",
    "mode": "High Yield",
    "category": "Anatomy / High Yield",
    "hint": "Largest artery.",
    "diagnosis": "Aortic anatomy/pathology",
    "management": "Management depends on aneurysm/dissection location.",
    "nextStep": "Ascending aortic dissection is surgical.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PLEURA",
    "specialty": "Anatomy",
    "mode": "All Outline",
    "category": "Anatomy / All Outline",
    "hint": "Membrane around lungs.",
    "diagnosis": "Pleural disease",
    "management": "Treat effusion/pneumothorax/empyema by cause.",
    "nextStep": "Thoracentesis can diagnose pleural effusion.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "RETINA",
    "specialty": "Anatomy",
    "mode": "All Outline",
    "category": "Anatomy / All Outline",
    "hint": "Light-sensitive eye tissue.",
    "diagnosis": "Retinal disease",
    "management": "Urgent ophthalmology for detachment/vascular occlusion.",
    "nextStep": "Sudden painless vision loss is high-yield.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CROUP",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Barking cough and inspiratory stridor in child.",
    "diagnosis": "Croup",
    "management": "Dexamethasone; nebulized epinephrine if severe.",
    "nextStep": "Assess airway severity first.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "BRONCHIOLITIS",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Infant with wheezing after viral URI.",
    "diagnosis": "Bronchiolitis",
    "management": "Supportive care with hydration/oxygen if needed.",
    "nextStep": "RSV is a common cause.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MENINGITIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Fever, headache, neck stiffness.",
    "diagnosis": "Meningitis",
    "management": "Empiric antibiotics after cultures; do not delay if unstable.",
    "nextStep": "Lumbar puncture unless contraindications.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "UTI",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Dysuria, frequency, urgency.",
    "diagnosis": "Urinary tract infection",
    "management": "Antibiotics based on site and risk factors.",
    "nextStep": "Pyelonephritis includes fever/flank pain.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PYELONEPHRITIS",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Fever, flank pain, urinary symptoms.",
    "diagnosis": "Pyelonephritis",
    "management": "Outpatient if stable: ciprofloxacin/levofloxacin when appropriate or TMP-SMX if susceptible. Inpatient/severe: IV ceftriaxone, cefepime, piperacillin-tazobactam, or carbapenem depending risk.",
    "nextStep": "Obtain urinalysis and urine culture; assess for sepsis, pregnancy, obstruction, or inability to tolerate PO.",
    "takeaway": "Fever/flank pain means upper tract infection; culture and severity assessment guide route and setting.",
    "outline": {
      "section": "Renal & Urinary System",
      "subsection": "Upper urinary tract infections — pyelonephritis",
      "page": 25
    }
  },
  {
    "word": "CYSTITIS",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Lower urinary symptoms without systemic signs.",
    "diagnosis": "Cystitis",
    "management": "Uncomplicated cystitis: nitrofurantoin 100 mg PO BID x5 days, TMP-SMX DS BID x3 days if local resistance acceptable, or fosfomycin 3 g once.",
    "nextStep": "Diagnose clinically in uncomplicated cases; urine testing/culture when complicated, recurrent, pregnant, or atypical.",
    "takeaway": "Uncomplicated cystitis is treated with short-course targeted oral therapy.",
    "outline": {
      "section": "Renal & Urinary System",
      "subsection": "Lower urinary tract infections — cystitis",
      "page": 25
    }
  },
  {
    "word": "EPILEPSY",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Recurrent unprovoked seizures.",
    "diagnosis": "Epilepsy",
    "management": "Antiseizure medication based on seizure type.",
    "nextStep": "Counsel on driving/safety.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "DEMENTIA",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Chronic cognitive decline impairing function.",
    "diagnosis": "Dementia",
    "management": "Treat reversible causes and provide safety planning.",
    "nextStep": "Differentiate from delirium and depression.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PARKINSON",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Bradykinesia, rigidity, resting tremor.",
    "diagnosis": "Parkinson disease",
    "management": "Levodopa/carbidopa for symptomatic treatment.",
    "nextStep": "Asymmetric resting tremor is classic.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CATARACT",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Painless gradual vision loss with lens opacity.",
    "diagnosis": "Cataract",
    "management": "Surgery if functionally significant.",
    "nextStep": "Glare and decreased red reflex are common.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "GLAUCOMA",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Optic nerve damage often with elevated pressure.",
    "diagnosis": "Glaucoma",
    "management": "Lower intraocular pressure.",
    "nextStep": "Acute angle closure is painful emergency.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "OTITIS",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Ear pain, fever, bulging tympanic membrane.",
    "diagnosis": "Acute otitis media",
    "management": "Analgesia; antibiotics by age/severity.",
    "nextStep": "Pneumatic otoscopy helps diagnosis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SINUSITIS",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Facial pain and purulent nasal symptoms.",
    "diagnosis": "Bacterial sinusitis",
    "management": "Antibiotics if severe, prolonged, or worsening.",
    "nextStep": "Most cases are viral initially.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ANAPHYLAXIS",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Hypotension/airway symptoms after allergen exposure.",
    "diagnosis": "Anaphylaxis",
    "management": "IM epinephrine first-line.",
    "nextStep": "Do not delay epinephrine.",
    "takeaway": "IM epinephrine is the first and most important treatment; antihistamines are adjuncts, not first-line."
  },
  {
    "word": "HYPERKALEMIA",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Peaked T waves or dangerous high potassium.",
    "diagnosis": "Hyperkalemia",
    "management": "Calcium for ECG changes, insulin/glucose, shift/remove potassium.",
    "nextStep": "Stabilize myocardium first if ECG changes.",
    "takeaway": "ECG changes from hyperkalemia require calcium first to stabilize the myocardium."
  },
  {
    "word": "HYPONATREMIA",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Low sodium, seizures if severe.",
    "diagnosis": "Hyponatremia",
    "management": "Treat based on symptoms and volume status.",
    "nextStep": "Avoid overly rapid correction.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "KETOACIDOSIS",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Ketones with acidosis.",
    "diagnosis": "Ketoacidosis",
    "management": "Fluids, insulin if DKA, electrolyte correction.",
    "nextStep": "Find precipitating trigger.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "THYROTOXICOSIS",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Excess thyroid hormone symptoms.",
    "diagnosis": "Thyrotoxicosis",
    "management": "Beta blocker; antithyroid therapy depending cause.",
    "nextStep": "Low TSH is the typical first clue.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PHEOCHROMOCYTOMA",
    "specialty": "Endocrinology",
    "mode": "Hard Mode",
    "category": "Endocrinology / Hard Mode",
    "hint": "Episodic headache, sweating, palpitations, hypertension.",
    "diagnosis": "Pheochromocytoma",
    "management": "Alpha blockade before beta blockade, then surgery.",
    "nextStep": "Never beta-block first.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PROLACTINOMA",
    "specialty": "Endocrinology",
    "mode": "Hard Mode",
    "category": "Endocrinology / Hard Mode",
    "hint": "Galactorrhea, amenorrhea, visual symptoms.",
    "diagnosis": "Prolactinoma",
    "management": "Dopamine agonist such as cabergoline.",
    "nextStep": "Check prolactin and pituitary MRI.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CELIAC",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Malabsorption with dermatitis herpetiformis.",
    "diagnosis": "Celiac disease",
    "management": "Gluten-free diet.",
    "nextStep": "Check tissue transglutaminase IgA.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CROHN",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Skip lesions and transmural inflammation.",
    "diagnosis": "Crohn disease",
    "management": "Steroids for flares; biologics/immunomodulators for maintenance.",
    "nextStep": "Can affect mouth to anus.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "COLITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Bloody diarrhea with continuous colonic inflammation.",
    "diagnosis": "Ulcerative colitis",
    "management": "5-ASA, steroids for flares, biologics if severe.",
    "nextStep": "Starts at rectum; surgery can be curative.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CHOLANGITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Fever, RUQ pain, jaundice.",
    "diagnosis": "Ascending cholangitis",
    "management": "Broad gram-negative and anaerobic coverage such as piperacillin-tazobactam, ceftriaxone plus metronidazole, or cefepime plus metronidazole depending severity/local resistance; ERCP for source control.",
    "nextStep": "Start IV antibiotics and arrange urgent biliary decompression with ERCP.",
    "takeaway": "Cholangitis needs antibiotics plus source control; ERCP is the key next step.",
    "outline": {
      "section": "Gastrointestinal System",
      "subsection": "Biliary system — cholangitis / bile duct obstruction",
      "page": 23
    }
  },
  {
    "word": "CHOLECYSTITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "RUQ pain, fever, positive Murphy sign.",
    "diagnosis": "Acute cholecystitis",
    "management": "Antibiotics and cholecystectomy.",
    "nextStep": "RUQ ultrasound is first-line.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PANCREATITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Epigastric pain radiating to back.",
    "diagnosis": "Acute pancreatitis",
    "management": "IV fluids, analgesia, early nutrition.",
    "nextStep": "Gallstones and alcohol are common causes.",
    "takeaway": "Acute pancreatitis is a clinical/lab diagnosis; management is fluids, pain control, and treating the cause."
  },
  {
    "word": "HEPATITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Marked transaminase elevation.",
    "diagnosis": "Hepatitis",
    "management": "Treat based on cause; supportive for many viral cases.",
    "nextStep": "Check exposure, meds, alcohol, viral serologies.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "VARICES",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Upper GI bleed in cirrhosis.",
    "diagnosis": "Esophageal variceal bleed",
    "management": "Resuscitation, octreotide, antibiotics, endoscopic banding.",
    "nextStep": "Airway protection may be needed.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ENCEPHALOPATHY",
    "specialty": "Gastroenterology",
    "mode": "All Outline",
    "category": "Gastroenterology / All Outline",
    "hint": "Confusion in liver disease.",
    "diagnosis": "Hepatic encephalopathy",
    "management": "Lactulose +/- rifaximin.",
    "nextStep": "Precipitants include GI bleed, infection, constipation.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PID",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Pelvic pain, cervical motion tenderness.",
    "diagnosis": "Pelvic inflammatory disease",
    "management": "Ceftriaxone 500 mg IM once plus doxycycline 100 mg PO BID for 14 days plus metronidazole 500 mg PO BID for 14 days; treat partners and test for gonorrhea/chlamydia/HIV/syphilis.",
    "nextStep": "Treat empirically when pelvic pain plus cervical motion, uterine, or adnexal tenderness is present and no better diagnosis explains it.",
    "takeaway": "PID is treated empirically to prevent infertility and chronic pelvic pain.",
    "outline": {
      "section": "Female and Transgender Reproductive System & Breast",
      "subsection": "Infectious disorders — pelvic inflammatory disease",
      "page": 29
    }
  },
  {
    "word": "TORSION",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Sudden severe unilateral pelvic pain.",
    "diagnosis": "Ovarian torsion",
    "management": "Urgent surgical detorsion.",
    "nextStep": "Doppler ultrasound can help but does not exclude.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "AMENORRHEA",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Absent menses.",
    "diagnosis": "Amenorrhea",
    "management": "Pregnancy test first.",
    "nextStep": "Then evaluate TSH, prolactin, ovarian/hypothalamic causes.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PCOS",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Irregular menses, hyperandrogenism.",
    "diagnosis": "Polycystic ovary syndrome",
    "management": "Weight loss, combined OCPs, metformin if indicated.",
    "nextStep": "Endometrial protection matters.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ENDOMETRIOSIS",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Cyclic pelvic pain and dyspareunia.",
    "diagnosis": "Endometriosis",
    "management": "NSAIDs, hormonal suppression, laparoscopy if needed.",
    "nextStep": "Can cause infertility.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "FIBROID",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Heavy bleeding and enlarged irregular uterus.",
    "diagnosis": "Uterine leiomyoma",
    "management": "NSAIDs/OCPs, GnRH analogs, myomectomy/hysterectomy depending goals.",
    "nextStep": "Ultrasound is first-line.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "MASTITIS",
    "specialty": "OB/GYN",
    "mode": "All Outline",
    "category": "OB/GYN / All Outline",
    "hint": "Breast pain, erythema, fever during lactation.",
    "diagnosis": "Lactational mastitis",
    "management": "Continue breastfeeding and give antibiotics when bacterial.",
    "nextStep": "Abscess needs drainage.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PROSTATITIS",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Fever, pelvic pain, tender prostate.",
    "diagnosis": "Acute bacterial prostatitis",
    "management": "Antibiotics with good prostate penetration.",
    "nextStep": "Avoid prostate massage.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "EPIDIDYMITIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Scrotal pain relieved by elevation.",
    "diagnosis": "Epididymitis",
    "management": "Likely STI: ceftriaxone 500 mg IM once plus doxycycline 100 mg PO BID x10 days; enteric organism risk: levofloxacin when appropriate.",
    "nextStep": "Differentiate from torsion; use Doppler ultrasound urgently if torsion cannot be excluded.",
    "takeaway": "In acute scrotal pain, never miss torsion; antibiotics depend on STI vs enteric risk.",
    "outline": {
      "section": "Male and Transgender Reproductive System",
      "subsection": "Infectious disorders — epididymitis/orchitis/STIs",
      "page": 31
    }
  },
  {
    "word": "TESTICULAR",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Sudden scrotal pain with absent cremasteric reflex.",
    "diagnosis": "Testicular torsion",
    "management": "Immediate surgical exploration.",
    "nextStep": "Do not delay for imaging if high suspicion.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "BPH",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Urinary hesitancy and weak stream in older man.",
    "diagnosis": "Benign prostatic hyperplasia",
    "management": "Alpha blocker; 5-alpha-reductase inhibitor for enlarged prostate.",
    "nextStep": "Check for retention/renal complications.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PSA",
    "specialty": "Oncology",
    "mode": "All Outline",
    "category": "Oncology / All Outline",
    "hint": "Prostate cancer screening marker.",
    "diagnosis": "Prostate cancer screening",
    "management": "Shared decision-making for screening.",
    "nextStep": "Interpret PSA in clinical context.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "BREAST",
    "specialty": "Oncology",
    "mode": "High Yield",
    "category": "Oncology / High Yield",
    "hint": "Mass or abnormal mammogram.",
    "diagnosis": "Breast lesion/cancer evaluation",
    "management": "Imaging and biopsy based on age/findings.",
    "nextStep": "Triple assessment: exam, imaging, tissue.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "OVARIAN",
    "specialty": "Oncology",
    "mode": "Hard Mode",
    "category": "Oncology / Hard Mode",
    "hint": "Bloating and adnexal mass in older patient.",
    "diagnosis": "Ovarian cancer",
    "management": "Surgical staging/debulking and chemotherapy.",
    "nextStep": "Often presents late.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "LEUKEMIA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Blasts or abnormal WBCs with cytopenias.",
    "diagnosis": "Leukemia",
    "management": "Urgent hematology care; therapy depends on type.",
    "nextStep": "Auer rods suggest AML.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "LYMPHOMA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Painless lymphadenopathy with B symptoms.",
    "diagnosis": "Lymphoma",
    "management": "Biopsy and staging guide therapy.",
    "nextStep": "Excisional biopsy often preferred.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "NEUTROPENIA",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Low neutrophils with fever.",
    "diagnosis": "Febrile neutropenia",
    "management": "Immediate broad-spectrum antipseudomonal antibiotics.",
    "nextStep": "Do not wait for culture results.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "THALASSEMIA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Microcytic anemia with normal/high RBC count.",
    "diagnosis": "Thalassemia",
    "management": "Supportive care; transfusions/chelation for severe disease.",
    "nextStep": "Hemoglobin electrophoresis can help.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "GPD",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Hemolysis after oxidant stress.",
    "diagnosis": "G6PD deficiency",
    "management": "Avoid triggers; supportive care.",
    "nextStep": "Bite cells/Heinz bodies are classic.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SPHEROCYTOSIS",
    "specialty": "Hematology",
    "mode": "Hard Mode",
    "category": "Hematology / Hard Mode",
    "hint": "Hemolytic anemia with splenomegaly.",
    "diagnosis": "Hereditary spherocytosis",
    "management": "Folate; splenectomy in severe cases.",
    "nextStep": "Increased MCHC can be a clue.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "RASH",
    "specialty": "Dermatology",
    "mode": "All Outline",
    "category": "Dermatology / All Outline",
    "hint": "Skin eruption with broad differential.",
    "diagnosis": "Rash evaluation",
    "management": "Treat cause; assess systemic symptoms and mucosal involvement.",
    "nextStep": "Drug reactions and infections are common test themes.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "CELLULITIS",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Warm, tender, erythematous skin infection.",
    "diagnosis": "Cellulitis",
    "management": "Nonpurulent outpatient cellulitis: cephalexin or dicloxacillin. MRSA risk or purulence: TMP-SMX, doxycycline, or clindamycin. Severe infection: IV vancomycin plus broader gram-negative/anaerobic coverage when indicated.",
    "nextStep": "Determine purulent vs nonpurulent infection and assess systemic toxicity.",
    "takeaway": "Cellulitis antibiotic choice depends on purulence, MRSA risk, and severity.",
    "outline": {
      "section": "Skin & Subcutaneous Tissue",
      "subsection": "Bacterial skin infections — cellulitis/MRSA/MSSA",
      "page": 14
    }
  },
  {
    "word": "IMPETIGO",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Honey-colored crusted lesions.",
    "diagnosis": "Impetigo",
    "management": "Topical mupirocin or oral antibiotics if extensive.",
    "nextStep": "Staph aureus and Strep pyogenes.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "PSORIASIS",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Silvery plaques on extensor surfaces.",
    "diagnosis": "Psoriasis",
    "management": "Topical steroids; systemic/biologics if severe.",
    "nextStep": "Can be associated with arthritis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ROSACEA",
    "specialty": "Dermatology",
    "mode": "All Outline",
    "category": "Dermatology / All Outline",
    "hint": "Facial flushing and papules.",
    "diagnosis": "Rosacea",
    "management": "Topical metronidazole/azelaic acid; avoid triggers.",
    "nextStep": "No comedones unlike acne.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SLE",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Multisystem autoimmune disease.",
    "diagnosis": "Systemic lupus erythematosus",
    "management": "Hydroxychloroquine; steroids/immunosuppression by severity.",
    "nextStep": "Check renal involvement with UA/protein.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "VASCULITIS",
    "specialty": "Rheumatology",
    "mode": "All Outline",
    "category": "Rheumatology / All Outline",
    "hint": "Inflammation of blood vessels causing organ ischemia.",
    "diagnosis": "Vasculitis",
    "management": "Immunosuppression based on type/severity.",
    "nextStep": "Biopsy or serologies can support diagnosis.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "SARCOID",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Noncaseating granulomas and hilar adenopathy.",
    "diagnosis": "Sarcoidosis",
    "management": "Observation if mild; steroids if organ-threatening.",
    "nextStep": "Can affect lungs, eyes, skin, heart.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  },
  {
    "word": "ANCA",
    "specialty": "Rheumatology",
    "mode": "Hard Mode",
    "category": "Rheumatology / Hard Mode",
    "hint": "Antibody associated with small-vessel vasculitis.",
    "diagnosis": "ANCA-associated vasculitis",
    "management": "High-dose steroids plus immunosuppression.",
    "nextStep": "Renal/pulmonary involvement is high-risk.",
    "takeaway": "Recognize the clinical pattern, choose the safest immediate next step, then give specific evidence-based management."
  }
];

const MAX_ATTEMPTS = 6;
const DAILY_POOL = WORDS.filter(w => w.mode === "High Yield");

let selectedSpecialty = localStorage.getItem("medwordleSpecialty") || "All Medicine";
let selectedMode = localStorage.getItem("medwordleMode") || "High Yield";
let playType = localStorage.getItem("medwordlePlayType") || "Practice";
let answerObj, answer, currentRow = 0, gameOver = false, guesses = [], rowScores = [];
let currentResult = null;

const board = document.getElementById("board");
const categoryEl = document.getElementById("category");
const modeDescriptionEl = document.getElementById("modeDescription");
const hintEl = document.getElementById("hint");
const messageEl = document.getElementById("message");
const form = document.getElementById("guessForm");
const input = document.getElementById("guessInput");
const hintBtn = document.getElementById("hintBtn");
const newGameBtn = document.getElementById("newGameBtn");
const shareBtn = document.getElementById("shareBtn");
const practiceWeakBtn = document.getElementById("practiceWeakBtn");
const keyboard = document.getElementById("keyboard");
const specialtySelect = document.getElementById("specialtySelect");
const modeSelect = document.getElementById("modeSelect");
const playTypeSelect = document.getElementById("playTypeSelect");
const pearlBox = document.getElementById("pearlBox");
const pearlText = document.getElementById("pearlText");
const dailyBanner = document.getElementById("dailyBanner");
const dailyTitle = document.getElementById("dailyTitle");
const dailySubtext = document.getElementById("dailySubtext");
const dailyStatus = document.getElementById("dailyStatus");

const OUTLINE_URL = "https://www.usmle.org/sites/default/files/2022-01/USMLE_Content_Outline_0.pdf";

const OUTLINE_MAP = {
  "Cardiology": { section: "Cardiovascular System", subsection: "Dysrhythmias / heart failure / ischemic heart disease / vascular disorders", page: 18 },
  "Pulmonology": { section: "Respiratory System", subsection: "Pneumonia / obstructive airway disease / pulmonary vascular disorders", page: 20 },
  "Gastroenterology": { section: "Gastrointestinal System", subsection: "GI bleeding / liver-biliary-pancreatic disorders / intestinal disorders", page: 22 },
  "Nephrology": { section: "Renal & Urinary System", subsection: "AKI/CKD / urinary symptoms / renal vascular and tubular disorders", page: 25 },
  "Endocrinology": { section: "Endocrine System", subsection: "Diabetes / thyroid / adrenal / pituitary disorders", page: 32 },
  "Neurology": { section: "Nervous System & Special Senses", subsection: "Cerebrovascular disease / paroxysmal disorders / neuromuscular disorders", page: 10 },
  "OB/GYN": { section: "Pregnancy, Childbirth, & the Puerperium", subsection: "Obstetric complications / labor and delivery / puerperium", page: 27 },
  "Pediatrics": { section: "Human Development / Newborn", subsection: "Normal development / preventive care / newborn disorders", page: 4 },
  "Psychiatry": { section: "Behavioral Health", subsection: "Mood, anxiety, psychotic, substance use, and developmental disorders", page: 8 },
  "Infectious Disease": { section: "Multisystem Processes & Disorders / Immune System", subsection: "Infectious disorders and host response to insult", page: 34 },
  "Hematology": { section: "Blood & Lymphoreticular System", subsection: "Anemia / coagulation disorders / leukemia-lymphoma / transfusion reactions", page: 6 },
  "Oncology": { section: "Multisystem Processes & Disorders", subsection: "Neoplasms and related disorders", page: 34 },
  "Dermatology": { section: "Skin & Subcutaneous Tissue", subsection: "Infectious, inflammatory, neoplastic, and drug-related skin disorders", page: 14 },
  "Rheumatology": { section: "Multisystem Processes & Disorders", subsection: "Autoimmune arteritis/vasculitis and systemic inflammatory disorders", page: 34 },
  "Surgery": { section: "Musculoskeletal / GI / Trauma", subsection: "Traumatic, mechanical, and operative disorders", page: 16 },
  "Emergency Medicine": { section: "Multisystem Processes & Disorders", subsection: "Acute presentations, shock, trauma, and systemic disease", page: 34 },
  "Pharmacology": { section: "Adverse Effects of Drugs", subsection: "Drug adverse effects by organ system", page: 7 },
  "Pathology": { section: "Multisystem Processes & Disorders", subsection: "Neoplasms, inflammation, and systemic disease processes", page: 34 },
  "Radiology": { section: "USMLE Organ System Outline", subsection: "Imaging-relevant diagnosis across organ systems", page: 3 },
  "Anatomy": { section: "USMLE Organ System Outline", subsection: "Anatomic structures as tested through organ systems", page: 3 }
};

const TRIAL_REFERENCE_MAP = {
  "STEMI": { label: "DANAMI-2 / ACC-AHA ACS guidance: primary PCI strategy for STEMI", url: "https://pubmed.ncbi.nlm.nih.gov/12480399/" },
  "NSTEMI": { label: "TACTICS-TIMI 18 / ACC-AHA ACS guidance: early invasive strategy in higher-risk NSTE-ACS", url: "https://pubmed.ncbi.nlm.nih.gov/11287918/" },
  "AFIB": { label: "AFFIRM trial: rate vs rhythm control in atrial fibrillation", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa021328" },
  "CHF": { label: "PARADIGM-HF: sacubitril/valsartan in HFrEF", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1409077" },
  "PNEUMONIA": { label: "ATS/IDSA CAP guideline: empiric antibiotic selection by setting/comorbidity", url: "https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults/" },
  "COPD": { label: "GOLD strategy: COPD exacerbation treatment", url: "https://goldcopd.org/" },
  "ASTHMA": { label: "GINA strategy: asthma exacerbation management", url: "https://ginasthma.org/" },
  "EMBOLUS": { label: "PIOPED evidence base and guideline approach to pulmonary embolism diagnosis", url: "https://pubmed.ncbi.nlm.nih.gov/23394420/" },
  "SEPSIS": { label: "Surviving Sepsis Campaign: resuscitation, antibiotics, vasopressors, source control", url: "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines" },
  "STROKE": { label: "NINDS rt-PA trial: thrombolysis evidence in acute ischemic stroke", url: "https://www.nejm.org/doi/full/10.1056/NEJM199512143332401" },
  "DKA": { label: "ADA standards: hyperglycemic crisis management", url: "https://diabetesjournals.org/care/issue" },
  "PID": { label: "CDC STI Treatment Guidelines: PID regimen", url: "https://www.cdc.gov/std/treatment-guidelines/pid.htm" },
  "CYSTITIS": { label: "IDSA guidance: uncomplicated cystitis/pyelonephritis", url: "https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/" },
  "PYELONEPHRITIS": { label: "IDSA guidance: uncomplicated pyelonephritis", url: "https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/" },
  "CELLULITIS": { label: "IDSA Skin and Soft Tissue Infection guideline", url: "https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" },
  "CHOLANGITIS": { label: "Tokyo Guidelines: acute cholangitis source control", url: "https://pubmed.ncbi.nlm.nih.gov/29090866/" }
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function friendlyDate() {
  return new Date().toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);
  return Math.abs(hash);
}

function classNameForSpecialty(specialty) { return THEMES[specialty] || "theme-all"; }

function applyTheme(specialty) {
  Object.values(THEMES).forEach(cls => document.body.classList.remove(cls));
  document.body.classList.add(classNameForSpecialty(specialty));
}

function modeAllows(item) {
  if (selectedMode === "High Yield") return item.mode === "High Yield";
  if (selectedMode === "All Outline") return item.mode === "High Yield" || item.mode === "All Outline";
  return true;
}

function adaptiveSpecialty() {
  return "All Medicine";
}

function getPool() {
  let pool = WORDS.filter(modeAllows);
  let effectiveSpecialty = playType === "Adaptive" ? adaptiveSpecialty() : selectedSpecialty;

  if (effectiveSpecialty !== "All Medicine") {
    const specialtyPool = pool.filter(item => item.specialty === effectiveSpecialty);
    if (specialtyPool.length > 0) return specialtyPool;
  }
  return pool.length ? pool : WORDS;
}

function dailyStorageKey() { return "medwordleDaily-" + todayKey(); }
function getDailyRecord() { return JSON.parse(localStorage.getItem(dailyStorageKey()) || "null"); }
function saveDailyRecord(record) { localStorage.setItem(dailyStorageKey(), JSON.stringify(record)); }

function chooseWord() {
  if (playType === "Daily Challenge") {
    const pool = DAILY_POOL.length ? DAILY_POOL : WORDS;
    const idx = hashString("MedWordleOfficialDaily:" + todayKey()) % pool.length;
    answerObj = pool[idx];
  } else {
    const pool = getPool();
    answerObj = pool[Math.floor(Math.random() * pool.length)];
  }
  answer = answerObj.word.toUpperCase();
}

function updateControlsForPlayType() {
  const isDaily = playType === "Daily Challenge";
  specialtySelect.disabled = isDaily;
  modeSelect.disabled = isDaily;
  dailyBanner.classList.toggle("hidden", !isDaily);

  if (isDaily) {
    specialtySelect.value = "All Medicine";
    modeSelect.value = "High Yield";
    dailyTitle.textContent = "MedWordle Daily • " + friendlyDate();
    dailySubtext.textContent = "One universal word per day. Specialty and difficulty are locked for the official challenge.";
    const rec = getDailyRecord();
    dailyStatus.textContent = rec ? (rec.won ? "Completed ✅" : "Completed") : "Available";
    newGameBtn.disabled = true;
    practiceWeakBtn.classList.remove("hidden");
  } else {
    specialtySelect.value = selectedSpecialty;
    modeSelect.value = selectedMode;
    newGameBtn.disabled = false;
    practiceWeakBtn.classList.add("hidden");
  }
}

function initGame() {
  updateControlsForPlayType();
  chooseWord();
  applyTheme(playType === "Daily Challenge" ? "All Medicine" : (playType === "Adaptive" ? adaptiveSpecialty() : selectedSpecialty));

  currentRow = 0; gameOver = false; guesses = []; rowScores = []; currentResult = null;
  board.innerHTML = ""; keyboard.innerHTML = "";
  pearlBox.classList.add("hidden");
  pearlText.innerHTML = "";
  hintEl.textContent = `Hint: ${answerObj.hint}`;
  hintEl.classList.add("hidden");
  hintBtn.textContent = "Show Hint";
  input.value = "";
  input.maxLength = answer.length;
  input.placeholder = `${answer.length}-letter term`;
  input.disabled = false;

  if (playType === "Daily Challenge") {
    categoryEl.textContent = "Official Daily • All Medicine";
    modeDescriptionEl.textContent = "Same word for everyone today. Come back tomorrow for a new challenge.";
  } else {
    categoryEl.textContent = `${playType} • ${answerObj.specialty} • ${selectedMode}`;
    modeDescriptionEl.textContent = MODE_DESCRIPTIONS[selectedMode];
  }

  buildBoard();
  buildKeyboard();

  const dailyRecord = playType === "Daily Challenge" ? getDailyRecord() : null;
  if (dailyRecord) restoreDailyRecord(dailyRecord);
  else {
    messageEl.textContent = `Guess the ${answer.length}-letter medical term.`;
    messageEl.className = "message";
    input.focus();
  }
}

function buildBoard() {
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
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
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
    if (guess[i] === answer[i]) { result[i] = "correct"; answerLetters[i] = null; }
  }
  for (let i = 0; i < answer.length; i++) {
    if (result[i] === "correct") continue;
    const foundIndex = answerLetters.indexOf(guess[i]);
    if (foundIndex !== -1) { result[i] = "present"; answerLetters[foundIndex] = null; }
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

function getOutlineInfo() {
  return answerObj.outline || OUTLINE_MAP[answerObj.specialty] || {
    section: "USMLE Content Outline",
    subsection: "Relevant organ system content",
    page: 3
  };
}

function getTrialReference() {
  return answerObj.trial || TRIAL_REFERENCE_MAP[answerObj.word] || null;
}

function showPearl() {
  const outline = getOutlineInfo();
  const outlineHref = `${OUTLINE_URL}#page=${outline.page}`;
  const trial = getTrialReference();
  const trialHtml = trial ? `<div class="pearl-row trial-link"><a href="${trial.url}" target="_blank" rel="noopener">🧪 Evidence/Guideline Reference: ${trial.label}</a></div>` : "";

  pearlText.innerHTML = `
    <div class="pearl-row key-clue"><strong>Key Clue:</strong> ${answerObj.hint}</div>
    <div class="pearl-row"><strong>Diagnosis:</strong> ${answerObj.diagnosis}</div>
    <div class="pearl-row next-step"><strong>Next Best Step:</strong> ${answerObj.nextStep}</div>
    <div class="pearl-row"><strong>Management:</strong> ${answerObj.management}</div>
    <div class="pearl-row why"><strong>NBME Takeaway:</strong> ${answerObj.takeaway}</div>
    <div class="pearl-row outline-link"><a href="${outlineHref}" target="_blank" rel="noopener">📖 USMLE Outline: ${outline.section} — ${outline.subsection}</a></div>
    ${trialHtml}
  `;
  pearlBox.classList.remove("hidden");
}

function recordResult(won) {
  if (currentResult !== null) return;
  currentResult = won;

  if (playType === "Daily Challenge") {
    saveDailyRecord({
      won,
      answer,
      guesses,
      rowScores,
      attempts: guesses.length,
      specialty: answerObj.specialty,
      mode: "Official Daily"
    });
    dailyStatus.textContent = won ? "Completed ✅" : "Completed";
  }
}

function restoreDailyRecord(record) {
  guesses = record.guesses || [];
  rowScores = record.rowScores || [];

  guesses.forEach((guess, r) => {
    const score = rowScores[r] || scoreGuess(guess);
    for (let i = 0; i < answer.length; i++) {
      const tile = document.getElementById(`tile-${r}-${i}`);
      if (!tile) continue;
      tile.textContent = guess[i];
      tile.classList.add(score[i]);
      updateKeyboard(guess[i], score[i]);
    }
  });

  gameOver = true;
  currentResult = !!record.won;
  input.disabled = true;
  messageEl.textContent = record.won
    ? `Today's Daily Challenge completed — ${answer}.`
    : `Today's Daily Challenge completed. The answer was ${answer}.`;
  messageEl.className = record.won ? "message win" : "message loss";
  showPearl();
}

function submitGuess(rawGuess) {
  if (gameOver) return;
  const guess = rawGuess.toUpperCase().replace(/[^A-Z]/g, "");
  if (guess.length !== answer.length) { messageEl.textContent = `Enter exactly ${answer.length} letters.`; return; }
  if (guesses.includes(guess)) { messageEl.textContent = "You already tried that word."; return; }

  guesses.push(guess);
  const score = scoreGuess(guess);
  rowScores.push(score);

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
    recordResult(true);
    return;
  }

  currentRow++;
  if (currentRow >= MAX_ATTEMPTS) {
    gameOver = true;
    input.disabled = true;
    messageEl.textContent = `Good try. The answer was ${answer}.`;
    messageEl.className = "message loss";
    showPearl();
    recordResult(false);
  } else {
    messageEl.textContent = `${MAX_ATTEMPTS - currentRow} guesses remaining.`;
  }
  input.value = "";
  input.focus();
}

function emojiGrid() {
  if (!rowScores.length) return "";
  return rowScores.map(row => row.map(s => s === "correct" ? "🟩" : s === "present" ? "🟨" : "⬜").join("")).join("\n");
}

function resultText() {
  const status = currentResult === true ? `${guesses.length}/${MAX_ATTEMPTS}` : currentResult === false ? `X/${MAX_ATTEMPTS}` : "in progress";
  const title = playType === "Daily Challenge" ? `MedWordle Daily ${todayKey()}` : `MedWordle Practice ${todayKey()}`;
  return `${title}\n${status} • ${answerObj.specialty}\n${emojiGrid()}\n${window.location.href}`;
}

function reflectionDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadReflection() {
  const reflections = JSON.parse(localStorage.getItem("medwordle_reflections") || "{}");
  const today = reflections[reflectionDateKey()];
  if (!today) return;

  document.getElementById("roseInput").value = today.rose || "";
  document.getElementById("thornInput").value = today.thorn || "";
  document.getElementById("buffaloInput").value = today.buffalo || "";
}

function saveReflection() {
  const rose = document.getElementById("roseInput").value || "";
  const thorn = document.getElementById("thornInput").value || "";
  const buffalo = document.getElementById("buffaloInput").value || "";

  const reflections = JSON.parse(localStorage.getItem("medwordle_reflections") || "{}");
  reflections[reflectionDateKey()] = { rose, thorn, buffalo, savedAt: new Date().toISOString() };
  localStorage.setItem("medwordle_reflections", JSON.stringify(reflections));

  document.getElementById("reflectionStatus").textContent = "Saved for today ✅";
  if (typeof gtag === "function") gtag("event", "reflection_saved");
}

async function shareReflection() {
  const rose = document.getElementById("roseInput").value || "";
  const thorn = document.getElementById("thornInput").value || "";
  const buffalo = document.getElementById("buffaloInput").value || "";
  const text = `Rose 🌹: ${rose || "—"}\nThorn 🌵: ${thorn || "—"}\nBuffalo 🐃: ${buffalo || "—"}\n\nShared from MedWordle`;

  try {
    if (navigator.share) await navigator.share({ title: "Rose, Thorn & Buffalo", text });
    else {
      await navigator.clipboard.writeText(text);
      document.getElementById("reflectionStatus").textContent = "Reflection copied to clipboard ✅";
    }
  } catch (e) {
    document.getElementById("reflectionStatus").textContent = "Share canceled.";
  }
}

specialtySelect.value = selectedSpecialty;
modeSelect.value = selectedMode;
playTypeSelect.value = playType;

specialtySelect.addEventListener("change", () => {
  if (playType === "Daily Challenge") { specialtySelect.value = "All Medicine"; return; }
  selectedSpecialty = specialtySelect.value;
  localStorage.setItem("medwordleSpecialty", selectedSpecialty);
  initGame();
});
modeSelect.addEventListener("change", () => {
  if (playType === "Daily Challenge") { modeSelect.value = "High Yield"; return; }
  selectedMode = modeSelect.value;
  localStorage.setItem("medwordleMode", selectedMode);
  initGame();
});
playTypeSelect.addEventListener("change", () => {
  playType = playTypeSelect.value;
  localStorage.setItem("medwordlePlayType", playType);
  initGame();
});
form.addEventListener("submit", event => {
  event.preventDefault();
  submitGuess(input.value);
});
hintBtn.addEventListener("click", () => {
  hintEl.classList.toggle("hidden");
  hintBtn.textContent = hintEl.classList.contains("hidden") ? "Show Hint" : "Hide Hint";
});
newGameBtn.addEventListener("click", initGame);
practiceWeakBtn.addEventListener("click", () => {
  playType = "Adaptive";
  playTypeSelect.value = playType;
  localStorage.setItem("medwordlePlayType", playType);
  initGame();
});
shareBtn.addEventListener("click", async () => {
  const text = resultText();
  try {
    if (navigator.share) await navigator.share({ title: "MedWordle", text });
    else {
      await navigator.clipboard.writeText(text);
      messageEl.textContent = "Result copied to clipboard.";
    }
  } catch (e) {
    messageEl.textContent = "Share canceled.";
  }
});
input.addEventListener("input", () => {
  input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");
});

document.querySelectorAll(".playlist-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "study_playlist_clicked", { platform: btn.textContent.trim() });
    }
  });
});

document.getElementById("saveReflectionBtn").addEventListener("click", saveReflection);
document.getElementById("shareReflectionBtn").addEventListener("click", shareReflection);

loadReflection();
initGame();
