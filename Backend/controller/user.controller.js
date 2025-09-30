//here we define the logics
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";
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
    await newUser.save();
    if (newUser) {
      await createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({ message: "User resgisted successfully", newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(404).json({ message: "Invalid User or Passsword" });
    }
    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
      message: "User logged in Successfully",
      user: { 
        _id: user._id, 
        name: user.name, 
        email: user.email 
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

export const logout = async (req, res)=> {
  //we'll clear the cookie when user click on logout
  try {
    res.clearCookie('jwt');
    // res.clearCookie('token'); // this will also work.
    res.status(200).json({message:"User logged out Successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"server error"});
  }
}
