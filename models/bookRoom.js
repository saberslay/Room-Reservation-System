const mongoose = require('mongoose')
const roomId = require('roomId')

const shortUrlSchema = new mongoose.Schema({
    time: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true,
    },
    Name_of_Booker: {
      type: Number,
      required: true,
    },
    Group_Size: {
      type: Number,
      required: true,
    },
    Choose_a_reason_of_reservation: {
      type: String,
      required: true,
    },
    Additional_Requirements: {
      type: Number,
      required: true,
    }
  })
  
  module.exports = mongoose.model('BookRoom', BookRoomSchema)