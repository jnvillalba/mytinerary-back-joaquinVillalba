const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;
