var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/high');

var BookSchema= new mongoose.Schema({
    isbn:{
        type:Number,
        default:100100
    },
    title:{
        type:String,
        default:'NodeJS'
    }
});
BookSchema.statics.findByISBN= function (isbn,cb) {
    this.findOne({isbn:isbn}, function (err, doc) {
        cb(err,doc);
    });
};
BookSchema.methods.print= function () {
    console.log('Book Info:');
    console.log('\tISBN:',this.isbn);
    console.log('\tTitle:',this.title);
}


var Book = mongoose.model('Books',BookSchema);

var book=new Book();
console.log('book:',book);
book.print();

book.save(function (err) {
    console.log('save:',book);

    Book.findByISBN(100100, function (err, doc) {
        console.log('find:',doc);
    });
});