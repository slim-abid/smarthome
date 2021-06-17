import React, {useState} from 'react'; 
import { FaTemperatureHigh } from 'react-icons/fa';
class ControlClima extends React.Component{

    constructor(props) {
      super(props);
 
      

    }
    
    activatevent = (e) =>
    {
      e.preventDefault();
        this.props.onVent ? this.props.handleChange(false) : this.props.handleChange(true); 
        
    }
     
 
   
  render() {
    return (
        
<div style={{width:"auto",height:"auto",backgroundColor:"none"}}> 
<h3 className="icon">  <FaTemperatureHigh /> </h3>
      
     <div className="temperature-display-container ">
        <div className={"temperature-display cold"}  >{this.props.temp}°C</div>
     </div>
       <div className='button-container mt-1'>
         <button onClick={(e)=>this.activatevent(e) }>{this.props.onVent ? "ON" : "OFF" }</button>
         
       </div>
</div>
    )
}
}



export default ControlClima; 