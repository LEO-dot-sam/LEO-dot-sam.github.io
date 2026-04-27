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
    "management": "Aspirin plus a P2Y12 inhibitor, anticoagulation such as unfractionated heparin or bivalirudin per protocol, high-intensity statin, nitrates if appropriate, and urgent reperfusion with PCI.",
    "nextStep": "Activate cath lab for primary PCI if available within the appropriate window; give aspirin immediately if no contraindication."
 ,
    "takeaway": "For ST-elevation MI, do not delay reperfusion for extra testing; aspirin and cath lab activation are the high-yield moves."
 ,
    "outline": {"section": "Cardiovascular System", "subsection": "Ischemic heart disease — acute coronary syndrome / acute myocardial infarction", "page": 18}
  },
  {
    "word": "NSTEMI",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Troponin elevation without ST elevation.",
    "diagnosis": "Non-ST elevation myocardial infarction",
    "management": "Aspirin plus P2Y12 inhibitor when indicated, anticoagulation with unfractionated heparin/enoxaparin/bivalirudin per setting, high-intensity statin, beta blocker if no contraindication, nitrates for pain.",
    "nextStep": "Obtain ECG/troponins, start ACS therapy, and risk stratify for early invasive coronary angiography."
 ,
    "takeaway": "NSTEMI is troponin-positive ACS without ST elevation; stabilize medically and risk stratify for invasive management."
 ,
    "outline": {"section": "Cardiovascular System", "subsection": "Ischemic heart disease — acute coronary syndrome", "page": 18}
  },
  {
    "word": "AFIB",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Irregularly irregular rhythm.",
    "diagnosis": "Atrial fibrillation",
    "management": "Rate/rhythm control and anticoagulation based on stroke risk.",
    "nextStep": "Assess hemodynamic stability first; unstable patients need synchronized cardioversion."
 ,
    "takeaway": "Always decide first whether the patient is unstable; unstable tachyarrhythmias require synchronized cardioversion."
  },
  {
    "word": "ANGINA",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Exertional chest discomfort relieved by rest.",
    "diagnosis": "Stable angina",
    "management": "Antianginal therapy and risk factor modification.",
    "nextStep": "Stress testing if diagnosis is uncertain and patient is stable."
  },
  {
    "word": "CHF",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Dyspnea, edema, JVD, crackles, elevated BNP.",
    "diagnosis": "Heart failure",
    "management": "Diuresis for congestion; guideline-directed therapy when stable.",
    "nextStep": "Assess volume status and treat acute decompensation first."
 ,
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
    "nextStep": "Compression ultrasound is the usual diagnostic next step."
 ,
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
    "nextStep": "Use echo to characterize significant murmurs."
  },
  {
    "word": "SYNCOPE",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Brief loss of consciousness with rapid recovery.",
    "diagnosis": "Syncope",
    "management": "Treat the underlying cause.",
    "nextStep": "Obtain ECG early; concerning cardiac features require urgent evaluation."
  },
  {
    "word": "TAMPONADE",
    "specialty": "Cardiology",
    "mode": "High Yield",
    "category": "Cardiology / High Yield",
    "hint": "Hypotension, JVD, muffled heart sounds.",
    "diagnosis": "Cardiac tamponade",
    "management": "Urgent pericardiocentesis if unstable.",
    "nextStep": "Bedside echo is helpful but do not delay intervention in shock."
 ,
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
    "nextStep": "Defibrillate if unstable or pulseless."
  },
  {
    "word": "MYXOMA",
    "specialty": "Cardiology",
    "mode": "Hard Mode",
    "category": "Cardiology / Hard Mode",
    "hint": "Positional dyspnea or embolic symptoms from atrial mass.",
    "diagnosis": "Atrial myxoma",
    "management": "Surgical resection.",
    "nextStep": "Echocardiography is key for diagnosis."
  },
  {
    "word": "DISSECTION",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Tearing chest pain radiating to the back.",
    "diagnosis": "Aortic dissection",
    "management": "Aggressive BP/HR control; surgery for ascending dissections.",
    "nextStep": "CT angiography if stable; TEE if unstable."
  },
  {
    "word": "ENDOCARDITIS",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Fever, murmur, embolic signs, positive blood cultures.",
    "diagnosis": "Infective endocarditis",
    "management": "IV antibiotics guided by cultures; surgery for complications.",
    "nextStep": "Obtain multiple blood cultures before antibiotics if stable."
  },
  {
    "word": "MYOCARDITIS",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Chest pain after viral illness with troponin elevation.",
    "diagnosis": "Myocarditis",
    "management": "Supportive care and treat heart failure/arrhythmias if present.",
    "nextStep": "ECG, troponin, echo; cardiac MRI can help."
  },
  {
    "word": "PERICARDITIS",
    "specialty": "Cardiology",
    "mode": "All Outline",
    "category": "Cardiology / All Outline",
    "hint": "Pleuritic chest pain better leaning forward.",
    "diagnosis": "Acute pericarditis",
    "management": "NSAIDs plus colchicine unless contraindicated.",
    "nextStep": "Look for diffuse ST elevation and PR depression."
  },
  {
    "word": "ASTHMA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Episodic wheezing with reversible obstruction.",
    "diagnosis": "Asthma exacerbation",
    "management": "Inhaled albuterol; add ipratropium and systemic corticosteroids such as prednisone or IV methylprednisolone for moderate/severe exacerbations; magnesium sulfate for severe refractory exacerbation.",
    "nextStep": "Assess severity with work of breathing, oxygenation, and peak flow if available; treat acute symptoms immediately."
 ,
    "takeaway": "Asthma exacerbation questions reward quick severity assessment and escalation from SABA to steroids/oxygen/adjuncts."
 ,
    "outline": {"section": "Respiratory System", "subsection": "Obstructive airway disease — asthma/reactive airway disease", "page": 20}
  },
  {
    "word": "COPD",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Chronic cough, smoking history, obstructive spirometry.",
    "diagnosis": "COPD",
    "management": "Short-acting bronchodilators such as albuterol plus ipratropium, systemic corticosteroids such as prednisone 40 mg daily x5 days, and antibiotics such as azithromycin, doxycycline, or amoxicillin-clavulanate when increased sputum purulence/volume or severe exacerbation is present.",
    "nextStep": "Assess oxygenation/ventilation and severity; obtain chest x-ray if pneumonia, pneumothorax, or heart failure is possible."
 ,
    "takeaway": "COPD exacerbation management depends on severity, oxygenation, and whether antibiotics are indicated."
 ,
    "outline": {"section": "Respiratory System", "subsection": "Obstructive airway disease — COPD/chronic bronchitis/emphysema", "page": 20}
  },
  {
    "word": "ARDS",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Acute hypoxemia with bilateral infiltrates after sepsis/trauma.",
    "diagnosis": "Acute respiratory distress syndrome",
    "management": "Low tidal volume ventilation and supportive care.",
    "nextStep": "Treat the underlying trigger and optimize oxygenation."
 ,
    "takeaway": "The key management principle is lung-protective ventilation while treating the underlying trigger."
  },
  {
    "word": "PNEUMONIA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Fever, cough, focal lung findings, infiltrate.",
    "diagnosis": "Pneumonia",
    "management": "Healthy outpatient adults: amoxicillin 1 g PO three times daily or doxycycline 100 mg PO twice daily. Outpatient adults with comorbidities: amoxicillin-clavulanate plus azithromycin/doxycycline, or a respiratory fluoroquinolone when appropriate.",
    "nextStep": "Confirm suspected pneumonia with chest x-ray when clinically stable, then determine outpatient vs inpatient treatment using severity and comorbidities."
 ,
    "takeaway": "CAP questions test severity, site of care, and empiric antibiotic selection; avoid vague 'antibiotics' answers."
 ,
    "outline": {"section": "Respiratory System", "subsection": "Lower airway infections — community-acquired pneumonia", "page": 20}
  },
  {
    "word": "EMBOLUS",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Sudden dyspnea, pleuritic chest pain, tachycardia.",
    "diagnosis": "Pulmonary embolism",
    "management": "Anticoagulation with heparin/enoxaparin or a DOAC when appropriate; systemic thrombolysis such as alteplase for massive PE with hemodynamic instability if no contraindication.",
    "nextStep": "If stable, use pretest probability/D-dimer or CT pulmonary angiography; if unstable with high suspicion, treat emergently."
 ,
    "takeaway": "For PE, stability determines whether you image first or treat immediately."
 ,
    "outline": {"section": "Respiratory System", "subsection": "Pulmonary vascular disorders — pulmonary embolism", "page": 21}
  },
  {
    "word": "HYPOXIA",
    "specialty": "Pulmonology",
    "mode": "High Yield",
    "category": "Pulmonology / High Yield",
    "hint": "Low oxygen delivery to tissues.",
    "diagnosis": "Hypoxemia/hypoxia",
    "management": "Oxygen and treatment of underlying cause.",
    "nextStep": "Assess airway, breathing, circulation immediately."
  },
  {
    "word": "PNEUMOTHORAX",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Sudden pleuritic chest pain with decreased breath sounds.",
    "diagnosis": "Pneumothorax",
    "management": "Needle decompression if tension physiology; chest tube if large/symptomatic.",
    "nextStep": "Do not wait for imaging if unstable tension pneumothorax is suspected."
  },
  {
    "word": "HEMOTHORAX",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Blood in pleural space after trauma.",
    "diagnosis": "Hemothorax",
    "management": "Tube thoracostomy; surgery if massive or ongoing bleeding.",
    "nextStep": "Evaluate trauma patient with ABCs first."
  },
  {
    "word": "ATELECTASIS",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Postoperative fever with low lung volumes.",
    "diagnosis": "Atelectasis",
    "management": "Incentive spirometry and mobilization.",
    "nextStep": "Common early postoperative pulmonary issue."
  },
  {
    "word": "ASBESTOS",
    "specialty": "Pulmonology",
    "mode": "Hard Mode",
    "category": "Pulmonology / Hard Mode",
    "hint": "Pleural plaques and restrictive disease after exposure.",
    "diagnosis": "Asbestosis",
    "management": "Supportive care and cancer surveillance.",
    "nextStep": "Ask about occupational exposure."
  },
  {
    "word": "SILICOSIS",
    "specialty": "Pulmonology",
    "mode": "Hard Mode",
    "category": "Pulmonology / Hard Mode",
    "hint": "Upper-lobe nodules after mining/sandblasting exposure.",
    "diagnosis": "Silicosis",
    "management": "Supportive care; screen for TB risk.",
    "nextStep": "Occupational history is key."
  },
  {
    "word": "MELENA",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Black tarry stool.",
    "diagnosis": "Upper GI bleeding",
    "management": "Stabilize, IV PPI if suspected ulcer bleed, endoscopy.",
    "nextStep": "Assess hemodynamics and resuscitate first."
 ,
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
    "nextStep": "Endoscopy for alarm symptoms."
  },
  {
    "word": "CIRRHOSIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Ascites, varices, encephalopathy, thrombocytopenia.",
    "diagnosis": "Cirrhosis",
    "management": "Manage complications and screen for HCC/varices.",
    "nextStep": "New ascites warrants diagnostic paracentesis."
 ,
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
    "nextStep": "Check SAAG to classify cause."
 ,
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
    "nextStep": "Fractionated bilirubin and liver tests guide next step."
  },
  {
    "word": "PANCREAS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Epigastric pain radiating to back with elevated lipase.",
    "diagnosis": "Acute pancreatitis",
    "management": "IV fluids, analgesia, nutrition; treat cause.",
    "nextStep": "RUQ ultrasound if gallstones suspected."
  },
  {
    "word": "APPENDIX",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Periumbilical pain migrating to RLQ.",
    "diagnosis": "Appendicitis",
    "management": "Appendectomy or antibiotics in select cases.",
    "nextStep": "CT abdomen in many adults if diagnosis uncertain."
 ,
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
    "nextStep": "CT abdomen/pelvis confirms diagnosis."
  },
  {
    "word": "VOLVULUS",
    "specialty": "Gastroenterology",
    "mode": "Hard Mode",
    "category": "Gastroenterology / Hard Mode",
    "hint": "Coffee-bean sign and large bowel obstruction.",
    "diagnosis": "Sigmoid volvulus",
    "management": "Endoscopic detorsion if no peritonitis.",
    "nextStep": "Surgery if ischemia, perforation, or recurrent disease."
  },
  {
    "word": "ACHALASIA",
    "specialty": "Gastroenterology",
    "mode": "Hard Mode",
    "category": "Gastroenterology / Hard Mode",
    "hint": "Progressive dysphagia to solids and liquids.",
    "diagnosis": "Achalasia",
    "management": "Pneumatic dilation, Heller myotomy, or POEM.",
    "nextStep": "Manometry is diagnostic."
  },
  {
    "word": "AKI",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Acute rise in creatinine or drop in urine output.",
    "diagnosis": "Acute kidney injury",
    "management": "Treat cause; optimize volume and avoid nephrotoxins.",
    "nextStep": "Classify prerenal, intrinsic, or postrenal."
  },
  {
    "word": "CKD",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Chronic reduced GFR or albuminuria.",
    "diagnosis": "Chronic kidney disease",
    "management": "BP control, diabetes control, ACEi/ARB when indicated.",
    "nextStep": "Monitor anemia, bone-mineral disease, and electrolytes."
  },
  {
    "word": "STONES",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Colicky flank pain radiating to groin with hematuria.",
    "diagnosis": "Nephrolithiasis",
    "management": "Analgesia, hydration; alpha blocker for selected stones.",
    "nextStep": "Noncontrast CT is highly sensitive."
  },
  {
    "word": "OLIGURIA",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Low urine output.",
    "diagnosis": "Oliguria",
    "management": "Assess volume status, perfusion, obstruction, and nephrotoxins.",
    "nextStep": "Bladder scan can quickly assess retention."
  },
  {
    "word": "ANURIA",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Absent urine output.",
    "diagnosis": "Anuria",
    "management": "Urgently assess obstruction and severe renal failure.",
    "nextStep": "Postrenal obstruction must be ruled out."
  },
  {
    "word": "NEPHRON",
    "specialty": "Nephrology",
    "mode": "All Outline",
    "category": "Nephrology / All Outline",
    "hint": "Functional unit of kidney.",
    "diagnosis": "Kidney physiology concept",
    "management": "Management depends on site of renal pathology.",
    "nextStep": "Use UA and microscopy to localize renal disease."
  },
  {
    "word": "ALPORT",
    "specialty": "Nephrology",
    "mode": "Hard Mode",
    "category": "Nephrology / Hard Mode",
    "hint": "Hematuria with hearing and ocular findings.",
    "diagnosis": "Alport syndrome",
    "management": "Supportive renal care; genetic counseling.",
    "nextStep": "Think collagen IV defect."
  },
  {
    "word": "FANCONI",
    "specialty": "Nephrology",
    "mode": "Hard Mode",
    "category": "Nephrology / Hard Mode",
    "hint": "Proximal tubule wasting of glucose, phosphate, bicarbonate.",
    "diagnosis": "Fanconi syndrome",
    "management": "Treat cause and replace losses.",
    "nextStep": "Look for non-anion gap metabolic acidosis."
  },
  {
    "word": "DKA",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Anion gap acidosis with ketones.",
    "diagnosis": "Diabetic ketoacidosis",
    "management": "IV normal saline or balanced crystalloid, IV regular insulin after potassium is \u22653.3 mEq/L, potassium replacement as needed, dextrose when glucose falls, and treatment of trigger.",
    "nextStep": "Start isotonic IV fluids and check potassium before insulin."
 ,
    "takeaway": "Potassium determines when insulin can be safely started in DKA."
 ,
    "outline": {"section": "Endocrine System", "subsection": "Diabetes mellitus — diabetic ketoacidosis", "page": 32}
  },
  {
    "word": "HHS",
    "specialty": "Endocrinology",
    "mode": "High Yield",
    "category": "Endocrinology / High Yield",
    "hint": "Severe hyperglycemia and dehydration with minimal ketosis.",
    "diagnosis": "Hyperosmolar hyperglycemic state",
    "management": "Aggressive fluids, insulin after volume resuscitation.",
    "nextStep": "Older type 2 diabetic patient with altered mental status is classic."
 ,
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
    "nextStep": "Check TSH and free T4; TSI supports diagnosis."
 ,
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
    "nextStep": "Adrenal crisis needs immediate stress-dose steroids."
 ,
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
    "nextStep": "Screen with dexamethasone suppression, late-night salivary cortisol, or urinary cortisol."
  },
  {
    "word": "SIADH",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Euvolemic hyponatremia with concentrated urine.",
    "diagnosis": "SIADH",
    "management": "Fluid restriction; hypertonic saline if severe symptoms.",
    "nextStep": "Avoid rapid sodium correction."
  },
  {
    "word": "THYROID",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Neck gland controlling metabolism.",
    "diagnosis": "Thyroid disorder",
    "management": "Treat based on hypo/hyperthyroid state.",
    "nextStep": "TSH is the usual initial test."
  },
  {
    "word": "GOITER",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Enlarged thyroid gland.",
    "diagnosis": "Goiter",
    "management": "Treat underlying thyroid dysfunction or compressive symptoms.",
    "nextStep": "Check thyroid function tests."
  },
  {
    "word": "STROKE",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Acute focal neurologic deficit.",
    "diagnosis": "Stroke",
    "management": "Reperfusion when eligible; secondary prevention afterward.",
    "nextStep": "Time last known well is critical."
 ,
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
    "nextStep": "Evaluate reversible triggers after stabilization."
 ,
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
    "nextStep": "Avoid triptans in significant vascular disease."
  },
  {
    "word": "DELIRIUM",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Acute fluctuating attention and awareness.",
    "diagnosis": "Delirium",
    "management": "Treat underlying medical cause; reorientation and sleep hygiene.",
    "nextStep": "Look for infection, meds, metabolic causes."
 ,
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
    "nextStep": "Differentiate from dysarthria."
  },
  {
    "word": "GBS",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Ascending weakness after infection.",
    "diagnosis": "Guillain-Barre syndrome",
    "management": "IVIG or plasmapheresis; monitor respiratory function.",
    "nextStep": "Check vital capacity."
  },
  {
    "word": "HORNER",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Ptosis, miosis, anhidrosis.",
    "diagnosis": "Horner syndrome",
    "management": "Treat underlying sympathetic pathway lesion.",
    "nextStep": "Painful Horner can suggest carotid dissection."
  },
  {
    "word": "PTOSIS",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Drooping eyelid.",
    "diagnosis": "Ptosis",
    "management": "Evaluate for CN III palsy, Horner, or myasthenia.",
    "nextStep": "Pupil involvement in CN III palsy is concerning for aneurysm."
  },
  {
    "word": "BOTULISM",
    "specialty": "Neurology",
    "mode": "Hard Mode",
    "category": "Neurology / Hard Mode",
    "hint": "Descending paralysis and pupillary findings.",
    "diagnosis": "Botulism",
    "management": "Antitoxin and supportive care.",
    "nextStep": "Infant botulism associated with honey exposure."
  },
  {
    "word": "TETANUS",
    "specialty": "Neurology",
    "mode": "Hard Mode",
    "category": "Neurology / Hard Mode",
    "hint": "Trismus and muscle spasms.",
    "diagnosis": "Tetanus",
    "management": "Immune globulin, metronidazole, wound care, vaccination.",
    "nextStep": "Prevention through vaccination is key."
  },
  {
    "word": "ECTOPIC",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Pregnancy with abdominal pain and bleeding.",
    "diagnosis": "Ectopic pregnancy",
    "management": "Methotrexate for stable eligible patients; urgent surgery for rupture, instability, contraindication to methotrexate, or concerning ultrasound findings.",
    "nextStep": "In any reproductive-age patient with abdominal pain or bleeding, obtain pregnancy test first; use transvaginal ultrasound and quantitative beta-hCG when positive."
 ,
    "takeaway": "Pregnancy test is the first move in reproductive-age abdominal pain/bleeding."
 ,
    "outline": {"section": "Pregnancy, Childbirth, & the Puerperium", "subsection": "Obstetric complications — ectopic pregnancy", "page": 27}
  },
  {
    "word": "PREVIA",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Painless third-trimester bleeding.",
    "diagnosis": "Placenta previa",
    "management": "Avoid digital exam; cesarean delivery if persistent.",
    "nextStep": "Ultrasound confirms placental location."
 ,
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
    "nextStep": "Can be associated with hypertension or trauma."
 ,
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
    "nextStep": "Stabilize with magnesium sulfate and blood pressure control, then proceed to delivery when indicated."
 ,
    "takeaway": "HELLP is a severe preeclampsia-spectrum disease; maternal stabilization comes before delivery."
 ,
    "outline": {"section": "Pregnancy, Childbirth, & the Puerperium", "subsection": "Obstetric complications — preeclampsia/eclampsia/HELLP", "page": 27}
  },
  {
    "word": "ECLAMPSIA",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Seizures in patient with preeclampsia.",
    "diagnosis": "Eclampsia",
    "management": "Magnesium sulfate for seizure treatment/prevention, antihypertensives such as IV labetalol/hydralazine or oral nifedipine for severe hypertension, then delivery.",
    "nextStep": "Give magnesium sulfate and stabilize airway/breathing/circulation; delivery follows maternal stabilization."
 ,
    "takeaway": "For eclampsia, magnesium sulfate is the seizure drug of choice; delivery comes after stabilization."
 ,
    "outline": {"section": "Pregnancy, Childbirth, & the Puerperium", "subsection": "Obstetric complications — eclampsia", "page": 27}
  },
  {
    "word": "LOCHIA",
    "specialty": "OB/GYN",
    "mode": "All Outline",
    "category": "OB/GYN / All Outline",
    "hint": "Normal postpartum vaginal discharge.",
    "diagnosis": "Lochia",
    "management": "Reassurance if normal pattern and no infection/bleeding concerns.",
    "nextStep": "Assess fever, uterine tenderness, and heavy bleeding if abnormal."
  },
  {
    "word": "VACCINE",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Immunization for disease prevention.",
    "diagnosis": "Routine vaccination",
    "management": "Follow age-based schedule and contraindications.",
    "nextStep": "Preventive care is high yield."
  },
  {
    "word": "SIDS",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Sudden infant death during sleep.",
    "diagnosis": "Sudden infant death syndrome",
    "management": "Back-to-sleep and safe sleep counseling.",
    "nextStep": "Avoid prone sleeping and soft bedding."
  },
  {
    "word": "FONTANELLE",
    "specialty": "Pediatrics",
    "mode": "All Outline",
    "category": "Pediatrics / All Outline",
    "hint": "Soft spot on infant skull.",
    "diagnosis": "Fontanelle finding",
    "management": "Interpret with hydration and intracranial pressure context.",
    "nextStep": "Bulging suggests increased ICP; sunken suggests dehydration."
  },
  {
    "word": "PYLORIC",
    "specialty": "Pediatrics",
    "mode": "Hard Mode",
    "category": "Pediatrics / Hard Mode",
    "hint": "Projectile nonbilious vomiting in young infant.",
    "diagnosis": "Pyloric stenosis",
    "management": "Surgical pyloromyotomy after correcting electrolytes.",
    "nextStep": "Hypochloremic metabolic alkalosis is classic."
  },
  {
    "word": "MDD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Depressed mood or anhedonia with neurovegetative symptoms.",
    "diagnosis": "Major depressive disorder",
    "management": "Psychotherapy and/or SSRI; assess safety.",
    "nextStep": "Always screen for suicidal ideation."
  },
  {
    "word": "MANIA",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Decreased need for sleep with elevated/irritable mood.",
    "diagnosis": "Manic episode",
    "management": "Mood stabilizer or antipsychotic; hospitalization if unsafe.",
    "nextStep": "Avoid antidepressant monotherapy in bipolar disorder."
  },
  {
    "word": "BIPOLAR",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Mood disorder with mania or hypomania.",
    "diagnosis": "Bipolar disorder",
    "management": "Mood stabilizer/atypical antipsychotic.",
    "nextStep": "Ask about past mania before starting antidepressants."
  },
  {
    "word": "PTSD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Re-experiencing, avoidance, hyperarousal after trauma.",
    "diagnosis": "Post-traumatic stress disorder",
    "management": "Trauma-focused psychotherapy; SSRIs can help.",
    "nextStep": "Symptoms persist more than one month."
  },
  {
    "word": "OCD",
    "specialty": "Psychiatry",
    "mode": "High Yield",
    "category": "Psychiatry / High Yield",
    "hint": "Obsessions and compulsions.",
    "diagnosis": "Obsessive-compulsive disorder",
    "management": "CBT with exposure/response prevention and SSRIs.",
    "nextStep": "Insight may vary."
  },
  {
    "word": "AKATHISIA",
    "specialty": "Psychiatry",
    "mode": "Hard Mode",
    "category": "Psychiatry / Hard Mode",
    "hint": "Restlessness after antipsychotic use.",
    "diagnosis": "Akathisia",
    "management": "Beta blocker or benzodiazepine; adjust offending drug.",
    "nextStep": "Can be mistaken for anxiety."
  },
  {
    "word": "SEPSIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Infection with organ dysfunction.",
    "diagnosis": "Sepsis",
    "management": "IV crystalloids, broad-spectrum antibiotics tailored to source such as vancomycin plus piperacillin-tazobactam/cefepime/meropenem when severe healthcare-associated infection is possible, source control, and norepinephrine if persistent shock.",
    "nextStep": "Recognize organ dysfunction and start immediate resuscitation; obtain cultures but do not delay antibiotics in shock."
 ,
    "takeaway": "In septic shock, early resuscitation, antibiotics, source control, and vasopressors matter more than waiting for perfect diagnostic certainty."
 ,
    "outline": {"section": "Multisystem Processes & Disorders", "subsection": "Infectious disorders / toxic shock syndrome / systemic host response", "page": 34}
  },
  {
    "word": "HIV",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Retroviral infection with immune suppression.",
    "diagnosis": "HIV infection",
    "management": "Antiretroviral therapy for all; prophylaxis by CD4 count.",
    "nextStep": "Test with Ag/Ab screening followed by confirmatory testing."
 ,
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
    "nextStep": "CD4 count helps predict infections."
  },
  {
    "word": "LYME",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Erythema migrans after tick exposure.",
    "diagnosis": "Lyme disease",
    "management": "Doxycycline for many nonpregnant patients.",
    "nextStep": "Clinical diagnosis with classic rash."
 ,
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
    "nextStep": "Screen other STIs and partners."
  },
  {
    "word": "MALARIA",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Cyclic fever after travel.",
    "diagnosis": "Malaria",
    "management": "Species/severity-directed antimalarial therapy.",
    "nextStep": "Travel history is essential."
  },
  {
    "word": "DENGUE",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Fever, myalgias, thrombocytopenia after mosquito exposure.",
    "diagnosis": "Dengue",
    "management": "Supportive care; avoid NSAIDs if bleeding risk.",
    "nextStep": "Watch for shock and hemorrhage."
  },
  {
    "word": "KAPOSI",
    "specialty": "Infectious Disease",
    "mode": "Hard Mode",
    "category": "Infectious Disease / Hard Mode",
    "hint": "Purple vascular lesions in immunocompromised patient.",
    "diagnosis": "Kaposi sarcoma",
    "management": "Treat HIV with ART; oncology therapy if advanced.",
    "nextStep": "HHV-8 associated."
  },
  {
    "word": "ANEMIA",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Low hemoglobin causing fatigue/pallor.",
    "diagnosis": "Anemia",
    "management": "Treat cause; transfuse if severe/symptomatic.",
    "nextStep": "Use MCV and reticulocyte count."
 ,
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
    "nextStep": "Fever needs urgent evaluation for infection."
 ,
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
    "nextStep": "Platelets low with otherwise normal labs."
 ,
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
    "nextStep": "Low fibrinogen and high D-dimer are clues."
 ,
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
    "nextStep": "Look for monoclonal protein."
  },
  {
    "word": "BIOPSY",
    "specialty": "Pathology",
    "mode": "High Yield",
    "category": "Pathology / High Yield",
    "hint": "Tissue sample for diagnosis.",
    "diagnosis": "Biopsy-based diagnosis",
    "management": "Management depends on pathology result.",
    "nextStep": "Often required for cancer diagnosis."
  },
  {
    "word": "GOUT",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Acute red painful joint, often first MTP.",
    "diagnosis": "Gout",
    "management": "NSAIDs/colchicine/steroids acutely; urate-lowering chronically if indicated.",
    "nextStep": "Negatively birefringent needle-shaped crystals."
 ,
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
    "nextStep": "Renal involvement changes management."
 ,
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
    "nextStep": "Secondary causes include systemic sclerosis."
  },
  {
    "word": "ECZEMA",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Pruritic inflammatory rash often in flexures.",
    "diagnosis": "Atopic dermatitis",
    "management": "Emollients and topical steroids for flares.",
    "nextStep": "Associated with asthma/allergic rhinitis."
  },
  {
    "word": "MELANOMA",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Asymmetric pigmented lesion with irregular border/color.",
    "diagnosis": "Melanoma",
    "management": "Excisional biopsy; staging guides treatment.",
    "nextStep": "ABCDE features help identify suspicious lesions."
  },
  {
    "word": "SCABIES",
    "specialty": "Dermatology",
    "mode": "All Outline",
    "category": "Dermatology / All Outline",
    "hint": "Intense itching with burrows, worse at night.",
    "diagnosis": "Scabies",
    "management": "Permethrin for patient and close contacts.",
    "nextStep": "Wash bedding/clothing."
  },
  {
    "word": "TEN",
    "specialty": "Dermatology",
    "mode": "Hard Mode",
    "category": "Dermatology / Hard Mode",
    "hint": "Severe drug reaction with epidermal detachment.",
    "diagnosis": "Toxic epidermal necrolysis",
    "management": "Stop offending drug; burn-unit supportive care.",
    "nextStep": "Mucosal involvement is common."
  },
  {
    "word": "FRACTURE",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Pain, deformity, loss of function after trauma.",
    "diagnosis": "Fracture",
    "management": "Immobilization, pain control, reduction/surgery if indicated.",
    "nextStep": "Check neurovascular status before and after reduction."
  },
  {
    "word": "HERNIA",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Bulge through fascial defect.",
    "diagnosis": "Hernia",
    "management": "Elective repair if symptomatic; urgent surgery if strangulated.",
    "nextStep": "Incarceration/strangulation changes urgency."
  },
  {
    "word": "TRIAGE",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Prioritization by acuity.",
    "diagnosis": "Emergency triage",
    "management": "Stabilize life threats first.",
    "nextStep": "ABCDE approach comes first."
  },
  {
    "word": "TRAUMA",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Injury requiring acute evaluation.",
    "diagnosis": "Trauma evaluation",
    "management": "ATLS: airway, breathing, circulation, disability, exposure.",
    "nextStep": "Treat immediately life-threatening injuries first."
  },
  {
    "word": "STATIN",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "LDL-lowering drug class.",
    "diagnosis": "Hyperlipidemia treatment",
    "management": "High-intensity statin for ASCVD/high-risk patients.",
    "nextStep": "Monitor for myopathy and liver issues when clinically indicated."
  },
  {
    "word": "OPIOID",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "Analgesic causing respiratory depression/constipation.",
    "diagnosis": "Opioid effect or overdose",
    "management": "Naloxone for overdose; bowel regimen for constipation.",
    "nextStep": "Respiratory status is priority."
  },
  {
    "word": "WARFARIN",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "Vitamin K antagonist.",
    "diagnosis": "Anticoagulation management",
    "management": "Monitor INR; reverse with vitamin K/PCC depending severity.",
    "nextStep": "Teratogenic; many interactions."
  },
  {
    "word": "HEPARIN",
    "specialty": "Pharmacology",
    "mode": "High Yield",
    "category": "Pharmacology / High Yield",
    "hint": "Anticoagulant that can cause HIT.",
    "diagnosis": "Heparin therapy/HIT",
    "management": "Stop heparin if HIT suspected; use non-heparin anticoagulant.",
    "nextStep": "Platelet drop 5-10 days after exposure is classic."
  },
  {
    "word": "CT",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Cross-sectional x-ray imaging.",
    "diagnosis": "CT imaging",
    "management": "Use based on suspected diagnosis and contrast considerations.",
    "nextStep": "Great for acute bleeding, trauma, and many abdominal diagnoses."
  },
  {
    "word": "MRI",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Magnetic resonance imaging.",
    "diagnosis": "MRI imaging",
    "management": "Excellent soft tissue and neuro/MSK imaging.",
    "nextStep": "Check implants and contraindications."
  },
  {
    "word": "XRAY",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Basic radiographic imaging.",
    "diagnosis": "X-ray imaging",
    "management": "First-line for many chest and bone complaints.",
    "nextStep": "Fast and accessible."
  },
  {
    "word": "DOPPLER",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Ultrasound flow assessment.",
    "diagnosis": "Doppler ultrasound",
    "management": "Used for vascular flow and cardiac evaluation.",
    "nextStep": "Helpful in DVT, torsion, and echo contexts."
  },
  {
    "word": "CONTRAST",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Imaging agent to improve visualization.",
    "diagnosis": "Contrast-enhanced imaging",
    "management": "Weigh diagnostic benefit against kidney/allergy risks.",
    "nextStep": "Check renal function when relevant."
  },
  {
    "word": "AORTA",
    "specialty": "Anatomy",
    "mode": "High Yield",
    "category": "Anatomy / High Yield",
    "hint": "Largest artery.",
    "diagnosis": "Aortic anatomy/pathology",
    "management": "Management depends on aneurysm/dissection location.",
    "nextStep": "Ascending aortic dissection is surgical."
  },
  {
    "word": "PLEURA",
    "specialty": "Anatomy",
    "mode": "All Outline",
    "category": "Anatomy / All Outline",
    "hint": "Membrane around lungs.",
    "diagnosis": "Pleural disease",
    "management": "Treat effusion/pneumothorax/empyema by cause.",
    "nextStep": "Thoracentesis can diagnose pleural effusion."
  },
  {
    "word": "RETINA",
    "specialty": "Anatomy",
    "mode": "All Outline",
    "category": "Anatomy / All Outline",
    "hint": "Light-sensitive eye tissue.",
    "diagnosis": "Retinal disease",
    "management": "Urgent ophthalmology for detachment/vascular occlusion.",
    "nextStep": "Sudden painless vision loss is high-yield."
  },
  {
    "word": "CROUP",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Barking cough and inspiratory stridor in child.",
    "diagnosis": "Croup",
    "management": "Dexamethasone; nebulized epinephrine if severe.",
    "nextStep": "Assess airway severity first."
  },
  {
    "word": "BRONCHIOLITIS",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Infant with wheezing after viral URI.",
    "diagnosis": "Bronchiolitis",
    "management": "Supportive care with hydration/oxygen if needed.",
    "nextStep": "RSV is a common cause."
  },
  {
    "word": "MENINGITIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Fever, headache, neck stiffness.",
    "diagnosis": "Meningitis",
    "management": "Empiric antibiotics after cultures; do not delay if unstable.",
    "nextStep": "Lumbar puncture unless contraindications."
  },
  {
    "word": "UTI",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Dysuria, frequency, urgency.",
    "diagnosis": "Urinary tract infection",
    "management": "Antibiotics based on site and risk factors.",
    "nextStep": "Pyelonephritis includes fever/flank pain."
  },
  {
    "word": "PYELONEPHRITIS",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Fever, flank pain, urinary symptoms.",
    "diagnosis": "Pyelonephritis",
    "management": "Outpatient if stable: ciprofloxacin/levofloxacin when appropriate or TMP-SMX if susceptible. Inpatient/severe: IV ceftriaxone, cefepime, piperacillin-tazobactam, or carbapenem depending risk.",
    "nextStep": "Obtain urinalysis and urine culture; assess for sepsis, pregnancy, obstruction, or inability to tolerate PO."
 ,
    "takeaway": "Fever/flank pain means upper tract infection; culture and severity assessment guide route and setting."
 ,
    "outline": {"section": "Renal & Urinary System", "subsection": "Upper urinary tract infections — pyelonephritis", "page": 25}
  },
  {
    "word": "CYSTITIS",
    "specialty": "Nephrology",
    "mode": "High Yield",
    "category": "Nephrology / High Yield",
    "hint": "Lower urinary symptoms without systemic signs.",
    "diagnosis": "Cystitis",
    "management": "Uncomplicated cystitis: nitrofurantoin 100 mg PO BID x5 days, TMP-SMX DS BID x3 days if local resistance acceptable, or fosfomycin 3 g once.",
    "nextStep": "Diagnose clinically in uncomplicated cases; urine testing/culture when complicated, recurrent, pregnant, or atypical."
 ,
    "takeaway": "Uncomplicated cystitis is treated with short-course targeted oral therapy."
 ,
    "outline": {"section": "Renal & Urinary System", "subsection": "Lower urinary tract infections — cystitis", "page": 25}
  },
  {
    "word": "EPILEPSY",
    "specialty": "Neurology",
    "mode": "All Outline",
    "category": "Neurology / All Outline",
    "hint": "Recurrent unprovoked seizures.",
    "diagnosis": "Epilepsy",
    "management": "Antiseizure medication based on seizure type.",
    "nextStep": "Counsel on driving/safety."
  },
  {
    "word": "DEMENTIA",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Chronic cognitive decline impairing function.",
    "diagnosis": "Dementia",
    "management": "Treat reversible causes and provide safety planning.",
    "nextStep": "Differentiate from delirium and depression."
  },
  {
    "word": "PARKINSON",
    "specialty": "Neurology",
    "mode": "High Yield",
    "category": "Neurology / High Yield",
    "hint": "Bradykinesia, rigidity, resting tremor.",
    "diagnosis": "Parkinson disease",
    "management": "Levodopa/carbidopa for symptomatic treatment.",
    "nextStep": "Asymmetric resting tremor is classic."
  },
  {
    "word": "CATARACT",
    "specialty": "Radiology",
    "mode": "All Outline",
    "category": "Radiology / All Outline",
    "hint": "Painless gradual vision loss with lens opacity.",
    "diagnosis": "Cataract",
    "management": "Surgery if functionally significant.",
    "nextStep": "Glare and decreased red reflex are common."
  },
  {
    "word": "GLAUCOMA",
    "specialty": "Radiology",
    "mode": "High Yield",
    "category": "Radiology / High Yield",
    "hint": "Optic nerve damage often with elevated pressure.",
    "diagnosis": "Glaucoma",
    "management": "Lower intraocular pressure.",
    "nextStep": "Acute angle closure is painful emergency."
  },
  {
    "word": "OTITIS",
    "specialty": "Pediatrics",
    "mode": "High Yield",
    "category": "Pediatrics / High Yield",
    "hint": "Ear pain, fever, bulging tympanic membrane.",
    "diagnosis": "Acute otitis media",
    "management": "Analgesia; antibiotics by age/severity.",
    "nextStep": "Pneumatic otoscopy helps diagnosis."
  },
  {
    "word": "SINUSITIS",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Facial pain and purulent nasal symptoms.",
    "diagnosis": "Bacterial sinusitis",
    "management": "Antibiotics if severe, prolonged, or worsening.",
    "nextStep": "Most cases are viral initially."
  },
  {
    "word": "ANAPHYLAXIS",
    "specialty": "Emergency Medicine",
    "mode": "High Yield",
    "category": "Emergency Medicine / High Yield",
    "hint": "Hypotension/airway symptoms after allergen exposure.",
    "diagnosis": "Anaphylaxis",
    "management": "IM epinephrine first-line.",
    "nextStep": "Do not delay epinephrine."
 ,
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
    "nextStep": "Stabilize myocardium first if ECG changes."
 ,
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
    "nextStep": "Avoid overly rapid correction."
  },
  {
    "word": "KETOACIDOSIS",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Ketones with acidosis.",
    "diagnosis": "Ketoacidosis",
    "management": "Fluids, insulin if DKA, electrolyte correction.",
    "nextStep": "Find precipitating trigger."
  },
  {
    "word": "THYROTOXICOSIS",
    "specialty": "Endocrinology",
    "mode": "All Outline",
    "category": "Endocrinology / All Outline",
    "hint": "Excess thyroid hormone symptoms.",
    "diagnosis": "Thyrotoxicosis",
    "management": "Beta blocker; antithyroid therapy depending cause.",
    "nextStep": "Low TSH is the typical first clue."
  },
  {
    "word": "PHEOCHROMOCYTOMA",
    "specialty": "Endocrinology",
    "mode": "Hard Mode",
    "category": "Endocrinology / Hard Mode",
    "hint": "Episodic headache, sweating, palpitations, hypertension.",
    "diagnosis": "Pheochromocytoma",
    "management": "Alpha blockade before beta blockade, then surgery.",
    "nextStep": "Never beta-block first."
  },
  {
    "word": "PROLACTINOMA",
    "specialty": "Endocrinology",
    "mode": "Hard Mode",
    "category": "Endocrinology / Hard Mode",
    "hint": "Galactorrhea, amenorrhea, visual symptoms.",
    "diagnosis": "Prolactinoma",
    "management": "Dopamine agonist such as cabergoline.",
    "nextStep": "Check prolactin and pituitary MRI."
  },
  {
    "word": "CELIAC",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Malabsorption with dermatitis herpetiformis.",
    "diagnosis": "Celiac disease",
    "management": "Gluten-free diet.",
    "nextStep": "Check tissue transglutaminase IgA."
  },
  {
    "word": "CROHN",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Skip lesions and transmural inflammation.",
    "diagnosis": "Crohn disease",
    "management": "Steroids for flares; biologics/immunomodulators for maintenance.",
    "nextStep": "Can affect mouth to anus."
  },
  {
    "word": "COLITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Bloody diarrhea with continuous colonic inflammation.",
    "diagnosis": "Ulcerative colitis",
    "management": "5-ASA, steroids for flares, biologics if severe.",
    "nextStep": "Starts at rectum; surgery can be curative."
  },
  {
    "word": "CHOLANGITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Fever, RUQ pain, jaundice.",
    "diagnosis": "Ascending cholangitis",
    "management": "Broad gram-negative and anaerobic coverage such as piperacillin-tazobactam, ceftriaxone plus metronidazole, or cefepime plus metronidazole depending severity/local resistance; ERCP for source control.",
    "nextStep": "Start IV antibiotics and arrange urgent biliary decompression with ERCP."
 ,
    "takeaway": "Cholangitis needs antibiotics plus source control; ERCP is the key next step."
 ,
    "outline": {"section": "Gastrointestinal System", "subsection": "Biliary system — cholangitis / bile duct obstruction", "page": 23}
  },
  {
    "word": "CHOLECYSTITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "RUQ pain, fever, positive Murphy sign.",
    "diagnosis": "Acute cholecystitis",
    "management": "Antibiotics and cholecystectomy.",
    "nextStep": "RUQ ultrasound is first-line."
  },
  {
    "word": "PANCREATITIS",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Epigastric pain radiating to back.",
    "diagnosis": "Acute pancreatitis",
    "management": "IV fluids, analgesia, early nutrition.",
    "nextStep": "Gallstones and alcohol are common causes."
 ,
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
    "nextStep": "Check exposure, meds, alcohol, viral serologies."
  },
  {
    "word": "VARICES",
    "specialty": "Gastroenterology",
    "mode": "High Yield",
    "category": "Gastroenterology / High Yield",
    "hint": "Upper GI bleed in cirrhosis.",
    "diagnosis": "Esophageal variceal bleed",
    "management": "Resuscitation, octreotide, antibiotics, endoscopic banding.",
    "nextStep": "Airway protection may be needed."
  },
  {
    "word": "ENCEPHALOPATHY",
    "specialty": "Gastroenterology",
    "mode": "All Outline",
    "category": "Gastroenterology / All Outline",
    "hint": "Confusion in liver disease.",
    "diagnosis": "Hepatic encephalopathy",
    "management": "Lactulose +/- rifaximin.",
    "nextStep": "Precipitants include GI bleed, infection, constipation."
  },
  {
    "word": "PID",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Pelvic pain, cervical motion tenderness.",
    "diagnosis": "Pelvic inflammatory disease",
    "management": "Ceftriaxone 500 mg IM once plus doxycycline 100 mg PO BID x14 days plus metronidazole 500 mg PO BID x14 days.",
    "nextStep": "Treat empirically when pelvic pain plus cervical motion/uterine/adnexal tenderness is present and no better diagnosis."
 ,
    "takeaway": "Do not wait for perfect proof of PID; empiric treatment prevents infertility and chronic pelvic pain."
 ,
    "outline": {"section": "Female and Transgender Reproductive System & Breast", "subsection": "Infectious disorders — pelvic inflammatory disease", "page": 29}
  },
  {
    "word": "TORSION",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Sudden severe unilateral pelvic pain.",
    "diagnosis": "Ovarian torsion",
    "management": "Urgent surgical detorsion.",
    "nextStep": "Doppler ultrasound can help but does not exclude."
  },
  {
    "word": "AMENORRHEA",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Absent menses.",
    "diagnosis": "Amenorrhea",
    "management": "Pregnancy test first.",
    "nextStep": "Then evaluate TSH, prolactin, ovarian/hypothalamic causes."
  },
  {
    "word": "PCOS",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Irregular menses, hyperandrogenism.",
    "diagnosis": "Polycystic ovary syndrome",
    "management": "Weight loss, combined OCPs, metformin if indicated.",
    "nextStep": "Endometrial protection matters."
  },
  {
    "word": "ENDOMETRIOSIS",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Cyclic pelvic pain and dyspareunia.",
    "diagnosis": "Endometriosis",
    "management": "NSAIDs, hormonal suppression, laparoscopy if needed.",
    "nextStep": "Can cause infertility."
  },
  {
    "word": "FIBROID",
    "specialty": "OB/GYN",
    "mode": "High Yield",
    "category": "OB/GYN / High Yield",
    "hint": "Heavy bleeding and enlarged irregular uterus.",
    "diagnosis": "Uterine leiomyoma",
    "management": "NSAIDs/OCPs, GnRH analogs, myomectomy/hysterectomy depending goals.",
    "nextStep": "Ultrasound is first-line."
  },
  {
    "word": "MASTITIS",
    "specialty": "OB/GYN",
    "mode": "All Outline",
    "category": "OB/GYN / All Outline",
    "hint": "Breast pain, erythema, fever during lactation.",
    "diagnosis": "Lactational mastitis",
    "management": "Continue breastfeeding and give antibiotics when bacterial.",
    "nextStep": "Abscess needs drainage."
  },
  {
    "word": "PROSTATITIS",
    "specialty": "Infectious Disease",
    "mode": "All Outline",
    "category": "Infectious Disease / All Outline",
    "hint": "Fever, pelvic pain, tender prostate.",
    "diagnosis": "Acute bacterial prostatitis",
    "management": "Antibiotics with good prostate penetration.",
    "nextStep": "Avoid prostate massage."
  },
  {
    "word": "EPIDIDYMITIS",
    "specialty": "Infectious Disease",
    "mode": "High Yield",
    "category": "Infectious Disease / High Yield",
    "hint": "Scrotal pain relieved by elevation.",
    "diagnosis": "Epididymitis",
    "management": "Likely STI: ceftriaxone 500 mg IM once plus doxycycline 100 mg PO BID x10 days; enteric organism risk: levofloxacin when appropriate.",
    "nextStep": "Differentiate from torsion; use Doppler ultrasound urgently if torsion cannot be excluded."
 ,
    "takeaway": "In acute scrotal pain, never miss torsion; antibiotics depend on STI vs enteric risk."
 ,
    "outline": {"section": "Male and Transgender Reproductive System", "subsection": "Infectious disorders — epididymitis/orchitis/STIs", "page": 31}
  },
  {
    "word": "TESTICULAR",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Sudden scrotal pain with absent cremasteric reflex.",
    "diagnosis": "Testicular torsion",
    "management": "Immediate surgical exploration.",
    "nextStep": "Do not delay for imaging if high suspicion."
  },
  {
    "word": "BPH",
    "specialty": "Surgery",
    "mode": "High Yield",
    "category": "Surgery / High Yield",
    "hint": "Urinary hesitancy and weak stream in older man.",
    "diagnosis": "Benign prostatic hyperplasia",
    "management": "Alpha blocker; 5-alpha-reductase inhibitor for enlarged prostate.",
    "nextStep": "Check for retention/renal complications."
  },
  {
    "word": "PSA",
    "specialty": "Oncology",
    "mode": "All Outline",
    "category": "Oncology / All Outline",
    "hint": "Prostate cancer screening marker.",
    "diagnosis": "Prostate cancer screening",
    "management": "Shared decision-making for screening.",
    "nextStep": "Interpret PSA in clinical context."
  },
  {
    "word": "BREAST",
    "specialty": "Oncology",
    "mode": "High Yield",
    "category": "Oncology / High Yield",
    "hint": "Mass or abnormal mammogram.",
    "diagnosis": "Breast lesion/cancer evaluation",
    "management": "Imaging and biopsy based on age/findings.",
    "nextStep": "Triple assessment: exam, imaging, tissue."
  },
  {
    "word": "OVARIAN",
    "specialty": "Oncology",
    "mode": "Hard Mode",
    "category": "Oncology / Hard Mode",
    "hint": "Bloating and adnexal mass in older patient.",
    "diagnosis": "Ovarian cancer",
    "management": "Surgical staging/debulking and chemotherapy.",
    "nextStep": "Often presents late."
  },
  {
    "word": "LEUKEMIA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Blasts or abnormal WBCs with cytopenias.",
    "diagnosis": "Leukemia",
    "management": "Urgent hematology care; therapy depends on type.",
    "nextStep": "Auer rods suggest AML."
  },
  {
    "word": "LYMPHOMA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Painless lymphadenopathy with B symptoms.",
    "diagnosis": "Lymphoma",
    "management": "Biopsy and staging guide therapy.",
    "nextStep": "Excisional biopsy often preferred."
  },
  {
    "word": "NEUTROPENIA",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Low neutrophils with fever.",
    "diagnosis": "Febrile neutropenia",
    "management": "Immediate broad-spectrum antipseudomonal antibiotics.",
    "nextStep": "Do not wait for culture results."
  },
  {
    "word": "THALASSEMIA",
    "specialty": "Hematology",
    "mode": "All Outline",
    "category": "Hematology / All Outline",
    "hint": "Microcytic anemia with normal/high RBC count.",
    "diagnosis": "Thalassemia",
    "management": "Supportive care; transfusions/chelation for severe disease.",
    "nextStep": "Hemoglobin electrophoresis can help."
  },
  {
    "word": "GPD",
    "specialty": "Hematology",
    "mode": "High Yield",
    "category": "Hematology / High Yield",
    "hint": "Hemolysis after oxidant stress.",
    "diagnosis": "G6PD deficiency",
    "management": "Avoid triggers; supportive care.",
    "nextStep": "Bite cells/Heinz bodies are classic."
  },
  {
    "word": "SPHEROCYTOSIS",
    "specialty": "Hematology",
    "mode": "Hard Mode",
    "category": "Hematology / Hard Mode",
    "hint": "Hemolytic anemia with splenomegaly.",
    "diagnosis": "Hereditary spherocytosis",
    "management": "Folate; splenectomy in severe cases.",
    "nextStep": "Increased MCHC can be a clue."
  },
  {
    "word": "RASH",
    "specialty": "Dermatology",
    "mode": "All Outline",
    "category": "Dermatology / All Outline",
    "hint": "Skin eruption with broad differential.",
    "diagnosis": "Rash evaluation",
    "management": "Treat cause; assess systemic symptoms and mucosal involvement.",
    "nextStep": "Drug reactions and infections are common test themes."
  },
  {
    "word": "CELLULITIS",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Warm, tender, erythematous skin infection.",
    "diagnosis": "Cellulitis",
    "management": "Nonpurulent outpatient: cephalexin or dicloxacillin. MRSA risk/purulence: TMP-SMX, doxycycline, or clindamycin. Severe infection: IV vancomycin plus broader coverage if needed.",
    "nextStep": "Determine purulent vs nonpurulent and assess systemic toxicity."
 ,
    "takeaway": "Cellulitis antibiotic choice depends on purulence, MRSA risk, and severity."
 ,
    "outline": {"section": "Skin & Subcutaneous Tissue", "subsection": "Bacterial skin infections — cellulitis/MRSA/MSSA", "page": 14}
  },
  {
    "word": "IMPETIGO",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Honey-colored crusted lesions.",
    "diagnosis": "Impetigo",
    "management": "Topical mupirocin or oral antibiotics if extensive.",
    "nextStep": "Staph aureus and Strep pyogenes."
  },
  {
    "word": "PSORIASIS",
    "specialty": "Dermatology",
    "mode": "High Yield",
    "category": "Dermatology / High Yield",
    "hint": "Silvery plaques on extensor surfaces.",
    "diagnosis": "Psoriasis",
    "management": "Topical steroids; systemic/biologics if severe.",
    "nextStep": "Can be associated with arthritis."
  },
  {
    "word": "ROSACEA",
    "specialty": "Dermatology",
    "mode": "All Outline",
    "category": "Dermatology / All Outline",
    "hint": "Facial flushing and papules.",
    "diagnosis": "Rosacea",
    "management": "Topical metronidazole/azelaic acid; avoid triggers.",
    "nextStep": "No comedones unlike acne."
  },
  {
    "word": "RA",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Symmetric inflammatory small-joint arthritis.",
    "diagnosis": "Rheumatoid arthritis",
    "management": "DMARDs such as methotrexate.",
    "nextStep": "Treat early to prevent joint damage."
  },
  {
    "word": "SLE",
    "specialty": "Rheumatology",
    "mode": "High Yield",
    "category": "Rheumatology / High Yield",
    "hint": "Multisystem autoimmune disease.",
    "diagnosis": "Systemic lupus erythematosus",
    "management": "Hydroxychloroquine; steroids/immunosuppression by severity.",
    "nextStep": "Check renal involvement with UA/protein."
  },
  {
    "word": "VASCULITIS",
    "specialty": "Rheumatology",
    "mode": "All Outline",
    "category": "Rheumatology / All Outline",
    "hint": "Inflammation of blood vessels causing organ ischemia.",
    "diagnosis": "Vasculitis",
    "management": "Immunosuppression based on type/severity.",
    "nextStep": "Biopsy or serologies can support diagnosis."
  },
  {
    "word": "SARCOID",
    "specialty": "Pulmonology",
    "mode": "All Outline",
    "category": "Pulmonology / All Outline",
    "hint": "Noncaseating granulomas and hilar adenopathy.",
    "diagnosis": "Sarcoidosis",
    "management": "Observation if mild; steroids if organ-threatening.",
    "nextStep": "Can affect lungs, eyes, skin, heart."
  },
  {
    "word": "ANCA",
    "specialty": "Rheumatology",
    "mode": "Hard Mode",
    "category": "Rheumatology / Hard Mode",
    "hint": "Antibody associated with small-vessel vasculitis.",
    "diagnosis": "ANCA-associated vasculitis",
    "management": "High-dose steroids plus immunosuppression.",
    "nextStep": "Renal/pulmonary involvement is high-risk."
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
const cardsBtn = document.getElementById("cardsBtn");
const cardsModal = document.getElementById("cardsModal");
const closeCardsBtn = document.getElementById("closeCardsBtn");
const cardsGrid = document.getElementById("cardsGrid");
const collectionProgress = document.getElementById("collectionProgress");
const cardFilter = document.getElementById("cardFilter");
const cardUnlockToast = document.getElementById("cardUnlockToast");
const unlockRarity = document.getElementById("unlockRarity");
const unlockWord = document.getElementById("unlockWord");
const unlockSpecialty = document.getElementById("unlockSpecialty");
const unlockBadge = document.getElementById("unlockBadge");
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

function getStats() {
  return JSON.parse(localStorage.getItem("medwordleStats") || '{"played":0,"wins":0,"streak":0,"misses":{}}');
}

function saveStats(stats) {
  localStorage.setItem("medwordleStats", JSON.stringify(stats));
  renderStats();
}

function renderStats() {
  const stats = getStats();
  document.getElementById("gamesPlayed").textContent = stats.played || 0;
  document.getElementById("winRate").textContent = stats.played ? Math.round((stats.wins / stats.played) * 100) + "%" : "0%";
  document.getElementById("currentStreak").textContent = stats.streak || 0;
  const misses = stats.misses || {};
  const weak = Object.entries(misses).sort((a,b) => b[1] - a[1])[0];
  document.getElementById("weakTopic").textContent = weak ? weak[0] : "None yet";
}

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

function adaptiveSpecialty() {
  const stats = getStats();
  const misses = stats.misses || {};
  const weak = Object.entries(misses).sort((a,b) => b[1] - a[1])[0];
  return weak ? weak[0] : "All Medicine";
}

function getPool() {
  let pool = WORDS.filter(modeAllows);
  let effectiveSpecialty = selectedSpecialty;

  if (playType === "Adaptive") effectiveSpecialty = adaptiveSpecialty();

  if (effectiveSpecialty !== "All Medicine") {
    const specialtyPool = pool.filter(item => item.specialty === effectiveSpecialty);
    if (specialtyPool.length > 0) return specialtyPool;
  }
  return pool.length ? pool : WORDS;
}

function dailyStorageKey() {
  return "medwordleDaily-" + todayKey();
}

function getDailyRecord() {
  return JSON.parse(localStorage.getItem(dailyStorageKey()) || "null");
}

function saveDailyRecord(record) {
  localStorage.setItem(dailyStorageKey(), JSON.stringify(record));
}

function chooseWord() {
  if (playType === "Daily Challenge") {
    // Universal daily challenge: ignores specialty and difficulty.
    const pool = DAILY_POOL.length ? DAILY_POOL : WORDS;
    const idx = hashString("MedWordleOfficialDaily:" + todayKey()) % pool.length;
    answerObj = pool[idx];
  } else {
    const pool = getPool();
    answerObj = choosePracticeNoRepeat(pool);
  }
  answer = answerObj.word.toUpperCase();
}

function updateControlsForPlayType() {
  const isDaily = playType === "Daily Challenge";
  specialtySelect.disabled = isDaily;
  modeSelect.disabled = isDaily;

  dailyBanner.classList.toggle("hidden", !isDaily);

  if (isDaily) {
    // Display locked universal settings while preserving the user's practice preferences in localStorage.
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


function trackEvent(name, params = {}) {
  if (typeof gtag === "function") {
    gtag("event", name, params);
  }
}

function rarityForCard(item) {
  if (item.mode === "Hard Mode") return "Legendary";
  if (["STEMI", "DKA", "ECTOPIC", "TAMPONADE", "TORSADES", "SEPSIS", "ECLAMPSIA", "HELLP"].includes(item.word)) return "Legendary";
  if (item.mode === "High Yield") return "Rare";
  if (item.mode === "All Outline") return "Uncommon";
  return "Common";
}

function badgeForCard(item) {
  const badges = {
    "Cardiology": "Cath Lab Activated",
    "Pulmonology": "Airway Secured",
    "Gastroenterology": "Scope Ready",
    "Nephrology": "Electrolyte Expert",
    "Endocrinology": "Hormone Hacker",
    "Neurology": "Localization Legend",
    "OB/GYN": "Stabilize Then Deliver",
    "Pediatrics": "Tiny Patient Pro",
    "Psychiatry": "DSM Detective",
    "Infectious Disease": "Source Control",
    "Hematology": "CBC Sleuth",
    "Oncology": "Tumor Board Pick",
    "Dermatology": "Rash Recognizer",
    "Rheumatology": "Autoimmune Ace",
    "Emergency Medicine": "ABCDE Mode",
    "Radiology": "Imaging Eye",
    "Surgery": "OR Ready",
    "Pharmacology": "Dose Boss"
  };
  return badges[item.specialty] || "Clinical Reasoner";
}

function getCollectedCards() {
  return JSON.parse(localStorage.getItem("medwordleCards") || "[]");
}

function saveCollectedCards(cards) {
  localStorage.setItem("medwordleCards", JSON.stringify(cards));
}

function unlockCard() {
  const cards = getCollectedCards();
  if (cards.find(c => c.word === answerObj.word)) return false;

  const card = {
    word: answerObj.word,
    specialty: answerObj.specialty,
    rarity: rarityForCard(answerObj),
    badge: badgeForCard(answerObj),
    hint: answerObj.hint,
    diagnosis: answerObj.diagnosis,
    nextStep: answerObj.nextStep,
    management: answerObj.management,
    unlockedAt: new Date().toISOString()
  };

  cards.push(card);
  saveCollectedCards(cards);
  showCardUnlock(card);
  trackEvent("medcard_unlocked", {
    word: card.word,
    specialty: card.specialty,
    rarity: card.rarity
  });
  return true;
}

function showCardUnlock(card) {
  if (!cardUnlockToast) return;
  unlockRarity.textContent = card.rarity;
  unlockWord.textContent = card.word;
  unlockSpecialty.textContent = card.specialty;
  unlockBadge.textContent = card.badge;
  cardUnlockToast.classList.remove("hidden");
  setTimeout(() => cardUnlockToast.classList.add("hidden"), 4200);
}

function openCardsModal() {
  renderCards();
  cardsModal.classList.remove("hidden");
  cardsModal.setAttribute("aria-hidden", "false");
  trackEvent("medcards_opened", { collected: getCollectedCards().length });
}

function closeCardsModal() {
  cardsModal.classList.add("hidden");
  cardsModal.setAttribute("aria-hidden", "true");
}

function renderCards() {
  const cards = getCollectedCards();
  const filter = cardFilter ? cardFilter.value : "All";
  const visible = filter === "All" ? cards : cards.filter(c => c.specialty === filter);
  const total = WORDS.length;
  collectionProgress.textContent = `Collected ${cards.length} / ${total} cards`;

  cardsGrid.innerHTML = "";
  if (!visible.length) {
    cardsGrid.innerHTML = `<div class="empty-collection">No cards here yet. Solve MedWordle words to unlock collectible MedCards.</div>`;
    return;
  }

  visible
    .sort((a, b) => a.specialty.localeCompare(b.specialty) || a.word.localeCompare(b.word))
    .forEach(card => {
      const el = document.createElement("article");
      el.className = `medcard ${card.rarity.toLowerCase()}`;
      el.innerHTML = `
        <div class="medcard-top">
          <span class="medcard-specialty">${card.specialty}</span>
          <span class="medcard-rarity">${card.rarity}</span>
        </div>
        <div class="medcard-word">${card.word}</div>
        <div class="medcard-badge">${card.badge}</div>
        <p class="medcard-detail"><strong>Dx:</strong> ${card.diagnosis || card.word}</p>
        <p class="medcard-detail"><strong>Clue:</strong> ${card.hint || "High-yield clinical pattern"}</p>
        <p class="medcard-detail"><strong>Next:</strong> ${card.nextStep || "Recognize the pattern and choose the safest next step."}</p>
      `;
      cardsGrid.appendChild(el);
    });
}


const TRIAL_REFERENCE_MAP = {
  "STEMI": { label: "Key evidence/guideline context: Fibrinolytic Therapy Trialists’ overview; contemporary ACC/AHA ACS guidance", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309" },
  "NSTEMI": { label: "Key evidence/guideline context: TIMI risk framework; contemporary ACC/AHA ACS guidance", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309" },
  "AFIB": { label: "Key evidence/guideline context: AFFIRM trial and contemporary AF guidelines", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa021328" },
  "CHF": { label: "Key evidence/guideline context: PARADIGM-HF / modern HFrEF therapy", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1409077" },
  "EMBOLUS": { label: "Key evidence/guideline context: PIOPED/PE diagnostic strategy and CHEST-style anticoagulation principles", url: "https://pubmed.ncbi.nlm.nih.gov/23394420/" },
  "PNEUMONIA": { label: "Guideline context: ATS/IDSA community-acquired pneumonia guideline", url: "https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults/" },
  "COPD": { label: "Guideline context: GOLD COPD exacerbation strategy", url: "https://goldcopd.org/" },
  "ASTHMA": { label: "Guideline context: GINA asthma strategy", url: "https://ginasthma.org/" },
  "DKA": { label: "Guideline context: ADA hyperglycemic crises standards", url: "https://diabetesjournals.org/care/issue" },
  "SEPSIS": { label: "Key evidence/guideline context: Surviving Sepsis Campaign", url: "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines" },
  "STROKE": { label: "Key evidence context: NINDS tPA trial / acute stroke reperfusion principles", url: "https://www.nejm.org/doi/full/10.1056/NEJM199512143332401" },
  "ECTOPIC": { label: "Guideline context: ACOG ectopic pregnancy management", url: "https://www.acog.org/clinical" },
  "HELLP": { label: "Guideline context: ACOG hypertensive disorders of pregnancy", url: "https://www.acog.org/clinical" },
  "ECLAMPSIA": { label: "Guideline context: ACOG hypertensive disorders of pregnancy", url: "https://www.acog.org/clinical" },
  "PID": { label: "Guideline context: CDC STI Treatment Guidelines", url: "https://www.cdc.gov/std/treatment-guidelines/default.htm" },
  "CYSTITIS": { label: "Guideline context: IDSA uncomplicated UTI guidance", url: "https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/" },
  "PYELONEPHRITIS": { label: "Guideline context: IDSA uncomplicated UTI guidance", url: "https://www.idsociety.org/practice-guideline/uncomplicated-cystitis-and-pyelonephritis-uti/" },
  "CELLULITIS": { label: "Guideline context: IDSA skin and soft tissue infection guideline", url: "https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" },
  "CHOLANGITIS": { label: "Guideline context: Tokyo Guidelines for acute cholangitis", url: "https://pubmed.ncbi.nlm.nih.gov/29090866/" }
};

function getTrialReference() {
  return answerObj.trial || TRIAL_REFERENCE_MAP[answerObj.word] || null;
}

function poolKey(pool) {
  const specialtyPart = playType === "Adaptive" ? adaptiveSpecialty() : selectedSpecialty;
  return `medwordleSeen:${playType}:${specialtyPart}:${selectedMode}:${pool.map(w => w.word).join("-")}`;
}

function choosePracticeNoRepeat(pool) {
  const key = poolKey(pool);
  let seen = JSON.parse(localStorage.getItem(key) || "[]");
  let available = pool.filter(item => !seen.includes(item.word));

  if (!available.length) {
    seen = [];
    available = pool;
  }

  const selected = available[Math.floor(Math.random() * available.length)];
  seen.push(selected.word);
  localStorage.setItem(key, JSON.stringify(seen));
  return selected;
}


function uniqueDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function calculatePoints(won) {
  if (!won) return 0;
  let points = 0;
  if (playType === "Daily Challenge") points += 100;
  else if (playType === "Adaptive") points += 35;
  else points += 25;

  if (guesses.length === 1) points += 50;

  const stats = getStats();
  points += Math.min((stats.streak || 0) * 10, 100);
  return points;
}

function enhanceStats(stats, won) {
  stats.points = stats.points || 0;
  stats.days = stats.days || {};
  stats.dayActivity = stats.dayActivity || {};
  stats.specialtyWins = stats.specialtyWins || {};
  stats.dailyCompletions = stats.dailyCompletions || 0;

  const key = uniqueDateKey();
  stats.days[key] = true;
  stats.dayActivity[key] = (stats.dayActivity[key] || 0) + 1;

  if (won) {
    stats.points += calculatePoints(true);
    stats.specialtyWins[answerObj.specialty] = (stats.specialtyWins[answerObj.specialty] || 0) + 1;
    if (playType === "Daily Challenge") stats.dailyCompletions += 1;
  }

  return stats;
}

function bestSpecialtyFromStats(stats) {
  const wins = stats.specialtyWins || {};
  const best = Object.entries(wins).sort((a, b) => b[1] - a[1])[0];
  return best ? `${best[0]} (${best[1]})` : "None";
}

function formatDayWord(n) {
  return `${n} day${n === 1 ? "" : "s"}`;
}

function calculateLongestStreak(activity) {
  const keys = Object.keys(activity || {}).sort();
  if (!keys.length) return 0;

  let longest = 0;
  let current = 0;
  let prev = null;

  keys.forEach(key => {
    const d = new Date(key + "T00:00:00");
    if (!prev) {
      current = 1;
    } else {
      const diff = Math.round((d - prev) / 86400000);
      current = diff === 1 ? current + 1 : 1;
    }
    longest = Math.max(longest, current);
    prev = d;
  });

  return longest;
}

function calculateCurrentStreak(activity) {
  const today = new Date();
  let streak = 0;

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (activity[key]) streak++;
    else break;
  }

  return streak;
}







function openStatsModal() {
  const modal = document.getElementById("statsModal");
  if (!modal) return;
  renderStatsDashboard();
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  if (typeof gtag === "function") gtag("event", "stats_opened");
}

function closeStatsModal() {
  const modal = document.getElementById("statsModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}


/* ---------- Real-time MedWordle stats fix ---------- */

function getTodayKeyForStats() {
  return new Date().toISOString().slice(0, 10);
}

function ensureStatsShape(stats) {
  stats.played = stats.played || 0;
  stats.wins = stats.wins || 0;
  stats.streak = stats.streak || 0;
  stats.points = stats.points || 0;
  stats.days = stats.days || {};
  stats.dayActivity = stats.dayActivity || {};
  stats.specialtyWins = stats.specialtyWins || {};
  stats.dailyCompletions = stats.dailyCompletions || 0;
  stats.lastPlayedDate = stats.lastPlayedDate || null;
  stats.longestStreak = stats.longestStreak || 0;
  return stats;
}

function pointsForResult(won) {
  if (!won) return 5; // small participation credit so plays always feel tracked

  let points = 0;
  if (playType === "Daily Challenge") points += 100;
  else if (playType === "Adaptive") points += 35;
  else points += 25;

  if (guesses.length === 1) points += 50;
  if (guesses.length <= 3) points += 15;

  return points;
}

function updateStatsRealtime(won) {
  let stats = ensureStatsShape(getStats());
  const today = getTodayKeyForStats();

  // prevent double-counting the exact same finished board
  const resultKey = `${today}:${playType}:${answerObj.word}:${guesses.join("-")}:${won ? "W" : "L"}`;
  if (stats.lastResultKey === resultKey) {
    renderStatsDashboard();
    return;
  }
  stats.lastResultKey = resultKey;

  stats.played += 1;
  stats.days[today] = true;
  stats.dayActivity[today] = (stats.dayActivity[today] || 0) + 1;

  // streak counts calendar days with activity, not number of games
  if (stats.lastPlayedDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);

    if (stats.lastPlayedDate === yKey) stats.streak += 1;
    else if (!stats.lastPlayedDate) stats.streak = 1;
    else stats.streak = 1;

    stats.lastPlayedDate = today;
  }

  if (won) {
    stats.wins += 1;
    stats.specialtyWins[answerObj.specialty] = (stats.specialtyWins[answerObj.specialty] || 0) + 1;
    if (playType === "Daily Challenge") stats.dailyCompletions += 1;
  }

  stats.points += pointsForResult(won);
  stats.longestStreak = Math.max(stats.longestStreak || 0, stats.streak || 0);

  saveStats(stats);
  renderStatsDashboard();
}

function bestSpecialtyFromStatsRealtime(stats) {
  const wins = stats.specialtyWins || {};
  const best = Object.entries(wins).sort((a, b) => b[1] - a[1])[0];
  return best ? `${best[0]} (${best[1]})` : "None";
}

function calculateCurrentStreakRealtime(activity) {
  const today = new Date();
  let streak = 0;
  for (let i = 0; i < 366; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (activity && activity[key]) streak++;
    else break;
  }
  return streak;
}

function calculateLongestStreakRealtime(activity) {
  const keys = Object.keys(activity || {}).filter(k => activity[k] > 0).sort();
  if (!keys.length) return 0;

  let longest = 0;
  let current = 0;
  let previous = null;

  keys.forEach(key => {
    const d = new Date(key + "T00:00:00");
    if (!previous) current = 1;
    else {
      const diff = Math.round((d - previous) / 86400000);
      current = diff === 1 ? current + 1 : 1;
    }
    longest = Math.max(longest, current);
    previous = d;
  });

  return longest;
}

function renderStatsDashboard() {
  const stats = ensureStatsShape(getStats());
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("totalPoints", stats.points || 0);
  setText("leaderStreak", stats.streak || calculateCurrentStreakRealtime(stats.dayActivity));
  setText("daysPlayed", Object.keys(stats.days || {}).length);
  setText("leaderWins", stats.wins || 0);
  setText("dailyCompletions", stats.dailyCompletions || 0);
  setText("bestSpecialty", bestSpecialtyFromStatsRealtime(stats));

  renderHeatmap();
}

function renderHeatmap() {
  const grid = document.getElementById("heatmapGrid");
  if (!grid) return;

  const stats = ensureStatsShape(getStats());
  const activity = stats.dayActivity || {};
  const today = new Date();
  const year = today.getFullYear();

  const heatmapYear = document.getElementById("heatmapYear");
  if (heatmapYear) heatmapYear.textContent = year;

  grid.innerHTML = "";

  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const mondayIndex = (date) => (date.getDay() + 6) % 7;

  const leadingBlanks = mondayIndex(start);
  for (let i = 0; i < leadingBlanks; i++) {
    const blank = document.createElement("div");
    blank.className = "heatmap-cell empty";
    grid.appendChild(blank);
  }

  let d = new Date(start);
  while (d <= end) {
    const key = d.toISOString().slice(0, 10);
    const count = activity[key] || 0;

    const cell = document.createElement("div");
    cell.className = "heatmap-cell";

    if (count === 1) cell.classList.add("active");
    if (count === 2) cell.classList.add("win");
    if (count === 3) cell.classList.add("strong");
    if (count >= 4) cell.classList.add("max");

    cell.title = `${key}: ${count} play${count === 1 ? "" : "s"}`;
    grid.appendChild(cell);
    d.setDate(d.getDate() + 1);
  }

  const todayKey = today.toISOString().slice(0, 10);
  const todayCount = activity[todayKey] || 0;

  const todayText = document.getElementById("todayActivityText");
  if (todayText) todayText.textContent = `Studied ${todayCount} card${todayCount === 1 ? "" : "s"} today.`;

  const activeDays = Object.keys(activity).filter(k => k.startsWith(String(year)) && activity[k] > 0).length;
  const totalReviews = Object.entries(activity)
    .filter(([k]) => k.startsWith(String(year)))
    .reduce((sum, [, value]) => sum + value, 0);

  const daysInYear = Math.round((end - start) / 86400000) + 1;
  const dailyAverage = activeDays ? Math.round(totalReviews / activeDays) : 0;
  const percentLearned = Math.round((activeDays / daysInYear) * 100);
  const longest = calculateLongestStreakRealtime(activity);
  const current = calculateCurrentStreakRealtime(activity);

  const dailyAverageEl = document.getElementById("dailyAverage");
  const daysLearnedEl = document.getElementById("daysLearnedPercent");
  const longestEl = document.getElementById("longestStreak");
  const currentEl = document.getElementById("currentStreakText");

  if (dailyAverageEl) dailyAverageEl.textContent = `${dailyAverage} review${dailyAverage === 1 ? "" : "s"}`;
  if (daysLearnedEl) daysLearnedEl.textContent = `${percentLearned}%`;
  if (longestEl) longestEl.textContent = `${longest} day${longest === 1 ? "" : "s"}`;
  if (currentEl) currentEl.textContent = `${current} day${current === 1 ? "" : "s"}`;

  renderMonthLabels(year);
}

function renderMonthLabels(year) {
  const row = document.getElementById("monthLabels");
  if (!row) return;
  row.innerHTML = "";
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].forEach(month => {
    const span = document.createElement("span");
    span.textContent = month;
    row.appendChild(span);
  });
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
  renderStats();

  const dailyRecord = playType === "Daily Challenge" ? getDailyRecord() : null;
  if (dailyRecord) {
    restoreDailyRecord(dailyRecord);
  } else {
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
      tile.className = "tile"; tile.id = `tile-${r}-${c}`;
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}

function buildKeyboard() {
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
    const key = document.createElement("div");
    key.className = "key"; key.id = `key-${letter}`; key.textContent = letter;
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
    key.className = `key ${status}`; key.dataset.status = status;
  }
}

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

function getOutlineInfo() {
  return answerObj.outline || OUTLINE_MAP[answerObj.specialty] || {
    section: "USMLE Content Outline",
    subsection: "Relevant organ system content",
    page: 3
  };
}

function nbmeWhyText() {
  const specialty = answerObj.specialty || "medicine";
  return `Step 2 usually tests the pattern first, then the safest next best step. For ${specialty.toLowerCase()}, stabilize emergencies before definitive testing or long-term management.`;
}

function showPearl() {
  const outline = getOutlineInfo();
  const outlineHref = `${OUTLINE_URL}#page=${outline.page}`;
  const trial = getTrialReference();
  const trialHtml = trial ? `<div class="pearl-row trial-link"><a href="${trial.url}" target="_blank" rel="noopener">🧪 Reference: ${trial.label}</a></div>` : "";
  pearlText.innerHTML = `
    <div class="pearl-row key-clue"><strong>Key Clue:</strong> ${answerObj.hint}</div>
    <div class="pearl-row"><strong>Diagnosis:</strong> ${answerObj.diagnosis}</div>
    <div class="pearl-row next-step"><strong>Next Best Step:</strong> ${answerObj.nextStep}</div>
    <div class="pearl-row"><strong>Management:</strong> ${answerObj.management}</div>
    <div class="pearl-row why"><strong>NBME Takeaway:</strong> ${answerObj.takeaway || nbmeWhyText()}</div>
    <div class="pearl-row outline-link">
      <a href="${outlineHref}" target="_blank" rel="noopener">📖 USMLE Outline: ${outline.section} — ${outline.subsection}</a>
    </div>
    ${trialHtml}
  `;
  pearlBox.classList.remove("hidden");
}

function recordResult(won) {
  if (currentResult !== null) return;
  currentResult = won;

  updateStatsRealtime(won);

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
    if (dailyStatus) dailyStatus.textContent = won ? "Completed ✅" : "Completed";
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
    tile.textContent = guess[i]; tile.classList.add(score[i]); updateKeyboard(guess[i], score[i]);
  }

  if (guess === answer) {
    gameOver = true; input.disabled = true;
    messageEl.textContent = `Correct — ${answer}.`;
    messageEl.className = "message win";
    showPearl(); recordResult(true); trackEvent('medwordle_completed', { result: 'win', specialty: answerObj.specialty, play_type: playType }); return;
  }

  currentRow++;
  if (currentRow >= MAX_ATTEMPTS) {
    gameOver = true; input.disabled = true;
    messageEl.textContent = `Good try. The answer was ${answer}.`;
    messageEl.className = "message loss";
    showPearl(); recordResult(false); trackEvent('medwordle_completed', { result: 'loss', specialty: answerObj.specialty, play_type: playType });
  } else {
    messageEl.textContent = `${MAX_ATTEMPTS - currentRow} guesses remaining.`;
  }
  input.value = ""; input.focus();
}

function emojiGrid() {
  if (!rowScores.length) return "";
  return rowScores.map(row => row.map(s => s === "correct" ? "🟩" : s === "present" ? "🟨" : "⬜").join("")).join("\n");
}

function resultText() {
  const status = currentResult === true ? `${guesses.length}/${MAX_ATTEMPTS}` : currentResult === false ? `X/${MAX_ATTEMPTS}` : "in progress";
  const title = playType === "Daily Challenge" ? `MedWordle Daily ${todayKey()}` : `MedWordle Practice ${todayKey()}`;
  const stats = getStats();
  return `${title}\n${status} • ${answerObj.specialty}\n${emojiGrid()}\n🔥 Streak: ${stats.streak || 0}\n${window.location.href}`;
}

specialtySelect.value = selectedSpecialty;
modeSelect.value = selectedMode;
playTypeSelect.value = playType;

specialtySelect.addEventListener("change", () => {
  if (playType === "Daily Challenge") {
    specialtySelect.value = selectedSpecialty;
    return;
  }
  selectedSpecialty = specialtySelect.value;
  localStorage.setItem("medwordleSpecialty", selectedSpecialty);
  
if (cardsBtn) cardsBtn.addEventListener("click", openCardsModal);
if (closeCardsBtn) closeCardsBtn.addEventListener("click", closeCardsModal);
if (cardFilter) cardFilter.addEventListener("change", renderCards);
if (cardsModal) cardsModal.addEventListener("click", (event) => {
  if (event.target === cardsModal) closeCardsModal();
});


const __cardsBtn = document.getElementById("cardsBtn");
const __closeCardsBtn = document.getElementById("closeCardsBtn");
const __cardFilter = document.getElementById("cardFilter");
const __cardsModal = document.getElementById("cardsModal");

if (__cardsBtn) __cardsBtn.addEventListener("click", openCardsModal);
if (__closeCardsBtn) __closeCardsBtn.addEventListener("click", closeCardsModal);
if (__cardFilter) __cardFilter.addEventListener("change", renderCards);
if (__cardsModal) __cardsModal.addEventListener("click", (event) => {
  if (event.target === __cardsModal) closeCardsModal();
});


const __statsBtn = document.getElementById("statsBtn");
const __closeStatsBtn = document.getElementById("closeStatsBtn");
const __statsModal = document.getElementById("statsModal");

if (__statsBtn) __statsBtn.addEventListener("click", openStatsModal);
if (__closeStatsBtn) __closeStatsBtn.addEventListener("click", closeStatsModal);
if (__statsModal) __statsModal.addEventListener("click", (event) => {
  if (event.target === __statsModal) closeStatsModal();
});

initGame();
renderStatsDashboard();
});
modeSelect.addEventListener("change", () => {
  if (playType === "Daily Challenge") {
    modeSelect.value = selectedMode;
    return;
  }
  selectedMode = modeSelect.value;
  localStorage.setItem("medwordleMode", selectedMode);
  initGame();
});
playTypeSelect.addEventListener("change", () => {
  playType = playTypeSelect.value;
  localStorage.setItem("medwordlePlayType", playType);
  initGame();
});
form.addEventListener("submit", event => { event.preventDefault(); submitGuess(input.value); });
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
input.addEventListener("input", () => { input.value = input.value.toUpperCase().replace(/[^A-Z]/g, ""); });

initGame();
