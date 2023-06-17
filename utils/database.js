import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true); // if this is not set get error in console

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prompt_db",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;
    console.log('MongoDB connected')
  } catch (error) {
    console.log("database error",error);
  }
}