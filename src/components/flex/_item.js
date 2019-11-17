import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Item = styled('div', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.order = styles.order || 0
  /*
  styles.flexGrow = styles.flexGrow || 1
  styles.flexShrink = styles.flexShrink || 0
  styles.flexBasis = styles.flexBasis || 'auto'
  */
  styles.flex = styles.flex || `${styles.flexGrow || 1} ${styles.flexShrink || 0} ${styles.flexBasis || 'auto'}`
  styles.alignSelf = styles.alignSelf || 'flex-start'

  return styles
})

Item.propTypes = {
  styles: PropTypes.object
}

export default Item
