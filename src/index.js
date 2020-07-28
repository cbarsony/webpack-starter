import _ from 'lodash'

import printMe from './print'
import './style.css'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'Click Me!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
