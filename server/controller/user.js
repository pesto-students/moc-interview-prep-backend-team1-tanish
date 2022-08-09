import UserDb from "../model/user";

const userControllerFind = (req, res) => { 
        UserDb.find()
        .then(user => { res.send(user)})
        .catch(
            err => {res.status(500).send({message:err.message || "Error fetching user"})})
}

const userControllerCreate = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        googleObj: req.body.googleObj
    })

    user.save(user)
        .then(data => { res.send(data) })
        .catch(err => { res.send({ message: err.message || "Error inserting data" }) })
}
const userControllerFindOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}
    
    let id = req.params.id;
    UserDb.findById(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({ message: "Data not found for id " + id }) })
        .catch(err => { res.send({ message: err.message || "Error fetching data" }) })
}

const userControllerUpdate = (req, res) => { 
    if (!req.body) { res.send({message:"Input cannpt be empty"})}

    let id = req.params.id;
    UserDb.findByIdAndUpdate(id, req.body)
    .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Data not found for id "+id})})
    .catch(err => { res.send({ message: err.message || "Error while updating data" }) })
}

const userControllerDelete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}

    let id = req.params.id;
    UserDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.send({message:"Data not found for id "+id})})
        .catch(err => { res.send({ message: err.message || "Error while Deleting data" }) })
}

const userControllerFindOneUser = (req,res) => {
    if (!req.body) { res.send({message:"Input cannot be empty"})}
    
    let email = req.body.email;
    UserDb.find({"email" : email })
             .then(data => {
                 if(data){res.json(data)}
                 else { res.json({ status: "Faiure", message: "Cannot find the User" }) }
             })
             .catch(err => {
                 res.json({message : err.message || "Error while finding "+email})
             })
}

export {userControllerFind,userControllerCreate,userControllerFindOne,userControllerUpdate,userControllerDelete,userControllerFindOneUser};