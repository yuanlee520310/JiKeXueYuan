var mongoose=require('mongoose');
require('./model');

var Book=mongoose.model('Book');

var book=new Book({
    name:'MEAN',
    author:'Tom',
    date:new Date()
});

book.save(function (err) {
    console.log(err);
});