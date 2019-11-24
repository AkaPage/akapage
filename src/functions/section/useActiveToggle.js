import { useState } from 'react'

export default initialValue => {
  const [isActive, setActive] = useState(initialValue)
  const onEventFire = event => setActive(!isActive)

  return [isActive, onEventFire]
}
