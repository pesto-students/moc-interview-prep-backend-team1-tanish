import  express from 'express';
var router = express.Router()
import {
    interviewControllerFind,
    interviewControllerCreate,
    interviewControllerFindOne,
    interviewControllerUpdate,
    interviewControllerDelete
} from '../controller/interviews.js';

router.get("/getData", interviewControllerFind)
router.post("/addData", interviewControllerCreate)
router.get("/getData/:id",  interviewControllerFindOne)
router.post("/updateData/:id", interviewControllerUpdate)
router.delete("/deleteData/:id", interviewControllerDelete)

export default router;