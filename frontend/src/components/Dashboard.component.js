import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Card, CardHeader, CardBody,  Button,
    ButtonGroup,
    PaginationItem} from 'reactstrap';
import { getColor } from '../utils/colors';
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import { PageItem } from 'react-bootstrap';
import Switch from  "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bulb from 'react-bulb';
//import { response } from 'express';
const states={"Room1":false,"Room2":false,"Room3":false,"Alert":false,"Door":false}
const Indicator={"Bell":"grey"}
  class SwitchExample extends Component  {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
      
    }
    handleChange(checked) {
    this.setState({checked})
    axios.post("http://localhost:3001",states).then((response)=>{Indicator["Bell"]=response.data["Bell"]; console.log(Indicator["Bell"]);})}
  
    render() {
      return (
        <label >
            <div>
            
          <Switch       
    handleDiameter={28}
    offColor="#020929"
    onColor="#1cadd4"
    offHandleColor="#1cadd4"
    onHandleColor="#020929"
    height={40}
    width={70}
    uncheckedIcon={false}
    checkedIcon={false}
    className="react-switch"
    id="small-radius-switch"onChange={this.handleChange} checked={this.state.checked} />
        </div>
        {this.props.label}
        {states[this.props.label]=this.state.checked}
        {console.log(states)}
        
        </label>
      );
    }
  }
 class AlertLauncher extends Component{
    
    constructor() {
        super();
        this.state = { checkedAlert: false };
        this.handleAlert = this.handleAlert.bind(this);
      }
    
      handleAlert(checkedAlert) {
        this.setState({ checkedAlert });
      }
    
      render() {
        return (
          <label >
              <div>
              
            <Switch 
            
             className="material-icons-outlined"
            
            onChange={this.handleAlert} checkedAlert={this.state.checkedAlert} />
          </div>
          </label>
        );
      }

   
   
 } 
export default class Dashoard extends Component{
 
    
    render(){
      
      return(

<PaginationItem>  
<Row >
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Lights</CardHeader>
            <CardBody>
    
    <SwitchExample label={"Room1"}></SwitchExample>
    <SwitchExample label={"Room2"}></SwitchExample>
    <SwitchExample label={"Room3"}></SwitchExample>
    </CardBody></Card></Col>
    <Col xl={6} lg={12} md={120}> 
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Security</CardHeader>
            <CardBody>
                
                <SwitchExample label={"Alert"}></SwitchExample>
                <SwitchExample label={"Door"}></SwitchExample>
                <label> <div>
                <Bulb size={30} color={Indicator['Bell']}></Bulb>
                </div>
                Bell
                </label>
            </CardBody></Card></Col>
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Bloc3</CardHeader>
            <CardBody>
    </CardBody></Card></Col>
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Bloc4</CardHeader>
            <CardBody>
    </CardBody></Card></Col></Row>
    
       </PaginationItem> 
              
                          

        
    
   



    )}

    
}