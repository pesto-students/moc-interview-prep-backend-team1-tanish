import InterviewerDb from "../model/interviewer.js";

const interviewerControllerFind = (req, res) => {
    InterviewerDb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message || "Error fetching Interviewer" });
      });
  };
  
  const interviewerControllerCreate = (req, res) => {
    if (!req.body) {
      res.send({ message: "Input cannot be empty" });
    }
  
    const interviewer = new InterviewerDb({
      name: req.body.name,
      email: req.body.email,
      password:req.body.password,
      contact: req.body.contact,
      designation: req.body.designation,
      experience: req.body.experience,
      company: req.body.company,
      skills: req.body.skills,
      image: req.body.image,
      about: req.body.about,
      topics: req.body.topics,
      rating: req.body.rating,
      onboarded: req.body.onboarded,
      interviewCount: req.body.interviewCount,
      analytics: req.body.analytics,
      feedback: req.body.feedback,
    });
  
    interviewer.save(interviewer)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send({ message: err.message || "Error while saving data" });
      });
  };
  
 const interviewerControllerFindOne = async(req, res) => {
    if(!req.body){
      res.send({message:"Input Cannot be empty"});
    }
    let foundUser = await InterviewerDb.findOne({email:req.query.email}).exec();
    res.send(foundUser);
  };
  
  const interviewerControllerUpdate = (req, res) => {
    if (!req.body) {
      res.send({ message: "Input cannot be empty" });
    }
  
    let id = req.params.id;
    InterviewerDb.findByIdAndUpdate(id, req.body)
      .then((data) => {
        data != null
          ? res.send(data)
          : res.send({ message: "Data not found for id " + id });
      })
      .catch((err) => {
        res.send({ message: err.message || "Error while updating data" });
      });
  };
  
const interviewerControllerDelete = (req, res) => {
    if (!req.body) {
      res.status(500).send({ message: "Input cannot be empty" });
    }
  
    let id = req.params.id;
    InterviewerDb.findByIdAndDelete(id)
      .then((data) => {
        data != null
          ? res.send(data)
          : res.send({ message: "Data not found for id " + id });
      })
      .catch((err) => {
        res.send({ message: err.message || "Error while Deleting data" });
      });
  };


  export 
  {
    interviewerControllerFind,
    interviewerControllerCreate,
    interviewerControllerFindOne,
    interviewerControllerUpdate,
    interviewerControllerDelete
  };