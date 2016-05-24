var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/high');

var UserSchema= new mongoose.Schema({
    name:{
        type:String,
        default:'   newUser    ',
        trim:true
    },
    site:{
        type:String,
        get:function (url) {
            if(!url)return url;
            if(!~url.indexOf('http://') && !~url.indexOf('https://')){
                url='http://'+url;
            }
            return url;
        }
    }
});

var User = mongoose.model('User',UserSchema);

var u1=new User();
u1.save(function () {
    console.log('使用默认值：',u1);
});

var u2=new User({
    name:'u3',
    site:'www.qq.com'
});
u2.save(function (err) {
    if(err){
        return console.log(err);
    }
    console.log('不传http：',u2.site);
});


