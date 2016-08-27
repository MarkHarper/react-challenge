import React, {PropTypes} from 'react'
import {row} from './styles.css'

const Row = ({data, isHeader, handleClick}) => {
  return isHeader === true
    ? <tr>
          <th>{'Name'}</th>
          <th>{'MRN'}</th>
          <th>{'DOB'}</th>
          <th>{'Demographics'}</th>
          <th>{'Weight'}</th>
          <th>{'Histology'}</th>
          <th>{'Treatment Site'}</th>
          <th>{'Tumor Size'}</th>
      </tr>
      : <tr className={row} onClick={handleClick}>
          <td>{data.name}</td>
          <td>{data.mrn}</td>
          <td>{data.dob}</td>
          <td>{data.demographics}</td>
          <td>{data.weight}</td>
          <td>{data.histology}</td>
          <td>{data.treatment_site}</td>
          <td>{data.tumor_size}</td>
        </tr>
}

Row.propTypes = {
  data: PropTypes.object,
  isHeader: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default Row
