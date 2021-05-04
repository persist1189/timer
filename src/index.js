import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Routers, Switch, Route} from 'react-router-dom';
import './index.css';
import Timer from './Timer';
import StopWatch from './StopWatch';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Routers>
    <Switch>
      <Route path="/StopWatch" component={StopWatch}></Route>
      <Route path="/" component={Timer}></Route>
    </Switch>
  </Routers>,document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();