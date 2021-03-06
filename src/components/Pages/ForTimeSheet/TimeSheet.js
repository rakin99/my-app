import React from "react"
import TableCalendarContent from "./TableCalendarContent"
import TableCalendarHeader from "./TableCalendarHeader"

class TimeSheet extends React.Component{
    constructor(props){
		super(props)
		const  month = props.match.params.month;
		const  year = props.match.params.year;
		const d=props.match.params.month == undefined ? new Date():new Date(year,month-1,1);
		const p = new Date(d);
		const n= new Date(d);
		const prevDate=new Date(p.setMonth(p.getMonth()-1));
		const nextDate=new Date(n.setMonth(n.getMonth()+1));
		
        this.state={
			date:d,
			previousMonth:prevDate,
			nextMonth:nextDate,
            monthNames:["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"],
			
			numDays:[],
			previousNumDays:[],
			nextNumDays:[],
			allDays:[]
		}
		
        this.handleClick=this.handleClick.bind(this)
		this.daysInMonth=this.daysInMonth.bind(this)
		this.calcNumDays=this.calcNumDays.bind(this)
		this.showCells=this.showCells.bind(this)
		this.myFunc=this.myFunc.bind(this)
	}

	componentDidMount(){
		this.myFunc();
	}

	componentDidUpdate(props){
		if(window.location.pathname !== props.match.url){
			this.myFunc();
		}
	}

	myFunc(){
		const { match: { params } } = this.props;
			const  month = params.month;
			const  year = params.year;
			const d=params.month == undefined ? new Date():new Date(year,month-1,1);
			const p = new Date(d);
			const n= new Date(d);
			const prevDate=new Date(p.setMonth(p.getMonth()-1));
			const nextDate=new Date(n.setMonth(n.getMonth()+1));
			//console.log(d)
			this.calcNumDays(d,prevDate,nextDate);
	}

    handleClick(num,h){     
        console.log(num+" "+h)
    }

	daysInMonth (month, year) {
		return new Date(year, month+1, 0).getDate();
	}

	calcNumDays(d,prevDate,nextDate) {
		const date = new Date(d);
		const firstDay=new Date(date.getFullYear(),date.getMonth(),1);
		const numPrevDay=firstDay.getDay()-1;
		const pDays = [];
		const days = [];
		if( numPrevDay>0){
			const newDate = new Date(firstDay.setDate(firstDay.getDate()-numPrevDay));
			for (var i=newDate.getDate(); i < this.daysInMonth(newDate.getMonth(),newDate.getFullYear())+1; i++) {
				pDays.push(i);
			} 
		}
		var j=1
		if(firstDay.getDay()===0){
			j=2
		}
		for (var i=j; i < this.daysInMonth(date.getMonth(),this.state.date.getFullYear())+1; i++){
			days.push(i);
		}
		const prevMonth=new Date(date.setMonth(date.getMonth()-1));
		this.showCells(pDays,days,prevMonth,d,prevDate,nextDate);
	}

	showCells(pDays,days,prevMonth,d,prevDate,nextDate) {
		const date = new Date(d);
		const listDays=[];
		var trList=[];
		const aDays=[];
		for (var i=0; i<pDays.length; i++){
			aDays.push(pDays[i]);
		}
		for (var i=0; i<days.length; i++){
			aDays.push(days[i]);
		}
		var br=1;
		var size=aDays.length;
		var r=0;
		for (var i=0; i<size; i++){
			r=size-i;
			const c=i>(pDays.length-1) ? "positive":"positive previous";
			const m = i>(pDays.length-1) ? date:prevMonth;
			trList.push({num:aDays[i], cl:c, h:7.5, month:m});
			br=br+1;
			if(br<8 && r<2){
				listDays.push(trList);
			}
			if(br<8){
				continue;
			}
			listDays.push(trList);
			br=1;
			trList=[];
		}
		this.setState({
			date:d,
			previousMonth:prevDate,
			nextMonth:nextDate,
			numDays:days,
			previousNumDays:pDays,
			allDays:listDays
		})
	}

    render(){
        return(
            <div className="wrapper">
				<section className="content">
					<TableCalendarHeader reduceMonth={this.reduceMonth} increaseMonth={this.increaseMonth} state={this.state}/>
					<TableCalendarContent state={this.state}/>
					<div className="total">
						<span>Total hours: <em>90</em></span>
					</div>
				</section>	
		    </div>	 
        )
	}
}

export default TimeSheet