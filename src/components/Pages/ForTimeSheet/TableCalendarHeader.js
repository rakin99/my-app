import { Link } from "react-router-dom"
import React from "react"

class TableCalendarHeader extends React.Component{

    render(){
    const pdate=this.props.state.previousMonth;
    const ndate=this.props.state.nextMonth;
    const pm=this.props.state.previousMonth.getMonth()+1;
    const nm=this.props.state.nextMonth.getMonth()+1;
    const pmonth ="/time-sheet/" + pdate.getFullYear()+"-"+pm;
    const nmonth ="/time-sheet/" + ndate.getFullYear()+"-"+nm;
    //console.log('trenutni mesec: '+this.props.state.date)
    return(
        <div>
            <h2><i className="ico timesheet"></i>TimeSheet</h2>
            <div className="grey-box-wrap">
                <div className="top">
                    <Link to={pmonth} className="prev" ><i className="zmdi zmdi-chevron-left"></i>previous month</Link>      
                    <span className="center">{this.props.state.monthNames[this.props.state.date.getMonth()]}, {this.props.state.date.getFullYear()}</span>
                    <Link to={nmonth} className="next">next month<i className="zmdi zmdi-chevron-right"></i></Link>
                </div>
                <div className="bottom">
                    
                </div>
            </div>
        </div>
    )
    }
}

export default TableCalendarHeader