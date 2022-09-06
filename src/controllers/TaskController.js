import mongoose from 'mongoose'
import Task from '../models/Task.js'

export function createTask(req, res) {
  const task = new Task({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    status: req.body.status
  })
  return task.save()
    .then((newTask) => {
      res.status(201).json({
        success: true,
        Task: newTask
      })
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        err: err.message
      })
    })
}

export function getTasks(req, res) {
  Task.find()
  .then((Tasks) => {
    res.status(200).json({
      success: true,
      Task: Tasks
    })
  })
  .catch(err => {
    res.status(500).json({
      success: false,
      err: err.message
    })
  })
}

export function getTask(req, res) {
  const { id } = req.params
  Task.findById(id)
  .then((Task) => {
    res.status(200).json({
      success: true,
      Task: Task
    })
  })
  .catch(err => {
    res.status(500).json({
      success: false,
      err: err.message
    })
  })
}

export function delTask(req, res) {
  const { id } = req.params
  Task.findByIdAndDelete(id)
    .then(Task => {
      res.status(204).json({
        success: true,
        Task
      })
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        err: err.message
      })
    })
}

export function updateTask(req, res) {
  const { id } = req.params
  const { name, status } = req.body
  const newVal = { $set: {name, status}}
  Task.findByIdAndUpdate(id, newVal)
    .then((Task) => {
      res.status(200).json({
        success: true,
        Task
      })
    })
    .catch(err => console.log(err))
}