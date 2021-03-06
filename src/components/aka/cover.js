import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_cover'

const Cover = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Cover.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Cover
