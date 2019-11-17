import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_bar'

const Bar = props => {
  const style = props.style || {}

  return (
    <StyledElement style={style}>
      {props.children}
    </StyledElement>
  )
}

Bar.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
}

export default Bar
