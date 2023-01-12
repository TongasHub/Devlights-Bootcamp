const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: { type: String, required: true },
    name: String,
    lastName: String,
    age: Number,
    addres: String
});

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;