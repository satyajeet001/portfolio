const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  number: {
    type: Number,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
});

const Contact = new mongoose.model("Contact", userSchema);

module.exports = Contact;
