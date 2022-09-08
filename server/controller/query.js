import QueryDb from "../model/query.js";


const queryControllerFind = (req, res) => {
  QueryDb.find()
    .then((Query) => {
      res.send(Query);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching data" });
    });
};

const queryControllerCreate = (req, res) => {
  if (!req.body) {
    res.send({ message: "Invalid Input, required fields missing." });
  }

  const Query = new QueryDb({
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    status: req.body.status,
    comments: req.body.comments,
  });

  Query.save(Query)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: err.message || "Server Error, could not store data",
      });
    });
};

const queryControllerFindOne = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }
  let id = req.params.id;
  QueryDb.findById(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while fetching data" });
    });
};

const queryControllerUpdate = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  QueryDb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.status(401).send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while updating data" });
    });
};

const queryControllerDelete = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  QueryDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Query not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting data" });
    });
};

export{
    queryControllerFind,
    queryControllerCreate,
    queryControllerFindOne,
    queryControllerUpdate,
    queryControllerDelete
};