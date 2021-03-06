import React from "react"
import TableCalendarContent from "./TableCalendarContent"
import TableCalendarHeader from "./TableCalendarHeader"


class TableCalendar extends React.Component{
	constructor(props){
		super(props)
		const params= props.d;
		const d=params.year == undefined ? new Date():new Date(params.year,params.month-1,1);
        const date=d;
		const date2=new Date(d);
		this.state=({
			date: date2,
			previousMonth:new Date(date.setMonth(date.getMonth()-1)),
			nextMonth:new Date(date.setMonth(date.getMonth()+2)),
			monthNames:["January", "February", "March", "April", "May", "June", 
						"July", "August", "September", "October", "November", "December"],
						
		})
		this.handleClick=this.handleClick.bind(this)
        this.reduceMonth=this.reduceMonth.bind(this)
		this.increaseMonth=this.increaseMonth.bind(this)
		this.daysInMonth=this.daysInMonth.bind(this)
		this.calcNumDays=this.calcNumDays.bind(this)
		this.showCells=this.showCells.bind(this)
		this.myFunc=this.myFunc.bind(this)
	}

	myFunc(){
		const { match: { params } } = this.props;
		const d=params.year == undefined ? new Date():new Date(params.year,params.month-1,1);
        const date=d;
		const date2=new Date(d);
		this.calcNumDays(date);
		this.setState({
			date: date2,
			previousMonth:new Date(date.setMonth(date.getMonth()-1)),
			nextMonth:new Date(date.setMonth(date.getMonth()+2))
		})
	}

    handleClick(num,h){     
        console.log(num+" "+h)
    }

    increaseMonth(){
		const date = this.state.date;
		const date2 = this.state.date;
		const newDate = new Date(date.setMonth(date.getMonth()+1));
		const pMonth = new Date(date2.setMonth(date2.getMonth()-1));
		const nMonth = new Date(date2.setMonth(date2.getMonth()+2));
		this.setState({
			date:newDate,
			nextMonth:nMonth,
			previousMonth:pMonth
		})
		this.calcNumDays(newDate)
	}

	reduceMonth(){
		const date = this.state.date;
		const date2 = this.state.date;
		const newDate = new Date(date.setMonth(date.getMonth()-1));
		const pMonth = new Date(date.setMonth(date.getMonth()-1));
        const nMonth = new Date(date2.setMonth(date2.getMonth()+2));;
        const month = pMonth.getMonth()+"-"+"1"+pMonth.getFullYear()
        console.log("Datum: "+month)
		this.setState({
			date:newDate,
			nextMonth:nMonth,
			previousMonth:month
		})
		this.calcNumDays(newDate)
	}

	daysInMonth (month, year) {
		return new Date(year, month+1, 0).getDate();
	}

	calcNumDays(date) {
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
		this.showCells(pDays,days,prevMonth,date);
		this.setState({
			numDays:days,
			previousNumDays:pDays
		})
	}

	showCells(pDays,cDays,prevMonth,date) {
		const listDays=[];
		var trList=[];
		const aDays=[];
		for (var i=0; i<pDays.length; i++){
			aDays.push(pDays[i]);
		}
		for (var i=0; i<cDays.length; i++){
			aDays.push(cDays[i]);
		}
		
		var br=1;
		var size=aDays.length;
		
		var r=0;
		for (var i=0; i<size; i++){
			r=size-i;
			const c=i>(pDays.length-1) ? "positive":"positive previous";
			const m = i>(pDays.length-1) ? prevMonth:date;
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
			allDays:listDays
		})
	}

	render(){
    return(
        <section className="content">
				<TableCalendarHeader d={this.props.d} reduceMonth={this.props.reduceMonth} increaseMonth={this.props.increaseMonth} state={this.state}/>
				<TableCalendarContent state={this.props.state}/>
				<div className="total">
					<span>Total hours: <em>90</em></span>
				</div>
			</section>			
    )
	}
}

export default TableCalendar