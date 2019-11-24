import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_fullfill'

const Fullfill = props => {
  const styles = Object.assign({}, props.styles || {})

  styles.display = props.isActive ? 'block' : 'none'

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Fullfill.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  isActive: PropTypes.bool.isRequired
}

export default Fullfill
