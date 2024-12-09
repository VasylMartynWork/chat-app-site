function verifyToken(req, res, next) {
  if (document.cookie.includes("secureJWT")) {
    next();
  } else {
    next('/sign-in');
  }
}

export default verifyToken;
