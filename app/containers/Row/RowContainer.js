import React, {Component, PropTypes} from 'react'
import {Row} from 'components'

class RowContainer extends Component {
  render () {
    return (
      <Row data={this.props.data}/>
    )
  }
}

RowContainer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RowContainer
