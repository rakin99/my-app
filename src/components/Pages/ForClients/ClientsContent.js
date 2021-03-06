import React from "react"
import Client from "./Client"

class ClientsContent extends React.Component{

    render(){
        const clients=this.props.clients === undefined ? null:this.props.clients.map(c => <Client 
                                                                                            handleDelete={this.props.handleDelete} 
                                                                                            handleUpdate={this.props.handleUpdate}
                                                                                            key={c.id} 
                                                                                            client={c}
                                                                                            countries={this.props.countries}
                                                                                        />)
        return(
            <div className="accordion-wrap clients">
                {clients}
            </div>
        )
    }
}

export default ClientsContent