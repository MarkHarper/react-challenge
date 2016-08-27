import React, {PropTypes} from 'react'
import {rowContainer, row, header} from './styles.css'

const Row = ({data, isHeader, handleClick}) => {
  return isHeader === true
    ? <tr>
          <th className={header}>{'Name'}</th>
          <th className={header}>{'MRN'}</th>
          <th className={header}>{'DOB'}</th>
          <th className={header}>{'Demographics'}</th>
          <th className={header}>{'Weight'}</th>
          <th className={header}>{'Histology'}</th>
          <th className={header}>{'Treatment Site'}</th>
          <th className={header}>{'Tumor Size'}</th>
      </tr>
      : <tr className={rowContainer} onClick={handleClick}>
          <td className={row}>{data.name}</td>
          <td className={row}>{data.mrn}</td>
          <td className={row}>{data.dob}</td>
          <td className={row}>{data.demographics}</td>
          <td className={row}>{data.weight}</td>
          <td className={row}>{data.histology}</td>
          <td className={row}>{data.treatment_site}</td>
          <td className={row}>{data.tumor_size}</td>
        </tr>
}

Row.propTypes = {
  data: PropTypes.object,
  isHeader: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default Row
