const mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId

const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  Broadcaster: {
    type: Schema.Types.ObjectId,
    ref: 'Broadcaster'
  },
  ChannelName: String,
  Genre: String,
  Language: String,
  MRP: Number,
  Quality: String
});

var Channel = mongoose.model('Channels', ChannelSchema);

module.exports = Channel;