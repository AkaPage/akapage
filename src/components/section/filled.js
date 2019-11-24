import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_filled'

const Filled = props => {
  const styles = Object.assign({}, props.styles || {})

  styles.display = props.isActive ? 'block' : 'none'

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Filled.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  isActive: PropTypes.bool.isRequired
}

export default Filled
