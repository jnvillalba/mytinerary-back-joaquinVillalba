const { Schema, model,Types } = require("mongoose");
const commentSchema = require("./Comment");

const activitySchema = require("./Activity"); 

const schemaItinerary = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  city: {
    type: Types.ObjectId,
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
  comments: {
    type: [Types.commentSchema],
    required: false,
  },
  activities: {
    type: [Types.activitySchema],
    required: false,
  },
});

const Itinerary = model("Itinerary", schemaItinerary);

module.exports = Itinerary;
