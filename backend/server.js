const mqtt =require("mqtt")
const express = require('express')
const {request,response}=require('express')
const mongoose=require("mongoose")
const authRoute=require('./Routes/Route')
const URL2="mongodb+srv://User2:1234User2@application1cluster.kqjgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const URL1="mongodb+srv://User1:1234User1@application1cluster.kqjgt.mongodb.net/LoginTest?retryWrites=true&w=majority"
const cors =require('cors')
const app=express();

//middlewares
app.use(express.json());
app.use(cors())
app.use(authRoute)   
//Connect to the database
//mongoose.connect(URL1,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
//.then((result)=>{app.listen(3001);console.log("connected!!");})
//.catch((e)=>console.log("Can't connect to database"))
app.listen(3001)
console.log("connected!!"); 
var options = {
    port: 1883, //don't put 8883 because it's encrypted
    host: 'mqtt://' + 'ubjaxo.messaging.internetofthings.ibmcloud.com', //put your ibm cloud host in the empty string
    clientId: 'a:ubjaxo:' + Math.random().toString(16).substr(2, 8), // a:orgId: in the empty string
    username: 'a-ubjaxo-uftuyiqnmw', // your API key
    password: 'H?xgp2KXHX&ma6Fwsw', // your API token
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client  = mqtt.connect(options.host, options)
var data = {msgIs : 'node js app is here'};
var data = JSON.stringify(data);
client.on('connect', function () {

  client.subscribe('iot-2/type/device_rasp/id/device1/evt/status/fmt/json', function (err) {
    if (!err) {
        console.log('subscribe done succesfully!');
        client.publish('iot-2/type/device_rasp/id/device1/evt/status/fmt/json', data)
    }
  })

})
