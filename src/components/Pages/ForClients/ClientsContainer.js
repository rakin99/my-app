import React from "react"
import Clients from "./Clients"
import ClientsService from "./ClientsService"
import CountriesService from "./CountriesService"

var clientsService = new ClientsService();
var countriesService = new CountriesService();
class ClientsContainer extends React.Component{

    constructor(){
        super();
        this.state={
            clients:[],
            countries:[]
        }
        this.handleDelete=this.handleDelete.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){ 
        clientsService.getAllClients().then(response => {
                this.setState({
                    clients: response
            })
        })
 
        countriesService.getAllCountries().then(response => {
                this.setState({
                    countries: response
            })
        })
    }

    async handleUpdate(client){
        await clientsService.putClient(client)
        await clientsService.getAllClients().then(response => {this.setState({clients: response})});
    }

    async handleDelete(event){
        const id = event.target.id
        await clientsService.deleteClient(id)
        await clientsService.getAllClients().then(response => {this.setState({clients: response})});
    }

    async handleSubmit(client){
        await clientsService.postClient(client)
        await clientsService.getAllClients().then(response => {this.setState({clients: response})});
    }
    
    render(){
        return(
            <Clients 
                clients={this.state.clients}
                handleDelete={this.handleDelete} 
                handleUpdate={this.handleUpdate}
                add={this.add}
                handleSubmit={this.handleSubmit}
                client={this.state.client}
                countries={this.state.countries}
            />
        )
    }
}

export default ClientsContainer 