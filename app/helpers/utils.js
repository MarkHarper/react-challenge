
export function deliverPatientData (json) {
  let output = []
  return traverse(json, output, formatPatientData)
}

function traverse (source, output, fn) {
  source.forEach(function (e, i, arr) {
    output = fn(source[i], output)
  })
  return output
}

export function formatPatientData (patient, output) {
  output.push({
    name: patient.name.first + ' ' + patient.name.last,
    mrn: patient.mrn,
    dob: patient.dob,
    demographics: age(patient.dob) + ' y.o ' + patient.sex,
    treatment_site: patient.treatment_site,
    histology: patient.histology,
    tumor_size: patient.tumor_size_cm,
    weight: patient.weight,
  })
  return output
}

export function age (date) {
  let today = new Date()
  let dob = new Date(date)
  let age = today.getFullYear() - dob.getFullYear()
  let m = today.getMonth() - dob.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--
  }
  return age
}
