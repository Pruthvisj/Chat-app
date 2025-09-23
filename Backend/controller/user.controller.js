//here we define the logics
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "password does not match" });
    }
    //findOne :  it is a method from mongodb help to find user via email(unique) things
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //Hashing the passowrd
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({ name, email, password: hashPassword });
    await newUser
      .save()
      .then(() =>
        res.status(201).json({ message: "User resgisted successfully" })
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
