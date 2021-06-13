import React, {useState} from 'react'; 
import { GiComputerFan as Fan } from 'react-icons/gi';
import Thermometer from 'react-thermometer-component'
import '../App.css' ;
import SwitchButton from './SwitchButton' ;
class BlockTemperature extends React.Component{

    render(){
        const TemperatureValue =this.props.dataFromParent
    return (
        <div className="temperature-display-container">
    
            <div className="thermo"> 
                <Thermometer
                    theme="dark"
                    value={TemperatureValue}
                    max="100"
                    steps="2"
                    format="°C"
                    size="normal"
                    height="250"/>
            </div>
            <div className="fan" >
                <div className="Switch_Button">
                    <SwitchButton />
                </div>
                <div>
                    <Fan className="Fan"></Fan>
                </div>
            </div>
        </div>
    
    )
}}
export default BlockTemperature;