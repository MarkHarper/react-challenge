import React, {Component, PropTypes} from 'react'
import {Table} from 'components'
import { connect } from 'react-redux'
import { deliverPatientData } from 'helpers/utils'
import * as dataActions from 'redux/modules/data'
import {bindActionCreators} from 'redux'


class TableContainer extends Component {
  checkData () {
    if (this.props.dataLoaded) {
      return this.props.patientData.toJS()
    } else {
      let newData = deliverPatientData()
      this.props.loadData(newData)
      return newData
    }
  }
  render () {
    return (
      <div>
        <Table data={this.checkData()} />
      </div>
    )
  }
}

export default connect(
  ({data}) => ({patientData: data.get('patientData'), dataLoaded: data.get('dataLoaded')}),
  (dispatch) => bindActionCreators(dataActions, dispatch)
  )(TableContainer)
