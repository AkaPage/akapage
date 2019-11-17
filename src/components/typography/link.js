import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_link'

const Link = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles} href={props.href || '#'}>
      {props.children}
    </StyledElement>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  href: PropTypes.string
}

export default Link
