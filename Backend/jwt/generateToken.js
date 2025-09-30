import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "3d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // prevent from xss attack
    secure: true,
    sameSite: "strict", //prevent from csrf attack
  });
};

export default createTokenAndSaveCookie;
