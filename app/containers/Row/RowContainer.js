import React, {Component, PropTypes} from 'react'
import {Row} from 'components'

class RowContainer extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    console.log(this)
  }
  render () {
    return (
      <Row data={this.props.data} isHeader={this.props.isHeader} handleClick={this.handleClick} />
    )
  }
}

RowContainer.propTypes = {
  data: PropTypes.object,
  isHeader: PropTypes.bool,
}

export default RowContainer
