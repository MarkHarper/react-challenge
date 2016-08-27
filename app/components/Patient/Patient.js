import React, {PropTypes} from 'react'
import {Weight} from 'components'

const Patient = (patient) => {
  return (
    <div>
       <span>{patient.data.name}</span>
       <ul>
        <span>{'MRN: ' + patient.data.mrn + ' '}</span>
        <span>{patient.data.dob}</span>
        <span>{patient.data.demographics}</span>
       </ul>
       <ul>
        <span>{patient.data.tumor_size + ' cm '}</span>
        <span>{patient.data.histology + ', '}</span>
        <span>{patient.data.treatment_site}</span>
       </ul>
       <ul>
        <span>{patient.data.weight + ' lb'}</span>
        <Weight />
       </ul>
    </div>
  )
}

Patient.proptypes = {
  data: PropTypes.object.isRequired,
}

export default Patient
