const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Negative...Try Again"
  },
  kudos: [
    {
      type: Schema.Types.ObjectId,
      ref: "kudos"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;