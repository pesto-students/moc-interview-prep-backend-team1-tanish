import  express from 'express';
var router = express.Router()
import {
    interviewerControllerFind,
    interviewerControllerCreate,
    interviewerControllerFindOne,
    interviewerControllerFindById,
    interviewerControllerUpdate,
    interviewerControllerDelete
} from '../controller/interviewer.js';

router.get("/getData", interviewerControllerFind);
router.post("/addData", interviewerControllerCreate);
router.get("/getData/email",  interviewerControllerFindOne);
router.get("/getData/:id",  interviewerControllerFindById);
router.post("/updateData/:id", interviewerControllerUpdate);
router.delete("/deleteData/:id", interviewerControllerDelete);

export default router;