import React from "react"
import { Link } from "react-router-dom"

function Cell(props){
    const date = "/days/"+props.month.getFullYear()+"-"+parseInt(props.month.getMonth()+1)+"-"+props.num;
    return(
        <td className={props.cl}>
            <div className="date">
                <span>{props.num}.</span>
            </div>
            <div className="hours">
                <Link to={date}>Hours: <span>{props.h}</span></Link>
            </div>
        </td>
    )
}

export default Cell