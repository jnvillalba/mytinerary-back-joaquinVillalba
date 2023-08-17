require("./db");
const City = require("../models/City");
const cities = [
  {
    name: "Wakatobi",
    country: "Indonesia",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/170407220916-04-iconic-mountains-matterhorn-restricted.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/w_1280",
  },
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

City.insertMany(cities);
