import './App.css';
import Auth from "./pages/auth/components/Auth";
import Sample from "./pages/auth/components/Sample";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="Main">
            <ul>
                <li>
                    <Link to="/">Sample</Link>
                </li>
                <li>
                    <Link to="/auth">Auth</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Sample}/>
                <Route path="/auth"  component={Auth}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
