import React, { Component } from 'react'
import './App.css'
//import axios from 'axios' 
import { RiMoneyDollarCircleFill as Money } from 'react-icons/ri';
import {  IoMdCalculator as Calcul} from 'react-icons/io';
import { TiTickOutline as Tick} from 'react-icons/ti';
import { Row, Col, Card, CardHeader, CardBody,  Button,
    ButtonGroup, 
    PaginationItem} from 'reactstrap';
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import { PageItem } from 'react-bootstrap';
import Switch from  "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Bulb from 'react-bulb'; 
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August' , 'September' , 'October' , 'November', 'December'];
export const TotalEnergyConsumption = (moreData = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Total energy consumption [kW] ',
        backgroundColor:'#36A2EB' ,
        borderColor: '#3682EB',
        borderWidth: 1,
        data: [
          5,
            5,
          6,
          9,
          7, 
        8,
         3,
         7, 
         8,
          3,
          5,
        ],
        ...moreData,
      }
    ],
  };
};


export const SolarEnergyGenerated = () => {
    return {
      datasets: [
        {
          data: [20,80],
          backgroundColor: ['#27AE60' , '#1778BA' 
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Solar Energy', 'Electrical Energy'],
    };
  };

  export const DevicesConsumption = () => {
    return {
      datasets: [
        {
          data: [20,10,10,50,10],
          backgroundColor: ['#00203FFF' , '#ADEFD1FF' , '#DF6589FF' , '#3C1053FF' , '#1C1C1BFF'
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Dishwasher','four1', 'microwave' , 'Fridge'  ,'four2'],
    };
  };
  export const NextMonthEnergyConsumptionPredection = () => {
    return(
        <div className='predection'>
            <div className='predection-clacul'>
                <div><Calcul className='Calcul'></Calcul></div>
                <h4>5000  Kw</h4>
            </div>
            <div>
                <div><Money className='Money'></Money></div>
                <h4>10000  $</h4>
            </div>
        </div>
    )};
    export const AdvicesAndTips = () => {
        return(
            <div className='Advice' style={{borderRadius:"10px"}}>
                <div className='Advice1'>
                    <div ><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick> <h5 >bla bla bla advice</h5></div>
                    
                </div>
                <div className='Advice1'>
                    <div><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick> <h5 >bla bla bla advice</h5></div>
                    
                </div>
                <div className='Advice1'>
                    <div><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick> <h5 >bla bla bla advice</h5></div>
                    
                </div>
                <div className='Advice1'>
                    <div><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick> <h5 >bla bla bla advice</h5></div>
                    
                </div>
            </div>
        )};
    
        export const DataAnalysis = () => {
            return(
                <div className='Advice'>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick>  <h5 >Analysis 1</h5></div>
                       
                    </div>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick> <h5 >Analysis 1</h5></div>
                        
                    </div>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick> <h5 >Analysis 1</h5></div>
                        
                    </div>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"100%",width:"100%"}}></Tick> <h5 >Analysis 1</h5></div>
                        
                    </div>
                </div>
            )};
export function Energy(){

      return(

<PaginationItem>  
<Row >
<Col xl={6} lg={12} md={12}>
    <Col xl={12} lg={12} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Total energy consumption [kW]</h4> </CardHeader>
            <CardBody>
                <Line data={TotalEnergyConsumption({ fill: false })} />
            </CardBody>
        </Card>
    </Col>

    <Col xl={12} lg={12} md={12}> 
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Solar Energy generated</h4></CardHeader>
            <CardBody>
                <Pie data={SolarEnergyGenerated()} />
            </CardBody>
        </Card>
    </Col>
    <Col xl={12} lg={12} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Devices consumption</h4></CardHeader>
            <CardBody>
            <Pie data={DevicesConsumption()} />
            </CardBody>
        </Card>
    </Col>
</Col>
<Col xl={6} lg={12} md={120}>
    <Col xl={12} lg={12} md={12}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader><h4>Next month Energy consumption predection</h4></CardHeader>
            <CardBody>
            <NextMonthEnergyConsumptionPredection></NextMonthEnergyConsumptionPredection>
            </CardBody>
        </Card>
    </Col>

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
    
</PaginationItem> 
              
                          

        
  

    )
    
}