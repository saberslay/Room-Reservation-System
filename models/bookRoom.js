const mongoose = require('mongoose')
const roomId = require('roomId')

const shortUrlSchema = new mongoose.Schema({
    time: {
      type: Number,
      required: true
    },
    short: {
      type: String,
      required: true,
      default: roomId.generate
    },
    clicks: {
      type: Number,
      required: true,
      default: 0
    }
  })
  
  module.exports = mongoose.model('BookRoom', BookRoomSchema)