import React from "react"
import {NavLink} from "react-router-dom";

function NavMobile (){
    return(
        <div className="mobile-menu">
						<a href="#" className="menu-btn">
							<i className="zmdi zmdi-menu"></i>
						</a>
						<ul>
							<li>
								<NavLink to="/time-sheet" exact className="btn nav" activeClassName="btn nav active">
									TimeSheet
								</NavLink>
							</li>
							<li>
								<NavLink to="/clients" className="btn nav" activeClassName="btn nav active">
									Clients
								</NavLink>
							</li>
							<li>
								<NavLink to="/projects" className="btn nav" activeClassName="btn nav active">
								Projects
								</NavLink>
							</li>
							<li>
								<NavLink to="/categories" className="btn nav" activeClassName="btn nav active">
									Categories
								</NavLink>
							</li>
							<li>
								<NavLink to="/team-members" className="btn nav" activeClassName="btn nav active">
									Team members
								</NavLink>
							</li>
							<li className="last">
								<NavLink to="/reports" className="btn nav" activeClassName="btn nav active">
									Reports
								</NavLink>
							</li>
						</ul>
					</div>
    )
}

export default NavMobile