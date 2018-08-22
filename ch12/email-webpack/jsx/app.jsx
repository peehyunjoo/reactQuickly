require('../css/main.css')

const React = require('react')
const ReactDom = require('react-dom')
const Content = require('./content.jsx')

ReactDom.render(
  <Content />,
  document.getElementById('content')
)
