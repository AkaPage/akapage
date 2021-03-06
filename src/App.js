import React from 'react'
import { useStyletron } from 'styletron-react'

import * as FontAwesome from 'react-icons/fa'
import * as Aka from './components/aka'
import * as Sidebar from './components/sidebar'
import * as Navigation from './components/navigation'
import { Link } from './components/typography'

import * as SectionFunctions from './functions/section'

import 'normalize.css'
import './statics/stylesheets/fonts/Alata.css'

import backgroundImage from './images/background-2395249.jpeg'

export default () => {
  const [css] = useStyletron()
  const [isActive, onClickToggleActiveStatus] = SectionFunctions.useActiveToggle(false)

  return (
    <Aka.Cover>
      <Sidebar.Menu isActive={isActive}>
        <Navigation.Bar
          styles={{
            flexDirection: 'row-reverse',
            background: 'black',
            boxShadow: 'none'
          }}
        >
          <Navigation.BarItem>
            <FontAwesome.FaTimes size={16} onClick={onClickToggleActiveStatus} />
          </Navigation.BarItem>
        </Navigation.Bar>
      </Sidebar.Menu>
      <Sidebar.Pusher>
        <Navigation.Bar
          styles={{
            background: 'black',
            boxShadow: 'none',
            position: 'fixed'
          }}
        >
          <Navigation.BarItem>
            <Link href='/' underlined='white' /* Active navigation item */>
              <FontAwesome.FaPaperPlane size={12.5} />
              &nbsp; Seia-Soto/Aka
            </Link>
          </Navigation.BarItem>
          <Navigation.BarItem>
            <Link href='https://github.com/AkaPage/akapage'>What's AkaPage?</Link>
          </Navigation.BarItem>
          <Navigation.BarItem
            styles={{
              // NOTE: Right-aligned item
              marginLeft: 'auto',
              order: 1
            }}
          >
            <Link>
              <FontAwesome.FaBars size={16} onClick={onClickToggleActiveStatus} />
            </Link>
          </Navigation.BarItem>
        </Navigation.Bar>
        <div
          className={css({
            height: '400px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(to right, #000 22.5%, transparent), url(${backgroundImage})`
          })}
        >
          <p
            className={css({
              fontSize: '35px',
              margin: 0,
              padding: '1em',
              paddingTop: '2.5em',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              color: 'white'
            })}
          >
            Assigning the value of beauty every things.
          </p>
        </div>
      </Sidebar.Pusher>
    </Aka.Cover>
  )
}
