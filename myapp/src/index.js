import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import UnionBank from './components/UnionBank';
import StatesinClassComponent from './components/StatesinClassComponent';
import StateInFunctionalComponent from './components/StateInFunctionalComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Functional /> */
   // <UnionBank/>
  <StatesinClassComponent/>
  // <StateInFunctionalComponent/>
  }


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
