import React from "react"
import ClientsContent from "./ClientsContent"
import LetterFilter from "../LetterFilter"
import Pagination from "../Pagination"
import ClientsHeader from "./ClientsHeader"
import NewClient from "./NewClient"
import Modal from 'react-awesome-modal';

class Clients extends React.Component{

	constructor(){
		super();
		this.state={
			newClient:false
		}
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(prevState => {
			const updateState=!prevState.newClient
			return{
                newClient:updateState
			}
		})
    }

    render(){
		const newClient = this.state.newClient && <NewClient 
														client={this.props.client} 
														handleSubmit={this.props.handleSubmit} 
														add={this.props.add} 
														handleClick={this.handleClick}
														newClient={this.props.newClient}
														countries={this.props.countries}
													/>
        return(
            <div className="wrapper">
			    <section className="content">
					<ClientsHeader handleClick={this.handleClick} />
					<Modal
                    visible={this.state.newClient}
                    width="470px"
                    height="350px"
                    effect="fadeInUp"
                    onClickAway={this.handleClick}
					>
						{newClient}
					</Modal>
					<LetterFilter />
					<ClientsContent 
						handleDelete={this.props.handleDelete} 
                		handleUpdate={this.props.handleUpdate}
						clients={this.props.clients}
						countries={this.props.countries}
					/>
					<Pagination />
				</section>			
		    </div>
        )
    }
}

export default Clients