import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      const newTask = await new Task(req.body).save();
      res.status(201).json({ data: newTask, message: "Success" });
    } catch (err) {
      res.status(500).json({ message: "server Error" });
      console.log(err);
    }
  }

  if (method === "GET") {
    try {
        const tasks = await Task.find();
        res.status(200).json({data:tasks})
    } catch (err) {
      res.status(500).json({ message: "server Error" })
      console.log(err);
    }
  }
};
