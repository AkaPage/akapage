# AkaPage

A set of styled components for personal portfolio.

## Table of Contents

- [Components](#Components)
- [Stylesheets](#Stylesheets)
- [Environment](#Environment)
- [License](#License)

---

# Components

Built-in components in AkaPage.

- All components are designed to accept the customized styles via `styles` property. The components are figured with two-layers or one-layer, which are `styled` component(from [styletron-react](https://github.com/styletron/styletron)) and optional wrapper and in wrapper layer, `styles` property will propagate with `aka-styles` property.

```javascript
// NOTE: App.js
<Aka.Cover
  styles={{
    background: 'black'
  }}
>
```

```javascript
// NOTE: Component.js (wrapper)
import React from 'react'
import PropTypes from 'prop-types'

import StyledElement from './_{NAME_OF_COMPONENT}'

const Component = props => {
  const styles = Object.assign({}, props.styles || {})

  return (
    <StyledElement aka-styles={styles}>
      {props.children}
    </StyledElement>
  )
}

Component.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object
}

export default Component
```

## Aka (aka)

A set of special or uncommon components.

### Cover (aka.cover)

A `div` element to full-fill the site.

```javascript
styles.height = styles.height || '100vh'
styles.maxWidth = styles.maxWidth || '100vw'
```

## Flex (flex)

A set of flex around components.

### Container (flex.container)

A `div` element to wrap flex items.

```javascript
styles.display = styles.display || 'flex'
styles.flexDirection = styles.flexDirection || 'row'
styles.flexWrap = styles.flexWrap || 'wrap'
styles.justifyContent = styles.justifyContent || 'flex-start'
styles.alignItems = styles.alignItems || 'flex-start'
styles.alignContent = styles.alignContent || 'flex-start'
```

### Item (flex.item)

A `div` element represents a flex item.

```javascript
styles.order = styles.order || 0
/*
styles.flexGrow = styles.flexGrow || 1
styles.flexShrink = styles.flexShrink || 0
styles.flexBasis = styles.flexBasis || 'auto'
*/
styles.flex = styles.flex || `${styles.flexGrow || 0} ${styles.flexShrink || 0} ${styles.flexBasis || 'auto'}`
styles.alignSelf = styles.alignSelf || 'flex-start'
```

## Images (images, experimental feature)

### Avatar (images.avatar)

A circular `img` element for user avatar design.

```javascript
styles.width = styles.width || '30px'
styles.height = styles.height || styles.width || '30px'
styles.display = styles.display || 'inline-block'
styles.borderRadius = styles.borderRadius || '50%'
styles.marginLeft = styles.marginLeft || '-25%'
```

## Navigation (navigation)

### Bar (navigation.bar extends flex.container)

A `div` element represents navigation bar based on flex container.

```javascript
// NOTE: Styled one more time from flex container.
styles.alignItems = styles.alignItems || 'center'
styles.alignContent = styles.alignContent || 'center'
styles.justifyContent = styles.justifyContent || 'flex-start'

styles.background = styles.background || 'darkgrey'
styles.height = styles.height || '55px'
styles.width = styles.width || '100%'
styles.boxShadow = styles.boxShadow || `0px 2.5px 2px ${styles.background}`
```

### BarItem (navigation.barItem extends flex.item)

A `div` element represents a navigation bar item based on a flex item.

```javascript
styles.fontSize = styles.fontSize || '15.5px'
styles.color = styles.color || 'white'
styles.fontWeight = styles.fontWeight || 'lighter'
styles.paddingLeft = styles.paddingLeft || '16px'
styles.paddingRight = styles.paddingRight || styles.paddingLeft || '16px'
styles.textAlign = styles.textAlign || 'center'
```

## Section (section)

### Filled (section.filled)

A `div` element creates a section to add some content.

- Requires `isActive` boolean parameter. (Controlled via `sectionFunctions.useActiveToggle`)

```javascript
styles.display = styles.display || 'hidden'
styles.width = styles.width || '100%'
styles.minHeight = styles.minHeight || 'calc(100vh - 55px)' /* remove navigation bar's height */
styles.background = styles.background || 'black'
styles.display = styles.display || 'none'
```

```javascript
styles.display = props.isActive ? 'block' : 'none'
```

## Sidebar (sidebar, experimental feature)

### Menu (sidebar.menu)

A `div` element creates sidebar at right side.

- Requires `isActive` boolean parameter. (Controlled via `sectionFunctions.useActiveToggle`)

```javascript
styles.position = styles.position || 'fixed'
styles.top = styles.top || 0
styles.right = styles.right || 0
styles.width = styles.width || '275px'
styles.height = styles.height || '100vh'
styles.background = styles.background || 'black'
styles.display = styles.display || 'none'
styles.zIndex = styles.zIndex || 11
styles.overflow = styles.overflow || 'hidden'
```

### Pusher (sidebar.pusher)

A `div` element creates a cover for sidebar.

```javascript
styles.position = styles.position || 'relative'
styles.minHeight = styles.minHeight || styles.height || '100vh'
styles.width = styles.width || '100%'
```

## Typography (typography)

### Link (typography.link)

A styled `a` element.

```javascript
styles.color = styles.color || 'inherit'
styles.textDecoration = styles.textDecoration || 'inherit'
styles.fontWeight = styles.fontWeight || 'inherit'
```

# Stylesheets

AkaPage has some CSS files (not the CSS-in-JS) to do something on the site just like Google web font implementation. Insert the stylesheets after line 10 of [App.js](/src/App.js).

- [fonts](/src/statics/stylesheets/fonts)
  - [Alata (default)](/src/statics/stylesheets/fonts/Alata.css)
  - [GothicA1](/src/statics/stylesheets/fonts/GothicA1.css)
  - [NanumGothic](/src/statics/stylesheets/fonts/NanumGothic.css)
  - [NotoSansKR](/src/statics/stylesheets/fonts/NotoSansKR.css)
  - [Roboto](/src/statics/stylesheets/fonts/Roboto.css)

```javascript
// NOTE: App.js
import React from 'react'
import { useStyletron } from 'styletron-react'

import * as FontAwesome from 'react-icons/fa'
import * as Aka from './components/aka'
import * as Navigation from './components/navigation'
import { Link } from './components/typography'

import 'normalize.css'
import './statics/stylesheets/fonts/Alata.css'

...
```

# Environment

- To see dependencies, reference [package.json](/package.json).
- To see eslintrc file, reference [.eslintrc.js](/.eslintrc.js).

## Development environment

This is the environment specs from the developer(Seia-Soto)'s system.

| Software | Version | Misc |
| :--- | :--- | :--- |
| [Node.JS](https://nodejs.org/) | [v8.16.2](https://nodejs.org/dist/latest-v8.x/node-v8.16.2-x64.msi) | [Download installer for i386](https://nodejs.org/dist/latest-v8.x/node-v8.16.2-x64.msi) |
| [Yarn](https://yarnpkg.com/lang/en/) | [v1.19.1](https://github.com/yarnpkg/yarn/releases/tag/v1.19.1) | [Download installer for latest version](https://yarnpkg.com/en/docs/install) |
| Visual Studio BuildTools | [2017](https://visualstudio.microsoft.com/ko/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15) | optional, not required |

# License

```text
MIT License

Copyright (c) 2019 Seia Soto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
