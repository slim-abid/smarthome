import axios from 'axios';
//import { response } from 'express';

import React,{Component} from 'react';
export default class Login extends Component{
    constructor(pops){
        super(pops);
        this.onChangeEmail=this.onChangeEmail.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.state=
        {
            Email:"",
            Password:""
        }
       

    }
    onChangeEmail(data){this.setState({Email:data.target.value});}
    onChangePassword(e){this.setState({Password:e.target.value})}
    onSubmit(e){
        e.preventDefault();
        const LogUser={
            email:this.state.Email,
            password:this.state.Password
        }
        console.log(LogUser);
        axios.post("http://localhost:3001/login",LogUser)
        .then(response=>console.log(response.data))
        this.setState({ Email:'', Password:''})
      
               

    }
  render(){return(
    <div>
    <h3>Login</h3>
    <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
        <label>Email </label>
        <input  type="text"
            required
            className="form-control"
            
            onChange={this.onChangeEmail}
            value={this.state.Email}
            />
            <label>Password </label>
        <input  type="text"
            required
            className="form-control"
            value={this.state.Password}
            onChange={this.onChangePassword}
            />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary" />
      </div>
    </form>
  </div>


  )}
}