import PropTypes from 'prop-types'
import { withStyle } from 'styletron-react'

import {
  _Item as FlexItem
} from '../flex'

const BarItem = withStyle(FlexItem, props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.fontSize = styles.fontSize || '15.5px'
  styles.color = styles.color || 'white'
  styles.fontWeight = styles.fontWeight || 'lighter'
  styles.paddingLeft = styles.paddingLeft || '14px'
  styles.paddingRight = styles.paddingRight || '14px'
  /* styles.textAlign = styles.textAlign || 'center' */

  return styles
})

BarItem.propTypes = {
  'aka-styles': PropTypes.object
}

export default BarItem
