import React from "react"
import { Link } from "react-router-dom"

class FormForClient extends React.Component{

    constructor(props){
        super(props);
        this.state={
            client:props.client
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.state.client[name]=value
    }

    componentDidMount(){
        this.props.setElement(this.el)
    }

    render(){
        const optCountry=this.props.countries.map(c =>c.id==this.state.client.countryId ? <option selected="selected" key={c.id} value={c.id}>{c.name}</option>:
                                                                                    <option key={c.id} value={c.id}>{c.name}</option>
                                                    )
        return(
            <div className="details" ref={el => this.el = el} onChange={this.handleChange}>
                    <ul  className="form">
                        <li>
                            <label>Client name:</label>
                            <input 
                                type="text" 
                                name={"name"} 
                                defaultValue={this.state.client.name} 
                                className="in-text" 
                            />
                        </li>
                        <li>
                            <label>Zip/Postal code:</label>
                            <input 
                                type="text" 
                                name={"postalCode"} 
                                defaultValue={this.state.client.postalCode} 
                                className="in-text" 
                            />
                        </li>
                    </ul>
                    <ul className="form">
                        <li>
                            <label>Address:</label>
                            <input 
                                type="text" 
                                name={"address"} 
                                defaultValue={this.state.client.address}
                                className="in-text" 
                            />
                        </li>
                        <li>
                            <label>Country:</label>
                            <select name="countryId">
                                <option value={null}>Select country</option>
                                {optCountry}
                            </select>
                        </li>
                    </ul>
                    <ul className="form last">
                        <li>
                            <label>City:</label>
                            <input 
                                type="text" 
                                name={"city"} 
                                defaultValue={this.state.client.city} 
                                className="in-text" 
                            />
                        </li>
                    </ul>
                    <div className="buttons">
                        <div className="inner">
                            <Link to={"#"} className="btn green" style={{marginRight:'4px'}} onClick={() => {
                                                                                            this.props.handleUpdate(this.state.client)
                                                                                                            }}>Save</Link>
                            <Link to={"#"} className="btn red" id={this.props.client.id} onClick={this.props.handleDelete}>Delete</Link>
                        </div>
                    </div>
                </div>
        )
    }
}

export default FormForClient