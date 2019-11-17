import PropTypes from 'prop-types'
import { withStyle } from 'styletron-react'

import {
  _Container as FlexContainer
} from '../flex'

const Bar = withStyle(FlexContainer, props => {
  const style = props.style || {}

  return {
    background: style.background || 'grey',
    height: style.height || '50px',
    width: style.width || '100%'
  }
})

Bar.propTypes = {
  style: PropTypes.object
}

export default Bar
