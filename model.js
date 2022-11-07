const mongoose = require('mongoose');
mongoose.connect('mogondb//127.0.0.1/testMongodb',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).catch(err => console.log(err));
let guitarSchema = new mongoose.Schema ({
    name: String,
    brand: String,
    neck: Number,
    frets: Number,
    string: Number,
    pros: String,
    cons: String,
    isLuminescent_side_dot_inlays: Boolean,
    pickguard: Boolean,
    price: Number,
    currency: String,

});
module.exports = mongoose.model('Guitar',guitarSchema);