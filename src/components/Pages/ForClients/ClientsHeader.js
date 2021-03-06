import React from "react"

function CleintsHeader(props){
    return(
        <div>
            <h2><i className="ico clients"></i>Clients</h2>
            <div className="grey-box-wrap reports">
                <a  href="#new-member" 
                    className="link new-member-popup" 
                    onClick={props.handleClick}
                >Create new client</a>
                <div className="search-page">
                    <input type="search" name="search-clients" className="in-search" />
                </div>
            </div>
        </div>
    )
}

export default CleintsHeader