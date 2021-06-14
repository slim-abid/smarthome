import React, {useState} from 'react'; 
import { FaTemperatureHigh } from 'react-icons/fa';
class ControlClima extends React.Component{

    constructor(props) {
      super(props);
      this.state = { TemperatureColor:"cold",TemperatureValue: this.props.temp,ventilateur:this.props.onVent};
      
      
    }
    componentDidMount(){
      if (this.state.TemperatureValue>=15){
        this.setState({TemperatureColor:"hot"});
       }
       if (this.state.TemperatureValue<15){
        this.setState({TemperatureColor:"cold"});
       }
    }
    activatevent = (e) =>
    {
      e.preventDefault();
      
        this.state.ventilateur ? this.setState({ventilateur:false},function(){this.props.handleChange(true);}) : this.setState({ventilateur:true},function(){this.props.handleChange(false);}); 
        
    }
     
 
   
  render() {
    return (
        
<div style={{width:"auto",height:"auto",backgroundColor:"none"}}> 
<h3 className="icon">  <FaTemperatureHigh /> </h3>
      
     <div className="temperature-display-container ">
        <div className={`temperature-display ${this.state.TemperatureColor}`}  >{this.state.TemperatureValue}°C</div>
     </div>
       <div className='button-container mt-1'>
         <button onClick={(e)=>this.activatevent(e) }>{this.state.ventilateur ? "ON" : "OFF" }</button>
         
       </div>
</div>
    )
}
}



export default ControlClima; 