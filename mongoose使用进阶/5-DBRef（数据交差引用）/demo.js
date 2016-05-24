var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/DBRef');

var User=mongoose.model('User',{
    name:String
});

var News=mongoose.model('News',{
    title:String,
    author:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
});

var user=new User({
    name:"Two"
});
var news=new News({
    title:'Second',
    author:user
});

user.save(function (err) {
    if(err)return console.log('User save err:',err);
    console.log('user:',user);
    news.save(function (err) {
        if(err)return colose.log('News save err:',err);
        console.log('news:',news);

        News.findOne({title:news.title}).populate('author').exec(function (err, doc) {
            if(err)return console.log('find err:',err);
            console.log('doc:',doc);
        });
    });
});