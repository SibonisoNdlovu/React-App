const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

//check for exisitng collections, won't override existing
mongoose.model('users', userSchema);
