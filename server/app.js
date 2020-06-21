const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes')

// create new express application
const app = express();

//parse all request to content-type -json
app.use(bodyparser.json());

//use routes
app.use('/', routes)

app.use('/uploads', express.static('uploads'));


//databse connection
mongoose.connect('http:/mongodb://127.0.0.1:27017/my_db',{ useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => { console.log("Connection to mongodb succesful"); }   
)

// app.get('/', (req, res) => {
//     res.send("Hello");
// })

app.listen(3000, () => {
    console.log("listening on port 3000!");
})