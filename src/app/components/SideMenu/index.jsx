// import {BrowserRouter as Router, Link} from "react-router-dom";
import Sample from "../../../pages/auth/components/Sample";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Auth from "../../../pages/auth/components/Auth";
import './style.css';

const SideMenu = (triger) => {
    console.log(triger);
    return(
        <div className='sideMenu'>
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
        </div>
    )
}
export default SideMenu;