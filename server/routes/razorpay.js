import express from 'express';
var router = express.Router();
import {RazorpayControllerOrder} from "../controller/razorpay.js";

router.get("/", (req, res) => { res.send("razorpay Api")})
router.post("/createOrder", RazorpayControllerOrder)

export default router;