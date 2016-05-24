var mongoose=require('mongoose');

require('./model');

var Book=mongoose.model('Book');

Book.find({$and:[
    {author:'LiLei'},
    {author:'Jame'}
]}, function (err, docs) {
    if(err){
        return console.log(err);
    }
    console.log('ret:',docs);
});