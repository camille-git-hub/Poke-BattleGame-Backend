import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "", {
      dbName: "sd71",
    });

    console.log("DB Connected!");
  } catch (error) {
    console.error(error);
  }
}

connectDB();
