const mongoose = require('mongoose');
const {playerSchema} = require('./Player');

const roomSchema = new mongoose.Schema({
    word: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String,
        unique: true,
        trim: true,
    },
    occupancy: {
        required: true,
        type: Number,
        default: 4
    },
    maxRounds: {
        required: true,
        type: Number
    },
    currentRound: {
        required: true,
        type: Number,
        default: 1,
    },
    players: [playerSchema],
    isJoin: {
        type: Boolean,
        default: true,
    },
    turn: playerSchema,
    turnIndex: {
        type: Number,
        default: 0
    }
})

const gameModel = mongoose.model('Room', roomSchema);
module.exports = gameModel;