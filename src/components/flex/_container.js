import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Container = styled('div', props => {
  const style = props.style || {}

  style.display = style.display || 'flex'
  style.flexDirection = style.flexDirection || 'row'
  style.flexWrap = style.flexWrap || 'wrap'
  style.justifyContent = style.justifyContent || 'flex-start'
  style.alignItems = style.alignItems || 'flex-start'
  style.alignContent = style.alignContent || 'flex-start'

  return style
})

Container.propTypes = {
  style: PropTypes.object
}

export default Container
