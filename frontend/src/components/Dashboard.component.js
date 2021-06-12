import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardBody,  Button,
    ButtonGroup,
    PaginationItem} from 'reactstrap';
import { getColor } from '../utils/colors';
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import { PageItem } from 'react-bootstrap';
import Switch from  "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css';
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const genLineData = (moreData = {}, moreData2 = {}) => {
    return {
      labels: MONTHS,
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: getColor('primary'),
          borderColor: getColor('primary'),
          borderWidth: 1,
          data: [12,51,88,45,12]
            
         
        
        },
        {
          label: 'Dataset 2',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [45,47,15,20,78]
           
          
        
        },
      ],
    };
  };
  const genPieData = () => {
    return {
      datasets: [
        {
          data: [15,45,20,78,60],
          backgroundColor: [
            getColor('primary'),
            getColor('secondary'),
            getColor('success'),
            getColor('info'),
            getColor('danger'),
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
    };
  };

  class SwitchExample extends Component  {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
        <label >
            <div>
            
          <Switch  handleDiameter={28}
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
        {this.props.room}
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
export default class Dashboard extends Component{
 
    
    render(){return(
        
<PaginationItem>  
<Row >
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Lights</CardHeader>
            <CardBody>
    
    <SwitchExample room={"Room1"}></SwitchExample>
    <SwitchExample room={"Rooom2"}></SwitchExample>
    <SwitchExample room={"Romm3"}></SwitchExample>
    </CardBody></Card></Col>
    <Col xl={6} lg={12} md={120}>
        <Card className="card text-white bg-dark mb-3">
            <CardHeader>Bloc2</CardHeader>
            <CardBody>
                <AlertLauncher> </AlertLauncher>
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