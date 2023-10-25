import mongoose from "mongoose";

export const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log('Connected to the Database');
    } catch (error:any) {
        throw new Error(error)
    }
}

export default connect

