const res = require("express/lib/response");
const Itinerary = require("../models/Itinerary");

const getItineraries = async (req, res) => {
  try {
    let itineraries = await Itinerary.find();
    const searchText = req.query.search || "";
    const filteredItineraries = filterItineraries(itineraries, searchText);

    res.json({ itineraries: filteredItineraries});
  } catch (error) {
    res.json({ message: error.message });
  }
};

const filterItineraries = (itineraries, searchText) => {
  searchText = searchText.trim().toLowerCase();
  const filteredItineraries = itineraries.filter((itinerary) => {
    const itineraryName = itinerary.name.toLowerCase();
    return itineraryName.startsWith(searchText);
  });

  return filteredItineraries;
};

const addItinerary = async (req, res) => {
  try {
    let payload = req.body;

    let createdItinerary = await Itinerary.create(payload);

    res.status(201).json({
      message: "Itinerary added",
      createdItinerary: createdItinerary,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteItinerary = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(id);

    if (!deletedItinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    res.status(200).json({ message: "Itinerary deleted", deletedItinerary: deletedItinerary });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItineraryById = async (req, res) => {
  const { id } = req.params;
  try {
    const itinerary = await itinerary.findById(id);

    if (!itinerary) {
      return res.status(404).json({ message: "itinerary not found" });
    }

    res.status(200).json({ itinerary });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateItinerary = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedItinerary) {
      return res.status(404).json({ message: "itinerary not found" });
    }

    res.status(200).json({ message: "itinerary updated", updatedItinerary: updatedItinerary });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getItinerariesByCity = async (req, res) => {
  try {
    const { cityId } = req.params; 

    const itineraries = await Itinerary.find({ city: cityId }).populate('city');

    if (!itineraries) {
      return res.status(404).json({ message: 'No se encontraron itinerarios para la ciudad de id' + cityId });
    }

    res.status(200).json(itineraries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getItineraries,
  getItineraryById,
  addItinerary,
  deleteItinerary,
  updateItinerary,
  getItinerariesByCity
};
