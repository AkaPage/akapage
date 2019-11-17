import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Item = styled('div', props => {
  const style = props.style || {}

  return {
    order: style.order || 0,
    /*
    flexGrow: style.flexGrow || 1,
    flexShrink: style.flexShrink || 0,
    flexBasis: style.flexBasis || 'auto',
    */
    flex: style.flex || `${style.flexGrow || 1} ${style.flexShrink || 0} ${style.flexBasis || 'auto'}`,
    alignSelf: style.alignSelf || 'flex-start'
  }
})

Item.propTypes = {
  style: PropTypes.object
}

export default Item
