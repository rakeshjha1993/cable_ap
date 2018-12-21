const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BroadcasterSchema = new Schema({
  NameOfBroadcaster:  {
      type : String
  },
  
});

var Broadcaster = mongoose.model('Broadcaster', BroadcasterSchema);

module.exports = Broadcaster;