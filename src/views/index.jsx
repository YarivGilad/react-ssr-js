import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

window.addEventListener('DOMContentLoaded', () => {
    //@ts-ignore
  let el = window.document.getElementById('app')
  ReactDOM.hydrate(<App/>, el)
})