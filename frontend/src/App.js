import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./components/Login.component"
import Signup from "./components/Signup.component"
import Dashboard from "./components/Dashboard.component"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <Router>
      <div className="container">
      
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/' exact component={Dashboard}>
          
        </Route>
       
      </Switch>
      </div>
    </Router>);
}

export default App;
