const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserPostSchema = new Schema({
  post: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = User = mongoose.model("userposts", UserPostSchema);
