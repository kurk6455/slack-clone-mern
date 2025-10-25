import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Mongo DB connected");
    }catch(error){
        console.log("Unable to connect DataBase ", error);
        process.exit(1);
    }
}