class Note extends React.Component{
  confirmLeave(e){
    let confirmationMessage = '닫으시겠습니까?'
    e.returnValue = confirmationMessage
    return confirmationMessage
  }

  componentDidMount(){
    console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 등록')
    window.addEventListner('beforeunload', this.confirmLeave)
  }

  componentWillUnmount(){
    console.log('beforunload 이벤트에 confirmLeave 이벤트 리스너 제거')
    window.removeEventListner('beforunload', this.confirmLeave)
  }
  render(){
    console.log('Render')
    return <div>
      <p>부모 컴포넌트는 {this.props.secondsLeft}초 뒤에 제거된다.</p>
      <input type="text"/>
    </div>
  }
}
