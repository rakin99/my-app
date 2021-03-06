import React from "react"

function ClientsHeader(props){
    return(
        <div onClick={props.toggle} id={"id"+1} className={"heading"}>
            <span>{props.client.name}</span>
            <i>+</i>
        </div>
    )
}

export default ClientsHeader