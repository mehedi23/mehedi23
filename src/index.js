import React , {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Admin from './admin/Admin'
import {BrowserRouter, Switch, Route , useHistory } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Favicon from 'react-favicon';
import mehedifavicon from './static/img/favicon.png';

function Pushs() {
    const history = useHistory();
    useEffect(() => {
        history.push("/portfolio");
    }, [history]);
    return("");
};

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Favicon url={mehedifavicon} />
            {/* <Switch>
                <Route path="/" exact>
                    <Pushs/>
                </Route>
                <Route path="/portfolio" exact>
                    <App/>
                </Route>
                <Route path="/admin" >
                    <Admin/>
                </Route>

            </Switch> */}

            <App/>
        </Provider>

</BrowserRouter>, document.getElementById('root'));
