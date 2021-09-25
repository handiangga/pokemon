function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "notFound":
      res.status(500).json({ mesasage: "internal server error" });
      break;
    default:
      res.status(500).json({ mesasage: "internal server error" });
      break;
  }
}
module.exports = errorHandler;
