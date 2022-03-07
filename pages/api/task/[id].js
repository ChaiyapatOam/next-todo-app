import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
  const { method } = req;
  const {id} = req.query;

  await dbConnect();

  //Update
  if (method === "PUT") {
    try {
      const task = await Task.findByIdAndUpdate(id,{$set:req.body},{new:true});
      res.status(20).json({ data: task, message: "Update Success" });
    } catch (err) {
      res.status(500).json({ message: "server Error" });
      console.log(err);
    }
  }

  //DELETE
  if (method === "DELETE") {
    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted"})
    } catch (err) {
      res.status(500).json({ message: "server Error" })
      console.log(err);
    }
  }
};
