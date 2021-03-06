import React from "react"
import RowReports from "./RowReports"


function ReportsContent(props){
    const reports = props.state.reports.map(r => <RowReports state={r}/>)
    return(
        <table className="default-table">
            <thead>
                <tr>
                    <th>
                        Date
                    </th>
                    <th>
                        Team member
                    </th>
                    <th>
                        Projects
                    </th>
                    <th>Categories</th>
                    <th>Description</th>
                    <th className="small">Time</th>
                </tr>
            </thead>
            <tbody>
                {reports}
            </tbody>
        </table>	
    )
}

export default ReportsContent