import { useState } from 'react'

export default initialValue => {
  const [isActive, setActive] = useState(initialValue)
  const onClick = event => setActive(!isActive)

  return [isActive, onClick]
}
