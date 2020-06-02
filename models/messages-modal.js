const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
 
const messageSchema = new Schema({
  message: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  expireAt: { type: Date, default: undefined }

},
{
  timestamps: true
});

messageSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });
 
const Message = mongoose.model('Message', messageSchema);
 
module.exports = Message;