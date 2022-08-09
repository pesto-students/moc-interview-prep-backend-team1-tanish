import express from 'express';
var router = express.Router();
import {studentControllerFind,studentControllerCreate} from '../controller/student.js';

router.get("/getData",studentControllerFind);
router.post("/addData",studentControllerCreate);


export default router;