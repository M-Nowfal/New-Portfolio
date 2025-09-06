import mongoose from "mongoose";

let isConnected = false;

export default async function connect() {
  try {
    if (isConnected) {
      console.log("Using existing connection");
      return;
    }
    await mongoose.connect(`${process.env.DB_URI}`);
    isConnected = true;
    console.log("Data Base connected successfully!");
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    console.log(error);
  }
};
