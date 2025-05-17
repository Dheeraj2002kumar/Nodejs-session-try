

const http = require("http");
const { version } = require("os");

const serverinfo = {
    serverName: "CodeSandBox server",
    version: "1.0.0",
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
};

const { data } = require("./response.json");
const PORT = 8082;

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/": {
            res.write(`<h1>Current Database</h1>`);
            res.end();
            break;
        }
        case "/currencies": {
            res.writeHead(200, { "content-type": "application/json" });
            res.write(JSON.stringify(data));
            res.end();
            break;
        }
        default: {
            res.writeHead(404);
            res.end();
        }
    }
});

server.listen(PORT, () => {
    console.log("Listening at", PORT);
})












// --------- change the response, depending on parameters ---------

// const http = require('http')

// const server = http.createServer((req, res) => {
//     const serverinfo = {
//         serverName: "CodeSandBox Server",
//         version: "1.0.0",
//         currentDate: new Date().toDateString(),
//         currentTime: new Date().toTimeString(),
//     };

//     if (req.url === "/status"){
//         res.writeHead(200, { "content-type": "application/json" });  // Adding Headers
//         res.write(JSON.stringify(serverinfo));
//         res.end();
//     }
//     else {
//         res.writeHead(200, { "content-type": "text/html" }); // Adding headers 
//         res.write(`<h1>Hello from server...</h1>`);
//         res.end();
//     }
// })

// server.listen(8082, () => {
//     console.log("Listening...")
// })











// --------------- Activity 2 ------------------


// const http = require('http')

// const server = http.createServer((req, res) => {
//     const serverinfo = {
//         serverName: "CodeSandBox Server",
//         version: "1.0.0",
//         currentDate: new Date().toDateString(),
//         currentTime: new Date().toTimeString(),
//     };

//     res.writeHead(200, { "content-type": "application/json" });
//     res.write(JSON.stringify(serverinfo)); // Stringify the response
//     res.end();
// })

// server.listen(8082, () => {
//     console.log("Listening...")
// })







// -------------- Activity 1 -------------

// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log("Hello from server");
//     const date = new Date().toLocaleDateString();
//     const time = new Date().toLocaleTimeString();
//     console.log(`Server Date-Time: ${date} ${time}`)
//     res.write("Given from server...")
//     res.end()
// })

// server.listen(8082, () => {
//     console.log("Listening...")
// })

