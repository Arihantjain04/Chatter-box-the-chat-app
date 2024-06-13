import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.URI)
        console.log("Database connected successfully !!!")
    } catch (error) {
        console.error(`Error connecting to MongoDB : ${error.message}`)
        process.exit(1)
    }
}

export default connectMongoDB