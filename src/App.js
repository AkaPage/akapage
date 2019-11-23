import React from 'react'
import { useStyletron } from 'styletron-react'

import * as FontAwesome from 'react-icons/fa'
import * as Navigation from './components/navigation'
import { Link } from './components/typography'

import 'normalize.css'
import './statics/stylesheets/fonts/Alata.css'

import backgroundImage from './images/background-210660.jpg'

export default () => {
  const [css] = useStyletron()

  return (
    <div>
      <Navigation.Bar
        styles={{
          background: 'black',
          boxShadow: 'none'
        }}
      >
        <Navigation.BarItem>
          <Link href='/'>
            <FontAwesome.FaPaperPlane size={12.5} />
            &nbsp; Aka
          </Link>
        </Navigation.BarItem>
        <Navigation.BarItem>
          <Link>What's AkaPage?</Link>
        </Navigation.BarItem>
        <Navigation.BarItem
          styles={{
            // NOTE: Right-aligned item
            marginLeft: 'auto',
            order: 1
          }}
        >
          <Link>
            <FontAwesome.FaBars size={16} />
          </Link>
        </Navigation.BarItem>
      </Navigation.Bar>
      <div
        className={css({
          height: '400px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `linear-gradient(to right, #000 35%, transparent), url(${backgroundImage})`
        })}
      >
        <p
          className={css({
            fontSize: '45px',
            margin: 0,
            padding: '1em',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            color: 'white'
          })}
        >
          This place is for main hero header.
        </p>
      </div>
    </div>
  )
}
