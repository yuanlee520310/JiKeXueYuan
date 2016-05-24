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
        set:function (url) {
            if(!url)return url;
            if(!~url.indexOf('http://') && !~url.indexOf('https://')){
                url='http://'+url;
            }
            return url;
        }
    }
});

var User = mongoose.model('User',UserSchema);

var user=new User();
console.log('使用默认值 user:',user);

var u2=new User({
    name:'  newUser2  '
});
console.log('传入带空格的User：',u2);


console.log('site未传值:',new User({
    name:'u3'
}));


console.log('site未http:',new User({
    name:'u3',
    site:'www.qq.com'
}));

console.log('http:',new User({
    name:'u3',
    site:'https://www.qq.com'
}));


