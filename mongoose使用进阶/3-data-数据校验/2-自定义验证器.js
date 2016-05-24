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
        match:/book/g,
        validate: function (desc) {//自定义验证器
            return desc.length>=10;
        }
    }
});

var Order = mongoose.model('Order',OrderSchema);

var order1=new Order({
    count:1000,
    status:'success',
    desc:'This is a greate book'
});

order1.save(function (err) {
    console.log('err:',err);
    console.log('order1:',order1);
});
