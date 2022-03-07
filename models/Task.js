import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  task: { type: String },
  completed: { type: Boolean, default: true },
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
