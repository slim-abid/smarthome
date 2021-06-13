import React, { Component } from 'react'
import BlockTemperature from './BlockTemperature'
import BlockNotification from './BlockNotification' 
import MusicPlayer from './MusicPlayer'
import ControlClima from './ControlClima'
import 'semantic-ui-css/semantic.min.css'
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
const states={"Room1":false,"Room2":false,"Room3":false,"Alarm":false,"Door":false}
  class SwitchExample extends Component  {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
      
    }
    handleChange(checked) {
    this.setState({checked})}
    //axios.post("http://localhost:3001",states).then((response)=>{console.log(response.data);})}
  
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
    id="small-radius-switch" onChange={this.handleChange} checked={this.state.checked} />
        </div>
        {this.props.label}
        {states[this.props.label]=this.state.checked}
        {console.log(states)}
        
        </label>
      );
    }
  }
 
export default class Dashoard extends Component  {  
constructor() {
  super();
  this.state={Bell:"red",Temperature:100}
  this.handleUpdate = this.handleUpdate.bind(this); 
}
intervalID;
componentDidMount(){this.getData();}
componentWillUnmount(){clearTimeout(this.intervalID);}
getData=(Bell,Temperature)=>{axios.get("http://localhost:3001")
.then((response)=>{
this.setState({Bell:response.data.Bell})
this.setState({Temperature:response.data.Temperature});
console.log(this.state);this.intervalID=setTimeout(this.getData.bind(this),1000)})}
handleUpdate(Bell,Temperature)
{ axios.post("http://localhost:3001",states)
.then((response)=>{console.log("Sent to backend");
})
  
 
}
    
    render(){
      
      return(

<PaginationItem onClick={this.handleUpdate}>  
<Row >
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Lights</CardHeader>
            <CardBody>
    
    <SwitchExample label={"Room1"} ></SwitchExample>
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
                <Bulb size={30} color={this.state.Bell}></Bulb>
                </div>
                Bell
                </label>
            </CardBody></Card></Col>
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Notification</CardHeader>
            <CardBody>
            <BlockNotification></BlockNotification>
    </CardBody></Card></Col>
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Temperature</CardHeader>
            <CardBody>
              <BlockTemperature dataFromParent = {this.state.Temperature}></BlockTemperature>
    </CardBody></Card></Col>
 
    </Row>
    <Row>
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Music Player</CardHeader>
            <CardBody>
              <MusicPlayer></MusicPlayer>
    </CardBody></Card></Col>
    <Col xl={6} lg={12} md={120}>
      <Card>
      <CardBody>
      <ControlClima
      ></ControlClima>
      </CardBody></Card></Col>
    </Row>
    
       </PaginationItem> 
              
                          

        
    
   



    )}

    
}