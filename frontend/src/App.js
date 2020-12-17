import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styles from './App.module.css';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <div className={styles.app}>
         <RecoilRoot>
          <Router>
          <Header />
          <Routes />
          </Router>
          </RecoilRoot>
    </div>
  );
}

export default App;
