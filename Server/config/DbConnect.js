import mongoose from "mongoose";
const connectDb = async() => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/authentication')
        console.log('Connected to the data base successfully')
    } catch (error) {
        console.error(error);
        process.exit(true)
    }
}
export default connectDb