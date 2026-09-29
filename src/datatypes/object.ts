let patient: {
    name: string;
    age: number;
    isAdmitted: boolean;
    department: string;
} = {
    name: "AGT",
    age: 28,
    isAdmitted: false,
    department: "Nuerology"
}

console.log(patient)
patient.isAdmitted = true
patient.age = patient.age + 1

console.log(`
    Patient Name is: ${patient.name},
    Patient Age is: ${patient.age},
    Patient is Admitted: ${patient.isAdmitted},
    Patient Department: ${patient.department}
    `
)
