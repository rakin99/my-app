import React from "react"
import { Link } from "react-router-dom";
import Day from "./Day"

class AddHoursHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date:props.state.date,
            monthNames:["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"],
            prevWeek:"",
            nextWeek:"",
            week:"",
            listWeek:[]
        }
        this.myFunction=this.myFunction.bind(this);
        this.calcDate=this.calcDate.bind(this);
        this.getWeekNumber=this.getWeekNumber.bind(this);
    }

    componentDidMount(){
        this.myFunction()
    }

    componentDidUpdate(props){
        
        if(this.props.state.date.getDate() !== this.state.date.getDate()){
            this.myFunction()
        }
    }

    myFunction(){
        const date = this.props.state.date;
		const day=date.getDate();
        const month=date.getMonth();
        const year=date.getFullYear();
        const d = new Date(year,month,day);
        this.calcDate(d);
    }

    calcDate(d){
        const cd = new Date(d);
        const p = new Date(d);
        const n = new Date(d);
        const list = [];
        const currentDay = p.getDay() === 0 ? 6:p.getDay()-1;
        //console.log(currentDay)
        for(var i=currentDay; i>0; i--){
           // console.log("prethodni dani")
            const min = new Date(d);
            var day = new Date(min.setDate(min.getDate()-i));
            //console.log(day)
            list.push(day);
        }
        list.push(cd);
        for(var i=1; i<(7-currentDay); i++){
            //console.log("naredni dani")
            const max = new Date(d);
            var day = new Date(max.setDate(max.getDate()+i));
            //console.log(day)
            list.push(day);
        }
        //console.log(list)
        const pw = new Date(p.setDate(p.getDate()-7));
        const nw = new Date(n.setDate(n.getDate()+7));
        const pWeek = "/days/" + pw.getFullYear()+"-"+parseInt(pw.getMonth()+1)+"-"+pw.getDate();
        const nWeek = "/days/" + nw.getFullYear()+"-"+parseInt(nw.getMonth()+1)+"-"+nw.getDate();
        const w = this.getWeekNumber(d)[1];
        this.setState({
            date:d,
            week:w,
            prevWeek: pWeek,
            nextWeek:nWeek,
            listWeek:list
        })
    }

    getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 2)/7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    }

    render(){
        const min=this.state.listWeek.length>0 ? this.state.listWeek[0]:null;
        const max=this.state.listWeek.length>0 ? this.state.listWeek[6]:null;
        const year = max===null ? null:max.getFullYear();
        const minDate= min !== null ? min.getDate():null;
        const maxDate= max !== null ? max.getDate():null;
        const minMonth = min === null ? null:this.state.monthNames[min.getMonth()];
        const maxMonth = max === null ? null:this.state.monthNames[max.getMonth()];
        const days = min !== null ? this.state.listWeek.map(i => <Day d={i} key={i.getDate()} currentDate={this.state.date.getDate()} />):null;
        return(
            <div className="grey-box-wrap">
                <div className="top">
                    <Link to={this.state.prevWeek} className="prev"><i className="zmdi zmdi-chevron-left"></i>previous week</Link>
                    <span className="center">{minMonth} {minDate} - {maxMonth} {maxDate}, {year} (week {this.state.week})</span>
                    <Link to={this.state.nextWeek} className="next">next week<i className="zmdi zmdi-chevron-right"></i></Link>
                </div>
                <div className="bottom">
                    <ul className="days">
                        {days}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AddHoursHeader