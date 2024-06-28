import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  mongoose.set("strictQuery", true);
  const options: any = {
    dbName: "share-it",
  };

  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGODB_URI || "", options);
      isConnected = true;
    } catch (error: Error | any) {
      console.log(error.message, "connection error");
    }
  }
};
