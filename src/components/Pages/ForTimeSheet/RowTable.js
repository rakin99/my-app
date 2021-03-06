import React from "react"
import Cell from "./Cell"

function RowTable(props){
    const c=props.st.map(i=> <Cell key={i.num} month={i.month} num={i.num} cl={i.cl} h={i.h}/>)
    return(
        <tr>
            {c}
        </tr>
    )
}

export default RowTable