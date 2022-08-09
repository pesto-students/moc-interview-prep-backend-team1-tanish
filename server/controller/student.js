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
        name:req.body.name
    });
    student.save(student)
    .then((data) =>{
        data!=null?res.send(data):res.send({message:"Data not found for id" + id});
    });
};

export  {studentControllerFind,studentControllerCreate};