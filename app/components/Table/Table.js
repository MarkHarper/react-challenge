import React, {PropTypes} from 'react'
import {RowContainer} from 'containers'

const Table = ({data}) => {
  let rows = []
  data.forEach(function (patient, i, arr) {
    rows.push(<RowContainer data={patient} key={i}/>)
  })
  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Table
