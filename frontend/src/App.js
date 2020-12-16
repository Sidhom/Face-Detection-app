import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Inscription from './components/Inscription';
const App = () => {

  return (
    <div className={styles.app}>
       
          <Router>
          <Header />
            <Switch>
                <Route path="/Inscription" component={Inscription} />
                <Route path="/Login" component={Login} />
                <Route path="/Home" component={Home} />
                <Route path="/" component={Login} />
         
             </Switch>
          </Router>
    </div>
  );
}

export default App;
