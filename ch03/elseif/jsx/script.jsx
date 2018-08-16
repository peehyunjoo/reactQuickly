class HelloWorld extends React.Component {
  render() {
    let sessionFlag = false
    return <div>
      <a href={(sessionFlag)?'/logout':'/login'}>
        {(sessionFlag)?'Logout':'Login'}
      </a>
    </div>
  }
}
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('content')
)
