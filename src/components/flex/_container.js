import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Container = styled('div', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.display = styles.display || 'flex'
  styles.flexDirection = styles.flexDirection || 'row'
  styles.flexWrap = styles.flexWrap || 'wrap'
  styles.justifyContent = styles.justifyContent || 'flex-start'
  styles.alignItems = styles.alignItems || 'flex-start'
  styles.alignContent = styles.alignContent || 'flex-start'

  return styles
})

Container.propTypes = {
  'aka-styles': PropTypes.object
}

export default Container
