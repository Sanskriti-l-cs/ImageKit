import mongoose from "mongoose";

const connectDB = async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mdb is connected")
} catch (error) {
    console.log(error.message)
}
}

export default connectDB;