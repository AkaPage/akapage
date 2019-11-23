import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_avatar'

const Avatar = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles} src={props.src}>
      {props.children}
    </StyledElement>
  )
}

Avatar.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  src: PropTypes.string
}

export default Avatar
