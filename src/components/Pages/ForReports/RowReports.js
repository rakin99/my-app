import React from "react"

function RowReports(props) {
    return(
        <tr>
            <td>
                {props.state.date}
            </td>
            <td>
                {props.state.member}
            </td>
            <td>
                {props.state.projects}
            </td>
            <td>
                {props.state.categories}
            </td>
            <td>
                {props.state.description}
            </td>
            <td className="small">
                {props.state.time}
            </td>
        </tr>
    )
}

export default RowReports