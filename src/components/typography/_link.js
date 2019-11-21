import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Container = styled('a', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.color = styles.color || 'inherit'
  styles.textDecoration = styles.textDecoration || 'inherit'
  styles.fontWeight = styles.fontWeight || 'inherit'

  return styles
})

Container.propTypes = {
  'aka-styles': PropTypes.object
}

export default Container
