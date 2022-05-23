import api from "./services/api.js";

// function createPatientRow(patient) {
//   const patientContainer = document.querySelector('.table-patients tbody');

//   const patientRow = `<tr>
//     <td>${patient.name}</td>

//   </tr>`;

//   patientContainer.insertAdjacentHTML('beforeend', patientRow);
// }

const patient = document.querySelector("#container");
const ultimaSenha = document.querySelector("#containerProx");
let count = 0;

const showPatient = (patients, e) => {
    if (e.keyCode == 39) {
        if (count >= patients.length) {
            count = 0;
        }
        patient.innerHTML = `${patients[count].name}`;
        if (count > 0) {
             ultimaSenha.innerHTML = `${patients[count - 1].name}`;
        }
        count++;
    }
};

async function loadPatients(e) {
    const patients = await api.read("/patients");
    showPatient(patients, e);
}

document.addEventListener("keydown", (e) => {
    loadPatients(e);
});
