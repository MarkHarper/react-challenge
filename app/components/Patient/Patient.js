import React, {PropTypes} from 'react'
import {Weight} from 'components'
import {container, name, left, between} from './styles.css'

const Patient = (props) => {
  return (
    <div className={container}>
       <li className={name}>{props.data.name}</li>
       <ul className={between}>
        <li>{'MRN: ' + props.data.mrn + ' '}</li>
        <li>{props.data.dob}</li>
        <li>{props.data.demographics}</li>
       </ul>
       <ul className={left}>
        <li>{props.data.tumor_size + ' cm '}</li>
        <li>{props.data.histology + ', '}</li>
        <li>{props.data.treatment_site}</li>
       </ul>
       <ul className={between}>
        <li>{props.data.weight + ' lb'}</li>
        <Weight min={props.min} mean={props.mean} max={props.max}
          patientWeight={props.data.weight}/>
       </ul>
    </div>
  )
}

Patient.proptypes = {
  data: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  mean: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default Patient
