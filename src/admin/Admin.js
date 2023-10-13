import React , {useEffect} from 'react';
import LogIn from './LogIn';
import './admin.css';
import {useCookies} from 'react-cookie';
import { Route, useHistory , Switch , useLocation } from "react-router-dom";
import Dashboard from './Dashboard';
import { useDispatch , useSelector } from 'react-redux';
import {author , token_store} from '../store/auth';
import axios from 'axios';

function Admin() {

    const [cookies] = useCookies(['token']);
    const history = useHistory();
    const dispatch = useDispatch();
    let {pathname} = useLocation();

    const auth = useSelector( state => state.auth.auth_verify )

    useEffect(()=>{
        cookies.token && pathname === "/admin" && history.push("/admin/dashboard");
        cookies.token && dispatch(author(true));
        cookies.token && dispatch(token_store(cookies.token))

        !auth && history.push("/admin/login") 
    } , [cookies.token , history, dispatch , pathname , auth]);

    const stored_token = useSelector( state => state.auth.auth_token );
    axios.defaults.headers.common['auth-token'] = cookies.token ? cookies.token : stored_token;

    return (
        <Switch>
            <Route path="/admin/dashboard">
                <Dashboard/>
            </Route>
            
            <Route exact path="/admin/login">
                <LogIn/>
            </Route>
        </Switch>
    )
}

export default Admin
