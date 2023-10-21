import mongoose from "mongoose";

export const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to the Database');
    } catch (error) {
        throw new Error('Connection failed')
    }
}

export default connect