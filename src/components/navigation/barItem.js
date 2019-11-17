import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_barItem'

const BarItem = props => {
  const styles = Object.assign({}, props.styles || {})

  styles.fontWeight = props.primary ? 'normal' : 'lighter'

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

BarItem.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  primary: PropTypes.bool
}

export default BarItem
