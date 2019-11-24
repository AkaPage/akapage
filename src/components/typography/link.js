import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_link'

const Link = props => {
  const styles = Object.assign({}, props.styles || {})

  styles.borderBottom = (props.underlined) ? `2px solid ${props.underlined || 'black'}` : 'none'

  return (
    <StyledElement aka-styles={styles} href={props.href || '#'}>
      {props.children}
    </StyledElement>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  href: PropTypes.string,
  underlined: PropTypes.string
}

export default Link
