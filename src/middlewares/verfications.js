const validateCityData = (req, res, next) => {
  let data = req.body;

  if (!data) {
    return res.status(400).json({ message: "Invalid data" });
  }
  if (!data.name) {
    return res.status(400).json({ message: "Name field is required" });
  }

  if (!data.country) {
    return res.status(400).json({ message: "Country field is required" });
  }

  next();
};

module.exports = {
  validateCityData,
};
