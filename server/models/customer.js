var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = Schema({
    fistname: String,
    lastname: String,
    phone: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
});

module.exports = mongoose.model('Customer', customerSchema);