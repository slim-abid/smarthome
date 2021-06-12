const {request, response}=require('express')
module.exports.dashboard_get=(request,response)=>{
    const bell={"Bell":"green"}
    response.json(bell)
       
    
}
module.exports.dashboard_post=(request,response)=>{
    const states=request.body
    console.log(states)
    //response.json(states)
    const bell={"Bell":"red"}
    response.json(bell)
    
    
}