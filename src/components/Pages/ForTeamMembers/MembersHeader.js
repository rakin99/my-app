import React from "react"


function NewMember(props){
    return(
        <div>
            <h2><i className="ico team-member"></i>Team members</h2>
            <div className="grey-box-wrap reports ico-member">
                <a  href="#new-member" 
                    className="link new-member-popup test"
                    onClick={props.handleClick}
                >
                    <span>Create new member</span>
                </a>
            </div>
        </div>	
    )
}

export default NewMember