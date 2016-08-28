import React, {Component, PropTypes} from 'react'
import {Patient} from 'components'
import { connect } from 'react-redux'
import { deliverPatientData } from 'helpers/utils'
import * as dataActions from 'redux/modules/data'
import {bindActionCreators} from 'redux'
import * as d3 from 'd3'

class PatientContainer extends Component {
  checkData () {
    let newData = deliverPatientData()
    let weightArr = []
    for (var i in newData) {
      weightArr.push(newData[i].weight)
    }
    this.props.loadData({cleanData: newData,
      min: d3.min(weightArr),
      mean: d3.mean(weightArr),
      max: d3.max(weightArr),
    })
  }
  render () {
    if (this.props.dataLoaded) {
      return (
        <Patient data={this.props.patientData.toJS()[this.props.params.name]} min={this.props.min} mean={this.props.mean}
        max={this.props.max}/>
      )
    } else {
      this.checkData()
      return null
    }
  }
}

PatientContainer.propTypes = {
  patientData: PropTypes.object.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  min: PropTypes.number.isRequired,
  mean: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default connect(
  ({data}) => ({patientData: data.get('patientData'),
    dataLoaded: data.get('dataLoaded'),
    min: data.get('min'),
    mean: data.get('mean'),
    max: data.get('max')}),
  (dispatch) => bindActionCreators(dataActions, dispatch)
  )(PatientContainer)
