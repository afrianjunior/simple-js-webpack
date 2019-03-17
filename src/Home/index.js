function renderTitle (title = '') {
  let header = document.createElement('h1')
  header.innerHTML = title
  return header
}

export default () => {
  const root = document.getElementById('root')

  const HomeTitle = renderTitle('Welcome to my single js page')

  root.appendChild(HomeTitle)
}
