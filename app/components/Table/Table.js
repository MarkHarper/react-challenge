import React, {PropTypes} from 'react'
import {RowContainer} from 'containers'

const Table = ({data}) => {
  let rows = []
  for (var i in data) {
    rows.push(<RowContainer data={data[i]} key={i} reactKey={i}/>)
  }
  return (
    <table>
      <thead>
        <RowContainer isHeader={true}/>
      </thead>
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
