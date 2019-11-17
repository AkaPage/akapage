import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Item = styled('div', props => {
  const style = Object.assign({}, props.style || {})

  style.order = style.order || 0
  /*
  style.flexGrow = style.flexGrow || 1
  style.flexShrink = style.flexShrink || 0
  style.flexBasis = style.flexBasis || 'auto'
  */
  style.flex = style.flex || `${style.flexGrow || 1} ${style.flexShrink || 0} ${style.flexBasis || 'auto'}`
  style.alignSelf = style.alignSelf || 'flex-start'

  return style
})

Item.propTypes = {
  style: PropTypes.object
}

export default Item
