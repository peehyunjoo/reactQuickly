class Content extends React.Component{
  render(){
    return(
      <div className="content">
        {this.props.children}
        자식 엘리먼트 수 : {React.Children.count(this.props.children)}
      </div>
    )
  }
}
ReactDOM.render(
  <div>
    <Content>
      <h1>React</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <a href="http://react.rocks">http://react.rocks</a>
    </Content>
  </div>,
  document.getElementById('content')
)
