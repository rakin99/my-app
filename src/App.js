import React from 'react';
import Header from "./components/Header";
import TimeSheet from "./components/Pages/ForTimeSheet/TimeSheet";
import Categories from "./components/Pages/ForCategories/Categories";
import TeamMembers from "./components/Pages/ForTeamMembers/TeamMembers";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AddHours from './components/Pages/ForTimeSheet/AddHours';
import Footer from "./components/Footer"
import Reports from './components/Pages/ForReports/Reports';
import ClientsContainer from './components/Pages/ForClients/ClientsContainer';
import ProjectsContainer from './components/Pages/ForProjects/ProjectsContainer';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={TimeSheet}/>
          <Route path="/time-sheet" exact component={TimeSheet}/>
          <Route path="/time-sheet/:year-:month" component={TimeSheet} />
          <Route path="/clients" component={ClientsContainer}/>
          <Route path="/projects" component={ProjectsContainer}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/team-members" component={TeamMembers}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/days/:year-:month-:day" component={AddHours}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
