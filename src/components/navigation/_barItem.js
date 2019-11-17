import PropTypes from 'prop-types'
import { withStyle } from 'styletron-react'

import {
  _Item as FlexItem
} from '../flex'

const BarItem = withStyle(FlexItem, props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.fontSize = styles.fontSize || '15.5px'
  styles.color = styles.color || 'white'
  styles.textAlign = styles.textAlign || 'center'
  styles.paddingLeft = styles.paddingLeft || '10px'
  styles.paddingRight = styles.paddingRight || '10px'

  return styles
})

BarItem.propTypes = {
  styles: PropTypes.object
}

export default BarItem
