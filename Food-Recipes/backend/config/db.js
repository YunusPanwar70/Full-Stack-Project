import mongoose from 'mongoose'

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log('MongoDb Connected Successfully');
    });
};

export default connectDB;