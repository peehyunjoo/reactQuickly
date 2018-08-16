class Link extends React.Component {
  render() {
    const Link = (props)=> {
      return (
        <a href={props.href}
          target ="_black"
          className="btn btn-primary">
            {props.text}
        </a>
      )
      }
    }
  }

ReactDOM.render(
  <Link text='buy React Quickly'
    href='https://www.manning.com/books/react-Quickly'/>,
    document.getElementById('content')
)
