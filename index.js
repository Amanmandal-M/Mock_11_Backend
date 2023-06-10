const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();


// Models Location and Configs Location
const { dbConnection } = require('./configs/db');


// Routes Location
const { travelRouter } = require('./routes/travelRoute');


// Middlewares
app.use(express.json());
app.use(cors());


// Default endpoint
app.get('/', (req, res)=>{
    res.status(200).send(`<h1 style="text-align:center;color:blue;">Welcome to Plan my Trip Backend App</h1>`)
});


app.use("/api",travelRouter);



// Server listening here
app.listen(process.env.PORT , async () => {
    try {
        await dbConnection;
        console.log('Connected to database');
        console.log(`Server is running at ${process.env.PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})