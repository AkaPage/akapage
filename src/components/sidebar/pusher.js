import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_pusher'

const Pusher = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Pusher.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Pusher
