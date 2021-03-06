import React from "react"


function ReportsFooter(){
    return(
        <div>
            <div className="total">
                <span>Report total: <em>7.5</em></span>
            </div>
            <div className="grey-box-wrap reports">
                <div className="btns-inner">
                    <a href="#" className="btn white">
                        <span>Print report</span>
                    </a>
                    <a href="#" className="btn white">
                        <span>Create PDF</span>
                    </a>
                    <a href="#" className="btn white">
                        <span>Export to excel</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReportsFooter