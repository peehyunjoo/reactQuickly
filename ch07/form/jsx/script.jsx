class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
  }
  handleInput(event){
    console.log('onInput event: ', event.target.value, event.target.checked)
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  handleSubmit(event){
    fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
      .then((response)=>{return response.json()})
      .then((data)=>{console.log('Submitted: ', data)})
  }

  render() {
    return <div className="container">
      <form  onSubmit={this.handleSubmit}>
        <h2>input: first name [text]</h2>
        <input type="text" name="first-name" onChange={this.handleFirstNameChange}/>
        <h2>input: button</h2>
        <input type="button" defaultValue="Send" onClick={this.handleSubmit}/>
        <input type="text" name="title" value="Mr." />
      </form>
    </div>
  }
}
ReactDOM.render(
  <Content data-url="http://naver.com" />,
  document.getElementById('content')
)
