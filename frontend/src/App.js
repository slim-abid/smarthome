import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./components/Login.component"
import Signup from "./components/Signup.component"
import Dashboard from "./components/Dashboard.component"
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import "./App.css"
import NavigationBar from './components/NavigationBar';
import Home from './components/home'
import Energy from './components/energy'
import Streaming from './components/streaming'
import axios from "axios"
function App() {
 
  return (
   
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className='content'> 
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/energy'>
              <Energy />
            </Route>
            <Route exact path='/streaming'>
              <Streaming />
            </Route>
            <Route path='/login' exact component={Login}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path='/dashboard' exact component={Dashboard}/>
          </Switch>
        </div>
      </div>
    </Router>
  )}


export default App;




