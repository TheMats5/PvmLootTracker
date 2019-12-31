import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/home";
import Friends from "./pages/friends";

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/friends" component={Friends}/>
            </Switch>
        </div>
    </Router>
)

export default App;
