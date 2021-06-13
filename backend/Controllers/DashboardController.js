const {request, response}=require('express')
module.exports.dashboard_get=(request,response)=>{
   // const states=request.body
    //console.log(states)
    const Commands={Bell:"red",Temperature:0}
    response.json(Commands)
   
       
    
}
module.exports.dashboard_post=(request,response)=>{
    const states=request.body
    console.log("States",states)
    //response.json(states)
    
    
    
}