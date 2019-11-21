import React from 'react'

import * as FontAwesome from 'react-icons/fa'
import 'normalize.css'

import {
  Bar as NavigationBar,
  BarItem as NavigationBarItem
} from './components/navigation'
import { Avatar } from './components/images'
import { Link } from './components/typography'

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
        <NavigationBarItem>
          <Link href='/'>
            <FontAwesome.FaPaperPlane size={14} />
            &nbsp; Seia-Soto
          </Link>
        </NavigationBarItem>
      </NavigationBar>
    </div>
  )
}
