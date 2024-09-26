function verifyToken(req, res, next) {
  if (document.cookie.includes("secureJWT")) {
    next();
  }
}

export default verifyToken;
