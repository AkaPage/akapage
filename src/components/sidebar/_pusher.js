import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Container = styled('div', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.position = styles.position || 'relative'
  styles.minHeight = styles.minHeight || styles.height || '100vh'
  styles.width = styles.width || '100%'

  return styles
})

Container.propTypes = {
  'aka-styles': PropTypes.object
}

export default Container
