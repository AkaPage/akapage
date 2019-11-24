import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Fullfill = styled('div', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.display = styles.display || 'hidden'
  styles.width = styles.width || '100%'
  styles.minHeight = styles.minHeight || 'calc(100vh - 55px)' /* remove navigation bar's height */
  styles.background = styles.background || 'black'
  styles.display = styles.display || 'none'

  return styles
})

Fullfill.propTypes = {
  'aka-styles': PropTypes.object
}

export default Fullfill
