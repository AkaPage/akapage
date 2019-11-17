import React from 'react'
import PropTypes from 'prop-types'
import { useStyletron } from 'styletron-react'

const Container = props => {
  const [css] = useStyletron()
  const styles = props.styles || {}

  return (
    <div
      className={css({
        display: styles.display || 'flex',
        flexDirection: styles.flexDirection || 'row',
        flexWrap: styles.flexWrap || 'wrap',
        justifyContent: styles.justifyContent || 'flex-start',
        alignItems: styles.alignItems || 'flex-start',
        alignContent: styles.alignContent || 'flex-start'
      })}
    >
      {props.children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Container
