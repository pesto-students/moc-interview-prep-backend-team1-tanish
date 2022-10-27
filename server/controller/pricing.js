import PricingDb from "../model/pricing.js";

const pricingControllerFind = (req, res) => {
  PricingDb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching data" });
    });
};

const pricingControllerCreate = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Input cannot be empty" });
  }

  const Pricing = new PricingDb({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    benefits: req.body.benefits,
  });

  Pricing.save(Pricing)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while saving data" });
    });
};

const pricingControllerFindOne = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }
  let id = req.params.id;
  PricingDb.findById(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while fetching data" });
    });
};

const pricingControllerUpdate = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  PricingDb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Interviewer not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while updating Pricing" });
    });
};

const pricingControllerDelete = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  PricingDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while deleting data" });
    });
};

export  
{
    pricingControllerFind,
    pricingControllerCreate,
    pricingControllerFindOne,
    pricingControllerUpdate,
    pricingControllerDelete
};