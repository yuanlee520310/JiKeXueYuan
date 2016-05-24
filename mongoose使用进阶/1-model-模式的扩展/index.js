var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/high');

var BookSchema= new mongoose.Schema({
    isbn:{
        type:Number,
        unique:true
    },
    title:{
        type:String,
        index:true
    }
});

var Book = mongoose.model('Books',BookSchema);//自动创建表（以模型名的复数为表名）

var book=new Book({
    isbn:0,
    title:'Zero'
});

book.save(function (err) {
    console.log(err);
    console.log('book:',book);
});



