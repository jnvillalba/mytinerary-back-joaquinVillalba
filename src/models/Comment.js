const { Schema, model, Types } = require("mongoose");

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  itinerary: {
    type: Types.ObjectId,
    ref: "Itinerary",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
