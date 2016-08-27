import React, {PropTypes} from 'react'
import {deliverPatientData} from 'helpers/utils'
import data from '../../data/patients.json'
import {Weight} from 'components'

const Patient = () => {
  const cleanData = deliverPatientData(data)[0]
  return (
    <div>
       <span>{cleanData.name}</span>
       <ul>
        <span>{'MRN: ' + cleanData.mrn + ' '}</span>
        <span>{cleanData.dob}</span>
        <span>{cleanData.demographics}</span>
       </ul>
       <ul>
        <span>{cleanData.tumor_size + ' cm '}</span>
        <span>{cleanData.histology + ', '}</span>
        <span>{cleanData.treatment_site}</span>
       </ul>
       <ul>
        <span>{cleanData.weight + ' lb'}</span>
        <Weight />
       </ul>
    </div>
  )
}

Patient.proptypes = {
  data: PropTypes.object,
}

export default Patient
