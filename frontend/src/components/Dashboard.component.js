import React, { Component } from 'react'
import BlockTemperature from './BlockTemperature'
import BlockNotification from './BlockNotification' 
import MusicPlayer from './MusicPlayer'
import ControlClima from './ControlClima'
import 'semantic-ui-css/semantic.min.css'
import { AiFillBulb } from 'react-icons/ai';
import axios from 'axios'
import { Row, Col, Card, CardHeader, CardBody,  Button,ButtonGroup,Container} from 'reactstrap';
import { getColor } from '../utils/colors';
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import { PageItem } from 'react-bootstrap';
import Switch from  "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bulb from 'react-bulb';
import {Energy, TotalEnergyConsumption, AdvicesAndTips,  SolarEnergyGenerated , DevicesConsumption , NextMonthEnergyConsumptionPredection , DataAnalysis}  from './Energy'
//import { response } from 'express';
import http from './http-common'

//****************************************** */
// data is in data state 
//****************************************** */
  class SwitchExample extends Component  {
    constructor(props) {
      super(props);
      this.state = { checked: this.props.on};
      this.handleChange = this.handleChange.bind(this);
      
    }
    handleChange(){
      
      this.state.checked ? this.setState({checked:false},function(){this.props.handleChange(this.state.checked,this.props.label);}) : this.setState({checked:true},function(){this.props.handleChange(this.state.checked,this.props.label);});
      
    }
    render() {
      return (
        <>
            <div className="mb-2">
            <h5> {this.props.label} {this.props.light? <AiFillBulb/>:null}</h5> 
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
    id="small-radius-switch"onChange={() => this.handleChange()} checked={this.state.checked} />
        </div>
       
        
        </>
      );
    }
  }
 
export default class Dashoard extends Component{
 
  constructor(props) {
    super(props);
    this.state = { 
      data:{notification:{gaz:"haw famma gaz",temperature:"26 degre",mvt:"",bell:"Bell is ringing!"},Room1:false,Room2:true,Room3:false,Alert:false,Door:false,Bell:false,ventilateur:false,temperature:18}
    };  
  }
  ///////////////////////////////////////////
  componentDidMount(){
    http.get('/dashboard')
    .then(res => this.setState({data:res.data}))
    .catch((err)=>console.log(err))
  }  

  handleChange = (checked,label) => {
    let dataObj = {...this.state.data};
    dataObj[label]=checked;
    console.log("this is data to be passed",checked)
    this.setState({data:dataObj})
    console.log('this is data from switches',this.state.data)
    axios.post("http://localhost:3001",this.state.data).then((response)=>{console.log("ll");})
  }
 
  changeVentilateur = (onVent) => {
    let dataObj = {...this.state.data};
    dataObj.ventilateur = onVent;
    this.setState({data:dataObj});
    console.log('this is data from ventilateur',onVent)
  }
   ////////////////////////////////////////////
    render(){
      
      return(

<Container>
<Row >
    <Col xl={12} lg={12} md={12} style={{marginBottom:"10px"}}>
        
            <BlockNotification data={this.state.data.notification}></BlockNotification>
   </Col> 
    <Col xl={3} lg={3} md={12}>
    <Col xl={12} lg={12} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Lights</h4></CardHeader>
            <CardBody>
    
    <SwitchExample label={"Room1"} light={true} on={this.state.data.Room1} handleChange={this.handleChange}></SwitchExample>
    <SwitchExample label={"Room2"} light={true} on={this.state.data.Room2} handleChange={this.handleChange}></SwitchExample>
    <SwitchExample label={"Room3"} light={true} on={this.state.data.Room3} handleChange={this.handleChange}></SwitchExample>
    </CardBody></Card></Col>
    <Col xl={12} lg={12} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Security</h4></CardHeader>
            <CardBody>
                
                <SwitchExample label={"Alert"} on={this.state.data.Alert} handleChange={this.handleChange} ></SwitchExample>
                <SwitchExample label={"Door"} on={this.state.data.Door} handleChange={this.handleChange}></SwitchExample>
                 <div>
                 <h4>Bell </h4>
                <Bulb size={20} color={this.state.data.Bell ? "green" : "grey"}></Bulb>
                </div>
                
                
            </CardBody></Card>
            </Col>
      </Col>
    
    <Col xl={5} lg={5} md={12}>
      <Col xl={12} lg={12} md={12} >
      <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Total energy consumption [kW]</h4> </CardHeader>
            <CardBody>
                <Line data={TotalEnergyConsumption({ fill: false })} />
            </CardBody>
        </Card>
      </Col>
      <Col xl={12} lg={12} md={12}>
      <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px",height:"auto",padding:"0" }}>
            <CardHeader><h4>Playing now</h4></CardHeader>
            <CardBody >
              <MusicPlayer></MusicPlayer>
              </CardBody></Card>
      </Col>
      
    </Col>
    <Col xl={4} lg={4} md={12}>
    <Col xl={12} lg={12} md={12}>
    <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Climat controls</h4></CardHeader>
            <CardBody>
      <ControlClima temp={this.state.data.temperature} onVent={this.state.data.ventilateur} handleChange={this.changeVentilateur} />
            </CardBody>
        </Card>
      </Col>
      <Col xl={12} lg={12} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Next month Energy consumption predection</h4></CardHeader>
            <CardBody>
            <NextMonthEnergyConsumptionPredection></NextMonthEnergyConsumptionPredection>
            </CardBody>
        </Card>
    </Col>

    </Col>

 
    
    </Row>
    <Row>
    <Col xl={8} lg={12} md={12}>
    <Col xl={12} lg={12} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Devices consumption</h4></CardHeader>
            <CardBody style={{width:"50%", margin:"auto"}}>
            <Pie height={100} width={100} data={DevicesConsumption()} />
            </CardBody>
        </Card>
    </Col>
    <Col xl={12} lg={12} md={12} className="mb-0"> 
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Solar Energy generated</h4></CardHeader>
            <CardBody style={{width:"50%", margin:"auto"}}>
                <Pie data={SolarEnergyGenerated()} />
            </CardBody>
        </Card>
    </Col>
    </Col>
    <Col xl={4} lg={12} md={12}> 
      <Col xl={12} lg={12} md={12}> 
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>data analysis</h4></CardHeader>
            <CardBody><DataAnalysis></DataAnalysis></CardBody>
        </Card>
      </Col>
      <Col xl={12} lg={12} md={12}> 
      
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Advices and Tips</h4></CardHeader>
            <CardBody> <AdvicesAndTips></AdvicesAndTips></CardBody>
        </Card>
    
      </Col>
    </Col>
    </Row>
    
    </Container>

    )}

    
}