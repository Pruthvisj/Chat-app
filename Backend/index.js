import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";

const app = express();
dotenv.config();
app.use(express.json())
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI).then(console.log("Mongo DB Connected"));
} catch (error) {
  console.log(error);
}

app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`app is running on: http://localhost:${PORT}`);
});
