import React from "react"
import NewProject from "./NewProject"
import LetterFilter from "../LetterFilter"
import Pagination from "../Pagination"
import ProjectsHeader from "./ProjectsHeader"
import ProjectsContent from "./ProjectsContent"
import Modal from 'react-awesome-modal';

class Projects extends React.Component{

    render(){
        return(
            <div className="wrapper">
			    <section className="content">
				<ProjectsHeader handleClick={this.props.handleClick}/>
				<Modal
                    visible={this.props.newProject}
                    width="470px"
                    height="350px"
                    effect="fadeInUp"
                    onClickAway={this.props.handleClick}
					>
						<NewProject handleClick={this.props.handleClick}/>
				</Modal>
				<LetterFilter />
				<ProjectsContent projects={this.props.projects}/>
				<Pagination />
			</section>			
		    </div>
        )
    }
}

export default Projects