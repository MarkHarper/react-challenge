import React, {Component, PropTypes} from 'react'
import {Table} from 'components'
import {deliverPatientData} from 'helpers/utils'
import data from '../../data/patients.json'

class TableContainer extends Component {
  render () {
    return (
      <div>
        <Table data={deliverPatientData(data)}/>
      </div>
    )
  }
}

export default TableContainer
