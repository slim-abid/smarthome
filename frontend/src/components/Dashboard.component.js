import React, { Component } from 'react'
import BlockTemperature from './BlockTemperature'
import BlockNotification from './BlockNotification' 
import MusicPlayer from './MusicPlayer'
import ControlClima from './ControlClima'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import { Row, Col, Card, CardHeader, CardBody,  Button,ButtonGroup,Container} from 'reactstrap';
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
        <>
            <div>
            <h4> {this.props.label}</h4>
          <Switch       
    handleDiameter={20}
    offColor="#020929"
    onColor="#1cadd4"
    offHandleColor="#1cadd4"
    onHandleColor="#020929"
    height={20}
    width={50}
    uncheckedIcon={false}
    checkedIcon={false}
    className="react-switch"
    id="small-radius-switch"onChange={this.handleChange} checked={this.state.checked} />
        </div>
       
       
        {states[this.props.label]=this.state.checked}
        
        </>
      );
    }
  }
 
export default class Dashoard extends Component{
 
    
    render(){
      
      return(

<Container>
<Row >
    <Col xl={12} lg={12} md={12} style={{marginBottom:"10px"}}>
        
            <BlockNotification></BlockNotification>
   </Col> 
    <Col xl={3} lg={4} md={12}>
    <Col xl={12} lg={4} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>Lights</CardHeader>
            <CardBody>
    
    <SwitchExample label={"Room1"}></SwitchExample>
    <SwitchExample label={"Room2"}></SwitchExample>
    <SwitchExample label={"Room3"}></SwitchExample>
    </CardBody></Card></Col>
    <Col xl={12} lg={4} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>Security</CardHeader>
            <CardBody>
                
                <SwitchExample label={"Alert"}></SwitchExample>
                <SwitchExample label={"Door"}></SwitchExample>
                 <div>
                 <h4>Bell </h4>
                <Bulb size={30} color={Indicator['Bell']}></Bulb>
                </div>
                
                
            </CardBody></Card>
            </Col>
      </Col>
    
    <Col xl={5} lg={12} md={12}>
              <MusicPlayer></MusicPlayer>
    </Col>
    <Col xl={3} lg={12} md={12}>

      <ControlClima/>

    </Col>

 
    
    </Row>
    
    </Container>

    )}

    
}