const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false}
});

//check for exisitng collections, won't override existing
module.exports = recipientSchema;
