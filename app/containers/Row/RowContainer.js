import React, {Component, PropTypes} from 'react'
import {Row} from 'components'

class RowContainer extends Component {
  render () {
    return (
      <Row data={this.props.data} isHeader={this.props.isHeader} />
    )
  }
}

RowContainer.propTypes = {
  data: PropTypes.object,
  isHeader: PropTypes.bool,
}

export default RowContainer
