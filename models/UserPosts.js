const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserPostSchema = new Schema({
    // user: {
    //     user_id: String,
    //     required: true
    // },
  dtls: {
    type: String,
    required: true,
  },
  // img: {
  //   data: Buffer,
  //   contentType: String,
  // },
  // video: {
  //   data: Buffer,
  //   type: String,
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
