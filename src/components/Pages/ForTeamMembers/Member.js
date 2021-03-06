import React from "react"
import MemberHeader from "./MemberHeader"
import MemberContent from "./MemberContent"
import $ from "jquery"

class Member extends React.Component{
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
          console.log(this.$el)
          this.$el.slideDown('normal');
        } else {
          this.$el.slideUp('normal');
        }
      }
    
      toggle(){
        console.log("Toggle")
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
        return(
            <div className="item">
                <MemberHeader toggle={this.toggle} state={this.props.state}/>
                <MemberContent setElement={this.setElement} state={this.props.state}/>
            </div>
        )
    }
}
export default Member