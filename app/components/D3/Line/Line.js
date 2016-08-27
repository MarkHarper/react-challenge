import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import * as d3 from 'd3'

class Line extends Component {
  constructor (props) {
    super(props)
    this.enter = this.enter.bind(this)
  }
  componentDidMount () {
    d3.select(findDOMNode(this))
      .datum(this.props)
      .call(this.enter)
  }
  enter (selection) {
    selection
      .attr('x1', (d) => d.x1)
      .attr('x2', (d) => d.x2)
      .attr('y1', (d) => d.y1)
      .attr('y2', (d) => d.y2)
      .attr('stroke', (d) => d.color)
      .attr('opacity', 1)
  }
  render () {
    return (
      <line className={this.props.class}></line>
    )
  }
}

Line.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
}

export default Line
