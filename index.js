import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDb from  './server/database/dbConnect.js';

import StudentRoute from './server/routes/student.js';
import InterviewerRoute from './server/routes/interviewer.js';
import InterviewsRoute   from './server/routes/interviews.js';
import UserRoute from  './server/routes/user.js';



dotenv.config();
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/student',StudentRoute);
app.use('/interviewer',InterviewerRoute);
app.use('/interviews',InterviewsRoute);
app.use('/user',UserRoute);


const port = process.env.PORT || '8080';
app.listen (port,()=>{
    console.log(`MOC is listening on port ${port}!`);
});
app.get('/',(req,res) =>{
    res.send(`Welcome to MOC!`);
});

connectDb();