const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get the token from the request headers
  const token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1];

  // If no token is found, send an error response
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token using your JWT secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If verification is successful, store the user data in the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If verification fails, send an error response
    res.status(400).json({ message: "Invalid token." });
  }
};
