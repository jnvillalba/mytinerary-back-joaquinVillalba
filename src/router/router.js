const express = require("express");
const router = express.Router();
const {
  getCities,
  getCityById,
  validateCityData,
  addCity,
  deleteCity,
  updateCity
} = require("../controllers/cityController");

router.get("/city/:id", getCityById);
router.get("/cities", getCities);

router.post("/city", validateCityData, addCity);

router.put('/cities/:id', updateCity);
router.delete("/city/:id", deleteCity);

module.exports = router;
