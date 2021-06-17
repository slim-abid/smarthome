import React, { Component } from 'react'
import Global from './components/Global'
import HomePage from './components/HomePage'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        authenticated : false
    }
}
onAuthenticated = (value) => {
  this.setState({authenticated:value})  
}
  render() {
    return (
      <div>
        {this.state.authenticated ? <Global/> : <HomePage onAuthenticated ={this.onAuthenticated} />  }
      </div>
    )
  }
}
