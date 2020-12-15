import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Home from './components/Home';


const App = () => {

  return (
    <div className={styles.app}>
          <Header />
          <Home />
    </div>
  );
}

export default App;
