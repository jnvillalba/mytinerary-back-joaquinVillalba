const express = require("express");
const router = express.Router();
const {
  getCities,
  getCityById,
  addCity,
  deleteCity,
  updateCity,
} = require("../controllers/cityController");
const {
  getItineraries,
  getItineraryById,
  addItinerary,
  deleteItinerary,
  updateItinerary,
  getItinerariesByCity,
} = require("../controllers/itineraryController");
const {
  validateCityData,
  validateItineraryData,
} = require("../middlewares/verfications");
//City
router.get("/city/:id", getCityById);
router.get("/cities", getCities);
router.post("/city", validateCityData, addCity);
router.put("/city/:id", updateCity);
router.delete("/city/:id", deleteCity);

//Itinerary

router.get("/itinerary/:id", getItineraryById);
router.get("/itineraries/:cityId", getItinerariesByCity);

router.get("/itinerary", getItineraries);
router.post("/itinerary", validateItineraryData, addItinerary);
router.put("/itinerary/:id", updateItinerary);
router.delete("/itinerary/:id", deleteItinerary);

module.exports = router;
