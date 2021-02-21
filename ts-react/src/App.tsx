import React from 'react';
import { Switch, Route, BrowserRouter, Redirect, } from 'react-router-dom';
import Login from './pages/login';
import Chart from './pages/chart';
import './App.css';
import 'antd/dist/antd.css';
class App extends React.Component {


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Redirect path='/' exact to='/login'></Redirect>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/chart' exact component={Chart}></Route>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }

}

export default App;