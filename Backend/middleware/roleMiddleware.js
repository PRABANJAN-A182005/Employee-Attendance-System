// middleware/roleMiddleware.js

/**
 * @desc    Role-based access control
 * @param   roles - Allowed roles (e.g., "employee", "manager")
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    // req.user comes from authMiddleware
    if (!req.user) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied: insufficient permissions",
      });
    }

    next();
  };
};