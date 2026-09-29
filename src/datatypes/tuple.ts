let patientInfo: [string, number, boolean] = ["Ajith", 27, true];

console.log(patientInfo);

patientInfo = ["Ajith", 27, false];
patientInfo[0] = "Pavan";

console.log(`
    Patient name is ${patientInfo[0]}
    Patient age is ${patientInfo[1]}
    Patient isAdmitted ${patientInfo[2]}
    `);