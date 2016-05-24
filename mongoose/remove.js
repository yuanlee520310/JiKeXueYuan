var mongoose=require('mongoose');

require('./model');

var Book=mongoose.model('Book');

Book.findOne({_id:'571e299e934221740783d2c8'}, function (err, doc) {
    if(err){
        return console.log(err);
    }
    console.log('ret:',doc);
    doc.remove();
});