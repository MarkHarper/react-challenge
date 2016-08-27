import React, {PropTypes} from 'react'

const Row = ({data, isHeader}) => {
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
      : <tr>
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
}

export default Row
