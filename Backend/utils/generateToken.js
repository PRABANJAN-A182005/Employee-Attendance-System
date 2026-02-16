// utils/generateToken.js

import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign(
    { id },                     // Payload
    process.env.JWT_SECRET,     // Secret key from .env
    {
      expiresIn: "7d",          // Token validity
    }
  );
};

export default generateToken;