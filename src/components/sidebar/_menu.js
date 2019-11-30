import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Container = styled('div', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.position = styles.position || 'fixed'
  styles.top = styles.top || 0
  styles.right = styles.right || 0
  styles.width = styles.width || '275px'
  styles.height = styles.height || '100vh'
  styles.background = styles.background || 'black'
  styles.display = styles.display || 'none'
  styles.zIndex = styles.zIndex || 11
  styles.overflow = styles.overflow || 'hidden'

  return styles
})

Container.propTypes = {
  'aka-styles': PropTypes.object
}

export default Container
