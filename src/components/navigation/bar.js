import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_bar'

const Bar = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Bar.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Bar
