import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Tambahkan pengguna baru
    const user = new User({
      username: "fadhi",
      password: "password", // Password akan di-hash secara otomatis
      email: "fadhi@example.com",
    });

    await user.save();
    console.log("User created:", user);

    mongoose.connection.close();
  })
  .catch((error) => console.log(error.message));
