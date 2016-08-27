import React, {Component, PropTypes} from 'react'
import {Row} from 'components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class RowContainer extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.dispatch(push('/patient/' + this.props.data.key.replace(/ /g, '_')))
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

export default connect()(RowContainer)
