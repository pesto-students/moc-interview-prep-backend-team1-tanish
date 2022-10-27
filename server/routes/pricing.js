import express from 'express';
var router = express.Router();
import 
{
   pricingControllerFind,
   pricingControllerCreate,
   pricingControllerFindOne,
   pricingControllerUpdate,
   pricingControllerDelete
} from '../controller/pricing.js';

router.get("/getData", pricingControllerFind)
router.post("/addData",pricingControllerCreate)
router.get("/getData/:id",pricingControllerFindOne)
router.post("/updateData/:id", pricingControllerUpdate)
router.delete("/deleteData/:id", pricingControllerDelete)




export default router;