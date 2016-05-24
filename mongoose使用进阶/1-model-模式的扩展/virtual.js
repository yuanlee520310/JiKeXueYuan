var mongoose=require('mongoose');

var UserSchame=new mongoose.Schema({
    first:String,
    last:String
});

UserSchame.virtual('fullName').get(function () {
    return this.first+' '+this.last;
});
UserSchame.set('toJSON',{getters:true,virtual:true});

var User= mongoose.model('User',UserSchame);

var u1=new User({
    first:'Han',
    last:'Mei'
});

console.log('u1:',u1);
console.log('fullName:',u1.fullName);
console.log('toJSON:',JSON.stringify(u1));