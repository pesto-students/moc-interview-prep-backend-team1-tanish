import  express from 'express';
var router = express.Router()

import{
    queryControllerFind,
    queryControllerCreate,
    queryControllerFindOne,
    queryControllerUpdate,
    queryControllerDelete
} from  '../controller/query.js';

router.get("/getData",queryControllerFind);
router.post("/addData", queryControllerCreate);
router.get("/getData/:id", queryControllerFindOne);
router.post("/updateData/:id", queryControllerUpdate);
router.delete("/deleteData/:id", queryControllerDelete);

export default router;