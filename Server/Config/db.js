import mongoose from "mongoose";

//Function to connect to the MongoDB Database

const connectMongoDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database is connected")
  );

  await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
};

export default connectMongoDB;
