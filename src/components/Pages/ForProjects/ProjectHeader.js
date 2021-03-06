import React from "react"

function ProjectHeader(props){
    return(
        <div onClick={props.toggle} id={"id"+1} className={"heading"}>
            <span>{props.project.name}</span> <span><em>({props.project.description})</em></span>
            <i>+</i>
        </div>
    )
}

export default ProjectHeader