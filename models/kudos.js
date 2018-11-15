const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
  nameSender:String,
  nameReceiver: String,
    title: String,
  body: String,
});
///work
const kudos = mongoose.model("kudos", KudosSchema);

module.exports = kudos;


