const path = require("path")
const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})

app.use('/openai', require('./routes/openAiRoutes'));

