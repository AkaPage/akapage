import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_container'

const Container = props => {
  const style = props.style || {}

  return (
    <StyledElement style={style}>
      {props.children}
    </StyledElement>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
}

export default Container
