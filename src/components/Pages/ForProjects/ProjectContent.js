import React from "react"

class ProjectContent extends React.Component{

    componentDidMount(){
        this.props.setElement(this.el)
    }

    render(){
        return(
            <div className="details" ref={el => this.el = el}>
                <ul className="form">
                    <li>
                        <label>Project name:</label>
                        <input type="text" defaultValue={this.props.project.name} className="in-text" />
                    </li>
                    <li>
                        <label>Lead:</label>
                        <select>
                            <option>Select lead</option>
                            <option>Sasa Popovic</option>
                            <option>Sladjana Miljanovic</option>
                        </select>
                    </li>
                </ul>
                <ul className="form">
                    <li>
                        <label>Description:</label>
                        <input type="text" defaultValue={this.props.project.description} className="in-text" />
                    </li>
                    
                </ul>
                <ul className="form last">
                    <li>
                        <label>Customer:</label>
                        <select>
                            <option>Select customer</option>
                            <option>Adam Software NV</option>
                            <option>Clockwork</option>
                            <option>Emperor Design</option>
                        </select>
                    </li>
                    <li className="inline">
                    <label>Status:</label>
                    <span className="radio">
                        <label htmlFor="inactive">Active:</label>
                        <input type="radio" value="1" name="status" id="inactive" />
                    </span>
                    <span className="radio">
                        <label htmlFor="active">Inactive:</label>
                        <input type="radio" value="2" name="status" id="active" />
                    </span>
                    <span className="radio">
                        <label htmlFor="active">Archive:</label>
                        <input type="radio" value="3" name="status" id="active" />
                    </span>
                </li>
                </ul>
                <div className="buttons">
                    <div className="inner">
                        <a href="#" className="btn green" style={{marginRight:'4px'}}>Save</a>
                        <a href="#" className="btn red">Delete</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectContent