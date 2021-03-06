import React from "react"
import FormForClient from './FormForClient';
import ClientHeader from './ClientHeader';
import $ from "jquery"

class Client extends React.Component {
  constructor(){
    super()
    this.state = {
      isOpen:"",
      element:""
    }
    this.toggle=this.toggle.bind(this)
    this.setElement=this.setElement.bind(this)
  }

  componentDidMount(){
    this.setState({isOpen:false})
  }

  componentDidUpdate(){
    this.$el = $(this.state.element)
    if (this.state.isOpen) {
      this.$el.slideDown('normal');
    } else {
      this.$el.slideUp('normal');
    }
  }

  toggle(){
    this.setState(prevState => {
      const updateState = !prevState.isOpen;
      return{
        isOpen:updateState
      }
    })
  }

  setElement(el){
    this.setState({
      element:el
    })
  }

  render(){
   
    return (
      <div className="item">
        <ClientHeader toggle={this.toggle} client={this.props.client}/>
        <FormForClient 
          setElement={this.setElement} 
          client={this.props.client}
          handleDelete={this.props.handleDelete} 
          handleUpdate={this.props.handleUpdate}
          countries={this.props.countries}
        />
      </div>
    );
  }
}

export default Client;