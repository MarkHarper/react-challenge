import React, {Component} from 'react'
import {Patient} from 'components'
import { connect } from 'react-redux'
import { deliverPatientData } from 'helpers/utils'
import * as dataActions from 'redux/modules/data'
import {bindActionCreators} from 'redux'

class PatientContainer extends Component {
  checkData () {
    if (this.props.dataLoaded) {
      return this.props.patientData.toJS()[this.props.params.name]
    } else {
      let newData = deliverPatientData()
      this.props.loadData(newData)
      return newData[this.props.params.name]
    }
  }
  render () {
    return (
      <div>
        <Patient data={this.checkData()}/>
      </div>
    )
  }
}

export default connect(
  ({data}) => ({patientData: data.get('patientData'), dataLoaded: data.get('dataLoaded')}),
  (dispatch) => bindActionCreators(dataActions, dispatch)
  )(PatientContainer)
