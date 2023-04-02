import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected mongodb success');
    } catch (error) {
        throw error;
    }
    mongoose.connection.on('disconnected', () => {
        console.log('mongoDB disconnected');
    });
};

export default connect;
