const taskModel = require("../model/model.js");
const mongoose = require("mongoose");
const getTask = (req, res) => {
  taskModel.find({}, (err, data) => {
    if (err) {
      res.json({
        message: "Error!",
      });
    } else {
      res.status(200).json({
        message: "Here is your data!",
        data: data,
      });
    }
  });
};

const createTask = (req, res, next) => {
  const newTaskmodel = new taskModel({
    _id: new mongoose.Types.ObjectId(),
    taskName: req.body.taskName,
    orderNumber: req.body.orderNumber,
    doneTime: req.body.doneTime,
  })
    .save()
    .then((data) => {
      res.status(200).json({
        message: "Successfully created task",
        data: data,
      });
    })
    .catch(next);
};

const updateTask = (req, res) => {
  taskModel.findByIdAndUpdate({ id: req.query.id }, (err, data) => {
    if (err) {
      res.status(401).json({
        message: "Failed to update task!",
      });
    } else {
      res.status(200).json({
        message: "Task updated sucessfully",
        data: data,
      });
    }
  });
};

const deleteTask = (req, res) => {
  console.log(req.body);
  const body = req.body;
  taskModel.findOneAndDelete({ body }, (err, data) => {
    if (err) {
      res.status(401).json({
        message: "Error to delete!",
      });
    } else {
      res.status(200).json({
        message: "Successfully deleted!",
        data: data,
      });
    }
  });
};

module.exports = { getTask, createTask, deleteTask, updateTask };
