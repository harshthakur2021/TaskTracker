import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;

export const Connection = () => {
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.v2yu3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

export default Connection;