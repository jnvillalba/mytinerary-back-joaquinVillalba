const { Schema, model } = require("mongoose");

const schemaitinerary = new Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  city: {
    type: mongoose.Types.ObjectId,
    ref: "City",
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  durationHours: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  hashtags: {
    type: [String],
    required: true,
  },
});

const Itinerary = model("Itinerary", schemaitinerary);

module.exports = Itinerary;
