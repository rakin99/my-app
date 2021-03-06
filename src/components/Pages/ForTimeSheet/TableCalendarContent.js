import React from "react"
import Cell from "./Cell"
import RowTable from "./RowTable"

function TableCalendarContent(props){
    var br=0;
    const cells=props.state.allDays.map(c => { br=br+1; return <RowTable key={br} st={c}/>})
    return(
            <table className="month-table">
                <thead>
                    <tr className="head">
                        <th><span>monday</span></th>
                        <th>tuesday</th>
                        <th>wednesday</th>
                        <th>thursday</th>
                        <th>friday</th>
                        <th>saturday</th>
                        <th>sunday</th>
                    </tr>
                    <tr className="mobile-head">
                        <th>mon</th>
                        <th>tue</th>
                        <th>wed</th>
                        <th>thu</th>
                        <th>fri</th>
                        <th>sat</th>
                        <th>sun</th>
                    </tr>
                </thead>
                <tbody>
                    {cells}
                </tbody>
            </table>
    )
}

export default TableCalendarContent