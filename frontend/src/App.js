import React, { Component } from 'react'
import Global from './components/Global'
import HomePage from './components/HomePage'
import http from './components/http-common'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        authenticated : false
    }
}
componentWillMount() {
     
  http.get('login/')
  .then(res => {
  if (res.status === 200) {
    this.setState({ authenticated: true });

   
  } else {
    const error = new Error(res.error);
    throw error;
  }
})
.catch(err => {
  console.error(err);
});
}
onAuthenticated = (value) => {
  this.setState({authenticated:value})  
}
  render() {
    return (
      <div>
        {console.log(this.state.authenticated)}
        {this.state.authenticated ? <Global/> : <HomePage onAuthenticated ={this.onAuthenticated} />  }
      </div>
    )
  }
}
