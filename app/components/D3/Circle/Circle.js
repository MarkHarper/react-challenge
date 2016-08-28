import React, { Component, PropTypes } from 'react'
import * as d3 from 'd3'

class Circle extends Component {
  constructor (props) {
    super(props)
    this.enter = this.enter.bind(this)
  }
  componentDidMount () {
    d3.select('.' + this.props.class)
      .datum(this.props)
      .call(this.enter)
  }
  enter (selection) {
    selection
      .attr('cx', (d) => d.cx)
      .attr('cy', (d) => d.cy)
      .attr('r', (d) => 0)
      .attr('fill', (d) => d.color)
      .attr('opacity', 1)
      .attr('r', (d) => d.r)
  }
  render () {
    return (
      <circle className={this.props.class}></circle>
    )
  }
}

Circle.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
}

export default Circle
