import React from "react"

function MemberHeader(props){
    return(
        <div onClick={props.toggle} id={"id"+1} className={"heading"}>
            <span>{props.state.name}</span>
            <i>+</i>
        </div>
    )
}

export default MemberHeader