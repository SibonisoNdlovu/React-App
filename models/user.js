const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

//check for exisitng collections, won't override existing
mongoose.model('users', userSchema);
