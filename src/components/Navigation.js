import React from "react"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

function Navigation (){
    return(
        <nav>
            <NavDesktop />	
            <NavMobile />					
            <span className="line"></span>
        </nav>
    )
}

export default Navigation