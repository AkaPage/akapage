import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_menu'

const Menu = props => {
  const styles = Object.assign({}, props.styles || {})

  if (props.isActive) {
    styles.display = styles.display || 'block'
  }

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Menu.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  isActive: PropTypes.bool.isRequired
}

export default Menu
