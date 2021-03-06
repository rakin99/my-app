import React from "react"
import NewMember from "./NewMember"
import MembersHeader from "./MembersHeader"
import MembersContent from "./MembersContent"
import Pagination from "../Pagination"
import Modal from 'react-awesome-modal';

class TeamMembers extends React.Component{

	constructor(){
		super()
		this.state = {
			newMember:false,
			members : [
				{
					id:1,
					name:"Sladjana Miljanovic",
					hours:52.5,
					username:"sladja",
					email:"sladja@gmail.com"
				},
				{
					id:2,
					name:"Sladjana Miljanovic",
					hours:52.5,
					username:"sladja",
					email:"sladja@gmail.com"
				}
			]
		}
		this.handleClick=this.handleClick.bind(this)
	}

	handleClick(){
		console.log("State: "+this.state.newMember)
		this.setState(prevState => {
			const updateState=!prevState.newMember
			return{
				newMember:updateState
			}
		})
	}

    render(){
        return(
            <div className="wrapper">
			    <section className="content">
				<MembersHeader handleClick={this.handleClick}/>
				<Modal
                    visible={this.state.newMember}
                    width="470px"
                    height="423.6px"
                    effect="fadeInUp"
                    onClickAway={this.handleClick}
					>
						<NewMember handleClick={this.handleClick}/>
				</Modal>
				<MembersContent state={this.state}/>
				<Pagination />
			</section>			
		    </div>
        )
    }
}

export default TeamMembers