import React, { Component } from 'react'
import './App.css'
//import axios from 'axios' 
import { RiMoneyDollarCircleFill as Money } from 'react-icons/ri';
import { IoMdCalculator as Calcul} from 'react-icons/io';
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
const TotalEnergyConsumption = (moreData = {}) => {
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


const SolarEnergyGenerated = () => {
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

  const DevicesConsumption = () => {
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
  const NextMonthEnergyConsumptionPredection = () => {
    return(
        <div className='predection'>
            <div className='predection-clacul'>
                <div><Calcul className='Calcul'></Calcul></div>
                <h1>5000  Kw</h1>
            </div>
            <div>
                <div><Money className='Money'></Money></div>
                <h1>10000  $</h1>
            </div>
        </div>
    )};
    const AdvicesAndTips = () => {
        return(
            <div className='Advice' style={{borderRadius:"10px"}}>
                <div className='Advice1'>
                    <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                    <h5 style={{marginTop:"10px"}}>bla bla bla advice</h5>
                </div>
                <div className='Advice1'>
                    <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                    <h5 style={{marginTop:"10px"}}>bla bla bla advice</h5>
                </div>
                <div className='Advice1'>
                    <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                    <h5 style={{marginTop:"10px"}}>bla bla bla advice</h5>
                </div>
                <div className='Advice1'>
                    <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                    <h5 style={{marginTop:"10px"}}>bla bla bla advice</h5>
                </div>
            </div>
        )};
    
        const DataAnalysis = () => {
            return(
                <div className='Advice'>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                        <h5 style={{marginTop:"10px"}}>Analysis 1</h5>
                    </div>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                        <h5 style={{marginTop:"10px"}}>Analysis 1</h5>
                    </div>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                        <h5 style={{marginTop:"10px"}}>Analysis 1</h5>
                    </div>
                    <div className='Advice1'>
                        <div><Tick className='Tick' style={{height:"50%"}}></Tick></div>
                        <h5 style={{marginTop:"10px"}}>Analysis 1</h5>
                    </div>
                </div>
            )};
export default function Energy(){

      return(

<PaginationItem>  
<Row >
<Col xl={6} lg={12} md={120}>
    <Col xl={12} lg={12} md={120}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>Total energy consumption [kW] </CardHeader>
            <CardBody>
                <Line data={TotalEnergyConsumption({ fill: false })} />
            </CardBody>
        </Card>
    </Col>

    <Col xl={12} lg={12} md={120}> 
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>Solar Energy generated</CardHeader>
            <CardBody>
                <Pie data={SolarEnergyGenerated()} />
            </CardBody>
        </Card>
    </Col>


    <Col xl={12} lg={12} md={120}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>Devices consumption</CardHeader>
            <CardBody>
            <Pie data={DevicesConsumption()} />
            </CardBody>
        </Card>
    </Col>
</Col>
<Col xl={6} lg={12} md={120}>
    <Col xl={12} lg={12} md={120}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>Next month Energy consumption predection</CardHeader>
            <CardBody>
            <NextMonthEnergyConsumptionPredection></NextMonthEnergyConsumptionPredection>
            </CardBody>
        </Card>
    </Col>

    <Col xl={12} lg={12} md={120}> 
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>data analysis</CardHeader>
            <CardBody><DataAnalysis></DataAnalysis></CardBody>
        </Card>
    </Col>


    <Col xl={12} lg={12} md={120}>
        <Card className="card text-white mb-3" style={{backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black",borderRadius:"10px" }}>
            <CardHeader>Advices and Tips</CardHeader>
            <CardBody> <AdvicesAndTips></AdvicesAndTips></CardBody>
        </Card>
    </Col>
</Col>
</Row>
    
</PaginationItem> 
              
                          

        
  

    )
    
}