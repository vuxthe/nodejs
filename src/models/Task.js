import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const taskSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})


export default mongoose.model('Task', taskSchema)