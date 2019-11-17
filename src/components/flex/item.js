import React from 'react'
import PropTypes from 'prop-types'
import { useStyletron } from 'styletron-react'

const Item = props => {
  const [css] = useStyletron()
  const styles = props.styles || {}

  return (
    <div
      className={css({
        order: styles.order || 0,
        /*
        flexGrow: styles.flexGrow || 1,
        flexShrink: styles.flexShrink || 0,
        flexBasis: styles.flexBasis || 'auto',
        */
        flex: styles.flex || `${styles.flexGrow || 1} ${styles.flexShrink || 0} ${styles.flexBasis || 'auto'}`,
        alignSelf: styles.alignSelf || 'flex-start'
      })}
    >
      {props.children}
    </div>
  )
}

Item.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Item
