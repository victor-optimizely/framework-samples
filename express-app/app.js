const express = require('express');
const path = require('path');
const cors = require('cors');
// import webcomponents from '@webcomponents/webcomponentsjs';

const app = express();
const port = process.env.PORT || 8080;
const allowedOrigins = ['http://localhost:3000',
    'http://localhost:8080'];
//
// app.use(cors({
//     origin: function(origin, callback){
//         // allow requests with no origin
//         // (like mobile apps or curl requests)
//         if(!origin) return callback(null, true);
//         if(allowedOrigins.indexOf(origin) === -1){
//             const msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }));
app.use(cors());

// app.use(express.static(__dirname + '/'));

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// app.use('/optimizely/global-navigation', express.static(__dirname + '/node_modules/@optimizely/global-navigation/dist/src/'));
app.use('/webcomponents', express.static(__dirname + '/node_modules/@webcomponents/'));

app.listen(port);
console.log('Server started at http://localhost:' + port);