import PropTypes from 'prop-types'
import { withStyle } from 'styletron-react'

import {
  _Container as FlexContainer
} from '../flex'

const Bar = withStyle(FlexContainer, props => {
  const style = props.style || {}

  style.background = style.background || 'grey'
  style.height = style.height || '50px'
  style.width = style.width || '100%'

  return style
})

Bar.propTypes = {
  style: PropTypes.object
}

export default Bar
