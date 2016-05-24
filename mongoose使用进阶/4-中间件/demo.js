var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/high');

var ShopSchema= new mongoose.Schema({
    address:String
});
ShopSchema.post('save', function (next) {
    console.log('saved!');
    //next();//报错
});

ShopSchema.pre('save', function (next) {
    console.log('save之前!');
    next();
});

//传入第二个参数，并行执行
ShopSchema.pre('save',true, function (next,done) {
    console.log('save之前，并行执行!');
    next();
    done();
});

var Shop = mongoose.model('Shop',ShopSchema);

var shop=new Shop({
    address:'SH'
});

shop.save(function (err) {
    console.log('err:',err);
    console.log('shop:',shop);
});
