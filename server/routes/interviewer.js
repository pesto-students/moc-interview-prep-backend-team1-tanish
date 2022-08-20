import  express from 'express';
var router = express.Router()
import {
    interviewerControllerFind,
    interviewerControllerCreate,
    interviewerControllerFindOne,
    interviewerControllerUpdate,
    interviewerControllerDelete
} from '../controller/interviewer.js';

router.get("/getData", interviewerControllerFind)
router.post("/addData", interviewerControllerCreate)
router.get("/getData/email",  interviewerControllerFindOne)
router.post("/updateData/:id", interviewerControllerUpdate)
router.delete("/deleteData/:id", interviewerControllerDelete)

export default router;