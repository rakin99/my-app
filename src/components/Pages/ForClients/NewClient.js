import React, {useState} from "react"
import { Link } from "react-router-dom"

class NewClient extends React.Component{

    constructor(){
        super()
        this.state={
            client:{
                id:0,
                name:"",
                address:"",
                city:"",
                postalCode:"",
                countryId:""
            }
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.state.client[name]=value
    }

    render(){
        const optCountry=this.props.countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
        return(
        <div style={{backgroundColor:'white', padding:'10px 10px 10px 10px'}}>
            <a className="close" href="#" onClick={this.props.handleClick}/>
            <div onChange={this.handleChange}>
                <div id="new-member" className="new-member-inner">
                    <h2>Create new client</h2>
                    <ul className="form">
                        <li>
                            <label>Client name:</label>
                            <input type="text" name="name" defaultValue={this.state.client.name} className="in-text" />
                        </li>								
                        <li>
                            <label>Address:</label>
                            <input type="text" name="address" defaultValue={this.state.client.address} className="in-text" />
                        </li>
                        <li>
                            <label>City:</label>
                            <input type="text" name="city" defaultValue={this.state.client.city} className="in-text" />
                        </li>
                        <li>
                            <label>Zip/Postal code:</label>
                            <input type="text" name="postalCode" defaultValue={this.state.client.postalCode} className="in-text" />
                        </li>
                        <li>
                            <label>Country:</label>
                            <select name="countryId">
                                <option value={null}>Select country</option>
                                {optCountry}
                            </select>
                        </li>
                    </ul>
                    <div className="buttons">
                        <div className="inner">
                            <Link to={"#"} className="btn green" onClick={() => {
                                                                        this.props.handleSubmit(this.state.client)
                                                                        this.props.handleClick()
                                                                    }}>Save</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default NewClient