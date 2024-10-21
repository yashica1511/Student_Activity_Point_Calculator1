const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//DB connections
const connectDB = require('./config/database');

//Base Routes..
const baseRoutes = require('./routes/baseRoute');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

connectDB();

app.use('/api',baseRoutes);

app.use((request,response)=>{
    response.status(404).json({message : 'Resource Not Found !!!'});
});

app.listen(PORT , ()=>{
    console.log(`Server Running on Port ${PORT}`);
});