//  ----------- Activity - create some /user routes -------------

const express = require('express');
const app = express();
const PORT = 8082;

const { getAllUsers, getUsersByUuid, searchUsersByQuery } = require('./controller/Users.controller')
const { data } = require('./users.json');

app.get("/users", getAllUsers);
app.get("/users/login/:uuid", getUsersByUuid);
app.get("/users/search", searchUsersByQuery )

app.listen(PORT, () => {
    console.log(`server listening ${PORT}`);
})













// ------- Activity - controllers and export ----------------

// const express = require('express');
// const app = express();
// const PORT = 8082;

// const { getCurrencies, getCurrenciesWithSymbol } = require('./controller/currencies.controller')

// app.get("/", (req, res) => {
//     res.send("<h1>Currency Database</h1>");
// });


// app.get("/currencies/:symbol", getCurrenciesWithSymbol);
// app.get("/currencies", getCurrencies);
  


// app.listen(PORT, () => {
//     console.log(`Listening at ${PORT}`);
// });










//  ----- activity 1.2 - extending api with express -----------

// const express = require('express');
// const app = express();
// const PORT = 8082;

// const { data } = require('./response.json');

// app.get("/", (req, res) => {
//     res.send("<h1>Currency Database</h1>");
// });

// app.get("/currencies", (req, res) => {
//     res.json(data);
// });

// app.get("/currencies/:symbol", (req, res) => {
//     const { symbol } = req.params;
//     const result = data.find((item) => item.id.toLowerCase() === symbol.toLowerCase());

//     if (result) {
//         res.status(200).json(result);
//     }
//     else{
//         res.send({ message: "Invalid Symbol" });
//         res.sendStatus(404);

//     }
// })


// app.listen(PORT, () => {
//     console.log(`Listening at ${PORT}`);
// });











// ------------------- 1.1 extending api with express -----------

// const express = require('express');
// const app = express();
// const PORT = 8082;

// const { data } = require('./response.json');

// app.get("/", (req, res) => {
//     res.send("<h1>Currency Database</h1>");
// });

// app.get("/currencies", (req, res) => {
//     res.json(data);
// });


// app.listen(PORT, () => {
//     console.log(`Listening at ${PORT}`);
// });






// --------------- Activity ---------------------

// const express = require('express');
// const app = express();
// const PORT = 8082;

// app.get('/', (req, res) => {
//     console.log("Current Route: /");

//     res.write( `<h1>Hello from express server...</h1>`);
//     res.end();
// });

// app.get("/send", (req, res) => {

//     res.send(`<h1>Hello</h1>`);  // for sending data back
//     res.end();
// });

// app.get("/json", (req, res) => {

//     res.json({ serverStatus: "active" });  // to send json
//     res.end();
// });

// app.listen(PORT, () => {
//     console.log(`Listening at ${PORT}`);
// });