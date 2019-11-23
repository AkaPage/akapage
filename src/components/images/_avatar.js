import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Avatar = styled('img', props => {
  const styles = Object.assign({}, props['aka-styles'] || {})

  styles.width = styles.width || '30px'
  styles.height = styles.height || styles.width || '30px'
  styles.display = styles.display || 'inline-block'
  styles.borderRadius = styles.borderRadius || '50%'
  styles.marginLeft = styles.marginLeft || '-25%'

  return styles
})

Avatar.propTypes = {
  'aka-styles': PropTypes.object
}

export default Avatar
