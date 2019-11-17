import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

const Container = styled('div', props => {
  const style = props.style || {}

  return {
    display: style.display || 'flex',
    flexDirection: style.flexDirection || 'row',
    flexWrap: style.flexWrap || 'wrap',
    justifyContent: style.justifyContent || 'flex-start',
    alignItems: style.alignItems || 'flex-start',
    alignContent: style.alignContent || 'flex-start'
  }
})

Container.propTypes = {
  style: PropTypes.object
}

export default Container
