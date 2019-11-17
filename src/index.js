import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StyletronProvider, DebugEngine as StyletronDebugger } from 'styletron-react'
import { Client as StyletronClient } from 'styletron-engine-atomic'

import * as serviceWorker from './serviceWorker'

import App from './App'

const debug = process.env.NODE_ENV === 'production' ? null : new StyletronDebugger()
const engine = new StyletronClient()

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <App />
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
