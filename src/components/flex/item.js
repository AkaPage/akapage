import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_item'

const Item = props => {
  const style = props.style || {}

  return (
    <StyledElement style={style}>
      {props.children}
    </StyledElement>
  )
}

Item.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
}

export default Item
