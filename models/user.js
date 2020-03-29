const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    displayPicture:String,
    email:String,
    credits: {
        type: Number,
        default: 0
    }
});

mongoose.model('users', userSchema);   