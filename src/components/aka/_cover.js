import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Cover = styled('div', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.height = styles.height || '100vh'
  styles.maxWidth = styles.maxWidth || '100vw'

  return styles
})

Cover.propTypes = {
  'aka-styles': PropTypes.object
}

export default Cover
