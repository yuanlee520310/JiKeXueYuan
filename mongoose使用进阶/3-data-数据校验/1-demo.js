var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/high');

var OrderSchema= new mongoose.Schema({
    count:{
        type:Number,
        required:true,
        max:1000,
        min:0
    },
    status:{
        type:String,
        enum:['created','success','failed']
    },
    desc:{
        type:String,
        match:/book/g
    }
});

var Order = mongoose.model('Order',OrderSchema);

/*var order1=new Order();//不传入必须字段值：count，将会报错

order1.save(function (err) {
    console.log('err:',err);//报错
    console.log('order1:',order1);
});*/

/*
var order2=new Order({
    count:5
});

order2.save(function (err) {
    console.log('err:',err);
    console.log('order2:',order2);
});*/


/*var order3=new Order({
    count:2000//报错：超过最大值
});

order3.save(function (err) {
    console.log('err:',err);
    console.log('order3:',order3);
});*/

/*
var order4=new Order({
    count:1000,
    status:'new'//报错：'new'不在允许的值之内
});

order4.save(function (err) {
    console.log('err:',err);
    console.log('order3:',order4);
});
*/


var order5=new Order({
    count:1000,
    status:'success',
    desc:'aa'//报错：没有通过模式匹配
});

order5.save(function (err) {
    console.log('err:',err);
    console.log('order3:',order5);
});

