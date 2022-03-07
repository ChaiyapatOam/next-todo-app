import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;
const dbConnect= mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

export default dbConnect;
