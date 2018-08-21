class Content extends React.Component{
  constructor(props){
    super(props)
    this.state = {textbook: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    console.log(event.target.value)
    this.setState = ({textbook : event.target.value})
  }

  render(){
    return <div>
      <input
        type = "text"
        onChange = {this.handleChange} />
      <br />
      <span>{this.state.textbook}</span>  
    </div>
  }
}
ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
