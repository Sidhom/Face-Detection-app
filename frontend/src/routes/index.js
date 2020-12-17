import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Home from '../components/Home';
import Inscription from '../components/Inscription';
import Login from '../components/Login';
import { userState } from '../store/selectors';

const Routes = () => {
    const connectedUser = useRecoilValue(userState);
    console.log('app',connectedUser);
    return (
     
            <Switch>
                <Route path="/Home" component={Home} />
               {!connectedUser &&  <Route path="/Inscription" component={Inscription} />}
                {!connectedUser && <Route path="/" component={Login} />}
            </Switch>
    )
}

export default Routes;