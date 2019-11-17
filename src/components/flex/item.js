import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_item'

const Item = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Item.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Item
