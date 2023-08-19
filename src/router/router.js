const express = require("express");
const router = express.Router();
const {
  getCities,
  getCityById,
  addCity,
  deleteCity,
  updateCity,
} = require("../controllers/cityController");
const { validateCityData } = require("../middlewares/verfications");
router.get("/city/:id", getCityById);
router.get("/cities", getCities);

router.post("/city", validateCityData, addCity);

router.put("/city/:id", updateCity);
router.delete("/city/:id", deleteCity);

module.exports = router;
