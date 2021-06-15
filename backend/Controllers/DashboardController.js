const {request, response}=require('express')
const server=require("../server.js")
module.exports.dashboard_get=(request,response)=>{
    var data=server.indicators;
    response.json(data)
   
       
    
}
module.exports.dashboard_post=(request,response)=>{
    var commands=server.indicators.data;
    delete commands.notification;
    var update=request.body;
    for (var key in update) {
        if( (update.hasOwnProperty(key)) && (commands.data.hasOwnProperty(key))) {
          commands.data[key]=update[key]
       }}
    exports.commands=commands
    console.log("States",commands)
    //response.json(states)
    
    
    
}