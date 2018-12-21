const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BoquetSchema = new Schema({
  Broadcaster:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Broadcaster'
  },
  BoquetName: String,
  MRP: Number,
  Channels : [
       {
        channelsInPack : {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Channels'
        }
      }
  ]
});

var Boquet = mongoose.model('Boquets', BoquetSchema);

module.exports = Boquet;