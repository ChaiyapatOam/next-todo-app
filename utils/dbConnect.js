import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL
if(!MONGO_URL) {
    throw new Error(
        "Please Define Mongo URL"
    )
}

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose= {conn: null, promise:null}
}

const dbConnect = async () => {
    if(cached.conn) {
        return cached.conn
    }
    if(!cached.promise) {
        const options = {
            useNewUrlparser : true,
            useUnifiedTopology: true
        }
        cached.promise = mongoose.connect(MONGO_URL,options).then((mongoose)=> {
            return mongoose
        })
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;