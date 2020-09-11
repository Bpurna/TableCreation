import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './signin/login';
import Job from './job/job';
import Formiclogin from './signin/formiclogin';
import JobAlert from './JobAlert/JobAlert';
import AddJob from './AddJob/addJob';

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/job">
                    <Job />
                </Route>
                <Route path="/jobAlert">
                    <JobAlert />
                </Route>
                <Route path="/formiclogin">
                    <Formiclogin />
                </Route>
                <Route path="/addJob">
                    <AddJob />
                </Route>
            </Router>
        </div >
    );
}

export default App;