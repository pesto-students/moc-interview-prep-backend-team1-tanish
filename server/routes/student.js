import express from 'express';
var router = express.Router();
import 
{
    studentControllerFind,
    studentControllerCreate,
    studentControllerFindOne,
    studentControllerUpdate,
    studentControllerDelete
} from '../controller/student.js';

router.get("/getData",studentControllerFind);
router.post("/addData",studentControllerCreate);
router.get("/getData/:id", studentControllerFindOne)
router.post("/updateData/:id", studentControllerUpdate,)
router.delete("/deleteData/:id",  studentControllerDelete)



export default router;