import React, {Component, PropTypes} from 'react'
import Line from '../Line/Line.js'
import Circle from '../Circle/Circle.js'
import * as d3 from 'd3'

class Weight extends Component {
  render () {
    const width = 200
    const height = 30
    let scale = d3.scaleLinear()
      .domain([this.props.min, this.props.max])
      .range([0, width])
    return (
      <svg width={width + 'px'} height={height + 'px'} style={{padding: '0 0.1em'}}>
        <Line class={'base'} x1={0} x2={width}
          y1={height / 2} y2={height / 2} color={'#777'}/>
        <Line class={'min'} x1={scale(this.props.min)} x2={scale(this.props.min)}
          y1={0} y2={height} color={'#777'}/>
        <Line class={'mean'} x1={scale(this.props.mean)} x2={scale(this.props.mean)}
          y1={0} y2={height} color={'#777'}/>
        <Line class={'max'} x1={scale(this.props.max)} x2={scale(this.props.max)}
          y1={0} y2={height} color={'#777'}/>
        <Circle class={'patientWeight'} cx={scale(this.props.patientWeight)} cy={height / 2}
          r={height / 3} color={'#9AC0DA'}/>
      </svg>
    )
  }
}

Weight.propTypes = {
  min: PropTypes.number.isRequired,
  mean: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  patientWeight: PropTypes.number.isRequired,
}

export default Weight
