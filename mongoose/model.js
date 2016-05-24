var mongoose=require('mongoose');
var uri='mongodb://localhost/mongooseTestBooks';

mongoose.connect(uri);

var BookSchema=new mongoose.Schema({
    name:String,
    author:String,
    date:Date
});

mongoose.model('Book',BookSchema);