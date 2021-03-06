import React from "react"


function ProjectsHeader(props){
    return(
        <div>
            <h2><i className="ico projects"></i>Projects</h2>
            <div className="grey-box-wrap reports">
                <a  href="#new-member" 
                    className="link new-member-popup"
                    onClick={props.handleClick}
                >Create new project</a>
                <div className="search-page">
                    <input type="search" name="search-clients" className="in-search" />
                </div>
            </div>
        </div>		
    )
}

export default ProjectsHeader