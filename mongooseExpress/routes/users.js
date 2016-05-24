var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var uid=0;
router.get('/test', function (req, res, next) {
  var user=new User({
    uid:uid++,
    username:'Tom'
  });

  user.save(function (err) {
    if(err){
      console.log('save err:',err);
      return next();
    }

    User.find({}, function (err, docs) {
      if(err){
        console.log('find error:',err);
        return next();
      }

      res.json(docs);

    });

  });

});

router.get('/mock', function (req, res) {
  var uid=0,start=new Date(),max=100,user;

  (function mockIIFE() {
    if(uid>=max){
      return res.send('Time:'+(new Date()-start));
    }

    user=new User({
      uid:uid,
      username:'Tom',
      createTime:new Date()
    });

    user.save(function (err) {
      if(err){
        return console.log('save error:',err);
      }

      uid++;
      mockIIFE();

    });
  })();

});

module.exports = router;
