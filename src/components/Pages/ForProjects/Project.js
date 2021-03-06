import React from "react"
import ProjectContent from "./ProjectContent"
import ProjectHeader from "./ProjectHeader"
import $ from "jquery"

class Project extends React.Component{
    
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
        return(
            <div className="item">
                <ProjectHeader toggle={this.toggle} project={this.props.project}/>
                <ProjectContent setElement={this.setElement} project={this.props.project}/>
            </div>
        )
    }
}

export default Project