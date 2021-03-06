import React from "react"
import Member from "./Member"


class MembersContent extends React.Component{
    
    render(){
        const members = this.props.state.members.map(m => <Member key={m.id} state={m} />)
        return(
            <div className="accordion-wrap">
                {members}
            </div>
        )
    }
}

export default MembersContent