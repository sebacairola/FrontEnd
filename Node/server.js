
/* Node Server
const http = require('http');

const server = http.createServer((request, response) => {
    console.log('Headers: ',request.headers);
    console.log('Method: ',request.method);
    console.log('URL: ',request.url);
    
    //response.setHeader('Content-Type','text/html');
    //response.end('<h1>Hellooo, this is the reponse from the server.</h1>')

    const user = {
        name: 'Pepe',
        lastName: 'Perez'
    }
    response.setHeader('Content-Type','application/json');
    response.end(JSON.stringify(user));
});

server.listen(3000);
*/

// Express Server
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

const user = {
    name: "Pepe",
    lastName: "Perez"
}

app.get('/users', (request, response) => {
    //response.send("<h1>hellooo</h1>");
    response.send(user);
});

app.post('/users', (request, response) => {
    console.log(request.body);
    response.send("<h2>Success</h2>");
});

app.listen(3000);