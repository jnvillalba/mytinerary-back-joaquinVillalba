const mongoose = require("mongoose");
require('./db') 

const cities = [
  
  {
    name: "Neo Tokyo",
    country: "Japan",
    image: "./tokyo.jfif",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    image: "./ba.jpg",
  },
  {
    name: "Nueva York",
    country: "Estados Unidos",
    image: "./ny.jpg",
  },
  {
    name: "Londres",
    country: "Reino Unido",
    image: "./bg-2.jpeg",
  },
  {
    name: "Río de Janeiro",
    country: "Brasil",
    image: "./cities-bg.jpeg",
  },
  {
    name: "Roma",
    country: "Italia",
    image:
      "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Pekin",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1603924147107-81e7a2b3051e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Estambul",
    country: "Turkey",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Ciudad de México",
    country: "Mexico",
    image:
      "https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyaWdodHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sidney",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJyaWdodHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Moscu",
    country: "Rusia",
    image: "./bg-1.jpeg",
  },
];

const insertCities = async (req, res) => {
  try {
    
    await City.insertMany(cities);

    res.status(200).json({ message: "Collection has been added" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = insertCities;
