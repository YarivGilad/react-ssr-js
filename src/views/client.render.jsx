import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(<App/>, document.getElementById('app'))
})
