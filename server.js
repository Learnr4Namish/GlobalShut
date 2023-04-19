'use strict'
//GlobalShut Open-Source
// Modules
const localtunnel = require('localtunnel');
const express = require("express");
const ngrok = require('ngrok');
const parser = require("nkpl/bin/parser");
var screenshot = require('desktop-screenshot');
const {CloudflaredTunnel} = require("node-cloudflared-tunnel")
const app = express();
const app2 = express();
let globalTunnelURL;
const { spawn } = require('child_process')
const bodyParser = require("body-parser");
var busboy = require('connect-busboy');
var path = require('path');
const si = require('systeminformation');
//const audio = require('win-audio');
var nodemailer = require('nodemailer');
const multer  = require('multer');
var pdf = require("pdf-creator-node")
const axios = require("axios");
var readline = require('readline');
var formidable = require('formidable');
var NodeWebcam = require( "node-webcam" );
const open = require("open");
const fs = require("fs");
const cors = require('cors');
const gTTS = require('gtts');
const { stderr, stdout } = require('process');
const QRCode = require('qrcode')
app.use(cors({
    origin: '*'
}));
app2.use(cors({
  origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app2.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(busboy());
app2.use(busboy());
let x = 0;
const myChildProc = spawn('ngrok', ['my', 'args'], {shell: true})
// The Read-Line Module
var rl = readline.createInterface(
    process.stdin, process.stdout);
var osValue = process.platform;
let globalText;
let globalPassword;
let idVars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let passSVars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let passCVars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
askQ();
// The Basic Async Function for our program
async function askQ() {
          rl.question("\nPlease enter your NGROK token:- ", (ngtok) => {
              process.env.NGROK_TOKEN === String(ngtok);
              const tok = String(ngtok).toString();
              nextToGo(tok);
          });
        async function nextToGo(tok) {
          await askPassword(tok);
        }
      async function askPassword(tok) {
        rl.question('\nPlease enter a secure password for this globally accessible computer:- ', (staticCompPassd) => {
          if(String(staticCompPassd).toString() === null || String(staticCompPassd).toString() === undefined || String(staticCompPassd).toString().length < 5 || String(staticCompPassd).toString() === "AUTO" || String(staticCompPassd).toString() === "") { 
              console.log("\nImproper password received! Please try again!");
              askPassword(tok);
          }else{
            doTheRest(String(staticCompPassd), tok);
          }
      });
    }
  }    
   // Do the rest starts the tunnel and the server
async function doTheRest(staticCompPass, tok) {
    /*console.log("\nChecking whether the account exists or not...");
    const db = getFirestore();
    const userSrc = db.collection("users").doc(eAddress);
    const doc = await userSrc.get();
    if(!doc.exists) {
       console.log("\nChecked that you are a new user, please wait...");
       await askPassword();
       async function askPassword() {
        rl.question("\nPlease enter a strong password for your account:- ", (password) => {
          if(password.length < 10 || password === "" || password === undefined || password === null) {
             console.log("\nPassword is empty or too short! A password is supposed to be of atleast 10 characters!");
          }else{
            /* Every accoung gets a credit of $2 
             const data2doso = {
               emailAddress: eAddress,
               password:password,
               filePayed: "no",
               shutdownPayed:"no",
               accountCredit: 2,
               shutdowns:0,
               sessionTime:1,
             }
             const dataRes = db.collection("users").doc(eAddress).set(data2doso);
             rl.question("\nYour account has successfully been created! Please press the enter button to exit and then run the application with your email address", (p) => {
                process.exit(0);
             })
          }
       });
       }
    }else{
       
    }*/
    const generateCompPassword = function generateCompPassword() {
        let x1 = Math.floor((Math.random() * 9) + 1);
        let x2= Math.floor((Math.random() * 9) + 1);
        let x3 = Math.floor((Math.random() * 9) + 1);
        let x4 = Math.floor((Math.random() * 9) + 1);
        let x5 = Math.floor((Math.random() * 9) + 1);
        let x6 = Math.floor((Math.random() * 9) + 1);
        let x7 = Math.floor((Math.random() * 9) + 1);
        let x8 = Math.floor((Math.random() * 9) + 1);
        let x9 = Math.floor((Math.random() * 9) + 1);
        let x10 = Math.floor((Math.random() * 9) + 1);
        let y1 = Math.floor((Math.random() * 25) + 1);
        let y2= Math.floor((Math.random() * 25) + 1);
        let y3 = Math.floor((Math.random() * 25) + 1);
        let y4 = Math.floor((Math.random() * 25) + 1);
        let y5 = Math.floor((Math.random() * 25) + 1);
        let y6 = Math.floor((Math.random() * 25) + 1);
        let y7 = Math.floor((Math.random() * 25) + 1);
        let y8 = Math.floor((Math.random() * 25) + 1);
        let y9 = Math.floor((Math.random() * 25) + 1);
        let y10 = Math.floor((Math.random() * 25) + 1);
        return idVars[x1] + passSVars[y1] + idVars[x2] + passCVars[y2] + idVars[x3] + passSVars[y3] + idVars[x4] + passCVars[y4] + idVars[x5] + passSVars[y5] + idVars[x6] + passCVars[y6] + idVars[x7] + passSVars[y7] + idVars[x8] + passCVars[y8] + idVars[x9] + passSVars[y9] + idVars[x10] + passCVars[x10];
    }
    const generateCompID = function generateCompID() {
        let x1 = Math.floor((Math.random() * 9) + 1);
        let x2= Math.floor((Math.random() * 9) + 1);
        let x3 = Math.floor((Math.random() * 9) + 1);
        let x4 = Math.floor((Math.random() * 9) + 1);
        let x5 = Math.floor((Math.random() * 9) + 1);
        let x6 = Math.floor((Math.random() * 9) + 1);
        let x7 = Math.floor((Math.random() * 9) + 1);
        let x8 = Math.floor((Math.random() * 9) + 1);
        let x9 = Math.floor((Math.random() * 9) + 1);
        let x10 = Math.floor((Math.random() * 9) + 1);
        let x11 = Math.floor((Math.random() * 9) + 1);
        let x12 = Math.floor((Math.random() * 9) + 1);
        let x13 = Math.floor((Math.random() * 9) + 1);
        let x14 = Math.floor((Math.random() * 9) + 1);
        let x15 = Math.floor((Math.random() * 9) + 1);
        let x16 = Math.floor((Math.random() * 9) + 1);
        let x17 = Math.floor((Math.random() * 9) + 1);
        let x18 = Math.floor((Math.random() * 9) + 1);
        let x19 = Math.floor((Math.random() * 9) + 1);
        let x20 = Math.floor((Math.random() * 9) + 1);
        return idVars[x1] + idVars[x2] + idVars[x3] + idVars[x4] + idVars[x5] + idVars[x6] + idVars[x7] + idVars[x8] + idVars[x9] + idVars[x10] + idVars[x11]+ idVars[x12]+ idVars[x13]+ idVars[x14]+ idVars[x15]+ idVars[x16]+ idVars[x17]+ idVars[x18]+ idVars[x19]+ idVars[x20];
    }
    const fixedCompID = generateCompID();
    let fixedCompPass = String(staticCompPass).toString();
let globalManageQR;
let globalDirectShutdownQR;
    function startLocalTunnel() {
        (async () => {
          const url = await ngrok.connect({"addr":"0.0.0.0:6950", "authtoken":tok});
            console.log("GlobalShut: Successfully started the tunnel service!");
            const data = {
                 src: url,
              };
              globalTunnelURL = url;
              console.log("The URL to access your computer is " + url);
              // Add a new document in collection "cities" with ID 'LA'
              app2.get("/core/cred", (req, res) => {
                const password = req.query.password;
                if(password === fixedCompPass) {
                    const data = {
                        url: `${globalTunnelURL},`,
                        password: `${password}`   
                    };
                    let directShutdownQRURL;
                    QRCode.toDataURL(`${url}/code/shutdown?password=${password}&message=m&timeInSeconds=0`, (err, url) => {
                       if(err) return console.log(err);
                       directShutdownQRURL = url;
                       globalDirectShutdownQR = url;
                    });
                    let stringdata = JSON.stringify(data)
                    QRCode.toDataURL(`${url}`, function (err, url) {
                      if(err) return console.log("error occurred")
                      globalManageQR = url;
                      res.end(
                        `
                        <!DOCTYPE html>
                        <html>
                        <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta name="theme-color" content="#ff0077">
                        <title>GlobalShut PC | Scan and start managing your PC</title>
                        </head>
                        <style>
                        body {
                          font-family: Arial, Helvetica, sans-serif;
                          font-size: 20px;
                          .text-align:center;
                      }
                      html {
                          background-color: #ff0077;
                          color: white;
                      }
                      button {
                          padding: 15px;
                          margin-right: 0;
                          font-size: 20px;
                          background-color: #ffffff;
                          border-radius: 10px;
                          margin: 0;
                          width: 12.5em;
                          font-family: 'Trebuchet MS', sans-serif;
                          border: none;
                          -webkit-font-smoothing: antialiased;
                          -moz-osx-font-smoothing: grayscale;
                          color: #ff0077;
                          transition: 0.45s;
                        }
                        button:hover {
                          padding: 15px;
                          margin-right: 0;
                          font-family: 'Trebuchet MS', sans-serif;
                          font-size: 20px;
                          background-color: #000000;
                          border-radius: 10px;
                          margin: 0;
                          -webkit-font-smoothing: antialiased;
                          -moz-osx-font-smoothing: grayscale;
                          width: 12.5em;
                          border: none;
                          color: white;
                          transition: 0.45s;
                        }
                        
                        .LoginForm {
                          margin-left: 8px;
                          padding: 2px;
                       }
                       .MAG {
                         margin-right: 56px;
                       }
                      input {
                          font-size: 20px;
                          margin-left: 8px;
                          width: 100%;
                          padding: 15px;
                          font-size: 20px;
                          outline: none;
                          border-radius: 10px;
                          border: none;
                          border: #ff0077 solid 2px;
                        }
                        </style>
                        <body>
                          <div style="margin-left:8px">
                          <h1>GlobalShut</h1>
                          <p>Scan the QR Code below and start managing your computer:-</p>
                          <img src="${url}">
                          <h1>Scan and Shutdown</h1>
                          <p>To Shutdown this PC directly by scanning, scan the QR Code below:-</p>
                          <img src="${directShutdownQRURL}">
                        </body>
                        </html>
                        `
                       );
                  })      
                }else{
                  res.end(
                    `
                    <!DOCTYPE html>
                    <html>
                    <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="theme-color" content="#ff0077">
                    <title>GlobalShut PC</title>
                    </head>
                    <style>
                    body {
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 20px;
                      .text-align:center;
                  }
                  html {
                      background-color: #ff0077;
                      color: white;
                  }
                  button {
                      padding: 15px;
                      margin-right: 0;
                      font-size: 20px;
                      background-color: #ffffff;
                      border-radius: 10px;
                      margin: 0;
                      width: 12.5em;
                      font-family: 'Trebuchet MS', sans-serif;
                      border: none;
                      -webkit-font-smoothing: antialiased;
                      -moz-osx-font-smoothing: grayscale;
                      color: #ff0077;
                      transition: 0.45s;
                    }
                    button:hover {
                      padding: 15px;
                      margin-right: 0;
                      font-family: 'Trebuchet MS', sans-serif;
                      font-size: 20px;
                      background-color: #000000;
                      border-radius: 10px;
                      margin: 0;
                      -webkit-font-smoothing: antialiased;
                      -moz-osx-font-smoothing: grayscale;
                      width: 12.5em;
                      border: none;
                      color: white;
                      transition: 0.45s;
                    }
                    
                    .LoginForm {
                      margin-left: 8px;
                      padding: 2px;
                   }
                   .MAG {
                     margin-right: 56px;
                   }
                  input {
                      font-size: 20px;
                      margin-left: 8px;
                      width: 100%;
                      padding: 15px;
                      font-size: 20px;
                      outline: none;
                      border-radius: 10px;
                      border: none;
                      border: #ff0077 solid 2px;
                    }
                    </style>
                    <body>
                      <div style="margin-left:8px">
                      <h1>GlobalShut Invalid Password</h1>
                      <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                    </body>
                    </html>
                    `
                   );
                } 
            });
            startTheSecondService();
            async function startTheSecondService() {
              app2.listen(10489, "localhost", (err) => {
               if(err) {
                 console.log("There was some error starting the server!");
                 console.log(error);
              }
              });
              const options = {
                 "format": "A4",
                 "orientation": "portrait"
              } 
              const document = {
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC | Scan and start managing your PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut</h1>
                  <p>Scan the QR Code below and start managing your computer:-</p>
                  <img src="{{data.mg}}">
                  <h1>Scan and Shutdown</h1>
                  <p>To Shutdown this PC directly by scanning, scan the QR Code below:-</p>
                  <img src="{{data.ds}}">
                </body>
                </html>
                `,
                path: "./output_qr.pdf",
                data: {
                   mg: `${globalManageQR}`,
                   ds: `${globalDirectShutdownQR}`,
                }
            };
            pdf.create(document, options)
    .then(res => {
        console.log("successfully created PDF!");
        open(`http://localhost:10489/show/credentials?password=${fixedCompPass}?uid=${fixedCompID}`);
    })
    .catch(error => {
        console.error(error);
    });
           }
          })();
    }
    startLogic();
    async function startLogic() {
      await getTheIP();
    }
    /*console.log("GlobalShut: 1.5 hours timeout scheduled!")
    setTimeout(function() {
      ngrok.disconnect();
         console.log("First 1.5 hours completed! Restarting GlobalShut Service...");
         startLocalTunnel();
         setTimeout(function() {
          ngrok.disconnect();
             console.log("First 3 hours completed! Restarting GlobalShut Service...");
             startLocalTunnel();
             setTimeout(function() {
              ngrok.disconnect();
                 console.log("First 4.5 hours completed! Restarting GlobalShut Service...");
                 startLocalTunnel();
                 setTimeout(function() {
                  ngrok.disconnect();
                     console.log("First 6 hours completed! Restarting GlobalShut Service...");
                     startLocalTunnel();
                     setTimeout(function() {
                      ngrok.disconnect();
                         console.log("First 7.5 hours completed! Restarting GlobalShut Service...");
                         startLocalTunnel();
                         setTimeout(function() {
                          ngrok.disconnect();
                             console.log("First 9 hours completed! Restarting GlobalShut Service...");
                             startLocalTunnel();
                             setTimeout(function() {
                              ngrok.disconnect();
                                 console.log("First 10.5 hours completed! Restarting GlobalShut Service...");
                                 startLocalTunnel();
                                 setTimeout(function() {
                                  ngrok.disconnect();
                                     console.log("First 12 hours completed! Restarting GlobalShut Service...");
                                     startLocalTunnel();
                                     setTimeout(function() {
                                      ngrok.disconnect();
                                         console.log("First 13.5 hours completed! Restarting GlobalShut Service...");
                                         startLocalTunnel();
                                         setTimeout(function() {
                                          ngrok.disconnect();
                                             console.log("First 15 hours completed! Restarting GlobalShut Service...");
                                             startLocalTunnel();
                                             setTimeout(function() {
                                              ngrok.disconnect();
                                                 console.log("First 16.5 hours completed! Restarting GlobalShut Service...");
                                                 startLocalTunnel();
                                                 setTimeout(function() {
                                                  ngrok.disconnect();
                                                     console.log("First 18 hours completed! Restarting GlobalShut Service...");
                                                     startLocalTunnel();
                                                     setTimeout(function() {
                                                      ngrok.disconnect();
                                                         console.log("First 19.5 hours completed! Restarting GlobalShut Service...");
                                                         startLocalTunnel();
                                                         setTimeout(function() {
                                                          ngrok.disconnect();
                                                             console.log("First 21 hours completed! Restarting GlobalShut Service...");
                                                             startLocalTunnel();
                                                             setTimeout(function() {
                                                              ngrok.disconnect();
                                                                 console.log("First 22.5 hours completed! Restarting GlobalShut Service...");
                                                                 startLocalTunnel();
                                                                 setTimeout(function() {
                                                                  ngrok.disconnect();
                                                                     console.log("First 24 hours completed! The session is over! Please upgrade to get more hours of activity.");
                                                             }, 5400000);
                                                         }, 5400000);
                                                     }, 5400000);
                                                 }, 5400000);
                                             }, 5400000);
                                         }, 5400000);
                                     }, 5400000);
                                 }, 5400000);
                             }, 5400000);
                         }, 5400000);
                     }, 5400000);
                 }, 5400000);
             }, 5400000);
         }, 5400000);
     }, 5400000);
 }, 5400000);*/
    /*function startTimer() {
      if(x > 15) {
         ngrok.disconnect();
         console.log("Restarting GlobalShut Service...");
      }else{
         x++;
      }
   }
   setInterval(startTimer, 1000);*/
   
    async function getTheIP() {
      let exec = require('child_process').exec;
                    exec(`curl https://curlmyip.net/`, (error, stdout, stderr) => {
                        if(error) console.log(error);
                        //console.log("Successfully got the Public IP address of this computer. Starting the server...");
                        exec(`curl -H "User-Agent: keycdn-tools:https://google.com" "https://tools.keycdn.com/geo.json?host=${String(stdout)}`, (e2, std2, stderr2) => {
                          doTheRestOf(stdout, String(std2).toString());
                        });
                        
    })
    }
   async function doTheRestOf(PrivateIPAddr, JSONResponse) {
    const DataInObj = JSON.parse(JSONResponse);
    //console.log(DataInObj);
    /*app.get("/demo/test/", (req, res) => {
        res.download(path.join(__dirname, "/test_speed/1gb.1.test"));
    });*/
    app.get("/", (req, res) => {
      res.end(`
      <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
        }
     
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Computer Management</h1>
          <p>Please choose a option to manage your computer.</p>
         <div>
         <h1>Shutdown your Computer</h1>
         <p>Shut your computer down remotely. The computer needs to have a internet connection.</p>
         <a href="/shutdown"><button>Shutdown</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
          <h1>Restart your computer</h1>
          <p>Restart your computer remotely. The computer needs to have a internet connection.</p>
          <a href="/restart"><button>Restart</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
           <h1>Get a file from your computer</h1>
           <p>Easily download a file from your computer or manage the files and folders of your computer using GlobalShut.</p>
           <a href="/get-file"><button>Get File</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Get the date and time of your computer</h1>
         <p>Easily get the time and date of your computer.</p>
         <a href="/timeInComputer"><button>Get the time</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Put this computer to sleep</h1>
         <p>Remotely put this computer to sleep. The computer needs to have an active internet connection</p>
         <a href="/sleep"><button>Put to sleep</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Get the private IP address of this computer</h1>
         <p>Using GlobalShut, you can get the private IP address of this computer</p>
         <a href="/get-private-ip"><button>Get Private IP</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Get the public IP address of this computer</h1>
         <p>Using GlobalShut, you can get the public IP address of this computer</p>
         <a href="/get-public-ip"><button>Get public IP</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Know about the CPU</h1>
         <p>Know more about the CPU of the computer.</p>
         <a href="/cpu"><button>Know about CPU</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Execute a command</h1>
         <p>Execute a command in this computer on the go with GlobalShut</p>
         <a href="/globalshut/cmd"><button>Open GlobalCMD</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Open Windows Explorer (File Explorer)</h1>
         <p>Remotely open windows explorer or file explorer with GlobalShut.</p>
         <a href="/open/explorer"><button>Open Explorer</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Open an application</h1>
         <p>Remotely open any application with GlobalShut.</p>
         <a href="/open/app"><button>Open an App</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Open common apps</h1>
         <p>If you don't know what the names of your application are, then</p>
         <a href="/open/common-apps"><button>Open an App</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Open a URL on the default browser</h1>
         <p>Remotely open any link or URL on the default browser with GlobalShut.</p>
         <a href="/open/link"><button>Open my link</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Take a screenshot of this computer's screen</h1>
         <p>Remotely take a screenshot of this computer and view it.</p>
         <a href="/globashut/screenshot"><button>Take screenshot</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Turn off any other windows computer on the same network</h1>
         <p>Remotely shutdown other PC in the same network using GlobalShut</p>
         <a href="/shutdown/m"><button>Open GlobalMultiShutdown</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Restart any other windows pc on the same network</h1>
         <p>Remotely restart any other PC in the same network using GlobalShut.</p>
         <a href="/restart/m"><button>Open GlobalMultiRestart</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Announce a text or convert text to speech in computer</h1>
         <p>Remotely announce anything you want to by using GlobalShut.</p>
         <a href="/globalshut/globalsay"><button>Open GlobalSay</button></a>
         <hr>
         <br>
         <br>
         <div>
         <h1>Send a message or notification to any other PC in the same local network.</h1>
         <p>Remotely send a message or notification to any other PC in the same local network</p>
         <a href="/message/m"><button>Open GlobalMultiMessage</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Change the system volume</h1>
         <p>Change the volume of the system using GlobalShut</p>
         <a href="/globalshut/globalsound"><button>Open GlobalSound</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Generate a programmed QR Code for a specific function.</h1>
         <p>Generate a QR Code to manage your GlobalShut PC more effectively using scan and run features.</p>
         <a href="/globalshut/globalqr/login"><button>Open GlobalQR</button></a>
         </div>
         <hr>
         <br>
         <br>
         <div>
         <h1>Make the computer's screen black</h1>
         <p>Remotely make the computer's screen black or just turn the screen of the computer off using GlobalShut.</p>
         <a href="/globalshut/globalblack"><button>Try now</button></a>
         </div>
         <div>
           <p>Computer IP Address: <b>${PrivateIPAddr}</b></p>
           <p>Location: ${DataInObj.data.geo.country_name}, ${DataInObj.data.geo.continent_name}</p>
           <p>ISP: ${DataInObj.data.geo.isp}</p>
         </div>
         </div>
        </body>
        </html>
      `);
  });
  app.get("/shutdown", function(req, res) {
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut</h1>
          <p>To shut this computer down, please enter its secured unique passcode (UPC) and time in seconds</p>
          </div>
          <div>
          <form method="post" action="shutdown" class="LoginForm">
          <div class="MAG">
          <input name="password" type="password" placeholder="********************">
          <br>
          <br>
          <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
          <br>
          <br>
          <input name="message" type="text" placeholder="Shutdown message">
          <br>
          <br>
          <button type="submit">Request Shutdown</button>
          </div>
          </form>
          </div>
        </body>
        </html>
      `);
  });
  app.get("/shutdown1", function(req, res) {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut</h1>
        <p>To shut this computer down, please enter its secured unique passcode (UPC) and time in seconds</p>
        </div>
        <div>
        <form method="post" action="shutdown" class="LoginForm">
        <div class="MAG">
        <input name="password" type="password" placeholder="********************">
        <br>
        <br>
        <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
        <br>
        <br>
        <input name="message" type="text" placeholder="Shutdown message">
        <br>
        <br>
        <button type="submit">Request Shutdown</button>
        </div>
        </form>
        </div>
      </body>
      </html>
    `);
});
app.get("/shutdown2", function(req, res) {
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut</h1>
      <p>To shut this computer down, please enter its secured unique passcode (UPC) and time in seconds</p>
      </div>
      <div>
      <form method="post" action="shutdown" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
      <br>
      <br>
      <input name="message" type="text" placeholder="Shutdown message">
      <br>
      <br>
      <button type="submit">Request Shutdown</button>
      </div>
      </form>
      </div>
    </body>
    </html>
  `);
});
app.get("/shutdown3", function(req, res) {
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut</h1>
      <p>To shut this computer down, please enter its secured unique passcode (UPC) and time in seconds</p>
      </div>
      <div>
      <form method="post" action="shutdown" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
      <br>
      <br>
      <input name="message" type="text" placeholder="Shutdown message">
      <br>
      <br>
      <button type="submit">Request Shutdown</button>
      </div>
      </form>
      </div>
    </body>
    </html>
  `);
});
app.get("/shutdown4", function(req, res) {
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut</h1>
      <p>To shut this computer down, please enter its secured unique passcode (UPC) and time in seconds</p>
      </div>
      <div>
      <form method="post" action="shutdown" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
      <br>
      <br>
      <input name="message" type="text" placeholder="Shutdown message">
      <br>
      <br>
      <button type="submit">Request Shutdown</button>
      </div>
      </form>
      </div>
    </body>
    </html>
  `);
});
app.get("/shutdown5", function(req, res) {
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut</h1>
      <p>To shut this computer down, please enter its secured unique passcode (UPC) and time in seconds</p>
      </div>
      <div>
      <form method="post" action="shutdown" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
      <br>
      <br>
      <input name="message" type="text" placeholder="Shutdown message">
      <br>
      <br>
      <button type="submit">Request Shutdown</button>
      </div>
      </form>
      </div>
    </body>
    </html>
  `);
});
  app.post("/api_shutdown", (req, res) => {
    const body = req.body;
    const password = body.password;
    const timeInSeconds = body.timeInSeconds;
    if(password === fixedCompPass) {
      res.json({type:"success", message:"Shutdown was successful!"}); 
      setTimeout(execShutdown, 1000);
       async function execShutdown() {
        exec(`shutdown -s -t ${timeInSeconds}`, (error, stdout, stderr) => {
          if(error) console.log(error);
          console.log("Successfully received Shutdown request!");
  })
       };
    }else{
      res.json({type:"error", message:"Invalid Password Provided! Please try again with the correct password."})
    }
  });
  app.post("/shutdown", function(req, res){
      const body = req.body;
      const password = body.password;
      const timeInSeconds = body.timeInSeconds;
      const message = body.message;
      //console.log(body);
      //const nTimeINSeconds = Number(timeInSeconds);
      console.log("\nReceived the shutdown message as " + message);
      if (osValue == 'darwin') {
          // For MacOS
               //console.log(data);
               if(password === fixedCompPass) {
                   // Coming Soon
               }else{
                res.end(
                  `
                  <!DOCTYPE html>
                  <html>
                  <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta name="theme-color" content="#ff0077">
                  <title>GlobalShut PC</title>
                  </head>
                  <style>
                  body {
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 20px;
                    .text-align:center;
                }
                html {
                    background-color: #ff0077;
                    color: white;
                }
                button {
                    padding: 15px;
                    margin-right: 0;
                    font-size: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    margin: 0;
                    width: 12.5em;
                    font-family: 'Trebuchet MS', sans-serif;
                    border: none;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    color: #ff0077;
                    transition: 0.45s;
                  }
                  button:hover {
                    padding: 15px;
                    margin-right: 0;
                    font-family: 'Trebuchet MS', sans-serif;
                    font-size: 20px;
                    background-color: #000000;
                    border-radius: 10px;
                    margin: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    width: 12.5em;
                    border: none;
                    color: white;
                    transition: 0.45s;
                  }
                  
                  .LoginForm {
                    margin-left: 8px;
                    padding: 2px;
                 }
                 .MAG {
                   margin-right: 56px;
                 }
                input {
                    font-size: 20px;
                    margin-left: 8px;
                    width: 100%;
                    padding: 15px;
                    font-size: 20px;
                    outline: none;
                    border-radius: 10px;
                    border: none;
                    border: #ff0077 solid 2px;
                  }
                  </style>
                  <body>
                    <div style="margin-left:8px">
                    <h1>GlobalShut Invalid Password</h1>
                    <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                  </body>
                  </html>
                  `
                 );
              }
      }else if(osValue == 'win32'){
          // For Windows
              //console.log(data);
              if(password === fixedCompPass) {
                  // Shut now
                  let exec = require('child_process').exec;
                  exec(`shutdown -s -t ${timeInSeconds}`, (error, stdout, stderr) => {
                      if(error) console.log(error);
                      
                      console.log("Successfully received Shutdown request!");
  })
              }else{
                res.end(
                  `
                  <!DOCTYPE html>
                  <html>
                  <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta name="theme-color" content="#ff0077">
                  <title>GlobalShut PC</title>
                  </head>
                  <style>
                  body {
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 20px;
                    .text-align:center;
                }
                html {
                    background-color: #ff0077;
                    color: white;
                }
                button {
                    padding: 15px;
                    margin-right: 0;
                    font-size: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    margin: 0;
                    width: 12.5em;
                    font-family: 'Trebuchet MS', sans-serif;
                    border: none;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    color: #ff0077;
                    transition: 0.45s;
                  }
                  button:hover {
                    padding: 15px;
                    margin-right: 0;
                    font-family: 'Trebuchet MS', sans-serif;
                    font-size: 20px;
                    background-color: #000000;
                    border-radius: 10px;
                    margin: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    width: 12.5em;
                    border: none;
                    color: white;
                    transition: 0.45s;
                  }
                  
                  .LoginForm {
                    margin-left: 8px;
                    padding: 2px;
                 }
                 .MAG {
                   margin-right: 56px;
                 }
                input {
                    font-size: 20px;
                    margin-left: 8px;
                    width: 100%;
                    padding: 15px;
                    font-size: 20px;
                    outline: none;
                    border-radius: 10px;
                    border: none;
                    border: #ff0077 solid 2px;
                  }
                  </style>
                  <body>
                    <div style="margin-left:8px">
                    <h1>GlobalShut Invalid Password</h1>
                    <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                  </body>
                  </html>
                  `
                 );
              }
      }else if(osValue== 'linux') {
          // For Linux
              //console.log(data);
              if(password === fixedCompPass) {
                  // Shut now
              }else{
                res.end(
                  `
                  <!DOCTYPE html>
                  <html>
                  <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta name="theme-color" content="#ff0077">
                  <title>GlobalShut PC</title>
                  </head>
                  <style>
                  body {
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 20px;
                    .text-align:center;
                }
                html {
                    background-color: #ff0077;
                    color: white;
                }
                button {
                    padding: 15px;
                    margin-right: 0;
                    font-size: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    margin: 0;
                    width: 12.5em;
                    font-family: 'Trebuchet MS', sans-serif;
                    border: none;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    color: #ff0077;
                    transition: 0.45s;
                  }
                  button:hover {
                    padding: 15px;
                    margin-right: 0;
                    font-family: 'Trebuchet MS', sans-serif;
                    font-size: 20px;
                    background-color: #000000;
                    border-radius: 10px;
                    margin: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    width: 12.5em;
                    border: none;
                    color: white;
                    transition: 0.45s;
                  }
                  
                  .LoginForm {
                    margin-left: 8px;
                    padding: 2px;
                 }
                 .MAG {
                   margin-right: 56px;
                 }
                input {
                    font-size: 20px;
                    margin-left: 8px;
                    width: 100%;
                    padding: 15px;
                    font-size: 20px;
                    outline: none;
                    border-radius: 10px;
                    border: none;
                    border: #ff0077 solid 2px;
                  }
                  </style>
                  <body>
                    <div style="margin-left:8px">
                    <h1>GlobalShut Invalid Password</h1>
                    <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                  </body>
                  </html>
                  `
                 );
              }
      }else{
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut OS Error</h1>
            <p>Sorry, But GlobalShut doesn't support your OS!</p>
          </body>
          </html>
          `
         );
      }
  });
  app.get("/code/shutdown", function(req, res){
    const body = req.query;
    const password = body.password;
    const timeInSeconds = body.timeInSeconds;
    const message = body.message;
    //console.log(body);
    //const nTimeINSeconds = Number(timeInSeconds);
    console.log("\nReceived the shutdown message as " + message);
    if (osValue == 'darwin') {
        // For MacOS
             //console.log(data);
             if(password === fixedCompPass) {
                 // Coming Soon
             }else{
              res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Invalid Password</h1>
                  <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                </body>
                </html>
                `
               );
            }
    }else if(osValue == 'win32'){
        // For Windows
            //console.log(data);
            if(password === fixedCompPass) {
                // Shut now
                let exec = require('child_process').exec;
                exec(`shutdown -s -t ${timeInSeconds}`, (error, stdout, stderr) => {
                    if(error) console.log(error);
                    
                    console.log("Successfully received Shutdown request!");
})
            }else{
              res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Invalid Password</h1>
                  <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                </body>
                </html>
                `
               );
            }
    }else if(osValue== 'linux') {
        // For Linux
            //console.log(data);
            if(password === fixedCompPass) {
                // Shut now
            }else{
              res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Invalid Password</h1>
                  <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                </body>
                </html>
                `
               );
            }
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut OS Error</h1>
          <p>Sorry, But GlobalShut doesn't support your OS!</p>
        </body>
        </html>
        `
       );
    }
});
  app.post("/shutdown1", function(req, res){
    const body = req.body;
    const password = body.password;
    const timeInSeconds = body.timeInSeconds;
    const message = body.message;
    //console.log(body);
    //const nTimeINSeconds = Number(timeInSeconds);
    console.log("\nReceived the shutdown message as " + message);
    if (osValue == 'darwin') {
        // For MacOS
             //console.log(data);
             if(password === fixedCompPass) {
                 // Coming Soon
             }else{
              res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Invalid Password</h1>
                  <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                </body>
                </html>
                `
               );
            }
    }else if(osValue == 'win32'){
        // For Windows
            //console.log(data);
            if(password === fixedCompPass) {
                // Shut now
                let exec = require('child_process').exec;
                exec(`shutdown -s -t ${timeInSeconds}`, (error, stdout, stderr) => {
                    if(error) console.log(error);
                    
                    console.log("Successfully received Shutdown request!");
})
            }else{
              res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Invalid Password</h1>
                  <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                </body>
                </html>
                `
               );
            }
    }else if(osValue== 'linux') {
        // For Linux
            //console.log(data);
            if(password === fixedCompPass) {
                // Shut now
            }else{
              res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Invalid Password</h1>
                  <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
                </body>
                </html>
                `
               );
            }
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut OS Error</h1>
          <p>Sorry, But GlobalShut doesn't support your OS!</p>
        </body>
        </html>
        `
       );
    }
});
app.post("/shutdown2", function(req, res){
  const body = req.body;
  const password = body.password;
  const timeInSeconds = body.timeInSeconds;
  const message = body.message;
  //console.log(body);
  //const nTimeINSeconds = Number(timeInSeconds);
  console.log("\nReceived the shutdown message as " + message);
  if (osValue == 'darwin') {
      // For MacOS
           //console.log(data);
           if(password === fixedCompPass) {
               // Coming Soon
           }else{
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Invalid Password</h1>
                <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
              </body>
              </html>
              `
             );
          }
  }else if(osValue == 'win32'){
      // For Windows
          //console.log(data);
          if(password === fixedCompPass) {
              // Shut now
              let exec = require('child_process').exec;
              exec(`shutdown -s -t ${timeInSeconds}`, (error, stdout, stderr) => {
                  if(error) console.log(error);
                  
                  console.log("Successfully received Shutdown request!");
})
          }else{
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Invalid Password</h1>
                <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
              </body>
              </html>
              `
             );
          }
  }else if(osValue== 'linux') {
      // For Linux
          //console.log(data);
          if(password === fixedCompPass) {
              // Shut now
          }else{
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Invalid Password</h1>
                <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
              </body>
              </html>
              `
             );
          }
  }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: white;
        color: black;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut OS Error</h1>
        <p>Sorry, But GlobalShut doesn't support your OS!</p>
      </body>
      </html>
      `
     );
  }
});
  app.get("/restart", (req, res) => {
     res.end(`
     <!DOCTYPE html>
     <html>
     <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="theme-color" content="#ff0077">
     <title>GlobalShut PC</title>
     </head>
     <style>
     body {
       font-family: Arial, Helvetica, sans-serif;
       font-size: 20px;
       .text-align:center;
   }
   html {
       background-color: #ff0077;
       color: white;
   }
   button {
       padding: 15px;
       margin-right: 0;
       font-size: 20px;
       background-color: #ffffff;
       border-radius: 10px;
       margin: 0;
       width: 12.5em;
       font-family: 'Trebuchet MS', sans-serif;
       border: none;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       color: #ff0077;
       transition: 0.45s;
     }
     button:hover {
       padding: 15px;
       margin-right: 0;
       font-family: 'Trebuchet MS', sans-serif;
       font-size: 20px;
       background-color: #000000;
       border-radius: 10px;
       margin: 0;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       width: 12.5em;
       border: none;
       color: white;
       transition: 0.45s;
     }
     
     .LoginForm {
       margin-left: 8px;
       padding: 2px;
    }
    .MAG {
      margin-right: 56px;
    }
   input {
       font-size: 20px;
       margin-left: 8px;
       width: 100%;
       padding: 15px;
       font-size: 20px;
       outline: none;
       border-radius: 10px;
       border: none;
       border: #ff0077 solid 2px;
     }
     </style>
     <body>
       <div style="margin-left:8px">
       <h1>GlobalShut</h1>
       <p>To restart this computer, please enter its secured unique passcode (UPC) and time in seconds</p>
       </div>
       <div>
       <form method="post" action="restart" class="LoginForm">
       <div class="MAG">
       <input name="password" type="password" placeholder="********************">
       <br>
       <br>
       <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
       <br>
       <br>
       <button type="submit">Request Restart</button>
       </div>
       </form>
       </div>
     </body>
     </html>
     `);
  }); 
  
  app.post("/restart", (req, res) => {
      const password = req.body.password;
      const time = req.body.timeInSeconds;
      if(password === fixedCompPass) {
      let exec = require('child_process').exec;
      exec(`shutdown -r -t ${time}`, (error, stdout, stderr) => {
          if(error) console.log(error);
          console.log("Successfully received Shutdown request!");
}) 
      }else{
         res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Invalid Password</h1>
            <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
          </body>
          </html>
          `
         );
      }
  });
  app.get("/code/restart", (req, res) => {
    const password = req.query.password;
    const time = req.query.timeInSeconds;
    if(password === fixedCompPass) {
    let exec = require('child_process').exec;
    exec(`shutdown -r -t ${time}`, (error, stdout, stderr) => {
        if(error) console.log(error);
        console.log("Successfully received Shutdown request!");
}) 
    }else{
       res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
});
  app.get("/end-file", (req, res) => {
     res.end(`
     <!DOCTYPE html>
     <html>
     <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="theme-color" content="#ff0077">
     <title>GlobalShut PC | end a file</title>
     </head>
     <style>
     body {
       font-family: Arial, Helvetica, sans-serif;
       font-size: 20px;
       .text-align:center;
   }
   html {
       background-color: #ff0077;
       color: white;
   }
   button {
       padding: 15px;
       margin-right: 0;
       font-size: 20px;
       background-color: #ffffff;
       border-radius: 10px;
       margin: 0;
       width: 12.5em;
       font-family: 'Trebuchet MS', sans-serif;
       border: none;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       color: #ff0077;
       transition: 0.45s;
     }
     button:hover {
       padding: 15px;
       margin-right: 0;
       font-family: 'Trebuchet MS', sans-serif;
       font-size: 20px;
       background-color: #000000;
       border-radius: 10px;
       margin: 0;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       width: 12.5em;
       border: none;
       color: white;
       transition: 0.45s;
     }
     
     .LoginForm {
       margin-left: 8px;
       padding: 2px;
    }
    .MAG {
      margin-right: 56px;
    }
   input {
       font-size: 20px;
       margin-left: 8px;
       width: 100%;
       padding: 15px;
       font-size: 20px;
       outline: none;
       border-radius: 10px;
       border: none;
       border: #ff0077 solid 2px;
     }
     </style>
     <body>
       <div style="margin-left:8px">
       <h1>GlobalShut</h1>
       <p>To end a file, Please enter its secured UPC (Unique Passcode) and then select a file. (File size is unlimited but should be less than your disk-space</p>
       </div>
       <div>
       <form method="post" action="end-file" class="LoginForm">
       <div class="MAG">
       <input name="password" type="password" placeholder="********************">
       <br>
       <br>
       <input name="file" type="file" value="0">
       <br>
       <br>
       <button type="submit">end the file</button>
       </div>
       </form>
       </div>
     </body>
     </html>
     `);
  });
  app.post("/send-file", (req, res, next) => {
    const body = req.body;
    const password = body.password;
    if(password === fixedCompPass) {
      /*var storage = multer.diskStorage({
        destination: __dirname + "/files-sent-from-devices/"      
      });
     /* var upload = multer({
        storage: storage
    }).any();
    upload(req, res, function(err) {
      if (err) {
          console.log(err);
          return res.end('Error');
      } else {
          console.log(req.body);
          console.log(req.body.file);
          res.end('File uploaded');
      }
  });*/
  var form = new formidable.IncomingForm();
  form.uploadDir = "./files-sent-from-devices";
  form.keepExtensions = true;
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    console.log("form.bytesReceived");
    /*console.log("file size: "+JSON.stringify(files.fileUploaded.size));
    console.log("file path: "+JSON.stringify(files.fileUploaded.path));
    console.log("file name: "+JSON.stringify(files.fileUploaded.name));
    console.log("file type: "+JSON.stringify(files.fileUploaded.type));
    console.log("astModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate));*/
    fs.rename(files.fileUploaded.path, './files-sent-from-devices/' +files.fileUploaded.name, function(err) {
    if (err)
        throw err;
      console.log('Upload complete!');  
    });
      res.end();
});
    }else{
         res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Invalid Password</h1>
            <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
          </body>
          </html>
          `
         );
      }
  });
  app.get("/timeInComputer", (req, res) => {
      const d = new Date();
      const fullYear = d.getFullYear();
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monthName = months[d.getMonth()];
      const dayNum = d.getDate();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[d.getDay()];
      const date = String(dayNum) + "/" + String((((d.getMonth()) + 1).toString())) + "/" + String(fullYear).toString();
      const hours = d.getHours();
      const minute = d.getMinutes();
      const seconds = d.getSeconds();
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Computer Time</h1>
          <h1><u>Date</u></h1>
          <p>Date: <b>${date}</b></p>
          <p>Month Name: <b>${monthName}</b></p>
          <h1><u>Time</u></h1>
          <h1><b>${hours}:${minute}:${seconds}</b></h1>
        </body>
        </html>
        `
       );
  });
  /*app.get("/latestImage", (req, res) => {
    var opts = {
      width: 1920,
      height: 1080,
      quality: 100,    
      frames: 300,  
      delay: 0, 
      saveShots: true,
      output: "jpeg",
      device: false,
      callbackReturn: "location",
      verbose: false
  
  };
  var Webcam = NodeWebcam.create( opts );
  NodeWebcam.capture( "test_picture", opts, function( err, data ) {
       const dataURL = data;
       //console.log(dataURL);
       res.send(`
         <!DOCTYPE html>
         <html>
         <head>
         <meta name="viewport" cotent="width=device-width, initial-scale=1.0">
         <title>GlobalShut Computer Image SnapShot</title>
         </head>
         <body>
         <img src="/test_picture">
         </body>
         </html>
       `);
  });
  });
  app.get("/test_picture", (req, res) => {
     res.sendFile(__dirname + "/test_picture.jpg");
  })*/
  app.get("/get-file", (req, res) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut File Transfer</h1>
        <p>GlobalShut can transfer a file from the computer to your device through the internet. Please enter the secured Unique Pass Code to continue</p>
        <div>
       <form method="post" action="get-file" class="LoginForm">
       <div class="MAG">
       <input name="password" type="password" placeholder="********************">
       <br>
       <br>
       <button type="submit">Continue</button>
       </div>
       </form>
       </div>
      </body>
      </html>
      `
     );
  });
  app.post("/get-file", (req, res) => {
     const body = req.body;
     const password = body.password;
     if(password === fixedCompPass) {
       fs.readdir("/", function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
             res.write(`<!DOCTYPE html>
             <html>
             <head>
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta name="theme-color" content="#ff0077">
             <title>GlobalShut PC</title>
             </head>
             <style>
             body {
               font-family: Arial, Helvetica, sans-serif;
               font-size: 20px;
               .text-align:center;
           }
           html {
               background-color: #ff0077;
               color: white;
           }
           button {
               padding: 15px;
               margin-right: 0;
               font-size: 20px;
               background-color: #ffffff;
               border-radius: 10px;
               margin: 0;
               width: 12.5em;
               font-family: 'Trebuchet MS', sans-serif;
               border: none;
               -webkit-font-smoothing: antialiased;
               -moz-osx-font-smoothing: grayscale;
               color: #ff0077;
               transition: 0.45s;
             }
             button:hover {
               padding: 15px;
               margin-right: 0;
               font-family: 'Trebuchet MS', sans-serif;
               font-size: 20px;
               background-color: #000000;
               border-radius: 10px;
               margin: 0;
               -webkit-font-smoothing: antialiased;
               -moz-osx-font-smoothing: grayscale;
               width: 12.5em;
               border: none;
               color: white;
               transition: 0.45s;
             }
             
             .LoginForm {
               margin-left: 8px;
               padding: 2px;
            }
            .MAG {
              margin-right: 56px;
            }
           input {
               font-size: 20px;
               margin-left: 8px;
               width: 100%;
               padding: 15px;
               font-size: 20px;
               outline: none;
               border-radius: 10px;
               border: none;
               border: #ff0077 solid 2px;
             }
             </style>
             <body>
               <div style="margin-left:8px">
               <ul style="list-style-type:none;"><li><a href="/filesDir?upc=${fixedCompPass}&dir=${"/" + file}" style="color:white;">${file}</a></li>`);
             res.write("</ul></div>");
    res.write("</body>");
    res.write("</html>");
        });
    });
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  });
  app.get("/filesDir", (req, res) => {
    const upc = req.query.upc;
    const dir = req.query.dir;
    if(upc === fixedCompPass) {
          if(fs.statSync(dir).isDirectory()) {
            fs.readdir(dir, function (err, files) {
              //handling error
              if (err) {
                  return console.log('Unable to scan directory: ' + err);
              } 
              //listing all files using forEach
              files.forEach(function (file) {
                   res.write(`<!DOCTYPE html>
                   <html>
                   <head>
                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   <meta name="theme-color" content="#ff0077">
                   <title>GlobalShut PC</title>
                   </head>
                   <style>
                   body {
                     font-family: Arial, Helvetica, sans-serif;
                     font-size: 20px;
                     .text-align:center;
                 }
                 html {
                     background-color: #ff0077;
                     color: white;
                 }
                 button {
                     padding: 15px;
                     margin-right: 0;
                     font-size: 20px;
                     background-color: #ffffff;
                     border-radius: 10px;
                     margin: 0;
                     width: 12.5em;
                     font-family: 'Trebuchet MS', sans-serif;
                     border: none;
                     -webkit-font-smoothing: antialiased;
                     -moz-osx-font-smoothing: grayscale;
                     color: #ff0077;
                     transition: 0.45s;
                   }
                   button:hover {
                     padding: 15px;
                     margin-right: 0;
                     font-family: 'Trebuchet MS', sans-serif;
                     font-size: 20px;
                     background-color: #000000;
                     border-radius: 10px;
                     margin: 0;
                     -webkit-font-smoothing: antialiased;
                     -moz-osx-font-smoothing: grayscale;
                     width: 12.5em;
                     border: none;
                     color: white;
                     transition: 0.45s;
                   }
                   
                   .LoginForm {
                     margin-left: 8px;
                     padding: 2px;
                  }
                  .MAG {
                    margin-right: 56px;
                  }
                 input {
                     font-size: 20px;
                     margin-left: 8px;
                     width: 100%;
                     padding: 15px;
                     font-size: 20px;
                     outline: none;
                     border-radius: 10px;
                     border: none;
                     border: #ff0077 solid 2px;
                   }
                   </style>
                   <body>
                     <div style="margin-left:8px">
                     <ul style="list-style-type:none;"><li><a href="/filesDir?upc=${fixedCompPass}&dir=${dir + "/" + file}" style="color:white;">${file}</a></li>`);
                   res.write("</ul></div>");
          res.write("</body>");
          res.write("</html>");
              });
            });
          }else{
            var stats = fs.statSync(dir); 
            var fileSizeInBytes = stats.size;
            var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
              res.write(`<!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              textarea {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 25px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Files</h1>
                <p>File path:${dir}</p>
                <p>Please choose a option</p>
                <div>
                   <form method="get" action="download-file">
                      <div class="MAG">
                      <input name="password" value="${upc}" hidden>
                      <input name="path" value="${dir}" hidden>
                      <button type="submit">Download the file</button>
                      </div>
                   </form>
                   <br>
                   <form method="post" action="pc-open-file">
                      <div class="MAG">
                      <input name="password" value="${upc}" hidden>
                      <input name="path" value="${dir}" hidden>
                      <button type="submit">Open on PC</button>
                      </div>
                   </form>
                   <form method="get" action="edit-file">
                  <div class="MAG">
                  <input name="upc" value="${upc}" hidden>
                  <input name="path" value="${dir}" hidden>
                  <small style="color:white; font-size:19.5px;">NOTICE! If the file is larger than 3 MB, please do not try to edit it as doing so may crash the GlobalShut Service!</small>
                     <button type="submit">Edit the file</button>
                     <br>
                  </div>
                   </form>
                   <br>
                   <form method="post" action="delete-file">
                     <div class="MAG">
                     <input name="password" value="${upc}" hidden>
                   <input name="path" value="${dir}" hidden>
                      <button type="submit">Delete the file</button>
                      </div>
                   </form>
                   <br>
                   <form method="get" action="view-file">
                     <div class="MAG">
                     <input name="password" value="${upc}" hidden>
                   <input name="path" value="${dir}" hidden>
                      <button type="submit">View the file</button>
                      </div>
                   </form>
                   <br>
                   <form method="post" action="rename-file">
                     <div class="MAG">
                     <input name="password" value="${upc}" hidden>
                   <input name="path1" value="${dir}" hidden>
                   <input name="path2" placeholder="File name" value="${path}" required>
                   <br>
                  <small style="color:white; font-size:19.5px;"Please don't edit the extension or directory! Doing so may crash the GlobalShut service!</small>
                   <br>
                      <button type="submit">Rename the file</button>
                     </div>
                   </form>
                   <div>
                     <h1><u>File Properties</u></h1>
                     <h1>File Size:</h1>
                     <hr>
                     <p>File size in bytes: ${Math.round(fileSizeInBytes)} B</p>
                     <p>File size in megabytes: ${Math.round(fileSizeInMegabytes)} MB</p>
                     <hr>
                   </div>
                </div>
                </div>
                `);
            
          }
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
  });
  app.post("/pc-open-file", (req, res) => {
    const body = req.body;
    const password = body.password;
    const path = body.path;
    if(password === fixedCompPass) {
        const exec = require("child_process").exec;
        exec(`${path}`, (err, stdout, stderr) => {
            if(err) {
               console.log(err);
               console.log("Error Code: " + err.code);
               res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Failure</h1>
                  <p>Sorry, But GlobalShut failed to open a file on your pc. Please try again after sometime. Error Code: ${err.code}</p>
                </body>
                </html>
                `
               );
            }

            console.log("Successfully opened the file " + path + " on the remote pc!");
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Success</h1>
                <p>GlobalShut successfully opened the file on the PC! Please go to the home page for more options.</p>
              </body>
              </html>
              `
             );
            
        });
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
  })
  app.post("/delete-file", (req, res) => {
     const body = req.body;
     const password = body.password;
     const path = body.path;
     fs.stat(path, function (err, stats) {
       
      if (err) {
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut File error</h1>
            <p>Sorry, But the file that you wanted to delete doesn't exist!</p>
            <a href="/">Go to home page</a>
          </body>
          </html>
          `
         ); 
      }
     
      fs.unlink(path,function(err){
           if(err) {
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut File error</h1>
                <p>Sorry, But the file that you wanted to delete doesn't exist!</p>
                <a href="/">Go to home page</a>
              </body>
              </html>
              `
             ); 
           };
           res.redirect("/success-delete.globalshut");
      });  
   });
   
  });
  app.get("/success-delete.globalshut", (req, res) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut File Delete</h1>
        <p>The file has successfully been deleted! You can now go to the home page to continue..</p>
        <a href="/">Go to home page</a>
      </body>
      </html>
      `
     ); 
  })
  app.get("/view-file", (req, res) => {
     const query = req.query;
     const path = query.path;
     if(query.password === fixedCompPass) {
         res.sendFile(path);
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  });
  app.get("/edit-file", (req, res) => {
    const query = req.query;
    const upc = query.upc;
    const path = query.path;
    const dir = path;
    if(upc === fixedCompPass) {
      fs.readFile(dir, 'utf8', function(err, data) {
        if (err) throw err;
        console.log("Successfully read the file " + dir);
      let  globalText = String(data).toString();
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut File transfer</h1>
          <p>File editing:- </p>
          <form method="post" action="edit-file">
          <div class="MAG">
          <input name="password" value="${upc}" hidden>
          <input name="path" value="${path}" hidden>
          <textarea name="text" placeholder="Enter a text" required>${globalText}</textarea>
             <button type="submit">Edit the file</button>
          </div>
           </form>
        </body>
        </html>
        `);
      });
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
  });
  app.post("/edit-file", (req, res) =>{
     const body = req.body;
     const password = body.password;
     const path = body.path;
     const text = body.text;
     if(password === fixedCompPass) {
      fs.writeFile(path, String(text).toString(), function (err) {
        if (err) {
          res.end(
            `
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#ff0077">
            <title>GlobalShut PC</title>
            </head>
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 20px;
              .text-align:center;
          }
          html {
              background-color: white;
              color: black;
          }
          button {
              padding: 15px;
              margin-right: 0;
              font-size: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              margin: 0;
              width: 12.5em;
              font-family: 'Trebuchet MS', sans-serif;
              border: none; border:#ff0077; border-style:solid;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #ff0077;
              transition: 0.45s;
            }
            button:hover {
              padding: 15px;
              margin-right: 0;
              font-family: 'Trebuchet MS', sans-serif;
              font-size: 20px;
              background-color: #000000;
              border-radius: 10px;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              width: 12.5em;
              border: none;
              color: white;
              transition: 0.45s;
            }
            
            .LoginForm {
              margin-left: 8px;
              padding: 2px;
           }
           .MAG {
             margin-right: 56px;
           }
          input {
              font-size: 20px;
              margin-left: 8px;
              width: 100%;
              padding: 15px;
              font-size: 20px;
              outline: none;
              border-radius: 10px;
              border: none;
              border: #ff0077 solid 2px;
            }
            </style>
            <body>
              <div style="margin-left:8px">
              <h1>GlobalShut File error</h1>
              <p>Sorry, But the file could not be edited. Please try after sometime!</p>
            </body>
            </html>
            `
           );
           console.log(err);
        };
        res.redirect(`/filesDir?upc=${password}&dir=${path}`);
      });
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  });
  app.get("/download-file", (req, res) => {
     const body = req.query;
     const path = body.path;
     const password = body.password;
     if(password === fixedCompPass) {
        res.download(path);
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  }); 
  app.get("/sleep", (req, res) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Sleep</h1>
        <p>To put this GlobalShut configured PC into sleep mode, please enter its secured UPC.</p>
        <div>
       <form method="post" action="sleep" class="LoginForm">
       <div class="MAG">
       <input name="password" type="password" placeholder="********************">
       <br>
       <br>
       <button type="submit">Put to Sleep</button>
       </div>
       </form>
       </div>
      </body>
      </html>
      `
     );
  });
  
  app.post("/sleep", (req, res) => {
     const body = req.body;
     const password = body.password;
     if(password === fixedCompPass) {
      let exec = require('child_process').exec;
      exec(`rundll32.exe powrprof.dll, SetSuspendState Sleep`, (error, stdout, stderr) => {
          if(error) console.log(error);
          console.log("Successfully received Shutdown request!");
          res.end(`
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Request Successful</h1>
            <p>GlobalShut has successfully put your computer to sleep mode.</p>
          </body>
          </html>
          `);
}) 
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  });
  
  app.get("/get-private-ip", (req, res) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Private IP-Address</h1>
        <p>To get the Private IP address of this computer, Please enter Its secured UPC</p>
        <div>
       <form method="post" action="get-private-ip" class="LoginForm">
       <div class="MAG">
       <input name="password" type="password" placeholder="********************">
       <br>
       <br>
       <button type="submit">Get Private IP</button>
       </div>
       </form>
       </div>
      </body>
      </html>
      `
     );
  });
  
  app.post("/get-private-ip", (req, res) => {
      const body = req.body;
      const password = body.password;
      if(password === fixedCompPass) {
        let exec = require('child_process').exec;
        exec(`ipconfig`, (error, stdout, stderr) => {
            if(error) console.log(error);
            console.log("Successfully sent the private IP!");
            res.end(`
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#ff0077">
            <title>GlobalShut PC</title>
            </head>
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 20px;
              .text-align:center;
          }
          html {
              background-color: white;
              color: black;
          }
          button {
              padding: 15px;
              margin-right: 0;
              font-size: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              margin: 0;
              width: 12.5em;
              font-family: 'Trebuchet MS', sans-serif;
              border: none; border:#ff0077; border-style:solid;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #ff0077;
              transition: 0.45s;
            }
            button:hover {
              padding: 15px;
              margin-right: 0;
              font-family: 'Trebuchet MS', sans-serif;
              font-size: 20px;
              background-color: #000000;
              border-radius: 10px;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              width: 12.5em;
              border: none;
              color: white;
              transition: 0.45s;
            }
            
            .LoginForm {
              margin-left: 8px;
              padding: 2px;
           }
           .MAG {
             margin-right: 56px;
           }
          input {
              font-size: 20px;
              margin-left: 8px;
              width: 100%;
              padding: 15px;
              font-size: 20px;
              outline: none;
              border-radius: 10px;
              border: none;
              border: #ff0077 solid 2px;
            }
            </style>
            <body>
              <div style="margin-left:8px">
              <h1>GlobalShut Private IP-Address</h1>
              <p>This is the complete details of your GlobalShut-configured PC's Private IP address</p>
              <div>
              <div>
               ${stdout}
              </div>
             </div>
            </body>
            </html>
            `);
        });
      }else{
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Invalid Password</h1>
            <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
          </body>
          </html>
          `
         );
      }
  });
 
  app.get("/get-public-ip", (req, res) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Public IP-Address</h1>
        <p>To get the Public IP address of this computer, Please enter Its secured UPC</p>
        <div>
       <form method="post" action="get-public-ip" class="LoginForm">
       <div class="MAG">
       <input name="password" type="password" placeholder="********************">
       <br>
       <br>
       <button type="submit">Get Public IP</button>
       </div>
       </form>
       </div>
      </body>
      </html>
      `
     );
  })

  app.post("/get-public-ip", (req, res) => {
      const body = req.body;
      const password = body.password;
      if(password === fixedCompPass) {
        let exec = require('child_process').exec;
        exec(`curl https://curlmyip.net/`, (error, stdout, stderr) => {
            if(error) console.log(error);
            res.end(`
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#ff0077">
            <title>GlobalShut PC</title>
            </head>
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 20px;
              .text-align:center;
          }
          html {
              background-color: white;
              color: black;
          }
          button {
              padding: 15px;
              margin-right: 0;
              font-size: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              margin: 0;
              width: 12.5em;
              font-family: 'Trebuchet MS', sans-serif;
              border: none; border:#ff0077; border-style:solid;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #ff0077;
              transition: 0.45s;
            }
            button:hover {
              padding: 15px;
              margin-right: 0;
              font-family: 'Trebuchet MS', sans-serif;
              font-size: 20px;
              background-color: #000000;
              border-radius: 10px;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              width: 12.5em;
              border: none;
              color: white;
              transition: 0.45s;
            }
            
            .LoginForm {
              margin-left: 8px;
              padding: 2px;
           }
           .MAG {
             margin-right: 56px;
           }
          input {
              font-size: 20px;
              margin-left: 8px;
              width: 100%;
              padding: 15px;
              font-size: 20px;
              outline: none;
              border-radius: 10px;
              border: none;
              border: #ff0077 solid 2px;
            }
            </style>
            <body>
              <div style="margin-left:8px">
              <h1>GlobalShut Public IP-Address</h1>
              <p>This is the complete details of your GlobalShut-configured PC's Public IP address</p>
              <div>
              <div>
               <b>${stdout}</b>
              </div>
             </div>
            </body>
            </html>
            `);
        });
      }else{
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Invalid Password</h1>
            <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
          </body>
          </html>
          `
         );
      }
  });
  app.post("/rename-file", (req, res) => {
     const body = req.body;
     const password = body.password;
     const path1 = body.path1;
     const path2 = body.path2;
     if(password === fixedCompPass){
      fs.rename(path1, path2, (err) => {
        console.log("\nFile Renamed!\n");
        
        if(err) {
          res.end(
            `
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#ff0077">
            <title>GlobalShut PC</title>
            </head>
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 20px;
              .text-align:center;
          }
          html {
              background-color: white;
              color: black;
          }
          button {
              padding: 15px;
              margin-right: 0;
              font-size: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              margin: 0;
              width: 12.5em;
              font-family: 'Trebuchet MS', sans-serif;
              border: none; border:#ff0077; border-style:solid;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #ff0077;
              transition: 0.45s;
            }
            button:hover {
              padding: 15px;
              margin-right: 0;
              font-family: 'Trebuchet MS', sans-serif;
              font-size: 20px;
              background-color: #000000;
              border-radius: 10px;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              width: 12.5em;
              border: none;
              color: white;
              transition: 0.45s;
            }
            
            .LoginForm {
              margin-left: 8px;
              padding: 2px;
           }
           .MAG {
             margin-right: 56px;
           }
          input {
              font-size: 20px;
              margin-left: 8px;
              width: 100%;
              padding: 15px;
              font-size: 20px;
              outline: none;
              border-radius: 10px;
              border: none;
              border: #ff0077 solid 2px;
            }
            </style>
            <body>
              <div style="margin-left:8px">
              <h1>GlobalShut File error</h1>
              <p>Sorry, But the file couldn't be renamed! Please try again!</p>
            </body>
            </html>
            `
           );
        }
      });
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  });
  app.get("/cpu", (req, res) => {
    si.cpu()
    .then(data1 => showTheData(data1))
    .catch(error => console.error(error));
    function showTheData(data1) {
      si.cpuTemperature()
      .then(data2 => showTheDataNow(data1 ,data2))
      .catch(error => console.error(error));
    }
    function showTheDataNow(data1, data2) {
      const manufacturer = data1.manufacturer;
      const brand = data1.brand;
      const family = data1.family;
      const cores = data1.cores;
      const mainTemp = data2.main;
      res.end(`
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#ff0077">
            <title>GlobalShut PC</title>
            </head>
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 20px;
              .text-align:center;
          }
          html {
              background-color: white;
              color: black;
          }
          button {
              padding: 15px;
              margin-right: 0;
              font-size: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              margin: 0;
              width: 12.5em;
              font-family: 'Trebuchet MS', sans-serif;
              border: none; border:#ff0077; border-style:solid;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #ff0077;
              transition: 0.45s;
            }
            button:hover {
              padding: 15px;
              margin-right: 0;
              font-family: 'Trebuchet MS', sans-serif;
              font-size: 20px;
              background-color: #000000;
              border-radius: 10px;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              width: 12.5em;
              border: none;
              color: white;
              transition: 0.45s;
            }
            
            .LoginForm {
              margin-left: 8px;
              padding: 2px;
           }
           .MAG {
             margin-right: 56px;
           }
          input {
              font-size: 20px;
              margin-left: 8px;
              width: 100%;
              padding: 15px;
              font-size: 20px;
              outline: none;
              border-radius: 10px;
              border: none;
              border: #ff0077 solid 2px;
            }
            </style>
            <body>
              <div style="margin-left:8px">
              <h1>GlobalShut CPU Details</h1>
              <p>This is the complete details of your GlobalShut-configured PC's CPU.</p>
              <div>
              <div>
               <p>Manufacturer: <b>${manufacturer}</b></p>
               <p>Brand: <b>${brand}</b></p>
               <p>CPU Family: <b>${family}</b></p>
               <p>CPU Cores: ${cores}</p>
              </div>
             </div>
             <p>For more management, go to the home page</p>
             <a href="/"><button>More options</button></a>
            </body>
            </html>
            `);
      
    }
  });
  app.get("/globalshut/cmd", (req, res) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Command Execution</h1>
        <p>To execute a command in this globally accessible computer, Please enter Its secured UPC (Unique PassCode)</p>
        <div>
       <form method="post" action="/globalshut/cmd" class="LoginForm">
       <div class="MAG">
       <input name="password" type="password" placeholder="********************">
       <br>
       <br>
       <button type="submit">Next</button>
       </div>
       </form>
       </div>
      </body>
      </html>
      `
     );
  });  
  app.post("/globalshut/cmd", (req, res) => {
     const body = req.body;
     const password = body.password;
     if(password === fixedCompPass) {
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Command Execution</h1>
          <p>Enter the command that you would like to execute in this PC.</p>
          <div>
         <form method="post" action="/execute/command" class="LoginForm">
         <div class="MAG">
         <input name="password" value="${password}" hidden>
         <input name="command" type="text" placeholder="Please enter the command">
         <br>
         <br>
         <button type="submit">Execute now</button>
         </div>
         </form>
         </div>
        </body>
        </html>
        `
       );
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  }); 
  app.post("/execute/command", (req, res) => {
      const command = req.body.command;
      const password = req.body.password;
      if(password === fixedCompPass) {
          const exec = require("child_process").exec;
          exec(`${command}`, (error, stdout, stderr) => {
              if(error) console.log(error);
              res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Command execution</h1>
                  <p>Command Output:- </p>
                  <div>
                    <section>
                      ${stdout}
                    </section>
                  </div>
                </body>
                </html>
                `
               );
          });
      }else{
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Invalid Password</h1>
            <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
          </body>
          </html>
          `
         );
      }  
  });
  /*app.get("/music/1", (req, res) => {
    res.endFile(__dirname + "/Music_1.mp4");
  })
  app.get("/music/2", (req, res) => {
    res.endFile(__dirname + "/Music_2.mp4");
  })
  app.get("/globalshut/video", (req, res) => {
    res.endFile(__dirname + "/Video_6950.mp4");
  })*/
  app.get("/open/explorer", (req, res) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut App Opener</h1>
        <p>Please enter the UPC of this computer to open Windows or Files explorer.</p>
        <div>
       <form method="post" action="/open/explorer" class="LoginForm">
       <div class="MAG">
       <input name="password" placeholder="********************">
       <br>
       <br>
       <button type="submit">Open now</button>
       </div>
       </form>
       </div>
      </body>
      </html>
      `
     );
  });
  app.get("/open/app", (req, res) => {
     res.end(`
     <!DOCTYPE html>
     <html>
     <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="theme-color" content="#ff0077">
     <title>GlobalShut PC</title>
     </head>
     <style>
     body {
       font-family: Arial, Helvetica, sans-serif;
       font-size: 20px;
       .text-align:center;
   }
   html {
       background-color: #ff0077;
       color: white;
   }
   button {
       padding: 15px;
       margin-right: 0;
       font-size: 20px;
       background-color: #ffffff;
       border-radius: 10px;
       margin: 0;
       width: 12.5em;
       font-family: 'Trebuchet MS', sans-serif;
       border: none;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       color: #ff0077;
       transition: 0.45s;
     }
     button:hover {
       padding: 15px;
       margin-right: 0;
       font-family: 'Trebuchet MS', sans-serif;
       font-size: 20px;
       background-color: #000000;
       border-radius: 10px;
       margin: 0;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       width: 12.5em;
       border: none;
       color: white;
       transition: 0.45s;
     }
     
     .LoginForm {
       margin-left: 8px;
       padding: 2px;
    }
    .MAG {
      margin-right: 56px;
    }
   input {
       font-size: 20px;
       margin-left: 8px;
       width: 100%;
       padding: 15px;
       font-size: 20px;
       outline: none;
       border-radius: 10px;
       border: none;
       border: #ff0077 solid 2px;
     }
     </style>
     <body>
       <div style="margin-left:8px">
       <h1>GlobalShut App Opener</h1>
       <p>Please enter the UPC of this computer and the application name to open the application you want to.</p>
       <div>
      <form method="post" action="/open/app" class="LoginForm">
      <div class="MAG">
      <input name="password" placeholder="********************">
      <br>
      <br>
      <input name="appname" placeholder="The App Name">
      <br>
      <br>
      <button type="submit">Check and open now</button>
      </div>
      </form>
      </div>
     </body>
     </html>
     `);
  });
  app.post("/open/app", (req, res) => {
     const body = req.body;
     const password = body.password;
     const appname = body.appname;
     if(password === fixedCompPass) {
       const exec = require("child_process").exec;
       exec(`start ${appname}`, (err, stdout, stderr) => {
         if(err) console.log(err);
         res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            border:#ff0077;
            border-style:solid;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Success</h1>
            <p>Successfully opened ${appname} in your PC! Go to home page for more options.</p>
            <a href="/"><button>Go to home</button></a>
          </body>
          </html>
          `
         );
       })
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  })
  app.post("/open/explorer", (req, res) => {
     const body = req.body;
     const password = body.password;
     if(password === fixedCompPass) {
         const exec = require("child_process").exec;
         exec(`explorer`, (err, stdout, stderr) => {
            if(err) console.log(err);
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: white;
                color: black;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                border:#ff0077;
                border-style:solid;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Success</h1>
                <p>Successfully opened Windows or files explorer in your PC! Go to home page for more options.</p>
                <a href="/"><button>Go to home</button></a>
              </body>
              </html>
              `
             );
         })
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  });
  app.get("/open/link", (req, res) => {
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut App Opener</h1>
      <p>Please enter the UPC of this computer and the URL or the link.</p>
      <div>
     <form method="post" action="/open/link" class="LoginForm">
     <div class="MAG">
     <input name="password" placeholder="********************">
     <br>
     <br>
     <input name="link" placeholder="The URL or link">
     <br>
     <br>
     <button type="submit">Check and open now</button>
     </div>
     </form>
     </div>
    </body>
    </html>
    `);
  });
  app.post("/open/link", (req, res) => {
     const password = req.body.password;
     const link = req.body.link;
     if(password === fixedCompPass) {
        open(link);
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: white;
            color: black;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Success</h1>
            <p>Successfully opened the link on the device. Go to the home page for more management.</p>
            <a href="/"><button>Go to home</button></a>
          </body>
          </html>
          `
         );
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  })
  app.get("/capture/photo", (req, res) => {
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut Photo</h1>
      <p>Please enter the UPC of this computer and get the latest image.</p>
      <div>
     <form method="post" action="/capture/photo" class="LoginForm">
     <div class="MAG">
     <input name="password" placeholder="********************">
     <br>
     <br>
     <button type="submit">Capture</button>
     </div>
     </form>
     </div>
    </body>
    </html>
    `);
  });
  app.post("/capture/photo", (req, res) => {
    const body = req.body;
    const password = body.password;
    if(password === staticCompPass) {
      var opts = {
        width: 1920,
        height: 1080,
        quality: 100,    
        frames: 300,  
        delay: 0, 
        saveShots: true,
        output: "jpeg",
        device: false,
        callbackReturn: "location",
        verbose: false
    
    };
    var Webcam = NodeWebcam.create( opts );
    Webcam
    NodeWebcam.capture( "test_picture", opts, function( err, data ) {
         const dataURL = data;
         //console.log(dataURL);
         res.sendFile("test_picture.png");
    });
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
  });
  app.get("/globashut/screenshot", (req, res) => {
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut Photo</h1>
      <p>Please enter the UPC of this computer and get the screenshot of the computer screen.</p>
      <div>
     <form method="post" action="/capture/screenshot" class="LoginForm">
     <div class="MAG">
     <input name="password" placeholder="********************">
     <br>
     <br>
     <button type="submit">Capture</button>
     </div>
     </form>
     </div>
    </body>
    </html>
    `); 
  });
  app.post("/capture/screenshot", (req, res) =>{
     const password = req.body.password;
     if(password === staticCompPass) {      
   screenshot("screenshot_latest.png", function(error, complete) {
  if(error) {
      console.log("Screenshot failed", error);
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Failure</h1>
          <p>Sorry, But <b>GlobalShut</b> failed to take a screenshot of this computer. Please try again after sometime!</p>
        </body>
        </html>
        `
       );
      }else{
      console.log("Screenshot succeeded");
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Success</h1>
          <p>GlobalShut successfully took a screenshot of this computer. Click the button below to download it.</p>
          <form method="get" action="/download/screenshot">
            <input name="password" value="${staticCompPass}" hidden>
            <button type="submit">Download it</button>
          </form>
          <br>
          <p><u>OR</u></p>
          <form method="get" action="/view/screenshot">
            <input name="password" value="${staticCompPass}" hidden>
            <button type="submit">View it</button>
          </form>
        </body>
        </html>
        `
       );
      }
});
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  }); 
  app.get("/view/screenshot", (req, res) => {
    const password = req.query.password;
    if(password === staticCompPass) {
       res.sendFile(__dirname + "/screenshot_latest.png");
    }else{
     res.end(
       `
       <!DOCTYPE html>
       <html>
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta name="theme-color" content="#ff0077">
       <title>GlobalShut PC</title>
       </head>
       <style>
       body {
         font-family: Arial, Helvetica, sans-serif;
         font-size: 20px;
         .text-align:center;
     }
     html {
         background-color: white;
         color: black;
     }
     button {
         padding: 15px;
         margin-right: 0;
         font-size: 20px;
         background-color: #ffffff;
         border-radius: 10px;
         margin: 0;
         width: 12.5em;
         font-family: 'Trebuchet MS', sans-serif;
         border: none;
         -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         color: #ff0077;
         transition: 0.45s;
       }
       button:hover {
         padding: 15px;
         margin-right: 0;
         font-family: 'Trebuchet MS', sans-serif;
         font-size: 20px;
         background-color: #000000;
         border-radius: 10px;
         margin: 0;
         -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         width: 12.5em;
         border: none;
         color: white;
         transition: 0.45s;
       }
       
       .LoginForm {
         margin-left: 8px;
         padding: 2px;
      }
      .MAG {
        margin-right: 56px;
      }
     input {
         font-size: 20px;
         margin-left: 8px;
         width: 100%;
         padding: 15px;
         font-size: 20px;
         outline: none;
         border-radius: 10px;
         border: none;
         border: #ff0077 solid 2px;
       }
       </style>
       <body>
         <div style="margin-left:8px">
         <h1>GlobalShut Invalid Password</h1>
         <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
       </body>
       </html>
       `
      );
    }
  });
  app.get("/download/screenshot", (req, res) => {
     const password = req.query.password;
     if(password === staticCompPass) {
        res.download(__dirname + "/screenshot_latest.png");
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  })

  
  app.get("/internet-speed-test", (req, res) => {
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut Internet Speed Test</h1>
      <p>Please enter the UPC of this computer and test the internet speed of this co,puter.</p>
      <div>
     <form method="post" action="/internet/speed-test" class="LoginForm">
     <div class="MAG">
     <input name="password" placeholder="********************">
     <br>
     <br>
     <button type="submit">Capture</button>
     </div>
     </form>
     </div>
    </body>
    </html>
    `); 
  });
  app.post("/internet/speed-test", (req, res) => {
     const body = req.body;
     const password = body.password;
     if(password === fixedCompPass) {
      exec("npx speed-test --json", (err, stdout, stderr) => {
        if (err || stderr)
          console.log(`
            Simple Error : ${err},
            STDERR: ${stderr},
          `);
        const result = JSON.parse(stdout);
        const response = `<center>
                        <h2>Ping : ${result.ping}</h2>
                        <h2>Download Speed : ${result.download}</h2>
                        <h2>Upload Speed : ${result.upload}</h2>
                        </center>`;
        res.send(response);
      });
     }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
     }
  })
  app.get("/message/m", function(req, res) {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      AllList {
        padding:15px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut MultiMessage</h1>
        <p>To send a message to any other pc in the same newtork, please enter the secured unique passcode (UPC) of this admin computer and the time in seconds</p>
        </div>
        <div>
        <form method="post" action="/message/mult" class="LoginForm">
        <div class="MAG">
        <input name="password" type="password" placeholder="********************">
        <br>
        <br>
        <input name="hostname" type="text" placeholder="Name of the PC">
        <br>
        <br>
        <input name="message" type="text" placeholder="Message to Send">
        <br>
        <br>
        <input name="timeInSeconds" type="text" value="0" placeholder="Disappear Time">
        <br>
        <br>
        <button type="submit">Request Shutdown</button>
        </div>
        </form>
        </div>
      </body>
      </html>
    `);
});
app.post("/message/mult", (req, res) => {
   const body = req.body;
   const password = body.password;
   const message = body.message;
   const hostname = body.hostname;
   const timeInSeconds = body.timeInSeconds;
   if(password === fixedCompPass) {
    exec(`msg /SERVER:${hostname} * /TIME:${timeInSeconds} “${message}"`, (error, stdout, stderr) => {
      if(error) console.log(error);
      console.log("Successfully send the message!");
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Success</h1>
          <p>Successfully send the message to the remote PC. Please go to the home page for more options.</p>
        </body>
        </html>
        `
       );
})
   }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: white;
        color: black;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
   }
});
  app.get("/shutdown/m", function(req, res) {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      AllList {
        padding:15px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut MultiShutdown</h1>
        <p>To shutdown any other computer on this network, please enter the secured unique passcode (UPC) of this admin computer and the time in seconds</p>
        </div>
        <div>
        <form method="post" action="/shutdown/mult" class="LoginForm">
        <div class="MAG">
        <input name="password" type="password" placeholder="********************">
        <br>
        <br>
        <input name="hostname" type="text" placeholder="Name of the PC">
        <br>
        <br>
        <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
        <br>
        <br>
        <input name="message" type="text" placeholder="Shutdown message">
        <br>
        <br>
        <button type="submit">Request Shutdown</button>
        </div>
        </form>
        </div>
      </body>
      </html>
    `);
});
app.post("/shutdown/mult", (req, res) => {
  const body = req.body;
  const password = body.password;
  const timeInSeconds = body.timeInSeconds;
  const message = body.message;
  const hostname = body.hostname;
  //console.log(body);
  //const nTimeINSeconds = Number(timeInSeconds);
  console.log("\nReceived the shutdown message as " + message);
  if (osValue == 'darwin') {
      // For MacOS
           //console.log(data);
           if(password === fixedCompPass) {
               // Coming Soon
           }else{
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Invalid Password</h1>
                <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
              </body>
              </html>
              `
             );
          }
  }else if(osValue == 'win32'){
      // For Windows
          //console.log(data);
          if(password === fixedCompPass) {
              // Shut now
              let exec = require('child_process').exec;
              exec(`shutdown -m ${hostname} -s -t ${timeInSeconds}`, (error, stdout, stderr) => {
                  if(error) console.log(error);
                  console.log("Successfully received Shutdown request!");
})
          }else{
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Invalid Password</h1>
                <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
              </body>
              </html>
              `
             );
          }
  }else if(osValue== 'linux') {
      // For Linux
          //console.log(data);
          if(password === fixedCompPass) {
              // Shut now
          }else{
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Invalid Password</h1>
                <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
              </body>
              </html>
              `
             );
          }
  }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: white;
        color: black;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut OS Error</h1>
        <p>Sorry, But GlobalShut doesn't support your OS!</p>
      </body>
      </html>
      `
     );
  }
})
app.get("/send/message", (req, res) => {
  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ff0077">
  <title>GlobalShut PC</title>
  </head>
  <style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    .text-align:center;
}
html {
    background-color: #ff0077;
    color: white;
}
button {
    padding: 15px;
    margin-right: 0;
    font-size: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 0;
    width: 12.5em;
    font-family: 'Trebuchet MS', sans-serif;
    border: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ff0077;
    transition: 0.45s;
  }
  button:hover {
    padding: 15px;
    margin-right: 0;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 20px;
    background-color: #000000;
    border-radius: 10px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 12.5em;
    border: none;
    color: white;
    transition: 0.45s;
  }
  
  .LoginForm {
    margin-left: 8px;
    padding: 2px;
 }
 .MAG {
   margin-right: 56px;
 }
input {
    font-size: 20px;
    margin-left: 8px;
    width: 100%;
    padding: 15px;
    font-size: 20px;
    outline: none;
    border-radius: 10px;
    border: none;
    border: #ff0077 solid 2px;
  }
  </style>
  <body>
    <div style="margin-left:8px">
    <h1>GlobalShut Internet Speed Test</h1>
    <p>Please enter the UPC of this computer and test the internet speed of this co,puter.</p>
    <div>
   <form method="post" action="/send/message" class="LoginForm">
   <div class="MAG">
   <input name="from" type="text" placeholder="Your name">
   <br>
   <br>
   <input name="title" type="text" placeholder="Message Title">
   <br>
   <br>
   <input name="content" type="text" placeholder="Message Content">
   <br>
   <br>
   <button type="submit">Send</button>
   </div>
   </form>
   </div>
  </body>
  </html>
  `); 
});
app.post("/send/message", (req, res) => {
   const body = req.body;
   const from = body.from;
   const title = body.title;
   const content = body.content;
   fs.writeFileSync(__dirname + "/m.bat", `
   @echo off

   powershell -Command "& {Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('${content}', '${title}', 'OK', [System.Windows.Forms.MessageBoxIcon]::Information);}"
   `);
   const exec = require("child_process").exec;
   exec('m.bat', (err, stdout, stderr) => {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: white;
        color: black;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Message sent</h1>
        <p>Successfully sent the message to the user!</p>
      </body>
      </html>
      `
     );
   })
});
app.get("/restart/m", function(req, res) {
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    AllList {
      padding:15px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut MultiRestart</h1>
      <p>To restart any other computer on this network, please enter the secured unique passcode (UPC) of this admin computer and the time in seconds</p>
      </div>
      <div>
      <form method="post" action="/restart/mult" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <input name="hostname" type="text" placeholder="Name of the PC">
      <br>
      <br>
      <input name="timeInSeconds" type="text" value="0" placeholder="Time here in seconds">
      <br>
      <br>
      <input name="message" type="text" placeholder="Restart message">
      <br>
      <br>
      <button type="submit">Request Restart</button>
      </div>
      </form>
      </div>
    </body>
    </html>
  `);
});
app.post("/restart/mult", (req, res) => {
  const password = req.body.password;
  const time = req.body.timeInSeconds;
  if(password === fixedCompPass) {
  let exec = require('child_process').exec;
  exec(`shutdown -r -t ${time}`, (error, stdout, stderr) => {
      if(error) console.log(error);
      console.log("Successfully received restart request!");
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: white;
          color: black;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Success</h1>
          <p>Successfully sent restart request to the computer!</p>
        </body>
        </html>
        `
       );
}) 
  }else{
     res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: white;
        color: black;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
  }
});
app.get("/send/a/file", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut File Transfer</h1>
      <p>Send a file to this GlobalShut enabled PC. Just click a file and upload it to this computer.</p>
    </body>
    </html>
    `
   );
});
app.get("/download/a/file", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC | Download</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut File Download</h1>
      <p>Download a file to this GlobalShut enabled PC. Just enter/paste the file's download link (Including HTTP:// or HTTPS://) and then press download.</p>
      <form method="post" action="/download/a/file" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <input name="durl" type="text" placeholder="File Link">
      <br>
      <br>
      <button type="submit">Start downloading</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/download/a/file/", (req, res) => {
  const body = req.body;
  const password = body.password;
  const durl = body.durl;
  if(password === fixedCompPass) {
      const exec = require("child_process").exec;
            console.log("Success!");
            open(durl)
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Success</h1>
                <p>GlobalShut successfully started downloading a file to this computer!</p>
              </body>
              </html>
              `
             );
  }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
  }
})
app.get("/globalshut/globalcloud", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalCloud | Dashboard</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalCloud Apps</h1>
      <p>Use your PC as a Cloud server using one of GlobalShut's app</p>
      <hr>
      <br>
      <br>
      <div>
       <h1>1.GlobalDrive</h1>
       <p>No Dropbox, No Google Drive, Use your computer as a free GlobalDrive!</p>
       <a href="/app/globaldrive"><button>Open GlobalDrive</button></a>
      </div>
    </body>
    </html>
    `
   );
});
app.get("/app/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Dashboard (By Namish Kumar)</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive</h1>
      <p>No Dropbox, No Google Drive, Use your computer as a free GlobalDrive! With Google Drive, You have a limited storage of 15 GB. But with GlobalDrive, You can make your very own cloud storage for free!</p>
      <a href="/login/globaldrive"><button>Login to PC</button></a>
      </div>
    </body>
    </html>
    `
   );
});
app.get("/login/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login1/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login2/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login3/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login4/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login5/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login6/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login6/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login7/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login8/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login9/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login10/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login11/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login12/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login13/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login14/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login15/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login16/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login16/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login17/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login18/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login18/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login19/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.get("/login20/globaldrive", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalDrive Login</h1>
      <p>Let's login to your PC and get access to GlobalDrive.</p>
      <form method="post" action="/login/globaldrive" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/login/globaldrive", (req, res) => {
   const body = req.body;
   const password = body.password;
   if(password === fixedCompPass) {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Information</h1>
        <p>Successfully logged in to your PC. Now you can open GlobalDrive.</p>
        <form method="post" action="/globaldrive/dashboard/" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************" value="${password}" hidden>
      <button type="submit">Open GlobalDrive</button>
      </div>
      </form>
      </body>
      </html>
      `
     );
   }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
   }
});
app.post("/globaldrive/dashboard/", (req, res) => {
    const body = req.body;
    const password = body.password;
    if(password === fixedCompPass) {
        
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
});
app.get("/globalshut/globalsay", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut Speech</h1>
      <p>Please enter your 20-digit Unique Passcode (UPC) and the text that you want to play in your PC or <i><strong>announce</strong><i>.</p>
      <form method="post" action="/say/tts" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <input name="text" type="text" placeholder="Enter your text">
      <br>
      <br>
      <button type="submit">Login</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/say/tts", (req, res) => {
   const body = req.body;
   const password = body.password;
   const text = body.text;
   if(password === fixedCompPass) {
       if(text.length < 1 || text === "" || text === undefined || text === null) {
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: #ff0077;
            color: white;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Failure</h1>
            <p>Sorry, But the text can never be empty or undefined! Please enter the text that you want to be announced in the PC!</p>
            <a onclick="window.location.goBack()"><button>Try again!</button></a>
          </body>
          </html>
          `
         );
       }else{
        let speech = `${text}`;
        const  gtts = new gTTS(speech, 'en');
        gtts.save('Voice.mp3', function (err, result){
            if(err) { 
               console.log("There was an error!");
               console.log(`${err}`);
               res.end(
                `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="theme-color" content="#ff0077">
                <title>GlobalShut PC</title>
                </head>
                <style>
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 20px;
                  .text-align:center;
              }
              html {
                  background-color: #ff0077;
                  color: white;
              }
              button {
                  padding: 15px;
                  margin-right: 0;
                  font-size: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  margin: 0;
                  width: 12.5em;
                  font-family: 'Trebuchet MS', sans-serif;
                  border: none;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #ff0077;
                  transition: 0.45s;
                }
                button:hover {
                  padding: 15px;
                  margin-right: 0;
                  font-family: 'Trebuchet MS', sans-serif;
                  font-size: 20px;
                  background-color: #000000;
                  border-radius: 10px;
                  margin: 0;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  width: 12.5em;
                  border: none;
                  color: white;
                  transition: 0.45s;
                }
                
                .LoginForm {
                  margin-left: 8px;
                  padding: 2px;
               }
               .MAG {
                 margin-right: 56px;
               }
              input {
                  font-size: 20px;
                  margin-left: 8px;
                  width: 100%;
                  padding: 15px;
                  font-size: 20px;
                  outline: none;
                  border-radius: 10px;
                  border: none;
                  border: #ff0077 solid 2px;
                }
                </style>
                <body>
                  <div style="margin-left:8px">
                  <h1>GlobalShut Failure</h1>
                  <p>Sorry, But the text you entered couldn't be converted into speech because of some network or server issues! Please try again after sometime!</p>
                </body>
                </html>
                `
               );
            }
            console.log("Text to speech converted!");
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Success</h1>
                <p>Successfully announced the text on the PC! Please go to the home page for more options.</p>
              </body>
              </html>
              `
             );
             const exec = require("child_process").exec;
             const musicPath = path.join(__dirname + "/Voice.mp3");
             exec(`${musicPath}`, (err, stdout, stderr) => {
                if(err) {
                   console.log("There was some error!");
                   console.error(err);   
                }else{
                    
                }
             });
        });
       }
   }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
   }
})
app.get("/reset-password", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut Password</h1>
      <p>Let's reset the password of this PC!</p>
      <form method="post" action="/reset/password" class="LoginForm">
      <div class="MAG">
      <input name="password_old" type="password" placeholder="The old password">
      <br>
      <br>
      <input name="password_new" type="password" placeholder="The new password">
      <br>
      <br>
      <button type="submit">Reset</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/reset/password", (req, res) => {
   const body = req.body;
   const password_old = body.password_old;
   const password_new = body.password_new;
   if(password_old === fixedCompPass) {
       fixedCompPass = password_new;
       res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Success</h1>
          <p>The Password of this GlobalShut configured PC has successfully been changed! Please go to the home page for more options!</p>
          <a href="/">Go to home page></a>
        </body>
        </html>
        `
       );
   }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid OLD Password</h1>
        <p>Sorry, But the old password you entered is invalid/wrong! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
   }
})
app.get("/open/common-apps", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalDrive | Login</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: white;
      color: black;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut App Opener</h1>
      <p>Please enter the GlobalShut password of this PC to continue!</p>
      <form method="post" action="/open-common-apps/" class="LoginForm">
      <div class="MAG">
      <input name="password" type="password" placeholder="********************">
      <br>
      <br>
      <button type="submit">Reset</button>
      </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/open-common-apps/", (req, res) => {
    const body = req.body;
    const password = body.password;
    if(password === fixedCompPass) {
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Common Apps</h1>
          <p>These are the common apps that almost every windows PC has:- </p>
          <hr>
          <br>
          <br>
          <div>
             <h1>Windows Explorer / File explorer</h1>
             <img src="/assets/file_explorer.png">
             <form method="post" action="/open/capp">
               <div class="MAG">
                 <input name="password" value="${password}" hidden>
                 <input name="app" value="explorer" hidden>
                 <button type="submit">Open this app</button>
               </div>
             </form>
          </div>
        </body>
        </html>
        `
       );
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
});
app.get("/assets/:img", (req, res) => {
   res.sendFile(__dirname + `/assets/${req.params["img"]}`);
})
app.post("/open/capp", (req, res) => {
   const password = req.body.password;
   const app = req.body.app;
   if(password === fixedCompPass) {
       const exec = require("child_process").exec;
       exec(`start ${spp}`, (err, stdout, stderr) => {
         if(err) {
            console.log(err);
            res.end(
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="theme-color" content="#ff0077">
              <title>GlobalShut PC</title>
              </head>
              <style>
              body {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                .text-align:center;
            }
            html {
                background-color: #ff0077;
                color: white;
            }
            button {
                padding: 15px;
                margin-right: 0;
                font-size: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin: 0;
                width: 12.5em;
                font-family: 'Trebuchet MS', sans-serif;
                border: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: #ff0077;
                transition: 0.45s;
              }
              button:hover {
                padding: 15px;
                margin-right: 0;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 20px;
                background-color: #000000;
                border-radius: 10px;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                width: 12.5em;
                border: none;
                color: white;
                transition: 0.45s;
              }
              
              .LoginForm {
                margin-left: 8px;
                padding: 2px;
             }
             .MAG {
               margin-right: 56px;
             }
            input {
                font-size: 20px;
                margin-left: 8px;
                width: 100%;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border-radius: 10px;
                border: none;
                border: #ff0077 solid 2px;
              }
              </style>
              <body>
                <div style="margin-left:8px">
                <h1>GlobalShut Failure</h1>
                <p>Sorry, But GlobalShut failed to start an application!</p>
              </body>
              </html>
              `
             );
         }

         res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: #ff0077;
            color: white;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Success</h1>
            <p>GlobalShut successfully started the application on the PC!</p>
          </body>
          </html>
          `
         );
       })
   }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
   }
})
app.get("/globalshut/globalsound", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut Sound Settings</h1>
      <p>Let us change the volume of the system using GlobalShut</p>
      <form method="post" action="/change/vol">
         <div class="MAG">
         <input name="password" type="password" placeholder="********************" required>
         <br>
         <br>
         <input name="vol" type="number" placeholder="Volume % in number" required>
         <br>
         <br>
         <button type="submit">Change the volume</button>
         </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/change/vol", (req, res) => {
    if(req.body.password === fixedCompPass) {
      const exec = require("child_process").exec;
      exec(`volset ${req.body.vol.toString()}`, (err, stdout, stderr) => {
        if(err) {
           console.log(err);
           res.end(
             `
             <!DOCTYPE html>
             <html>
             <head>
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta name="theme-color" content="#ff0077">
             <title>GlobalShut PC</title>
             </head>
             <style>
             body {
               font-family: Arial, Helvetica, sans-serif;
               font-size: 20px;
               .text-align:center;
           }
           html {
               background-color: #ff0077;
               color: white;
           }
           button {
               padding: 15px;
               margin-right: 0;
               font-size: 20px;
               background-color: #ffffff;
               border-radius: 10px;
               margin: 0;
               width: 12.5em;
               font-family: 'Trebuchet MS', sans-serif;
               border: none;
               -webkit-font-smoothing: antialiased;
               -moz-osx-font-smoothing: grayscale;
               color: #ff0077;
               transition: 0.45s;
             }
             button:hover {
               padding: 15px;
               margin-right: 0;
               font-family: 'Trebuchet MS', sans-serif;
               font-size: 20px;
               background-color: #000000;
               border-radius: 10px;
               margin: 0;
               -webkit-font-smoothing: antialiased;
               -moz-osx-font-smoothing: grayscale;
               width: 12.5em;
               border: none;
               color: white;
               transition: 0.45s;
             }
             
             .LoginForm {
               margin-left: 8px;
               padding: 2px;
            }
            .MAG {
              margin-right: 56px;
            }
           input {
               font-size: 20px;
               margin-left: 8px;
               width: 100%;
               padding: 15px;
               font-size: 20px;
               outline: none;
               border-radius: 10px;
               border: none;
               border: #ff0077 solid 2px;
             }
             </style>
             <body>
               <div style="margin-left:8px">
               <h1>GlobalShut Failure</h1>
               <p>Sorry, But GlobalShut failed to change the volume of the PC!</p>
             </body>
             </html>
             `
            );
        }
        
        res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: #ff0077;
            color: white;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Success</h1>
            <p>GlobalShut successfully changed the volume of the PC!</p>
          </body>
          </html>
          `
         );
      })
    }else{
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          .text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut Invalid Password</h1>
          <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
        </body>
        </html>
        `
       );
    }
})
app.get("/globalshut/globalqr/login", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut | QR Code</h1>
      <p>Make a programmed QR Code that can control your PC remotely!</p>
      <form method="post" action="/globalshut/globalqr">
         <div class="MAG">
         <input name="password" type="password" placeholder="********************" required>
        <br>
        <br>
         <button type="submit">Next</button>
         </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/globalshut/globalqr", (req, res) => {
   const body = req.body;
   const password = body.password;
   if(password === fixedCompPass) {
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalQR | Dashboard</h1>
        <p>Please select the function that your QR code has to do with this computer.</p>
        <hr>
        <br>
        <br>
        <div>
         <h1>Shutdown my PC</h1>
         <p>Generate a QR code using which you can scan and directly shutdown a PC.</p>
         <form method="post" action="/scan/shut/qr">
           <div class="MAG">
            <input name="password" value="${password}" hidden>
            <input name="timeInSeconds" value="0" type="number" placeholder="Time here in seconds" required>
            <br>
            <br>
            <button type="submit">Generate</button> 
           </div>
         </form>
        </div>
        <hr>
        <br>
        <br>
        <div>
         <h1>Restart my PC</h1>
         <p>Generate a QR code using which you can scan and directly restart a PC.</p>
         <form method="post" action="/scan/restart/qr">
           <div class="MAG">
            <input name="password" value="${password}" hidden>
            <input name="timeInSeconds" value="0" type="number" placeholder="Time here in seconds" required>
            <br>
            <br>
            <button type="submit">Generate</button> 
           </div>
         </form>
        </div>
      </body>
      </html>
      `
     );
   }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
   }
});
app.post("/scan/shut/qr", (req, res) => {
   const body = req.body;
   const timeInSeconds = body.timeInSeconds;
   const password = body.password;
   /* Time variables start */
   let timeInRoundHours;
   let timeInExactHours;
   let timeInRoundMinutes;
   let timeInExactMinutes;
   let actualTimeToShow;
   let roundTimeToShow;
   let actualTextToShow;
   let roundTextToShow;
   /* Time variables end */
   if(password === fixedCompPass) {
    if(timeInSeconds > 60 && timeInSeconds < 3600) {

        actualTimeToShow = (timeInSeconds) / 60;

        if(actualTimeToShow > 1) {
          actualTextToShow = `schedule a shutdown for ${actualTimeToShow} minutes`;
        }else{
          actualTextToShow = `schedule a shutdown for ${actualTimeToShow} minute`
        }

        roundTimeToShow = Math.round(actualTimeToShow);

        if(roundTimeToShow > 1) {
          roundTextToShow = `schedule a shutdown for ${roundTimeToShow} minutes`;
        }else{
          roundTextToShow = `schedule a shutdown for ${roundTimeToShow} minute`
        }

    }else if(timeInSeconds > 3600 && timeInSeconds < 86400) {
       actualTimeToShow = (timeInSeconds) / 3600;

       if(actualTimeToShow > 1) {
        actualTextToShow = `schedule a shutdown for ${actualTimeToShow} hours`;
      }else{
        actualTextToShow = `schedule a shutdown for ${actualTimeToShow} hour`
      }

      roundTimeToShow = Math.round(actualTimeToShow);

      if(roundTimeToShow > 1) {
        roundTextToShow = `schedule a shutdown for ${roundTimeToShow} hours`;
      }else{
        roundTextToShow = `schedule a shutdown for ${roundTimeToShow} hour`
      }
    }else if(timeInSeconds > 86400 && timeInSeconds < 604800) {
      actualTimeToShow = (timeInSeconds) / 86400;

      if(actualTimeToShow > 1) {
       actualTextToShow = `schedule a shutdown for ${actualTimeToShow} days`;
     }else{
       actualTextToShow = `schedule a shutdown for ${actualTimeToShow} day`
     }

     roundTimeToShow = Math.round(actualTimeToShow);

     if(roundTimeToShow > 1) {
       roundTextToShow = `schedule a shutdown for ${roundTimeToShow} days`;
     }else{
       roundTextToShow = `schedule a shutdown for ${roundTimeToShow} day`
     }
   }else if(timeInSeconds > 604800 && timeInSeconds < 2592000) {
    actualTimeToShow = (timeInSeconds) / 604800;

    if(actualTimeToShow > 1) {
     actualTextToShow = `schedule a shutdown for ${actualTimeToShow} weeks`;
   }else{
     actualTextToShow = `schedule a shutdown for ${actualTimeToShow} week`
   }

   roundTimeToShow = Math.round(actualTimeToShow);

   if(roundTimeToShow > 1) {
     roundTextToShow = `schedule a shutdown for ${roundTimeToShow} weeks`;
   }else{
     roundTextToShow = `schedule a shutdown for ${roundTimeToShow} week`
   }
 }else{
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut Failure</h1>
      <p>The date and time you have selected is out of GlobalShut's range!</p>
    </body>
    </html>
    `
   );
 }
    QRCode.toDataURL(`${globalTunnelURL}/code/shutdown?password=${password}&message=m&timeInSeconds=${timeInSeconds}`, (err, url) => {
      if(err) return console.log(err);
      res.end(
        `
        <!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#ff0077">
        <title>GlobalShut PC</title>
        </head>
        <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          text-align:center;
      }
      html {
          background-color: #ff0077;
          color: white;
      }
      button {
          padding: 15px;
          margin-right: 0;
          font-size: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          margin: 0;
          width: 12.5em;
          font-family: 'Trebuchet MS', sans-serif;
          border: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #ff0077;
          transition: 0.45s;
        }
        button:hover {
          padding: 15px;
          margin-right: 0;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 20px;
          background-color: #000000;
          border-radius: 10px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 12.5em;
          border: none;
          color: white;
          transition: 0.45s;
        }
        
        .LoginForm {
          margin-left: 8px;
          padding: 2px;
       }
       .MAG {
         margin-right: 56px;
       }
      input {
          font-size: 20px;
          margin-left: 8px;
          width: 100%;
          padding: 15px;
          font-size: 20px;
          outline: none;
          border-radius: 10px;
          border: none;
          border: #ff0077 solid 2px;
        }
        </style>
        <body>
          <div style="margin-left:8px">
          <h1>GlobalShut QR Code</h1>
          <p>(You can print a copy of this page)</p>
          <img src="${url}">
          <p>Scan the above QR code to ${roundTextToShow}.</p>
        </body>
        </html>
        `
       );
   });   
   }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
   }
});
app.post("/scan/restart/qr", (req, res) => {
  const body = req.body;
  const timeInSeconds = body.timeInSeconds;
  const password = body.password;
  /* Time variables start */
  let timeInRoundHours;
  let timeInExactHours;
  let timeInRoundMinutes;
  let timeInExactMinutes;
  let actualTimeToShow;
  let roundTimeToShow;
  let actualTextToShow;
  let roundTextToShow;
  /* Time variables end */
  if(password === fixedCompPass) {
   if(timeInSeconds > 60 && timeInSeconds < 3600) {

       actualTimeToShow = (timeInSeconds) / 60;

       if(actualTimeToShow > 1) {
         actualTextToShow = `schedule a restart for ${actualTimeToShow} minutes`;
       }else{
         actualTextToShow = `schedule a restart for ${actualTimeToShow} minute`
       }

       roundTimeToShow = Math.round(actualTimeToShow);

       if(roundTimeToShow > 1) {
         roundTextToShow = `schedule a restart for ${roundTimeToShow} minutes`;
       }else{
         roundTextToShow = `schedule a restart for ${roundTimeToShow} minute`
       }

   }else if(timeInSeconds > 3600 && timeInSeconds < 86400) {
      actualTimeToShow = (timeInSeconds) / 3600;

      if(actualTimeToShow > 1) {
       actualTextToShow = `schedule a restart for ${actualTimeToShow} hours`;
     }else{
       actualTextToShow = `schedule a restart for ${actualTimeToShow} hour`
     }

     roundTimeToShow = Math.round(actualTimeToShow);

     if(roundTimeToShow > 1) {
       roundTextToShow = `schedule a restart for ${roundTimeToShow} hours`;
     }else{
       roundTextToShow = `schedule a restart for ${roundTimeToShow} hour`
     }
   }else if(timeInSeconds > 86400 && timeInSeconds < 604800) {
     actualTimeToShow = (timeInSeconds) / 86400;

     if(actualTimeToShow > 1) {
      actualTextToShow = `schedule a restart for ${actualTimeToShow} days`;
    }else{
      actualTextToShow = `schedule a restart for ${actualTimeToShow} day`
    }

    roundTimeToShow = Math.round(actualTimeToShow);

    if(roundTimeToShow > 1) {
      roundTextToShow = `schedule a restart. for ${roundTimeToShow} days`;
    }else{
      roundTextToShow = `schedule a restart. for ${roundTimeToShow} day`
    }
  }else if(timeInSeconds > 604800 && timeInSeconds < 2592000) {
   actualTimeToShow = (timeInSeconds) / 604800;

   if(actualTimeToShow > 1) {
    actualTextToShow = `schedule a restart. for ${actualTimeToShow} weeks`;
  }else{
    actualTextToShow = `schedule a restart. for ${actualTimeToShow} week`
  }

  roundTimeToShow = Math.round(actualTimeToShow);

  if(roundTimeToShow > 1) {
    roundTextToShow = `schedule a restart. for ${roundTimeToShow} weeks`;
  }else{
    roundTextToShow = `schedule a restart. for ${roundTimeToShow} week`
  }
}else{
 res.end(
   `
   <!DOCTYPE html>
   <html>
   <head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="theme-color" content="#ff0077">
   <title>GlobalShut PC</title>
   </head>
   <style>
   body {
     font-family: Arial, Helvetica, sans-serif;
     font-size: 20px;
     .text-align:center;
 }
 html {
     background-color: #ff0077;
     color: white;
 }
 button {
     padding: 15px;
     margin-right: 0;
     font-size: 20px;
     background-color: #ffffff;
     border-radius: 10px;
     margin: 0;
     width: 12.5em;
     font-family: 'Trebuchet MS', sans-serif;
     border: none;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     color: #ff0077;
     transition: 0.45s;
   }
   button:hover {
     padding: 15px;
     margin-right: 0;
     font-family: 'Trebuchet MS', sans-serif;
     font-size: 20px;
     background-color: #000000;
     border-radius: 10px;
     margin: 0;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     width: 12.5em;
     border: none;
     color: white;
     transition: 0.45s;
   }
   
   .LoginForm {
     margin-left: 8px;
     padding: 2px;
  }
  .MAG {
    margin-right: 56px;
  }
 input {
     font-size: 20px;
     margin-left: 8px;
     width: 100%;
     padding: 15px;
     font-size: 20px;
     outline: none;
     border-radius: 10px;
     border: none;
     border: #ff0077 solid 2px;
   }
   </style>
   <body>
     <div style="margin-left:8px">
     <h1>GlobalShut Failure</h1>
     <p>The date and time you have selected is out of GlobalShut's range!</p>
   </body>
   </html>
   `
  );
}
   QRCode.toDataURL(`${globalTunnelURL}/code/restart.?password=${password}&message=m&timeInSeconds=${timeInSeconds}`, (err, url) => {
     if(err) return console.log(err);
     res.end(
       `
       <!DOCTYPE html>
       <html>
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta name="theme-color" content="#ff0077">
       <title>GlobalShut PC</title>
       </head>
       <style>
       body {
         font-family: Arial, Helvetica, sans-serif;
         font-size: 20px;
         text-align:center;
     }
     html {
         background-color: #ff0077;
         color: white;
     }
     button {
         padding: 15px;
         margin-right: 0;
         font-size: 20px;
         background-color: #ffffff;
         border-radius: 10px;
         margin: 0;
         width: 12.5em;
         font-family: 'Trebuchet MS', sans-serif;
         border: none;
         -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         color: #ff0077;
         transition: 0.45s;
       }
       button:hover {
         padding: 15px;
         margin-right: 0;
         font-family: 'Trebuchet MS', sans-serif;
         font-size: 20px;
         background-color: #000000;
         border-radius: 10px;
         margin: 0;
         -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         width: 12.5em;
         border: none;
         color: white;
         transition: 0.45s;
       }
       
       .LoginForm {
         margin-left: 8px;
         padding: 2px;
      }
      .MAG {
        margin-right: 56px;
      }
     input {
         font-size: 20px;
         margin-left: 8px;
         width: 100%;
         padding: 15px;
         font-size: 20px;
         outline: none;
         border-radius: 10px;
         border: none;
         border: #ff0077 solid 2px;
       }
       </style>
       <body>
         <div style="margin-left:8px">
         <h1>GlobalShut QR Code</h1>
         <p>(You can print a copy of this page)</p>
         <img src="${url}">
         <p>Scan the above QR code to ${roundTextToShow}.</p>
       </body>
       </html>
       `
      );
  });   
  }else{
   res.end(
     `
     <!DOCTYPE html>
     <html>
     <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="theme-color" content="#ff0077">
     <title>GlobalShut PC</title>
     </head>
     <style>
     body {
       font-family: Arial, Helvetica, sans-serif;
       font-size: 20px;
       .text-align:center;
   }
   html {
       background-color: #ff0077;
       color: white;
   }
   button {
       padding: 15px;
       margin-right: 0;
       font-size: 20px;
       background-color: #ffffff;
       border-radius: 10px;
       margin: 0;
       width: 12.5em;
       font-family: 'Trebuchet MS', sans-serif;
       border: none;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       color: #ff0077;
       transition: 0.45s;
     }
     button:hover {
       padding: 15px;
       margin-right: 0;
       font-family: 'Trebuchet MS', sans-serif;
       font-size: 20px;
       background-color: #000000;
       border-radius: 10px;
       margin: 0;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       width: 12.5em;
       border: none;
       color: white;
       transition: 0.45s;
     }
     
     .LoginForm {
       margin-left: 8px;
       padding: 2px;
    }
    .MAG {
      margin-right: 56px;
    }
   input {
       font-size: 20px;
       margin-left: 8px;
       width: 100%;
       padding: 15px;
       font-size: 20px;
       outline: none;
       border-radius: 10px;
       border: none;
       border: #ff0077 solid 2px;
     }
     </style>
     <body>
       <div style="margin-left:8px">
       <h1>GlobalShut Invalid Password</h1>
       <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
     </body>
     </html>
     `
    );
  }
});
app.get("/globalshut/globalblack", (req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff0077">
    <title>GlobalShut PC</title>
    </head>
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      .text-align:center;
  }
  html {
      background-color: #ff0077;
      color: white;
  }
  button {
      padding: 15px;
      margin-right: 0;
      font-size: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0;
      width: 12.5em;
      font-family: 'Trebuchet MS', sans-serif;
      border: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ff0077;
      transition: 0.45s;
    }
    button:hover {
      padding: 15px;
      margin-right: 0;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 20px;
      background-color: #000000;
      border-radius: 10px;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 12.5em;
      border: none;
      color: white;
      transition: 0.45s;
    }
    
    .LoginForm {
      margin-left: 8px;
      padding: 2px;
   }
   .MAG {
     margin-right: 56px;
   }
  input {
      font-size: 20px;
      margin-left: 8px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      border: #ff0077 solid 2px;
    }
    </style>
    <body>
      <div style="margin-left:8px">
      <h1>GlobalShut | Screen</h1>
      <p>Just turn the screen of your computer off using GlobalShut from any part of the world!</p>
      <form method="post" action="/globalshut/globalblack">
         <div class="MAG">
         <input name="password" type="password" placeholder="********************" required>
        <br>
        <br>
         <button type="submit">Execute</button>
         </div>
      </form>
    </body>
    </html>
    `
   );
});
app.post("/globalshut/globalblack", (req, res) => {
  const body = req.body;
  const password = body.password;
  if(password === fixedCompPass) {
      const exec = require("child_process").exec;
      exec(`%systemroot%\system32\scrnsave.scr /s`, (err, stdout, stderr) => {
         if(err) {
           console.error("There was an error!");
           console.error(err);
           res.end(
            `
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#ff0077">
            <title>GlobalShut PC</title>
            </head>
            <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              font-size: 20px;
              .text-align:center;
          }
          html {
              background-color: #ff0077;
              color: white;
          }
          button {
              padding: 15px;
              margin-right: 0;
              font-size: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              margin: 0;
              width: 12.5em;
              font-family: 'Trebuchet MS', sans-serif;
              border: none;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #ff0077;
              transition: 0.45s;
            }
            button:hover {
              padding: 15px;
              margin-right: 0;
              font-family: 'Trebuchet MS', sans-serif;
              font-size: 20px;
              background-color: #000000;
              border-radius: 10px;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              width: 12.5em;
              border: none;
              color: white;
              transition: 0.45s;
            }
            
            .LoginForm {
              margin-left: 8px;
              padding: 2px;
           }
           .MAG {
             margin-right: 56px;
           }
          input {
              font-size: 20px;
              margin-left: 8px;
              width: 100%;
              padding: 15px;
              font-size: 20px;
              outline: none;
              border-radius: 10px;
              border: none;
              border: #ff0077 solid 2px;
            }
            </style>
            <body>
              <div style="margin-left:8px">
              <h1>GlobalShut Failure</h1>
              <p>Sorry, But GlobalShut failed to turn off your screen! Please try again after sometime. If the problem persists, try reinstalling the program.</p>
            </body>
            </html>
            `
           );
         }

         res.end(
          `
          <!DOCTYPE html>
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#ff0077">
          <title>GlobalShut PC</title>
          </head>
          <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            .text-align:center;
        }
        html {
            background-color: #ff0077;
            color: white;
        }
        button {
            padding: 15px;
            margin-right: 0;
            font-size: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin: 0;
            width: 12.5em;
            font-family: 'Trebuchet MS', sans-serif;
            border: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #ff0077;
            transition: 0.45s;
          }
          button:hover {
            padding: 15px;
            margin-right: 0;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 20px;
            background-color: #000000;
            border-radius: 10px;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 12.5em;
            border: none;
            color: white;
            transition: 0.45s;
          }
          
          .LoginForm {
            margin-left: 8px;
            padding: 2px;
         }
         .MAG {
           margin-right: 56px;
         }
        input {
            font-size: 20px;
            margin-left: 8px;
            width: 100%;
            padding: 15px;
            font-size: 20px;
            outline: none;
            border-radius: 10px;
            border: none;
            border: #ff0077 solid 2px;
          }
          </style>
          <body>
            <div style="margin-left:8px">
            <h1>GlobalShut Success</h1>
            <p>Successfully turned off your computer's screen! Please go to the home page for more management options</p>
            <br>
            <a href="/"><button>Go to the home page</button></a>
          </body>
          </html>
          `
         );
      })
  }else{
    res.end(
      `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#ff0077">
      <title>GlobalShut PC</title>
      </head>
      <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        .text-align:center;
    }
    html {
        background-color: #ff0077;
        color: white;
    }
    button {
        padding: 15px;
        margin-right: 0;
        font-size: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0;
        width: 12.5em;
        font-family: 'Trebuchet MS', sans-serif;
        border: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ff0077;
        transition: 0.45s;
      }
      button:hover {
        padding: 15px;
        margin-right: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 20px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 12.5em;
        border: none;
        color: white;
        transition: 0.45s;
      }
      
      .LoginForm {
        margin-left: 8px;
        padding: 2px;
     }
     .MAG {
       margin-right: 56px;
     }
    input {
        font-size: 20px;
        margin-left: 8px;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        outline: none;
        border-radius: 10px;
        border: none;
        border: #ff0077 solid 2px;
      }
      </style>
      <body>
        <div style="margin-left:8px">
        <h1>GlobalShut Invalid Password</h1>
        <p>Sorry, But the password you entered is invalid! Please try again with the correct password</p>
      </body>
      </html>
      `
     );
  }
})
startTheService();
  async function startTheService() {
    app.listen(6950, "0.0.0.0", function(error){
      if(error) {
         console.log("There was some error starting the server!");
         console.log(error);
      }
      globalPassword = fixedCompPass;
      console.log("GlobalShut: Successfully started the GlobalShut server at host 0.0.0.0 and port 6950!");
     console.log("Please keep the credentials for your temporary GlobalShut server at a secure place:" + `\nComputer UID = ${fixedCompID}\nComputer UPC = ${fixedCompPass}. \nBy the way, If you want to access this computer in the private network, use your network IP address and port 6950.`);
     startLocalTunnel();
    })
  } 
   }
}

