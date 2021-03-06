const mqtt =require("mqtt")
const Dashboard=require('./Controllers/DashboardController')
const express = require('express')
const {request,response}=require('express')
const mongoose=require("mongoose")
const authRoute=require('./Routes/Route')
const URL2="mongodb+srv://User2:1234User2@application1cluster.kqjgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const URL1="mongodb+srv://User1:1234User1@application1cluster.kqjgt.mongodb.net/LoginTest?retryWrites=true&w=majority"
const { Callbacks } = require("jquery")
const { auth } = require('./Controllers/auth')
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app=express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
//middlewares
app.use(express.json());
app.use(authRoute) 
app.use(cookieParser());

module.exports=[] 
//Connect to the database
mongoose.connect(URL1,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((result)=>{app.listen(3001);console.log("connected!!");})
.catch((e)=>console.log("Can't connect to database",e))
//app.listen(3001)
var options = {
    port: 1883, //don't put 8883 because it's encrypted
    host: 'mqtt://' + 'p9wc2t.messaging.internetofthings.ibmcloud.com', //put your ibm cloud host in the empty string
    clientId: 'a:p9wc2t:' + Math.random().toString(16).substr(2, 8), // a:orgId: in the empty string
    username: 'a-p9wc2t-n9oopbeesd', // your API key
    password: 'Bb(3?jGvIj@FTjz&(D', // your API token
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'};
   
    


var topicSub1="iot-2/type/esp1/id/dev01/evt/event1/fmt/json";
var topicSub2="iot-2/type/esp2/id/dev02/evt/event2/fmt/json";
var topicSub3="iot-2/type/rasp/id/dev03/evt/event3/fmt/json";
var topicPub1="iot-2/type/esp1/id/dev01/cmd/command1/fmt/json";
var topicPub2="iot-2/type/esp2/id/dev02/cmd/command2/fmt/json";
var topicPub3="iot-2/type/rasp/id/dev03/cmd/command3/fmt/json";
var indicators={data:{notification:{gaz:"",temp:"",mvt:"",bell:""},Room1:false,Room2:true,Room3:true,Alert:false,Door:false,Bell:true,ventilateur:true,temperature:32,OutDoor:false}}
exports.indicators=indicators;
var client  = mqtt.connect(options.host, options)
var data =Dashboard.commands;
var data = JSON.stringify(data);
console.log("connected flag "+client.connected);
client.on('message',function(topic,message,packet)
{
 message=JSON.parse(message) 
 console.log(message["d"]);
var som = message["d"]
for (var key in som) {
  if( (som.hasOwnProperty(key)) && (indicators.data.hasOwnProperty(key))) {
    indicators.data[key]=som[key]
 }
 if((som.hasOwnProperty(key))&&(indicators.data.notification.hasOwnProperty(key)))
 {indicators.data.notification[key]=som[key]}
}


});
client.on("connect",function () {
  console.log("connected"+client.connected);
  
})
client.on('error',function (error) {
  console.log("Can't connect"+error);
  process.exit(1)
})
function publish(topicPub2,data,options)
 {
  console.log("publishing",data);
  if(client.connected==true){
    client.publish(topicPub1,data,options);
    client.publish(topicPub2,data,options);
    client.publish(topicPub3,data,options);
  }
}
function subscribe(topicSub,options)
{
 
  if(client.connected==true){
    client.subscribe(topicSub,options);
    console.log("subscribed successfully");
    
  }
}
client.subscribe(topicSub1,{qos:0});
client.subscribe(topicSub2,{qos:0});
client.subscribe(topicSub3,{qos:0});
app.get('/login',auth,  (req, res) => {

  res.sendStatus(200);

})
////////////////////////////////////////////////////////////////
/* video streaming method */
////////////////////////////////////////////////////////////////




