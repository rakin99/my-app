import React from "react"

class MemberContent extends React.Component{

    componentDidMount(){
        this.props.setElement(this.el)
    }

    render(){
        return(
            <div className="details" ref={el => this.el = el}>
                        <ul className="form">
                            <li>
                                <label>Name:</label>
                                <input type="text" value={this.props.state.name} className="in-text" />
                            </li>								
                            <li>
                                <label>Hours per week:</label>
                                <input type="text" value={this.props.state.hours} className="in-text" />
                            </li>
                        </ul>
                        <ul className="form">
                            <li>
                                <label>Username:</label>
                                <input type="text" value={this.props.state.username} className="in-text" />
                            </li>
                            <li>
                                <label>Email:</label>
                                <input type="text" value={this.props.state.email} className="in-text" />
                            </li>								
                        </ul>
                        <ul className="form last">
                            <li>
                                <label>Status:</label>
                                <span className="radio">
                                    <label htmlFor="inactive">Inactive:</label>
                                    <input type="radio" value="1" name="status" id="inactive" />
                                </span>
                                <span className="radio">
                                    <label htmlFor="active">Active:</label>
                                    <input type="radio" value="2" name="status" id="active" />
                                </span>
                            </li>
                            <li>
                                <label>Role:</label>
                                <span className="radio">
                                    <label htmlFor="admin">Admin:</label>
                                    <input type="radio" value="1" name="status" id="admin" />
                                </span>
                                <span className="radio">
                                    <label htmlFor="worker">Worker:</label>
                                    <input type="radio" value="2" name="status" id="worker" />
                                </span>
                            </li>
                        </ul>
                        <div className="buttons">
                            <div className="inner">
                                <a href="#" className="btn green" style={{marginRight:'4px'}}>Save</a>
                                <a href="#" className="btn red" style={{marginRight:'4px'}}>Delete</a>
                                <a href="#" className="btn orange">Reset Password</a>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default MemberContent