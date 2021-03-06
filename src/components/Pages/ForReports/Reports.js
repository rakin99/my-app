import React from "react"
import ReportsHeader from "./ReportsHeader"
import ReportsContent from "./ReportsContent"
import ReportsFooter from "./ReportsFooter"

class Reports extends React.Component{

	constructor(){
		super()
		this.state = {
			reports:[
				{
					id:1,
					date:"2013-02-13",
					member:"Slađana Miljanovic",
					projects:"Seachange - Nitro",
					categories:"Front-End Development",
					description:"Lorem ipsum dolor sit amet",
					time:7.5,
				},
				{
					id:2,
					date:"2013-02-13",
					member:"Sladjana Miljanovic",
					projects:"Seachange - Nitro",
					categories:"Front-End Development",
					description:"Lorem ipsum dolor sit amet",
					time:7.5,
				},
				{
					id:3,
					date:"2013-02-13",
					member:"Sladjana Miljanovic",
					projects:"Seachange - Nitro",
					categories:"Front-End Development",
					description:"Lorem ipsum dolor sit amet",
					time:7.5,
				}
			]
		}
	}

    render(){
        return(
            <div className="wrapper">
			    <section className="content">
					<ReportsHeader />
					<ReportsContent state={this.state}/>
					<ReportsFooter />
				</section>			
		    </div>
        )
    }
}

export default Reports