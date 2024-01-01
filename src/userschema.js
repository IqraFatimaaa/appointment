var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
username:   String,
email:   String,

bookings:   [{type: Schema.Types.ObjectId, ref: 'Bookings'}]    

});

var User = mongoose.model('User', userSchema);