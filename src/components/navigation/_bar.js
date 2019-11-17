import PropTypes from 'prop-types'
import { withStyle } from 'styletron-react'

import {
  _Container as FlexContainer
} from '../flex'

const Bar = withStyle(FlexContainer, props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  // NOTE: Styles to parent component
  styles.justifyContent = styles.justifyContent || 'space-around'
  styles.alignItems = styles.alignItems || 'center'
  styles.alignContent = styles.alignContent || 'center'

  styles.background = styles.background || 'darkgrey'
  styles.height = styles.height || '47.5px'
  styles.width = styles.width || '100%'
  styles.boxShadow = styles.boxShadow || `0px 2.5px 2px ${styles.background}`

  return styles
})

Bar.propTypes = {
  styles: PropTypes.object
}

export default Bar
