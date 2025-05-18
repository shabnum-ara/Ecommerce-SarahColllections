import jwt from "jsonwebtoken";

const authuser = async (req, res, next) => {
  const authHeader = req.headers.authorization; // get Authorization header

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Not authorized" });
  }

  const token = authHeader.split(" ")[1]; // extract token after "Bearer "

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authuser;
