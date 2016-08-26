import React, {PropTypes} from 'react'

const Row = ({data}) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.mrn}</td>
      <td>{data.dob}</td>
      <td>{data.demographics}</td>
      <td>{data.weight}</td>
      <td>{data.histology}</td>
      <td>{data.treatment_site}</td>
      <td>{data.tumor_size}</td>
    </tr>
  )
}

Row.propTypes = {
  data: PropTypes.object.isRequired,
  isHeader: PropTypes.bool.isRequired,
}

export default Row
