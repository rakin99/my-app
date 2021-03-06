import React from "react"
import { Link } from "react-router-dom";

function Day(props) {
    const cl = props.currentDate == props.d.getDate() ? "active":"";
    const list = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const newDate = props.d.getFullYear()+"-"+parseInt(props.d.getMonth()+1)+"-"+props.d.getDate();
    return(
        <li className={cl}>
            <Link to={newDate}>
                <b>{list[props.d.getMonth()]} {props.d.getDate()}</b>
                
                <span>{days[props.d.getDay()]}</span>
            </Link>
        </li>
    )
}

export default Day