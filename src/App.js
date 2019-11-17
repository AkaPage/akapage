import React from 'react'

import {
  Bar as NavigationBar,
  BarItem as NavigationBarItem
} from './components/navigation'
import { Link } from './components/typography'

import 'normalize.css'

import './statics/stylesheets/fonts/NotoSansKR.css'

export default () => {
  return (
    <div>
      <NavigationBar
        styles={{
          background: 'black',
          boxShadow: 'none'
        }}
      >
        <NavigationBarItem primary>
          <Link href='/'>Seia-Soto</Link>
        </NavigationBarItem>
      </NavigationBar>
    </div>
  )
}
