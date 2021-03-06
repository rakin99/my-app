import Client from "./Client";

class ClientsService{
  constructor(){
    this.url='http://localhost:8080/clients'
  }

  getAllClients(){
    return fetch(this.url).then(res => res.json())
  }

  getClientById(id){
    return fetch(this.url+"/"+id).then(res => res.json())
  }

  postClient(client){
    //console.log(JSON.stringify(client))
    var conf={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
    };
    return fetch(this.url,conf).then(res => res)
  }

  putClient(client){
    //console.log(JSON.stringify(client))
    var conf={
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
    };

    return fetch(this.url+"/"+client.id,conf).then(res => res)
  }

  deleteClient(id){
    //console.log(JSON.stringify(id))
    var conf={
      method: 'DELETE'
    };
    return fetch(this.url+"/"+id,conf).then(res => res)
  }
}

export default ClientsService