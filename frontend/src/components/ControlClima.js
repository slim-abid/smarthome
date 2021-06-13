import React, {useState} from 'react'; 
import { FaTemperatureHigh } from 'react-icons/fa';


const ControlClima=()=>{
 const [TemperatureValue, SetTemperatureValue]=useState(27); 
 const [TemperatureColor, SetTemperatureColor]=useState("cold"); 

 const IncreaseTemperature=()=>{
   const NewTemperature= TemperatureValue+1; 
  SetTemperatureValue(TemperatureValue+1 ); 

   if (NewTemperature>=15){
    SetTemperatureColor('hot')
   }
   SetTemperatureValue(NewTemperature); 
 }; 

 const DecreaseTemperature=()=>{
  const NewTemperature= TemperatureValue-1; 
 SetTemperatureValue(TemperatureValue-1 ); 

  if (NewTemperature<15){
   SetTemperatureColor('cold')
  }
  SetTemperatureValue(NewTemperature); 
}; 




    return (
        
<div className="app-container" style={{height:"450px",backgroundColor:"#18213D",boxShadow:"3px 1px 20px 5px black"}}> 
<h3 className="icon">  <FaTemperatureHigh /> </h3>
      
     <div className="temperature-display-container ">
        <div className={`temperature-display ${TemperatureColor}`}>{TemperatureValue}°C</div>
     </div>
       <div className='button-container'>
         <button onClick={()=>IncreaseTemperature() }>+</button>
         <button onClick={()=> DecreaseTemperature()}>-</button>
       </div>



</div>

    )




}



export default ControlClima; 