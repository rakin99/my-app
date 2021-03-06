import React from "react"
import LoggedIn from "./LoggedIn";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header(){
    return(
        <header className="header">
			<div className="top-bar"></div>
			<div className="wrapper">
				<Logo />
				<LoggedIn />
				<Navigation />
			</div>
		</header>
    )
}

export default Header