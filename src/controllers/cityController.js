const res = require("express/lib/response");
const City = require("../models/City");

const getCities = async (req, res) => {
  try {
    let cities = await City.find();
    res.json({ cities });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const addCity = async (req, res) => {
  try {
    let payload = req.body;

    let createdCity = await City.create(payload);

    res.status(201).json({
      message: "City added",
      createdCity: createdCity,
    });
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteCity = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCity = await City.findByIdAndDelete(id);

    if (!deletedCity) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json({ message: "City deleted", deletedCity: deletedCity });
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const validateCityData = (req, res, next) => {
  let data = req.body;
  if (!data.name) {
    return res.status(400).json({ message: "Name field is required" });
  }

  if (!data.country) {
    return res.status(400).json({ message: "Country field is required" });
  }

  next();
};

const getCityById = async (req, res) => {
  const { id } = req.params;
  try {
    const city = await City.findById(id);

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json({ city });
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCity = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedCity = await City.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedCity) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json({ message: "City updated", updatedCity: updatedCity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCityImage = async (req, res) => {
  /* 
  Cree este controlador ya que no tenia tiempo de buscar las urls de las fotos
    y las cargare mas adelante 
  */
  const { id } = req.params;
  const { image } = req.body;
  try {
    const updatedCity = await City.findByIdAndUpdate(id, { image }, { new: true });

    if (!updatedCity) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json({ message: "City image updated", updatedCity: updatedCity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getCities,
  getCityById,
  validateCityData,
  addCity,
  deleteCity,
  updateCity,
  updateCityImage
};
