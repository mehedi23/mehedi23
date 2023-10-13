import React from 'react';
import Testimonial from './pages/Testimonial';
import Skill from './pages/Skill';
import Info from './pages/Info'
import {Route, Switch, Link} from "react-router-dom";

function Dashboard() {

    return (
        <div className="dashboard-container">
            <div className="dashboard-path">
                <li>
                    <Link to="/admin/dashboard/testimonial">
                        Testimonial
                    </Link>
                </li>
                <li>
                    <Link to="/admin/dashboard/skill">
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to="/admin/dashboard/info">
                        My Informetion
                    </Link>
                </li>
            </div>
            <div className="folders">
                <button className="log-out-btn">
                    Log out
                </button>
                <Link to="/portfolio" target={"_blank"} className="admin-home"> Go To Home </Link>
                <Switch>
                    <Route path="/admin/dashboard/testimonial" exact>
                        <Testimonial need="input"/>
                    </Route>
                    <Route path="/admin/dashboard/skill" exact>
                        <Skill/>
                    </Route>
                    <Route path="/admin/dashboard/info" exact>
                        <Info/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Dashboard
