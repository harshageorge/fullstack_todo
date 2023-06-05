const express = require('express');
//Import the express dependency
const app = express();   
const cors = require('cors');
const path = require('path');
var usersRouter = require('./router.js');           //Instantiate an express app, the main work horse of this server
const port = process.env.PORT || 5000;  
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static("public"));
app.use('/', usersRouter);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'public', 'index.html'));
    });

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log('Backend is running'); 
});