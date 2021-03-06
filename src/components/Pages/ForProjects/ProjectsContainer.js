import React from "react"
import Projects from "./Projects"

class ProjectsContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            newProject:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.delete=this.delete.bind(this);
        this.save=this.save.bind(this);
    }

    componentDidMount(){
        this.setState({
            projects:[
				{
					id:1,
					name:"BuzzMonitor",
					description:"Nina Media"
				},
				{
					id:2,
					name:"PWN",
					description:"Clockwork"
                },
                {
                    id:3,
                    name:"B&G",
                    description:"Cubeworks"
                }
			]
        })
    }

    handleClick(){
		this.setState(prevState => {
			const updateState=!prevState.newProject
			return{
				newProject:updateState
			}
		})
    }

    handleChange(event){
        const {nameId,value} = event.target
        const id = nameId.split("-")[1];
        const name = nameId.split("-")[0];
        console.log(id+" "+name)
        this.setState(prevState => {
            const updateClients=prevState.clients.map(c => {
                if(c.id == id){
                    c[name]=value
                }
                return c;
            })
            return {
                clients: updateClients
            }
        })
    }

    delete(event){
        const id = event.target.id;
        this.setState(prevState => {
            const updateClients=prevState.clients.filter(c => c.id != id)
            return {
                clients: updateClients
            }
        })
    }

    save(){
        console.log("Save!")
    }
    
    render(){
        return(
            <Projects 
                handleClick={this.handleClick}
                newProject={this.state.newProject} 
                projects={this.state.projects}
            />
        )
    }
}

export default ProjectsContainer 