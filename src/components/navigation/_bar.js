import PropTypes from 'prop-types'
import { withStyle } from 'styletron-react'

import {
  _Container as FlexContainer
} from '../flex'

const Bar = withStyle(FlexContainer, props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.alignItems = styles.alignItems || 'stretch'
  styles.alignContent = styles.alignContent || 'center'
  styles.justifyContent = styles.justifyContent || 'center'

  styles.background = styles.background || 'darkgrey'
  styles.height = styles.height || '55px'
  styles.width = styles.width || '100%'
  styles.boxShadow = styles.boxShadow || `0px 2.5px 2px ${styles.background}`

  return styles
})

Bar.propTypes = {
  'aka-styles': PropTypes.object
}

export default Bar
