import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDb from  './server/database/dbConnect.js';
import cors from 'cors';

import StudentRoute from './server/routes/student.js';
import InterviewerRoute from './server/routes/interviewer.js';
import InterviewsRoute   from './server/routes/interviews.js';
import UserRoute from  './server/routes/user.js';
import QueryRoute from './server/routes/query.js';
import PricingRoute from './server/routes/pricing.js';
import RazorpayRoute from './server/routes/razorpay.js';



dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/student',StudentRoute);
app.use('/interviewer',InterviewerRoute);
app.use('/interviews',InterviewsRoute);
app.use('/user',UserRoute);
app.use('/query',QueryRoute );
app.use('/pricing',PricingRoute );
app.use('/razorpay', RazorpayRoute);


const port = process.env.PORT || '8080';
app.listen (port,()=>{
    console.log(`MOC is listening on port ${port}!`);
});
app.get('/',(req,res) =>{
    res.send(`Welcome to MOC!`);
});

connectDb();