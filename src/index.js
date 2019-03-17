import Home from './Home'

function createElementRoot () {
  let div = document.createElement('div')
  div.setAttribute('id', 'root')
  return div
}

const elementRoot = createElementRoot()

document.querySelector('body').appendChild(elementRoot)

Home()
