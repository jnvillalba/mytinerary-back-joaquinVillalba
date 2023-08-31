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

const validateItineraryData = (req, res, next) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ message: "Invalid data" });
  }
  if (!data.name) {
    return res.status(400).json({ message: "The 'name' field is required" });
  }

  if (!data.user) {
    return res.status(400).json({ message: "The 'user' field is required" });
  }

  if (!data.city) {
    return res.status(400).json({ message: "The 'city' field is required" });
  }

  if (typeof data.price !== "number" || data.price < 1 || data.price > 5) {
    return res.status(400).json({ message: "The 'price' field must be a number between 1 and 5" });
  }

  if (typeof data.durationHours !== "number" || data.durationHours <= 0) {
    return res.status(400).json({ message: "The 'durationHours' field must be a number greater than 0" });
  }

  if (!data.hashtags || !Array.isArray(data.hashtags) || data.hashtags.length === 0) {
    return res.status(400).json({ message: "The 'hashtags' field must be a non-empty array of strings" });
  }

  next();
};


module.exports = {
  validateCityData,
  validateItineraryData
};
