import React from "react"
import { Link } from "react-router-dom";
import AddHoursContent from "./AddHoursContent"
import AddHoursHeader from "./AddHoursHeader"

class AddHours extends React.Component{
    
    constructor(props){
        super(props);
        const  month = props.match.params.month;
        const  year = props.match.params.year;
        const  day = props.match.params.day;
        const d=new Date(year,month-1,day);
        this.state={
            date:d
        }
        
    }

    componentDidUpdate(props){
        if(window.location.pathname!==props.match.url){
            //console.log("Usao u if")
            const { match: { params } } = this.props;
			const  month = params.month;
            const  year = params.year;
            const  day = params.day;
            const d=new Date(year,month-1,day);
            this.setState({
                date:d
            })
        }
    }

    render(){
        return(
        <div className="wrapper">
            <section className="content">
                    <h2><i className="ico timesheet"></i>TimeSheet</h2>
                    <AddHoursHeader state={this.state} props={this.props}/>
                    <AddHoursContent />
                    <div className="total">
                        <Link to="/time-sheet"><i></i>back to monthly view</Link>
                        <span>Total hours: <em>7.5</em></span>
                    </div>
                </section>	
            </div>
        )	
    }
}

export default AddHours