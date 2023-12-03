const App = require("../models/application.js");

exports.addApplication = async (req, res) => {
  const newApplication = new App({ ...req.body });
  try {
    const savedapplication = await newApplication.save();
    res.status(200).send(savedapplication);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getapps = async (req, res) => {
  // const newApplication = new App({ ...req.body });
  try {
    const app = await App.find();
    console.log(app);
    res.status(200).json(app);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getapp = async (req, res) => {
  const { id } = req.params;
  try {
    const app = await App.findOne({ _id: id });
    res.status(200).json(app);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.deleteapp = async (req, res) => {
  const { id } = req.params;
  console.log("delete app");
  try {
    const app = await App.deleteOne({ _id: id });
    console.log("app", app);
    res.status(200).send(app);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
