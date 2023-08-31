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
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

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

//User
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', addUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id',updateUser);
module.exports = router;
