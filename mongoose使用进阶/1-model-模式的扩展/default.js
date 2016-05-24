var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/high');

var UserSchema= new mongoose.Schema({
    name:{
        type:String,
        default:'newUser'
    },
    regTime:{
        type:Date,
        default:new Date()
    }
});

var User = mongoose.model('UserXXX',UserSchema);//自动创建表（以模型名的复数为表名）

var user=new User();

user.save(function () {
    console.log('user:',user);
});



