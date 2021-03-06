import React from "react"
import Project from "./Project"
import ProjectContent from "./ProjectContent"
import ProjectHeader from "./ProjectHeader"


class ProjectsContent extends React.Component{
    
    render(){
        const projects=this.props.projects == undefined ? null:this.props.projects.map(p => <Project key={p.id} project={p} />)
        return(
            <div className="accordion-wrap projects">
                {projects}
            </div>
        )
    }
}

export default ProjectsContent