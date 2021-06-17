const {request, response}=require('express')
const server=require("../server.js")
const mqtt =require("mqtt");
var fs = require('fs');
const express = require('express')
const app=express();
app.use(express.json());
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
    encoding: 'utf8'
    };

var topicSub="iot-2/type/esp2/id/dev02/evt/event2/fmt/json";
var topicPub1="iot-2/type/esp1/id/dev01/cmd/command1/fmt/json";
var topicPub2="iot-2/type/esp2/id/dev02/cmd/command2/fmt/json";
var topicPub3="iot-2/type/rasp/id/dev03/cmd/command3/fmt/json";
var client  = mqtt.connect(options.host, options)
module.exports.dashboard_get=(request,response)=>{
    var data=server.indicators;
    response.json(data)
    
   
    
}
module.exports.dashboard_post=(request,response)=>{
    commands=server.indicators;
    delete commands.notification;
    var update=request.body;
    for (var key in update) {
        if( (update.hasOwnProperty(key)) && (commands.data.hasOwnProperty(key))) {
          commands.data[key]=update[key]
       }}
       
       client.publish(topicPub2,JSON.stringify(commands),options);
       console.log("---------publish-----------");
       console.log(commands);
       console.log("---------publish done-----------");
       client.publish(topicPub1,JSON.stringify(commands),options);
       console.log("---------publish-----------");
       console.log(commands);
       console.log("---------publish done-----------");

    //console.log("States",commands)
    response.json(commands)
}
module.exports.streaming_get=(request,response)=>{
    console.log('request starting...', new Date());

  const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': 2592000, // 30 days
      /** add other headers as per requirement */
  };
  if (request.method === 'OPTIONS') {
      response.writeHead(204, headers);
      response.end();
      return;
  }
  var filePath = './videos/ipcam' + request.url;
  console.log(filePath);;
  fs.readFile(filePath, function (error, content) {
      response.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
      if (error) {
          if (error.code == 'ENOENT') {
              fs.readFile('./404.html', function (error, content) {
                  response.end(content, 'utf-8');
              });
          }
          else {
              response.writeHead(500);
              response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
              response.end();
          }
      }
      else {
          response.end(content, 'utf-8');
      }
  });
}

