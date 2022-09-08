import  express from 'express';
var router = express.Router()
import  {
    userControllerFind,
    userControllerCreate,
    userControllerFindOne,
    userControllerUpdate,
    userControllerDelete,
    userControllerFindOneUser
} from "../controller/user.js";

router.get("/getData", userControllerFind)
router.post("/addData", userControllerCreate)
router.get("/getData/:id", userControllerFindOne)
router.post("/updateData/:id", userControllerUpdate)
router.delete("/deleteData/:id", userControllerDelete)
router.post('/loginUser', userControllerFindOneUser)

export default router;