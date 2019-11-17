import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_container'

const Container = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Container
