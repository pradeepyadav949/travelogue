// var http = require("http")

// http.createServer(function(request, response) {
//     response.writeHead(200,{'Content-Type':'text/plain'})
//     response.end('Hello World\n')
// }).listen(8081);

// console.log('server running at http://127.0.0.1:8081/');

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var connectHandler = function connected(){
//     console.log('connection successful'); 
//     eventEmitter.emit('data_received');}

// eventEmitter.on('connection',connectHandler);
// eventEmitter.on('data_received',function(){
//     console.log('data received successfully')})

// eventEmitter.emit('connection');
// console.log('program ended');

// var fs = require('fs');
// fs.readFile('.\\node\\package.json',function(err,data){
//     if (err){console.log(err.stack);
//     return;}
//     console.log(data.toString());
// });
// console.log('program ended');

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var listener1 = function listener1(){
//     console.log('listener1 executed');
// }
// var listener2 = function listener2(){
//     console.log('listener2 executed');
// }
// eventEmitter.addListener('connection',listener1);
// eventEmitter.on('connection',listener2);

// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners+" listeners listening to connection event");
// eventEmitter.emit('connection');
// eventEmitter.removeListener('connection',listener1);
// console.log('listener1 will not listen now');
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners+" listeners listening to connection event");
// console.log('program ended');

// var fs = require('fs');
// var data = '';

// var readerStream = fs.createReadStream('.\\node\\package.json');

// readerStream.setEncoding('utf8');
// readerStream.on('data',function(chunk){
//     data += chunk
// })

// readerStream.on('end',function(){
//     console.log(data);
// })

// readerStream.on('error',function(err){
//     console.log(err.stack);
// })

// console.log('program ended');

// var fs = require('fs');

// console.log("Going to delete directory /tmp/test");
// fs.rmdir("/tmp/test",function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Going to read directory /tmp");
   
//    fs.readdir("/tmp/",function(err, files) {
//       if (err) {
//          return console.error(err);
//       }
//       files.forEach( function (file) {
//          console.log( file );
//       });
//    });
// });
// var os = require('os');
// console.log(os.networkInterfaces());
// function printHello(){
//    console.log(__filename);
// }
// setInterval(printHello,2000);

// var dns = require('dns');
// dns.lookup('www.google.co.in',function onLookup(err,address,family){
//    console.log('address: ', address);
//    dns.reverse(address, function(err,hostnames){
//       if(err){console.log(err.stack);}
//       console.log('reverse for '+address+':'+JSON.stringify(hostnames));
//       })
//       console.log(family);
// })

// app.get('/process_get*', function (request, response){
    //     response1 = {
//         name1: request.query.name1,
//         email1: request.query.email1,
//         phone1: request.query.phone1,
//         querybox: request.query.querybox
//     };
//     console.log(response1);
//     response.send(JSON.stringify(response1));
// });

// app.post('/process_post', function (request, response){
    //     response1 = {
        //         name1: request.query.name1,
        //         email1: request.query.email1,
        //         phone1: request.query.phone1,
        //         querybox: request.query.querybox
        //     };
        //     console.log(response1);
        //     response.send(JSON.stringify(response1));
        // });
        // var fs = require('fs');
        // var bodyParser = require('body-parser');
        // var multer = require('multer');
        
        // app.use(bodyParser.urlencoded({extended: false}));
// //app.use(multer({dest: '/tmp/'}));

// app.post('/file_upload',function(req, res){
    //     console.log(req.files.file.name);
    //     console.log(req.files.file.path);
    //     console.log(req.files.file.type);
    //     var file = __dirname+"/"+req.files.file.name;
    
    //     fs.readFile(req.files.file.path, function(err, data){
        //         if(err){
            //             console.log(err);
            //         }
            //         else {
                //             response = {
                    //                 message: 'file uploaded successfully',
                    //                 filename: req.files.file.name
                    //             };
                    //         }
                    //         console.log(response);
                    //         res.end(JSON.stringify(response));
                    //     });
                    // });
                    
                    // var express      = require('express')
                    // var cookieParser = require('cookie-parser')
                    
                    // var app = express()
                    // app.use(cookieParser())
                    
                    // app.get('/home', function(req, res) {
                        //     res.send('hello world')
                        //     console.log("Cookies: ", req.cookies)
                        // })
                        // app.listen(8081);
                        
                        
// __dirname = 'D:\\software_folder\\html_css_js\\travel_website_project'

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// const host = 'localhost';
// const port = 3000;

// const requestListener = function(req, res) {
//     res.writeHead(200);
//     res.end("Hello World from Node.js HTTP Server");
// }

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
//     console.log(__dirname);
// });
// console.log(__dirname);
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',function (req, res){
    res.redirect('/home.html');
})

app.get('/home.html', function (req, res) {
    res.sendFile( __dirname + "/home.html" );
})

app.get('/aboutus.html', function (req, res) {
    res.sendFile( __dirname + "/aboutus.html" );
})

app.get('/contactus.html', function (req, res) {
    res.sendFile( __dirname + "/contactus.html" );
})

app.get('/openings.html', function (req, res) {
    res.sendFile( __dirname + "/openings.html" );
})

app.get('/login.html', function (req, res) {
    res.sendFile( __dirname + "/login.html" );
})

app.get('/balitrip.html', function (req, res) {
    res.sendFile( __dirname + "/balitrip.html" );
})

app.get('/manalitrip.html', function (req, res) {
    res.sendFile( __dirname + "/manalitrip.html" );
})

app.get('/singaporetrip.html', function (req, res) {
    res.sendFile( __dirname + "/singaporetrip.html" );
})

app.get('/loginsuccess.html', function (req, res) {
    res.sendFile( __dirname + "/loginsuccess.html" );
})

app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});
 
var multer  =   require('multer');  
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, '/uploads/');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  
var upload = multer({ storage : storage}).single('myfile');  

app.post('/file_upload',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file.");  
        }  
        console.log("File is uploaded successfully!");  
        res.redirect('/home.html');
    });  
});  


