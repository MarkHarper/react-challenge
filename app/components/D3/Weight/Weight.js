import React, {Component, PropTypes} from 'react'
import Line from '../Line/Line.js'
import Circle from '../Circle/Circle.js'
import * as d3 from 'd3'

class Weight extends Component {
  render () {
    const width = 100
    const height = 30
    let min, max, mean, patientWeight
    [min, max, mean, patientWeight] = [95, 250, 150, 170]
    let scale = d3.scaleLinear()
      .domain([min, max])
      .range([0, width])
    return (
      <svg width={width + 'px'} height={height + 'px'} style={{padding: '0 0 0 2em'}}>
        <Line class={'min'} x1={scale(min)} x2={scale(min)}
          y1={0} y2={height} color={'black'}/>
        <Line class={'mean'} x1={scale(mean)} x2={scale(mean)}
          y1={0} y2={height} color={'black'}/>
        <Line class={'max'} x1={scale(max)} x2={scale(max)}
          y1={0} y2={height} color={'black'}/>
        <Circle class={'patientWeight'} cx={scale(patientWeight)} cy={height / 2}
          r={height / 2} color={'red'}/>
      </svg>
    )
  }
}

Weight.propTypes = {

}

export default Weight
