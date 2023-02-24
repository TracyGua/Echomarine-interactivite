//import {joueSon} from '/main.js';

var currentHost = 'no input';
var oscWebSocket;
var statusMessage = 'not connected';
var receivedMessage = '';

let inputMessage;
let inputHost;

const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');
const btn4 = document.querySelector('.button4');
const btn5 = document.querySelector('.button5');
const btn6 = document.querySelector('.button6');


const connectButton = document.querySelector('.connect');

const son = new Audio('/media\Son\goutte_eau.wav');

function joueSon(){
    son.play();
}
connectButton.addEventListener('click', function() {
  onConnectClick();
 })

function onConnectClick() {
  // connect to WebSocket server:
  try {
    oscWebSocket = new osc.WebSocketPort({
      url: "ws://" + '192.168.1.186:12345',
      metadata: true
    });
  
    oscWebSocket.on("ready", onSocketOpen);
    oscWebSocket.on("message", onSocketMessage);
    oscWebSocket.on("error", function(e){
    print(e.message);
    });
  
    oscWebSocket.open();
  } catch(e) {
   print(e);
    statusMessage = e;
  }

}

btn1.addEventListener('click', function(){
onSendClick();
joueSon();
})

btn2.addEventListener('click', function(){
  onSendClick2();
  joueSon();
})
btn3.addEventListener('click', function(){
  onSendClick3();
  joueSon();
})
btn4.addEventListener('click', function(){
  onSendClick4();
  joueSon();
})
btn5.addEventListener('click', function(){
  onSendClick5();
  joueSon();
})
btn6.addEventListener('click', function(){
  onSendClick6();
  joueSon();
})


// function setup() {
//   createCanvas(400, 400);

//   let button = createButton('connect');
//   button.position(250, 80);
//   button.mousePressed(onConnectClick);
//   inputHost = createInput();
//   inputHost.position(50, 90);

//   textSize(16);
// }

// connect to WebSocket server:






  //Bouton animaux
function onSendClick() {
  // send the OSC message to server. (osc.js will convert it to binary packet):
  oscWebSocket.send({
    address: "/p5js/sayhi",
    args: [
      {
        type: "i",
        value: 1
      }
    ]
  });
}

function onSendClick2() {
  // send the OSC message to server. (osc.js will convert it to binary packet):
  oscWebSocket.send({
    address: "/p5js/sayhi",
    args: [
      {
        type: "i",
        value: 2
      }
    ]
  });
}

function onSendClick3() {
  // send the OSC message to server. (osc.js will convert it to binary packet):
  oscWebSocket.send({
    address: "/p5js/sayhi",
    args: [
      {
        type: "i",
        value: 3
      }
    ]
  });
}

function onSendClick4() {
  // send the OSC message to server. (osc.js will convert it to binary packet):
  oscWebSocket.send({
    address: "/p5js/sayhi",
    args: [
      {
        type: "i",
        value: 4
      }
    ]
  });
}

function onSendClick5() {
  // send the OSC message to server. (osc.js will convert it to binary packet):
  oscWebSocket.send({
    address: "/p5js/sayhi",
    args: [
      {
        type: "i",
        value: 5
      }
    ]
  });
}

function onSendClick6() {
  // send the OSC message to server. (osc.js will convert it to binary packet):
  oscWebSocket.send({
    address: "/p5js/sayhi",
    args: [
      {
        type: "i",
        value: 6
      }
    ]
  });
}


function onSocketOpen(e) {
  print('server connected');
  statusMessage = 'server connected';
  
}

function onSocketMessage(message) {
  print(message);
  if (message) {
    receivedMessage = 'address: ' + message.address;

    if (message.args && message.args.length > 0) {
      receivedMessage += ', value: ' + message.args[0].value;
    }
  }
}