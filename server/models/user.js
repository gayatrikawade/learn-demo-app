const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    first_name: String,
    last_name: String,
    email: String,
    mobile_number: Number
})

module.exports = mongoose.model('User', userSchema);