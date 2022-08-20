import StudentDb from "../model/student.js";

const studentControllerFind = (req,res) => {
    StudentDb.find()
    .then((user)=>{
        res.send(user);
    })
    .catch((err) =>{
        res.send({message:err.message|| "Error in Fetching the data"});
    });
};

const studentControllerCreate = (req,res) => {
    if(!req.body){
        console.log(req);
        res.send({message:"Input Cannot be empty"})
    }
    const student = new StudentDb({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        contact: req.body.contact,
        degree: req.body.degree,
        experience: req.body.experience,
        company: req.body.company,
        skills: req.body.skills,
        image: req.body.image,
        about: req.body.about,
        topics: req.body.topics,
        rating: req.body.rating,
        listed: req.body.listed,
        package: req.body.package,
        analytics: req.body.analytics,
        learnings: req.body.learnings
    });
    student.save(student)
    .then((data) =>{
        console.log("then");
        console.log(data);
        data!=null?res.send(data):res.send({message:"Data not found for id" + id});
    });
    // .catch((err) =>{
    //     console.log("catch");
    //     console.log(err);
    //     res.send({message:err.message|| "Error in saving  the data"});
    // });
    
};

const studentControllerFindOne = async (req,res) => {
    if(!req.body){
        res.send({message:"Input Cannot be empty"});
    }
    let foundUser = await StudentDb.findOne({email:req.query.email}).exec();
    res.send(foundUser);
    
};

const studentControllerUpdate =(req,res) =>{
    if (!req.body) {
        res.send({ message: "data cannot be empty" });
    }
    let id = req.params.id;
    StudentDb.findByIdAndUpdate(id,req.body)
    .then((data) =>{
        data!=null?res.send(data):res.send({message:"Data not found id" +id});
    })
    .catch((err) =>{
        res.send({message:err.message||"Error while Updating data"});
    });
};


const studentControllerDelete =(req,res) =>{
    if(!req.body){
        res.send({ message: "Input cannot be empty" });
    }
    let id = req.params.id;
    StudentDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.status(401).send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting data" });
    });
};

export  
{
    studentControllerFind,
    studentControllerCreate,
    studentControllerFindOne,
    studentControllerUpdate,
    studentControllerDelete
};