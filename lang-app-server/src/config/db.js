import mongoose from "mongoose";

const dbConnection = async () => {
  const uri = process.env.MONGO_URI?.trim();
  if (!uri) {
    throw new Error(
      "MONGO_URI is missing or empty. Set it in lang-app-server/.env (or check that the server was started with the correct working directory)."
    );
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default dbConnection;
