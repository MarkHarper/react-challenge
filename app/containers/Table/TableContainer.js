import React, {Component, PropTypes} from 'react'
import {Table} from 'components'
import { connect } from 'react-redux'
import { deliverPatientData } from 'helpers/utils'
import json from '../../data/patients.json'
import * as dataActions from 'redux/modules/data'
import {bindActionCreators} from 'redux'
import * as d3 from 'd3'

class TableContainer extends Component {
  checkData () {
    let newData = deliverPatientData(json)
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
        <Table data={this.props.patientData.toJS()} />
      )
    } else {
      this.checkData()
      return null
    }
  }
}

export default connect(
  ({data}) => ({patientData: data.get('patientData'), dataLoaded: data.get('dataLoaded')}),
  (dispatch) => bindActionCreators(dataActions, dispatch)
  )(TableContainer)
